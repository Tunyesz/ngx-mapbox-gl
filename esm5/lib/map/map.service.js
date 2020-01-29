/**
 * @fileoverview added by tsickle
 * Generated from: lib/map/map.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, InjectionToken, NgZone, Optional } from '@angular/core';
import * as MapboxGl from 'mapbox-gl';
import { AsyncSubject, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
/** @type {?} */
export var MAPBOX_API_KEY = new InjectionToken('MapboxApiKey');
/**
 * @abstract
 */
var /**
 * @abstract
 */
MglResizeEventEmitter = /** @class */ (function () {
    function MglResizeEventEmitter() {
    }
    return MglResizeEventEmitter;
}());
/**
 * @abstract
 */
export { MglResizeEventEmitter };
if (false) {
    /** @type {?} */
    MglResizeEventEmitter.prototype.resizeEvent;
}
/**
 * @record
 */
export function SetupMap() { }
if (false) {
    /** @type {?|undefined} */
    SetupMap.prototype.accessToken;
    /** @type {?|undefined} */
    SetupMap.prototype.customMapboxApiUrl;
    /** @type {?} */
    SetupMap.prototype.mapOptions;
    /** @type {?} */
    SetupMap.prototype.mapEvents;
}
/**
 * @record
 */
export function SetupLayer() { }
if (false) {
    /** @type {?} */
    SetupLayer.prototype.layerOptions;
    /** @type {?} */
    SetupLayer.prototype.layerEvents;
}
/**
 * @record
 */
export function SetupPopup() { }
if (false) {
    /** @type {?} */
    SetupPopup.prototype.popupOptions;
    /** @type {?} */
    SetupPopup.prototype.popupEvents;
}
/**
 * @record
 */
export function SetupMarker() { }
if (false) {
    /** @type {?} */
    SetupMarker.prototype.markersOptions;
    /** @type {?} */
    SetupMarker.prototype.markersEvents;
}
var MapService = /** @class */ (function () {
    function MapService(zone, MAPBOX_API_KEY, MglResizeEventEmitter) {
        this.zone = zone;
        this.MAPBOX_API_KEY = MAPBOX_API_KEY;
        this.MglResizeEventEmitter = MglResizeEventEmitter;
        this.mapCreated = new AsyncSubject();
        this.mapLoaded = new AsyncSubject();
        this.layerIdsToRemove = [];
        this.sourceIdsToRemove = [];
        this.markersToRemove = [];
        this.popupsToRemove = [];
        this.imageIdsToRemove = [];
        this.subscription = new Subscription();
        this.mapCreated$ = this.mapCreated.asObservable();
        this.mapLoaded$ = this.mapLoaded.asObservable();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    MapService.prototype.setup = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        // Need onStable to wait for a potential @angular/route transition to end
        this.zone.onStable.pipe(first()).subscribe((/**
         * @return {?}
         */
        function () {
            // Workaround rollup issue
            _this.assign(MapboxGl, 'accessToken', options.accessToken || _this.MAPBOX_API_KEY);
            if (options.customMapboxApiUrl) {
                _this.assign(MapboxGl, 'config.API_URL', options.customMapboxApiUrl);
            }
            _this.createMap(options.mapOptions);
            _this.hookEvents(options.mapEvents);
            _this.mapEvents = options.mapEvents;
            _this.mapCreated.next(undefined);
            _this.mapCreated.complete();
        }));
    };
    /**
     * @return {?}
     */
    MapService.prototype.destroyMap = /**
     * @return {?}
     */
    function () {
        if (this.mapInstance) {
            this.subscription.unsubscribe();
            this.mapInstance.remove();
        }
    };
    /**
     * @param {?} minZoom
     * @return {?}
     */
    MapService.prototype.updateMinZoom = /**
     * @param {?} minZoom
     * @return {?}
     */
    function (minZoom) {
        var _this = this;
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.mapInstance.setMinZoom(minZoom);
        }));
    };
    /**
     * @param {?} maxZoom
     * @return {?}
     */
    MapService.prototype.updateMaxZoom = /**
     * @param {?} maxZoom
     * @return {?}
     */
    function (maxZoom) {
        var _this = this;
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.mapInstance.setMaxZoom(maxZoom);
        }));
    };
    /**
     * @param {?} status
     * @return {?}
     */
    MapService.prototype.updateScrollZoom = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        var _this = this;
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            status ? _this.mapInstance.scrollZoom.enable() : _this.mapInstance.scrollZoom.disable();
        }));
    };
    /**
     * @param {?} status
     * @return {?}
     */
    MapService.prototype.updateDragRotate = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        var _this = this;
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            status ? _this.mapInstance.dragRotate.enable() : _this.mapInstance.dragRotate.disable();
        }));
    };
    /**
     * @param {?} status
     * @return {?}
     */
    MapService.prototype.updateTouchZoomRotate = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        var _this = this;
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            status ? _this.mapInstance.touchZoomRotate.enable() : _this.mapInstance.touchZoomRotate.disable();
        }));
    };
    /**
     * @param {?} status
     * @return {?}
     */
    MapService.prototype.updateDoubleClickZoom = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        var _this = this;
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            status ? _this.mapInstance.doubleClickZoom.enable() : _this.mapInstance.doubleClickZoom.disable();
        }));
    };
    /**
     * @param {?} status
     * @return {?}
     */
    MapService.prototype.updateKeyboard = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        var _this = this;
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            status ? _this.mapInstance.keyboard.enable() : _this.mapInstance.keyboard.disable();
        }));
    };
    /**
     * @param {?} status
     * @return {?}
     */
    MapService.prototype.updateDragPan = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        var _this = this;
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            status ? _this.mapInstance.dragPan.enable() : _this.mapInstance.dragPan.disable();
        }));
    };
    /**
     * @param {?} status
     * @return {?}
     */
    MapService.prototype.updateBoxZoom = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        var _this = this;
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            status ? _this.mapInstance.boxZoom.enable() : _this.mapInstance.boxZoom.disable();
        }));
    };
    /**
     * @param {?} style
     * @return {?}
     */
    MapService.prototype.updateStyle = /**
     * @param {?} style
     * @return {?}
     */
    function (style) {
        var _this = this;
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.mapInstance.setStyle(style);
        }));
    };
    /**
     * @param {?} maxBounds
     * @return {?}
     */
    MapService.prototype.updateMaxBounds = /**
     * @param {?} maxBounds
     * @return {?}
     */
    function (maxBounds) {
        var _this = this;
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.mapInstance.setMaxBounds(maxBounds);
        }));
    };
    /**
     * @param {?} cursor
     * @return {?}
     */
    MapService.prototype.changeCanvasCursor = /**
     * @param {?} cursor
     * @return {?}
     */
    function (cursor) {
        /** @type {?} */
        var canvas = this.mapInstance.getCanvasContainer();
        canvas.style.cursor = cursor;
    };
    /**
     * @param {?=} pointOrBox
     * @param {?=} parameters
     * @return {?}
     */
    MapService.prototype.queryRenderedFeatures = /**
     * @param {?=} pointOrBox
     * @param {?=} parameters
     * @return {?}
     */
    function (pointOrBox, parameters) {
        return this.mapInstance.queryRenderedFeatures(pointOrBox, parameters);
    };
    /**
     * @param {?} center
     * @param {?=} options
     * @return {?}
     */
    MapService.prototype.panTo = /**
     * @param {?} center
     * @param {?=} options
     * @return {?}
     */
    function (center, options) {
        var _this = this;
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.mapInstance.panTo(center, options);
        }));
    };
    /**
     * @param {?} movingMethod
     * @param {?=} movingOptions
     * @param {?=} zoom
     * @param {?=} center
     * @param {?=} bearing
     * @param {?=} pitch
     * @return {?}
     */
    MapService.prototype.move = /**
     * @param {?} movingMethod
     * @param {?=} movingOptions
     * @param {?=} zoom
     * @param {?=} center
     * @param {?=} bearing
     * @param {?=} pitch
     * @return {?}
     */
    function (movingMethod, movingOptions, zoom, center, bearing, pitch) {
        var _this = this;
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            ((/** @type {?} */ (_this.mapInstance[movingMethod])))(tslib_1.__assign({}, movingOptions, { zoom: zoom ? zoom : _this.mapInstance.getZoom(), center: center ? center : _this.mapInstance.getCenter(), bearing: bearing ? bearing : _this.mapInstance.getBearing(), pitch: pitch ? pitch : _this.mapInstance.getPitch() }));
        }));
    };
    /**
     * @param {?} layer
     * @param {?} bindEvents
     * @param {?=} before
     * @return {?}
     */
    MapService.prototype.addLayer = /**
     * @param {?} layer
     * @param {?} bindEvents
     * @param {?=} before
     * @return {?}
     */
    function (layer, bindEvents, before) {
        var _this = this;
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            Object.keys(layer.layerOptions)
                .forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                /** @type {?} */
                var tkey = (/** @type {?} */ (key));
                if (layer.layerOptions[tkey] === undefined) {
                    delete layer.layerOptions[tkey];
                }
            }));
            _this.mapInstance.addLayer(layer.layerOptions, before);
            if (bindEvents) {
                if (layer.layerEvents.click.observers.length) {
                    _this.mapInstance.on('click', layer.layerOptions.id, (/**
                     * @param {?} evt
                     * @return {?}
                     */
                    function (evt) {
                        _this.zone.run((/**
                         * @return {?}
                         */
                        function () {
                            layer.layerEvents.click.emit(evt);
                        }));
                    }));
                }
                if (layer.layerEvents.mouseEnter.observers.length) {
                    _this.mapInstance.on('mouseenter', layer.layerOptions.id, (/**
                     * @param {?} evt
                     * @return {?}
                     */
                    function (evt) {
                        _this.zone.run((/**
                         * @return {?}
                         */
                        function () {
                            layer.layerEvents.mouseEnter.emit(evt);
                        }));
                    }));
                }
                if (layer.layerEvents.mouseLeave.observers.length) {
                    _this.mapInstance.on('mouseleave', layer.layerOptions.id, (/**
                     * @param {?} evt
                     * @return {?}
                     */
                    function (evt) {
                        _this.zone.run((/**
                         * @return {?}
                         */
                        function () {
                            layer.layerEvents.mouseLeave.emit(evt);
                        }));
                    }));
                }
                if (layer.layerEvents.mouseMove.observers.length) {
                    _this.mapInstance.on('mousemove', layer.layerOptions.id, (/**
                     * @param {?} evt
                     * @return {?}
                     */
                    function (evt) {
                        _this.zone.run((/**
                         * @return {?}
                         */
                        function () {
                            layer.layerEvents.mouseMove.emit(evt);
                        }));
                    }));
                }
            }
        }));
    };
    /**
     * @param {?} layerId
     * @return {?}
     */
    MapService.prototype.removeLayer = /**
     * @param {?} layerId
     * @return {?}
     */
    function (layerId) {
        this.layerIdsToRemove.push(layerId);
    };
    /**
     * @param {?} marker
     * @return {?}
     */
    MapService.prototype.addMarker = /**
     * @param {?} marker
     * @return {?}
     */
    function (marker) {
        var _this = this;
        /** @type {?} */
        var options = {
            offset: marker.markersOptions.offset,
            anchor: marker.markersOptions.anchor,
            draggable: !!marker.markersOptions.draggable
        };
        if (marker.markersOptions.element.childNodes.length > 0) {
            options.element = marker.markersOptions.element;
        }
        /** @type {?} */
        var markerInstance = new MapboxGl.Marker(options);
        if (marker.markersEvents.dragStart.observers.length) {
            markerInstance.on('dragstart', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                return _this.zone.run((/**
                 * @return {?}
                 */
                function () { return marker.markersEvents.dragStart.emit(event.target); }));
            }));
        }
        if (marker.markersEvents.drag.observers.length) {
            markerInstance.on('drag', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                return _this.zone.run((/**
                 * @return {?}
                 */
                function () { return marker.markersEvents.drag.emit(event.target); }));
            }));
        }
        if (marker.markersEvents.dragEnd.observers.length) {
            markerInstance.on('dragend', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                return _this.zone.run((/**
                 * @return {?}
                 */
                function () { return marker.markersEvents.dragEnd.emit(event.target); }));
            }));
        }
        /** @type {?} */
        var lngLat = marker.markersOptions.feature ?
            (/** @type {?} */ ((/** @type {?} */ (marker.markersOptions.feature.geometry)).coordinates)) :
            (/** @type {?} */ (marker.markersOptions.lngLat));
        markerInstance.setLngLat(lngLat);
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            markerInstance.addTo(_this.mapInstance);
            return markerInstance;
        }));
    };
    /**
     * @param {?} marker
     * @return {?}
     */
    MapService.prototype.removeMarker = /**
     * @param {?} marker
     * @return {?}
     */
    function (marker) {
        this.markersToRemove.push(marker);
    };
    /**
     * @param {?} popup
     * @param {?} element
     * @return {?}
     */
    MapService.prototype.createPopup = /**
     * @param {?} popup
     * @param {?} element
     * @return {?}
     */
    function (popup, element) {
        var _this = this;
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            Object.keys(popup.popupOptions)
                .forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                return ((/** @type {?} */ (popup.popupOptions)))[key] === undefined && delete ((/** @type {?} */ (popup.popupOptions)))[key];
            }));
            /** @type {?} */
            var popupInstance = new MapboxGl.Popup(popup.popupOptions);
            popupInstance.setDOMContent(element);
            if (popup.popupEvents.close.observers.length) {
                popupInstance.on('close', (/**
                 * @return {?}
                 */
                function () {
                    _this.zone.run((/**
                     * @return {?}
                     */
                    function () {
                        popup.popupEvents.close.emit();
                    }));
                }));
            }
            if (popup.popupEvents.open.observers.length) {
                popupInstance.on('open', (/**
                 * @return {?}
                 */
                function () {
                    _this.zone.run((/**
                     * @return {?}
                     */
                    function () {
                        popup.popupEvents.open.emit();
                    }));
                }));
            }
            return popupInstance;
        }));
    };
    /**
     * @param {?} popup
     * @param {?} lngLat
     * @param {?=} skipOpenEvent
     * @return {?}
     */
    MapService.prototype.addPopupToMap = /**
     * @param {?} popup
     * @param {?} lngLat
     * @param {?=} skipOpenEvent
     * @return {?}
     */
    function (popup, lngLat, skipOpenEvent) {
        var _this = this;
        if (skipOpenEvent === void 0) { skipOpenEvent = false; }
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            if (skipOpenEvent && ((/** @type {?} */ (popup)))._listeners) {
                delete ((/** @type {?} */ (popup)))._listeners['open'];
            }
            popup.setLngLat(lngLat);
            popup.addTo(_this.mapInstance);
        }));
    };
    /**
     * @param {?} marker
     * @param {?} popup
     * @return {?}
     */
    MapService.prototype.addPopupToMarker = /**
     * @param {?} marker
     * @param {?} popup
     * @return {?}
     */
    function (marker, popup) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            marker.setPopup(popup);
        }));
    };
    /**
     * @param {?} popup
     * @param {?=} skipCloseEvent
     * @return {?}
     */
    MapService.prototype.removePopupFromMap = /**
     * @param {?} popup
     * @param {?=} skipCloseEvent
     * @return {?}
     */
    function (popup, skipCloseEvent) {
        if (skipCloseEvent === void 0) { skipCloseEvent = false; }
        if (skipCloseEvent && ((/** @type {?} */ (popup)))._listeners) {
            delete ((/** @type {?} */ (popup)))._listeners['close'];
        }
        this.popupsToRemove.push(popup);
    };
    /**
     * @param {?} marker
     * @return {?}
     */
    MapService.prototype.removePopupFromMarker = /**
     * @param {?} marker
     * @return {?}
     */
    function (marker) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            marker.setPopup(undefined);
        }));
    };
    /**
     * @param {?} control
     * @param {?=} position
     * @return {?}
     */
    MapService.prototype.addControl = /**
     * @param {?} control
     * @param {?=} position
     * @return {?}
     */
    function (control, position) {
        var _this = this;
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.mapInstance.addControl((/** @type {?} */ (control)), position);
        }));
    };
    /**
     * @param {?} control
     * @return {?}
     */
    MapService.prototype.removeControl = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        var _this = this;
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.mapInstance.removeControl((/** @type {?} */ (control)));
        }));
    };
    /**
     * @param {?} imageId
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    MapService.prototype.loadAndAddImage = /**
     * @param {?} imageId
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (imageId, url, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.zone.runOutsideAngular((/**
                     * @return {?}
                     */
                    function () {
                        return new Promise((/**
                         * @param {?} resolve
                         * @param {?} reject
                         * @return {?}
                         */
                        function (resolve, reject) {
                            _this.mapInstance.loadImage(url, (/**
                             * @param {?} error
                             * @param {?} image
                             * @return {?}
                             */
                            function (error, image) {
                                if (error) {
                                    reject(error);
                                    return;
                                }
                                _this.addImage(imageId, image, options);
                                resolve();
                            }));
                        }));
                    }))];
            });
        });
    };
    /**
     * @param {?} imageId
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    MapService.prototype.addImage = /**
     * @param {?} imageId
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    function (imageId, data, options) {
        var _this = this;
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.mapInstance.addImage(imageId, (/** @type {?} */ (data)), options);
        }));
    };
    /**
     * @param {?} imageId
     * @return {?}
     */
    MapService.prototype.removeImage = /**
     * @param {?} imageId
     * @return {?}
     */
    function (imageId) {
        this.imageIdsToRemove.push(imageId);
    };
    /**
     * @param {?} sourceId
     * @param {?} source
     * @return {?}
     */
    MapService.prototype.addSource = /**
     * @param {?} sourceId
     * @param {?} source
     * @return {?}
     */
    function (sourceId, source) {
        var _this = this;
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            Object.keys(source)
                .forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                return ((/** @type {?} */ (source)))[key] === undefined && delete ((/** @type {?} */ (source)))[key];
            }));
            _this.mapInstance.addSource(sourceId, source);
        }));
    };
    /**
     * @template T
     * @param {?} sourceId
     * @return {?}
     */
    MapService.prototype.getSource = /**
     * @template T
     * @param {?} sourceId
     * @return {?}
     */
    function (sourceId) {
        return (/** @type {?} */ ((/** @type {?} */ (this.mapInstance.getSource(sourceId)))));
    };
    /**
     * @param {?} sourceId
     * @return {?}
     */
    MapService.prototype.removeSource = /**
     * @param {?} sourceId
     * @return {?}
     */
    function (sourceId) {
        this.sourceIdsToRemove.push(sourceId);
    };
    /**
     * @param {?} layerId
     * @param {?} paint
     * @return {?}
     */
    MapService.prototype.setAllLayerPaintProperty = /**
     * @param {?} layerId
     * @param {?} paint
     * @return {?}
     */
    function (layerId, paint) {
        var _this = this;
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            Object.keys(paint).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                // TODO Check for perf, setPaintProperty only on changed paint props maybe
                _this.mapInstance.setPaintProperty(layerId, key, ((/** @type {?} */ (paint)))[key]);
            }));
        }));
    };
    /**
     * @param {?} layerId
     * @param {?} layout
     * @return {?}
     */
    MapService.prototype.setAllLayerLayoutProperty = /**
     * @param {?} layerId
     * @param {?} layout
     * @return {?}
     */
    function (layerId, layout) {
        var _this = this;
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            Object.keys(layout).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                // TODO Check for perf, setPaintProperty only on changed paint props maybe
                _this.mapInstance.setLayoutProperty(layerId, key, ((/** @type {?} */ (layout)))[key]);
            }));
        }));
    };
    /**
     * @param {?} layerId
     * @param {?} filter
     * @return {?}
     */
    MapService.prototype.setLayerFilter = /**
     * @param {?} layerId
     * @param {?} filter
     * @return {?}
     */
    function (layerId, filter) {
        var _this = this;
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.mapInstance.setFilter(layerId, filter);
        }));
    };
    /**
     * @param {?} layerId
     * @param {?} beforeId
     * @return {?}
     */
    MapService.prototype.setLayerBefore = /**
     * @param {?} layerId
     * @param {?} beforeId
     * @return {?}
     */
    function (layerId, beforeId) {
        var _this = this;
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.mapInstance.moveLayer(layerId, beforeId);
        }));
    };
    /**
     * @param {?} layerId
     * @param {?=} minZoom
     * @param {?=} maxZoom
     * @return {?}
     */
    MapService.prototype.setLayerZoomRange = /**
     * @param {?} layerId
     * @param {?=} minZoom
     * @param {?=} maxZoom
     * @return {?}
     */
    function (layerId, minZoom, maxZoom) {
        var _this = this;
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.mapInstance.setLayerZoomRange(layerId, minZoom ? minZoom : 0, maxZoom ? maxZoom : 20);
        }));
    };
    /**
     * @param {?} bounds
     * @param {?=} options
     * @return {?}
     */
    MapService.prototype.fitBounds = /**
     * @param {?} bounds
     * @param {?=} options
     * @return {?}
     */
    function (bounds, options) {
        var _this = this;
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.mapInstance.fitBounds(bounds, options);
        }));
    };
    /**
     * @param {?} points
     * @param {?} bearing
     * @param {?=} options
     * @return {?}
     */
    MapService.prototype.fitScreenCoordinates = /**
     * @param {?} points
     * @param {?} bearing
     * @param {?=} options
     * @return {?}
     */
    function (points, bearing, options) {
        var _this = this;
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.mapInstance.fitScreenCoordinates(points[0], points[1], bearing, options);
        }));
    };
    /**
     * @return {?}
     */
    MapService.prototype.applyChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.removeLayers();
            _this.removeSources();
            _this.removeMarkers();
            _this.removePopups();
            _this.removeImages();
        }));
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    MapService.prototype.createMap = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        NgZone.assertNotInAngularZone();
        Object.keys(options)
            .forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            /** @type {?} */
            var tkey = (/** @type {?} */ (key));
            if (options[tkey] === undefined) {
                delete options[tkey];
            }
        }));
        this.mapInstance = new MapboxGl.Map(options);
        /** @type {?} */
        var isIEorEdge = window && /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);
        if (isIEorEdge) {
            this.mapInstance.setStyle((/** @type {?} */ (options.style)));
        }
        /** @type {?} */
        var subChanges = this.zone.onMicrotaskEmpty
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.applyChanges(); }));
        if (this.MglResizeEventEmitter) {
            /** @type {?} */
            var subResize = this.MglResizeEventEmitter.resizeEvent.subscribe((/**
             * @return {?}
             */
            function () {
                _this.mapInstance.resize();
            }));
            this.subscription.add(subResize);
        }
        this.subscription.add(subChanges);
    };
    /**
     * @private
     * @return {?}
     */
    MapService.prototype.removeLayers = /**
     * @private
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(this.layerIdsToRemove), _c = _b.next(); !_c.done; _c = _b.next()) {
                var layerId = _c.value;
                this.mapInstance.removeLayer(layerId);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.layerIdsToRemove = [];
    };
    /**
     * @private
     * @return {?}
     */
    MapService.prototype.removeSources = /**
     * @private
     * @return {?}
     */
    function () {
        var e_2, _a;
        try {
            for (var _b = tslib_1.__values(this.sourceIdsToRemove), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sourceId = _c.value;
                this.mapInstance.removeSource(sourceId);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.sourceIdsToRemove = [];
    };
    /**
     * @private
     * @return {?}
     */
    MapService.prototype.removeMarkers = /**
     * @private
     * @return {?}
     */
    function () {
        var e_3, _a;
        try {
            for (var _b = tslib_1.__values(this.markersToRemove), _c = _b.next(); !_c.done; _c = _b.next()) {
                var marker = _c.value;
                marker.remove();
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.markersToRemove = [];
    };
    /**
     * @private
     * @return {?}
     */
    MapService.prototype.removePopups = /**
     * @private
     * @return {?}
     */
    function () {
        var e_4, _a;
        try {
            for (var _b = tslib_1.__values(this.popupsToRemove), _c = _b.next(); !_c.done; _c = _b.next()) {
                var popup = _c.value;
                popup.remove();
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        this.popupsToRemove = [];
    };
    /**
     * @private
     * @return {?}
     */
    MapService.prototype.removeImages = /**
     * @private
     * @return {?}
     */
    function () {
        var e_5, _a;
        try {
            for (var _b = tslib_1.__values(this.imageIdsToRemove), _c = _b.next(); !_c.done; _c = _b.next()) {
                var imageId = _c.value;
                this.mapInstance.removeImage(imageId);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        this.imageIdsToRemove = [];
    };
    /**
     * @private
     * @param {?} events
     * @return {?}
     */
    MapService.prototype.hookEvents = /**
     * @private
     * @param {?} events
     * @return {?}
     */
    function (events) {
        var _this = this;
        this.mapInstance.on('load', (/**
         * @return {?}
         */
        function () {
            _this.mapLoaded.next(undefined);
            _this.mapLoaded.complete();
            _this.zone.run((/**
             * @return {?}
             */
            function () { return events.load.emit(_this.mapInstance); }));
        }));
        if (events.resize.observers.length) {
            this.mapInstance.on('resize', (/**
             * @return {?}
             */
            function () { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.resize.emit(); })); }));
        }
        if (events.remove.observers.length) {
            this.mapInstance.on('remove', (/**
             * @return {?}
             */
            function () { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.remove.emit(); })); }));
        }
        if (events.mouseDown.observers.length) {
            this.mapInstance.on('mousedown', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.mouseDown.emit(evt); })); }));
        }
        if (events.mouseUp.observers.length) {
            this.mapInstance.on('mouseup', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.mouseUp.emit(evt); })); }));
        }
        if (events.mouseMove.observers.length) {
            this.mapInstance.on('mousemove', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.mouseMove.emit(evt); })); }));
        }
        if (events.click.observers.length) {
            this.mapInstance.on('click', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.click.emit(evt); })); }));
        }
        if (events.dblClick.observers.length) {
            this.mapInstance.on('dblclick', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.dblClick.emit(evt); })); }));
        }
        if (events.mouseEnter.observers.length) {
            this.mapInstance.on('mouseenter', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.mouseEnter.emit(evt); })); }));
        }
        if (events.mouseLeave.observers.length) {
            this.mapInstance.on('mouseleave', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.mouseLeave.emit(evt); })); }));
        }
        if (events.mouseOver.observers.length) {
            this.mapInstance.on('mouseover', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.mouseOver.emit(evt); })); }));
        }
        if (events.mouseOut.observers.length) {
            this.mapInstance.on('mouseout', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.mouseOut.emit(evt); })); }));
        }
        if (events.contextMenu.observers.length) {
            this.mapInstance.on('contextmenu', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.contextMenu.emit(evt); })); }));
        }
        if (events.touchStart.observers.length) {
            this.mapInstance.on('touchstart', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.touchStart.emit(evt); })); }));
        }
        if (events.touchEnd.observers.length) {
            this.mapInstance.on('touchend', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.touchEnd.emit(evt); })); }));
        }
        if (events.touchMove.observers.length) {
            this.mapInstance.on('touchmove', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.touchMove.emit(evt); })); }));
        }
        if (events.touchCancel.observers.length) {
            this.mapInstance.on('touchcancel', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.touchCancel.emit(evt); })); }));
        }
        if (events.wheel.observers.length) {
            // MapboxGl.MapWheelEvent
            this.mapInstance.on('wheel', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.wheel.emit(evt); })); }));
        }
        if (events.moveStart.observers.length) {
            this.mapInstance.on('movestart', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.moveStart.emit(evt); })); }));
        }
        if (events.move.observers.length) {
            this.mapInstance.on('move', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.move.emit(evt); })); }));
        }
        if (events.moveEnd.observers.length) {
            this.mapInstance.on('moveend', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.moveEnd.emit(evt); })); }));
        }
        if (events.dragStart.observers.length) {
            this.mapInstance.on('dragstart', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.dragStart.emit(evt); })); }));
        }
        if (events.drag.observers.length) {
            this.mapInstance.on('drag', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.drag.emit(evt); })); }));
        }
        if (events.dragEnd.observers.length) {
            this.mapInstance.on('dragend', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.dragEnd.emit(evt); })); }));
        }
        if (events.zoomStart.observers.length) {
            this.mapInstance.on('zoomstart', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () {
                return events.zoomStart.emit(evt);
            })); }));
        }
        if (events.zoomEvt.observers.length) {
            this.mapInstance.on('zoom', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.zoomEvt.emit(evt); })); }));
        }
        if (events.zoomEnd.observers.length) {
            this.mapInstance.on('zoomend', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () {
                return events.zoomEnd.emit(evt);
            })); }));
        }
        if (events.rotateStart.observers.length) {
            this.mapInstance.on('rotatestart', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () {
                return events.rotateStart.emit(evt);
            })); }));
        }
        if (events.rotate.observers.length) {
            this.mapInstance.on('rotate', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.rotate.emit(evt); })); }));
        }
        if (events.rotateEnd.observers.length) {
            this.mapInstance.on('rotateend', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () {
                return events.rotateEnd.emit(evt);
            })); }));
        }
        if (events.pitchStart.observers.length) {
            this.mapInstance.on('pitchstart', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.pitchStart.emit(evt); })); }));
        }
        if (events.pitchEvt.observers.length) {
            this.mapInstance.on('pitch', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.pitchEvt.emit(evt); })); }));
        }
        if (events.pitchEnd.observers.length) {
            this.mapInstance.on('pitchend', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.pitchEnd.emit(evt); })); }));
        }
        if (events.boxZoomStart.observers.length) {
            this.mapInstance.on('boxzoomstart', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.boxZoomStart.emit(evt); })); }));
        }
        if (events.boxZoomEnd.observers.length) {
            this.mapInstance.on('boxzoomend', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.boxZoomEnd.emit(evt); })); }));
        }
        if (events.boxZoomCancel.observers.length) {
            this.mapInstance.on('boxzoomcancel', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.boxZoomCancel.emit(evt); })); }));
        }
        if (events.webGlContextLost.observers.length) {
            this.mapInstance.on('webglcontextlost', (/**
             * @return {?}
             */
            function () { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.webGlContextLost.emit(); })); }));
        }
        if (events.webGlContextRestored.observers.length) {
            this.mapInstance.on('webglcontextrestored', (/**
             * @return {?}
             */
            function () { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.webGlContextRestored.emit(); })); }));
        }
        if (events.render.observers.length) {
            this.mapInstance.on('render', (/**
             * @return {?}
             */
            function () { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.render.emit(); })); }));
        }
        if (events.error.observers.length) {
            this.mapInstance.on('error', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.error.emit(evt); })); }));
        }
        if (events.data.observers.length) {
            this.mapInstance.on('data', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.data.emit(evt); })); }));
        }
        if (events.styleData.observers.length) {
            this.mapInstance.on('styledata', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.styleData.emit(evt); })); }));
        }
        if (events.sourceData.observers.length) {
            this.mapInstance.on('sourcedata', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.sourceData.emit(evt); })); }));
        }
        if (events.dataLoading.observers.length) {
            this.mapInstance.on('dataloading', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.dataLoading.emit(evt); })); }));
        }
        if (events.styleDataLoading.observers.length) {
            this.mapInstance.on('styledataloading', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.styleDataLoading.emit(evt); })); }));
        }
        if (events.sourceDataLoading.observers.length) {
            this.mapInstance.on('sourcedataloading', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.sourceDataLoading.emit(evt); })); }));
        }
        if (events.styleImageMissing.observers.length) {
            this.mapInstance.on((/** @type {?} */ ('styleimagemissing')), (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.styleImageMissing.emit(evt); })); }));
        }
        if (events.idle.observers.length) {
            this.mapInstance.on('idle', (/**
             * @return {?}
             */
            function () { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.idle.emit(); })); }));
        }
    };
    // TODO move this elsewhere
    // TODO move this elsewhere
    /**
     * @private
     * @param {?} obj
     * @param {?} prop
     * @param {?} value
     * @return {?}
     */
    MapService.prototype.assign = 
    // TODO move this elsewhere
    /**
     * @private
     * @param {?} obj
     * @param {?} prop
     * @param {?} value
     * @return {?}
     */
    function (obj, prop, value) {
        if (typeof prop === 'string') {
            // tslint:disable-next-line:no-parameter-reassignment
            prop = prop.split('.');
        }
        if (prop.length > 1) {
            /** @type {?} */
            var e = prop.shift();
            this.assign(obj[e] =
                Object.prototype.toString.call(obj[e]) === '[object Object]'
                    ? obj[e]
                    : {}, prop, value);
        }
        else {
            obj[prop[0]] = value;
        }
    };
    MapService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    MapService.ctorParameters = function () { return [
        { type: NgZone },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [MAPBOX_API_KEY,] }] },
        { type: MglResizeEventEmitter, decorators: [{ type: Optional }] }
    ]; };
    return MapService;
}());
export { MapService };
if (false) {
    /** @type {?} */
    MapService.prototype.mapInstance;
    /** @type {?} */
    MapService.prototype.mapCreated$;
    /** @type {?} */
    MapService.prototype.mapLoaded$;
    /** @type {?} */
    MapService.prototype.mapEvents;
    /**
     * @type {?}
     * @private
     */
    MapService.prototype.mapCreated;
    /**
     * @type {?}
     * @private
     */
    MapService.prototype.mapLoaded;
    /**
     * @type {?}
     * @private
     */
    MapService.prototype.layerIdsToRemove;
    /**
     * @type {?}
     * @private
     */
    MapService.prototype.sourceIdsToRemove;
    /**
     * @type {?}
     * @private
     */
    MapService.prototype.markersToRemove;
    /**
     * @type {?}
     * @private
     */
    MapService.prototype.popupsToRemove;
    /**
     * @type {?}
     * @private
     */
    MapService.prototype.imageIdsToRemove;
    /**
     * @type {?}
     * @private
     */
    MapService.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    MapService.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    MapService.prototype.MAPBOX_API_KEY;
    /**
     * @type {?}
     * @private
     */
    MapService.prototype.MglResizeEventEmitter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWFwYm94LWdsLyIsInNvdXJjZXMiOlsibGliL21hcC9tYXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQWdCLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxLQUFLLFFBQVEsTUFBTSxXQUFXLENBQUM7QUFDdEMsT0FBTyxFQUFFLFlBQVksRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUd2QyxNQUFNLEtBQU8sY0FBYyxHQUFHLElBQUksY0FBYyxDQUFDLGNBQWMsQ0FBQzs7OztBQUVoRTs7OztJQUFBO0lBRUEsQ0FBQztJQUFELDRCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7Ozs7SUFEQyw0Q0FBdUM7Ozs7O0FBR3pDLDhCQUtDOzs7SUFKQywrQkFBcUI7O0lBQ3JCLHNDQUE0Qjs7SUFDNUIsOEJBQWdCOztJQUNoQiw2QkFBb0I7Ozs7O0FBR3RCLGdDQVFDOzs7SUFQQyxrQ0FBNkI7O0lBQzdCLGlDQUtFOzs7OztBQUdKLGdDQU1DOzs7SUFMQyxrQ0FBb0M7O0lBQ3BDLGlDQUdFOzs7OztBQUdKLGlDQWNDOzs7SUFiQyxxQ0FPRTs7SUFDRixvQ0FJRTs7QUFPSjtJQWdCRSxvQkFDVSxJQUFZLEVBQ2lDLGNBQXNCLEVBQzlDLHFCQUE0QztRQUZqRSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ2lDLG1CQUFjLEdBQWQsY0FBYyxDQUFRO1FBQzlDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFabkUsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDdEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDckMscUJBQWdCLEdBQWEsRUFBRSxDQUFDO1FBQ2hDLHNCQUFpQixHQUFhLEVBQUUsQ0FBQztRQUNqQyxvQkFBZSxHQUFzQixFQUFFLENBQUM7UUFDeEMsbUJBQWMsR0FBcUIsRUFBRSxDQUFDO1FBQ3RDLHFCQUFnQixHQUFhLEVBQUUsQ0FBQztRQUNoQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFPeEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVELDBCQUFLOzs7O0lBQUwsVUFBTSxPQUFpQjtRQUF2QixpQkFjQztRQWJDLHlFQUF5RTtRQUN6RSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxTQUFTOzs7UUFBQztZQUN6QywwQkFBMEI7WUFDMUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsYUFBYSxFQUFFLE9BQU8sQ0FBQyxXQUFXLElBQUksS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2pGLElBQUksT0FBTyxDQUFDLGtCQUFrQixFQUFFO2dCQUM5QixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUNyRTtZQUNELEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ25DLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ25DLEtBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUNuQyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoQyxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELCtCQUFVOzs7SUFBVjtRQUNFLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7OztJQUVELGtDQUFhOzs7O0lBQWIsVUFBYyxPQUFlO1FBQTdCLGlCQUlDO1FBSEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQjs7O1FBQUM7WUFDakMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGtDQUFhOzs7O0lBQWIsVUFBYyxPQUFlO1FBQTdCLGlCQUlDO1FBSEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQjs7O1FBQUM7WUFDakMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELHFDQUFnQjs7OztJQUFoQixVQUFpQixNQUFlO1FBQWhDLGlCQUlDO1FBSEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQjs7O1FBQUM7WUFDakMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEYsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELHFDQUFnQjs7OztJQUFoQixVQUFpQixNQUFlO1FBQWhDLGlCQUlDO1FBSEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQjs7O1FBQUM7WUFDakMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEYsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELDBDQUFxQjs7OztJQUFyQixVQUFzQixNQUFlO1FBQXJDLGlCQUlDO1FBSEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQjs7O1FBQUM7WUFDakMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbEcsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELDBDQUFxQjs7OztJQUFyQixVQUFzQixNQUFlO1FBQXJDLGlCQUlDO1FBSEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQjs7O1FBQUM7WUFDakMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbEcsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELG1DQUFjOzs7O0lBQWQsVUFBZSxNQUFlO1FBQTlCLGlCQUlDO1FBSEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQjs7O1FBQUM7WUFDakMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEYsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGtDQUFhOzs7O0lBQWIsVUFBYyxNQUFlO1FBQTdCLGlCQUlDO1FBSEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQjs7O1FBQUM7WUFDakMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbEYsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGtDQUFhOzs7O0lBQWIsVUFBYyxNQUFlO1FBQTdCLGlCQUlDO1FBSEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQjs7O1FBQUM7WUFDakMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbEYsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGdDQUFXOzs7O0lBQVgsVUFBWSxLQUFxQjtRQUFqQyxpQkFJQztRQUhDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUI7OztRQUFDO1lBQ2pDLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxvQ0FBZTs7OztJQUFmLFVBQWdCLFNBQW9DO1FBQXBELGlCQUlDO1FBSEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQjs7O1FBQUM7WUFDakMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELHVDQUFrQjs7OztJQUFsQixVQUFtQixNQUFjOztZQUN6QixNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRTtRQUNwRCxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBRUQsMENBQXFCOzs7OztJQUFyQixVQUNFLFVBQTBFLEVBQzFFLFVBQWtEO1FBRWxELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7O0lBRUQsMEJBQUs7Ozs7O0lBQUwsVUFBTSxNQUEyQixFQUFFLE9BQW1DO1FBQXRFLGlCQUlDO1FBSEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQjs7O1FBQUM7WUFDakMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7Ozs7OztJQUVELHlCQUFJOzs7Ozs7Ozs7SUFBSixVQUNFLFlBQTJDLEVBQzNDLGFBQTZCLEVBQzdCLElBQWEsRUFDYixNQUE0QixFQUM1QixPQUFnQixFQUNoQixLQUFjO1FBTmhCLGlCQWlCQztRQVRDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUI7OztRQUFDO1lBQ2pDLENBQUMsbUJBQUssS0FBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBQSxDQUFDLHNCQUNoQyxhQUFhLElBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFDOUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxFQUN0RCxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLEVBQzFELEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFDbEQsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUVELDZCQUFROzs7Ozs7SUFBUixVQUFTLEtBQWlCLEVBQUUsVUFBbUIsRUFBRSxNQUFlO1FBQWhFLGlCQXlDQztRQXhDQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQjs7O1FBQUM7WUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO2lCQUM1QixPQUFPOzs7O1lBQUMsVUFBQyxHQUFXOztvQkFDYixJQUFJLEdBQUcsbUJBQXNCLEdBQUcsRUFBQTtnQkFDdEMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtvQkFDMUMsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNqQztZQUNILENBQUMsRUFBQyxDQUFDO1lBQ0wsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN0RCxJQUFJLFVBQVUsRUFBRTtnQkFDZCxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7b0JBQzVDLEtBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUU7Ozs7b0JBQUUsVUFBQyxHQUEyQjt3QkFDOUUsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7d0JBQUM7NEJBQ1osS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNwQyxDQUFDLEVBQUMsQ0FBQztvQkFDTCxDQUFDLEVBQUMsQ0FBQztpQkFDSjtnQkFDRCxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7b0JBQ2pELEtBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUU7Ozs7b0JBQUUsVUFBQyxHQUEyQjt3QkFDbkYsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7d0JBQUM7NEJBQ1osS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN6QyxDQUFDLEVBQUMsQ0FBQztvQkFDTCxDQUFDLEVBQUMsQ0FBQztpQkFDSjtnQkFDRCxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7b0JBQ2pELEtBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUU7Ozs7b0JBQUUsVUFBQyxHQUEyQjt3QkFDbkYsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7d0JBQUM7NEJBQ1osS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN6QyxDQUFDLEVBQUMsQ0FBQztvQkFDTCxDQUFDLEVBQUMsQ0FBQztpQkFDSjtnQkFDRCxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7b0JBQ2hELEtBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUU7Ozs7b0JBQUUsVUFBQyxHQUEyQjt3QkFDbEYsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7d0JBQUM7NEJBQ1osS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN4QyxDQUFDLEVBQUMsQ0FBQztvQkFDTCxDQUFDLEVBQUMsQ0FBQztpQkFDSjthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGdDQUFXOzs7O0lBQVgsVUFBWSxPQUFlO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCw4QkFBUzs7OztJQUFULFVBQVUsTUFBbUI7UUFBN0IsaUJBaUNDOztZQWhDTyxPQUFPLEdBQTJCO1lBQ3RDLE1BQU0sRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU07WUFDcEMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTTtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUztTQUM3QztRQUNELElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdkQsT0FBTyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztTQUNqRDs7WUFDSyxjQUFjLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNuRCxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDbkQsY0FBYyxDQUFDLEVBQUUsQ0FBQyxXQUFXOzs7O1lBQUUsVUFBQyxLQUFrQztnQkFDaEUsT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztnQkFBQyxjQUFNLE9BQUEsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBakQsQ0FBaUQsRUFBQztZQUF0RSxDQUFzRSxFQUN2RSxDQUFDO1NBQ0g7UUFDRCxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDOUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxNQUFNOzs7O1lBQUUsVUFBQyxLQUFrQztnQkFDM0QsT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztnQkFBQyxjQUFNLE9BQUEsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBNUMsQ0FBNEMsRUFBQztZQUFqRSxDQUFpRSxFQUNsRSxDQUFDO1NBQ0g7UUFDRCxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDakQsY0FBYyxDQUFDLEVBQUUsQ0FBQyxTQUFTOzs7O1lBQUUsVUFBQyxLQUFrQztnQkFDOUQsT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztnQkFBQyxjQUFNLE9BQUEsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBL0MsQ0FBK0MsRUFBQztZQUFwRSxDQUFvRSxFQUNyRSxDQUFDO1NBQ0g7O1lBQ0ssTUFBTSxHQUF3QixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pFLG1CQUFrQixtQkFBQSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUMsQ0FBQyxXQUFXLEVBQUEsQ0FBQyxDQUFDO1lBQ3ZFLG1CQUFBLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFDO1FBQy9CLGNBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQjs7O1FBQUM7WUFDakMsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdkMsT0FBTyxjQUFjLENBQUM7UUFDeEIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGlDQUFZOzs7O0lBQVosVUFBYSxNQUF1QjtRQUNsQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7SUFFRCxnQ0FBVzs7Ozs7SUFBWCxVQUFZLEtBQWlCLEVBQUUsT0FBYTtRQUE1QyxpQkF1QkM7UUF0QkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQjs7O1FBQUM7WUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO2lCQUM1QixPQUFPOzs7O1lBQUMsVUFBQyxHQUFHO2dCQUNYLE9BQUEsQ0FBQyxtQkFBSyxLQUFLLENBQUMsWUFBWSxFQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLElBQUksT0FBTyxDQUFDLG1CQUFLLEtBQUssQ0FBQyxZQUFZLEVBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUFyRixDQUFxRixFQUFDLENBQUM7O2dCQUNyRixhQUFhLEdBQUcsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDNUQsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQzVDLGFBQWEsQ0FBQyxFQUFFLENBQUMsT0FBTzs7O2dCQUFFO29CQUN4QixLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztvQkFBQzt3QkFDWixLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDakMsQ0FBQyxFQUFDLENBQUM7Z0JBQ0wsQ0FBQyxFQUFDLENBQUM7YUFDSjtZQUNELElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtnQkFDM0MsYUFBYSxDQUFDLEVBQUUsQ0FBQyxNQUFNOzs7Z0JBQUU7b0JBQ3ZCLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O29CQUFDO3dCQUNaLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNoQyxDQUFDLEVBQUMsQ0FBQztnQkFDTCxDQUFDLEVBQUMsQ0FBQzthQUNKO1lBQ0QsT0FBTyxhQUFhLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBRUQsa0NBQWE7Ozs7OztJQUFiLFVBQWMsS0FBcUIsRUFBRSxNQUEyQixFQUFFLGFBQXFCO1FBQXZGLGlCQVFDO1FBUmlFLDhCQUFBLEVBQUEscUJBQXFCO1FBQ3JGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUI7OztRQUFDO1lBQ2pDLElBQUksYUFBYSxJQUFJLENBQUMsbUJBQUssS0FBSyxFQUFBLENBQUMsQ0FBQyxVQUFVLEVBQUU7Z0JBQzVDLE9BQU8sQ0FBQyxtQkFBSyxLQUFLLEVBQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN4QztZQUNELEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFRCxxQ0FBZ0I7Ozs7O0lBQWhCLFVBQWlCLE1BQXVCLEVBQUUsS0FBcUI7UUFDN0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQjs7O1FBQUM7WUFDakMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELHVDQUFrQjs7Ozs7SUFBbEIsVUFBbUIsS0FBcUIsRUFBRSxjQUFzQjtRQUF0QiwrQkFBQSxFQUFBLHNCQUFzQjtRQUM5RCxJQUFJLGNBQWMsSUFBSSxDQUFDLG1CQUFLLEtBQUssRUFBQSxDQUFDLENBQUMsVUFBVSxFQUFFO1lBQzdDLE9BQU8sQ0FBQyxtQkFBSyxLQUFLLEVBQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsMENBQXFCOzs7O0lBQXJCLFVBQXNCLE1BQXVCO1FBQzNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUI7OztRQUFDO1lBQ2pDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFRCwrQkFBVTs7Ozs7SUFBVixVQUFXLE9BQTZDLEVBQUUsUUFBb0U7UUFBOUgsaUJBSUM7UUFIQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCOzs7UUFBQztZQUNqQyxLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxtQkFBSyxPQUFPLEVBQUEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN0RCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsa0NBQWE7Ozs7SUFBYixVQUFjLE9BQTZDO1FBQTNELGlCQUlDO1FBSEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQjs7O1FBQUM7WUFDakMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsbUJBQUssT0FBTyxFQUFBLENBQUMsQ0FBQztRQUMvQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7SUFFSyxvQ0FBZTs7Ozs7O0lBQXJCLFVBQXNCLE9BQWUsRUFBRSxHQUFXLEVBQUUsT0FBeUI7Ozs7Z0JBQzNFLHNCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCOzs7b0JBQUM7d0JBQ2pDLE9BQU8sSUFBSSxPQUFPOzs7Ozt3QkFBQyxVQUFDLE9BQU8sRUFBRSxNQUFNOzRCQUNqQyxLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHOzs7Ozs0QkFBRSxVQUFDLEtBQWdDLEVBQUUsS0FBZ0I7Z0NBQ2pGLElBQUksS0FBSyxFQUFFO29DQUNULE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQ0FDZCxPQUFPO2lDQUNSO2dDQUNELEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztnQ0FDdkMsT0FBTyxFQUFFLENBQUM7NEJBQ1osQ0FBQyxFQUFDLENBQUM7d0JBQ0wsQ0FBQyxFQUFDLENBQUM7b0JBQ0wsQ0FBQyxFQUFDLEVBQUM7OztLQUNKOzs7Ozs7O0lBRUQsNkJBQVE7Ozs7OztJQUFSLFVBQVMsT0FBZSxFQUFFLElBQWtCLEVBQUUsT0FBeUI7UUFBdkUsaUJBSUM7UUFIQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCOzs7UUFBQztZQUNqQyxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsbUJBQUssSUFBSSxFQUFBLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDekQsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGdDQUFXOzs7O0lBQVgsVUFBWSxPQUFlO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7O0lBRUQsOEJBQVM7Ozs7O0lBQVQsVUFBVSxRQUFnQixFQUFFLE1BQThCO1FBQTFELGlCQU9DO1FBTkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQjs7O1FBQUM7WUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7aUJBQ2hCLE9BQU87Ozs7WUFBQyxVQUFDLEdBQUc7Z0JBQ1gsT0FBQSxDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUyxJQUFJLE9BQU8sQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUE3RCxDQUE2RCxFQUFDLENBQUM7WUFDbkUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRUQsOEJBQVM7Ozs7O0lBQVQsVUFBYSxRQUFnQjtRQUMzQixPQUFPLG1CQUFHLG1CQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFBLEVBQUEsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVELGlDQUFZOzs7O0lBQVosVUFBYSxRQUFnQjtRQUMzQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7OztJQUVELDZDQUF3Qjs7Ozs7SUFBeEIsVUFDRSxPQUFlLEVBQ2YsS0FNc0I7UUFSeEIsaUJBZ0JDO1FBTkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQjs7O1FBQUM7WUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxHQUFHO2dCQUM3QiwwRUFBMEU7Z0JBQzFFLEtBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLG1CQUFLLEtBQUssRUFBQSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNyRSxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRUQsOENBQXlCOzs7OztJQUF6QixVQUNFLE9BQWUsRUFDZixNQU11QjtRQVJ6QixpQkFnQkM7UUFOQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCOzs7UUFBQztZQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLEdBQUc7Z0JBQzlCLDBFQUEwRTtnQkFDMUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsbUJBQUssTUFBTSxFQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFRCxtQ0FBYzs7Ozs7SUFBZCxVQUFlLE9BQWUsRUFBRSxNQUFhO1FBQTdDLGlCQUlDO1FBSEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQjs7O1FBQUM7WUFDakMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRUQsbUNBQWM7Ozs7O0lBQWQsVUFBZSxPQUFlLEVBQUUsUUFBZ0I7UUFBaEQsaUJBSUM7UUFIQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCOzs7UUFBQztZQUNqQyxLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBRUQsc0NBQWlCOzs7Ozs7SUFBakIsVUFBa0IsT0FBZSxFQUFFLE9BQWdCLEVBQUUsT0FBZ0I7UUFBckUsaUJBSUM7UUFIQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCOzs7UUFBQztZQUNqQyxLQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3RixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELDhCQUFTOzs7OztJQUFULFVBQVUsTUFBaUMsRUFBRSxPQUFtQztRQUFoRixpQkFJQztRQUhDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUI7OztRQUFDO1lBQ2pDLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7SUFFRCx5Q0FBb0I7Ozs7OztJQUFwQixVQUNFLE1BQWdELEVBQ2hELE9BQWUsRUFDZixPQUE0RDtRQUg5RCxpQkFRQztRQUhDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUI7OztRQUFDO1lBQ2pDLEtBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEYsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsaUNBQVk7OztJQUFaO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQjs7O1FBQUM7WUFDMUIsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLDhCQUFTOzs7OztJQUFqQixVQUFrQixPQUErQjtRQUFqRCxpQkF5QkM7UUF4QkMsTUFBTSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDakIsT0FBTzs7OztRQUFDLFVBQUMsR0FBVzs7Z0JBQ2IsSUFBSSxHQUFHLG1CQUE4QixHQUFHLEVBQUE7WUFDOUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUMvQixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN0QjtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0wsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7O1lBRXZDLFVBQVUsR0FBRyxNQUFNLElBQUksMEJBQTBCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBQ3hGLElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsbUJBQUEsT0FBTyxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7U0FDM0M7O1lBRUssVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO2FBQzFDLFNBQVM7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxFQUFFLEVBQW5CLENBQW1CLEVBQUM7UUFDdkMsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7O2dCQUN4QixTQUFTLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxTQUFTOzs7WUFBQztnQkFDakUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QixDQUFDLEVBQUM7WUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNsQztRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRU8saUNBQVk7Ozs7SUFBcEI7OztZQUNFLEtBQXNCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsZ0JBQWdCLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQXhDLElBQU0sT0FBTyxXQUFBO2dCQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN2Qzs7Ozs7Ozs7O1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVPLGtDQUFhOzs7O0lBQXJCOzs7WUFDRSxLQUF1QixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLGlCQUFpQixDQUFBLGdCQUFBLDRCQUFFO2dCQUExQyxJQUFNLFFBQVEsV0FBQTtnQkFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDekM7Ozs7Ozs7OztRQUNELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFTyxrQ0FBYTs7OztJQUFyQjs7O1lBQ0UsS0FBcUIsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxlQUFlLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQXRDLElBQU0sTUFBTSxXQUFBO2dCQUNmLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNqQjs7Ozs7Ozs7O1FBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFTyxpQ0FBWTs7OztJQUFwQjs7O1lBQ0UsS0FBb0IsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxjQUFjLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQXBDLElBQU0sS0FBSyxXQUFBO2dCQUNkLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNoQjs7Ozs7Ozs7O1FBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTyxpQ0FBWTs7OztJQUFwQjs7O1lBQ0UsS0FBc0IsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBeEMsSUFBTSxPQUFPLFdBQUE7Z0JBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3ZDOzs7Ozs7Ozs7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7OztJQUVPLCtCQUFVOzs7OztJQUFsQixVQUFtQixNQUFnQjtRQUFuQyxpQkF3SkM7UUF2SkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsTUFBTTs7O1FBQUU7WUFDMUIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDL0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMxQixLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDLGNBQU0sT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLEVBQWxDLENBQWtDLEVBQUMsQ0FBQztRQUMxRCxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFFBQVE7OztZQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDLGNBQU0sT0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFwQixDQUFvQixFQUFDLEVBQXpDLENBQXlDLEVBQUMsQ0FBQztTQUNoRjtRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFFBQVE7OztZQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDLGNBQU0sT0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFwQixDQUFvQixFQUFDLEVBQXpDLENBQXlDLEVBQUMsQ0FBQztTQUNoRjtRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVc7Ozs7WUFBRSxVQUFDLEdBQTJCLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDLGNBQU0sT0FBQSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBMUIsQ0FBMEIsRUFBQyxFQUEvQyxDQUErQyxFQUFDLENBQUM7U0FDcEg7UUFDRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxTQUFTOzs7O1lBQUUsVUFBQyxHQUEyQixJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7WUFBQyxjQUFNLE9BQUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQXhCLENBQXdCLEVBQUMsRUFBN0MsQ0FBNkMsRUFBQyxDQUFDO1NBQ2hIO1FBQ0QsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsV0FBVzs7OztZQUFFLFVBQUMsR0FBMkIsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1lBQUMsY0FBTSxPQUFBLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUExQixDQUEwQixFQUFDLEVBQS9DLENBQStDLEVBQUMsQ0FBQztTQUNwSDtRQUNELElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLE9BQU87Ozs7WUFBRSxVQUFDLEdBQTJCLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDLGNBQU0sT0FBQSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBdEIsQ0FBc0IsRUFBQyxFQUEzQyxDQUEyQyxFQUFDLENBQUM7U0FDNUc7UUFDRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxVQUFVOzs7O1lBQUUsVUFBQyxHQUEyQixJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7WUFBQyxjQUFNLE9BQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQXpCLENBQXlCLEVBQUMsRUFBOUMsQ0FBOEMsRUFBQyxDQUFDO1NBQ2xIO1FBQ0QsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsWUFBWTs7OztZQUFFLFVBQUMsR0FBMkIsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1lBQUMsY0FBTSxPQUFBLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUEzQixDQUEyQixFQUFDLEVBQWhELENBQWdELEVBQUMsQ0FBQztTQUN0SDtRQUNELElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFlBQVk7Ozs7WUFBRSxVQUFDLEdBQTJCLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDLGNBQU0sT0FBQSxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBM0IsQ0FBMkIsRUFBQyxFQUFoRCxDQUFnRCxFQUFDLENBQUM7U0FDdEg7UUFDRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXOzs7O1lBQUUsVUFBQyxHQUEyQixJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7WUFBQyxjQUFNLE9BQUEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQTFCLENBQTBCLEVBQUMsRUFBL0MsQ0FBK0MsRUFBQyxDQUFDO1NBQ3BIO1FBQ0QsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsVUFBVTs7OztZQUFFLFVBQUMsR0FBMkIsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1lBQUMsY0FBTSxPQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUF6QixDQUF5QixFQUFDLEVBQTlDLENBQThDLEVBQUMsQ0FBQztTQUNsSDtRQUNELElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLGFBQWE7Ozs7WUFBRSxVQUFDLEdBQTJCLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDLGNBQU0sT0FBQSxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBNUIsQ0FBNEIsRUFBQyxFQUFqRCxDQUFpRCxFQUFDLENBQUM7U0FDeEg7UUFDRCxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxZQUFZOzs7O1lBQUUsVUFBQyxHQUEyQixJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7WUFBQyxjQUFNLE9BQUEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQTNCLENBQTJCLEVBQUMsRUFBaEQsQ0FBZ0QsRUFBQyxDQUFDO1NBQ3RIO1FBQ0QsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsVUFBVTs7OztZQUFFLFVBQUMsR0FBMkIsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1lBQUMsY0FBTSxPQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUF6QixDQUF5QixFQUFDLEVBQTlDLENBQThDLEVBQUMsQ0FBQztTQUNsSDtRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVc7Ozs7WUFBRSxVQUFDLEdBQTJCLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDLGNBQU0sT0FBQSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBMUIsQ0FBMEIsRUFBQyxFQUEvQyxDQUErQyxFQUFDLENBQUM7U0FDcEg7UUFDRCxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxhQUFhOzs7O1lBQUUsVUFBQyxHQUEyQixJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7WUFBQyxjQUFNLE9BQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQTVCLENBQTRCLEVBQUMsRUFBakQsQ0FBaUQsRUFBQyxDQUFDO1NBQ3hIO1FBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDakMseUJBQXlCO1lBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLE9BQU87Ozs7WUFBRSxVQUFDLEdBQVEsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1lBQUMsY0FBTSxPQUFBLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUF0QixDQUFzQixFQUFDLEVBQTNDLENBQTJDLEVBQUMsQ0FBQztTQUN6RjtRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVc7Ozs7WUFBRSxVQUFDLEdBQWMsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1lBQUMsY0FBTSxPQUFBLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUExQixDQUEwQixFQUFDLEVBQS9DLENBQStDLEVBQUMsQ0FBQztTQUN2RztRQUNELElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLE1BQU07Ozs7WUFBRSxVQUFDLEdBQW9ELElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDLGNBQU0sT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBckIsQ0FBcUIsRUFBQyxFQUExQyxDQUEwQyxFQUFDLENBQUM7U0FDbkk7UUFDRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxTQUFTOzs7O1lBQUUsVUFBQyxHQUFjLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDLGNBQU0sT0FBQSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBeEIsQ0FBd0IsRUFBQyxFQUE3QyxDQUE2QyxFQUFDLENBQUM7U0FDbkc7UUFDRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXOzs7O1lBQUUsVUFBQyxHQUFjLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDLGNBQU0sT0FBQSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBMUIsQ0FBMEIsRUFBQyxFQUEvQyxDQUErQyxFQUFDLENBQUM7U0FDdkc7UUFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxNQUFNOzs7O1lBQUUsVUFBQyxHQUFvRCxJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7WUFBQyxjQUFNLE9BQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQXJCLENBQXFCLEVBQUMsRUFBMUMsQ0FBMEMsRUFBQyxDQUFDO1NBQ25JO1FBQ0QsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsU0FBUzs7OztZQUFFLFVBQUMsR0FBYyxJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7WUFBQyxjQUFNLE9BQUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQXhCLENBQXdCLEVBQUMsRUFBN0MsQ0FBNkMsRUFBQyxDQUFDO1NBQ25HO1FBQ0QsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsV0FBVzs7OztZQUFFLFVBQUMsR0FBb0QsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1lBQUM7Z0JBQ3ZHLE9BQUEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQTFCLENBQTBCLEVBQUMsRUFEOEQsQ0FDOUQsRUFBQyxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsTUFBTTs7OztZQUFFLFVBQUMsR0FBb0QsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1lBQUMsY0FBTSxPQUFBLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUF4QixDQUF3QixFQUFDLEVBQTdDLENBQTZDLEVBQUMsQ0FBQztTQUN0STtRQUNELElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFNBQVM7Ozs7WUFBRSxVQUFDLEdBQW9ELElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDO2dCQUNyRyxPQUFBLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUF4QixDQUF3QixFQUFDLEVBRDhELENBQzlELEVBQUMsQ0FBQztTQUM5QjtRQUNELElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLGFBQWE7Ozs7WUFBRSxVQUFDLEdBQW9ELElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDO2dCQUN6RyxPQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUE1QixDQUE0QixFQUFDLEVBRDhELENBQzlELEVBQUMsQ0FBQztTQUNsQztRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFFBQVE7Ozs7WUFBRSxVQUFDLEdBQW9ELElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDLGNBQU0sT0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBdkIsQ0FBdUIsRUFBQyxFQUE1QyxDQUE0QyxFQUFDLENBQUM7U0FDdkk7UUFDRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXOzs7O1lBQUUsVUFBQyxHQUFvRCxJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7WUFBQztnQkFDdkcsT0FBQSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFBMUIsQ0FBMEIsRUFBQyxFQUQ4RCxDQUM5RCxFQUFDLENBQUM7U0FDaEM7UUFDRCxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxZQUFZOzs7O1lBQUUsVUFBQyxHQUF1QixJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7WUFBQyxjQUFNLE9BQUEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQTNCLENBQTJCLEVBQUMsRUFBaEQsQ0FBZ0QsRUFBQyxDQUFDO1NBQ2xIO1FBQ0QsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsT0FBTzs7OztZQUFFLFVBQUMsR0FBdUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1lBQUMsY0FBTSxPQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUF6QixDQUF5QixFQUFDLEVBQTlDLENBQThDLEVBQUMsQ0FBQztTQUMzRztRQUNELElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFVBQVU7Ozs7WUFBRSxVQUFDLEdBQXVCLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDLGNBQU0sT0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBekIsQ0FBeUIsRUFBQyxFQUE5QyxDQUE4QyxFQUFDLENBQUM7U0FDOUc7UUFDRCxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxjQUFjOzs7O1lBQUUsVUFBQyxHQUE2QixJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7WUFBQyxjQUFNLE9BQUEsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQTdCLENBQTZCLEVBQUMsRUFBbEQsQ0FBa0QsRUFBQyxDQUFDO1NBQzVIO1FBQ0QsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsWUFBWTs7OztZQUFFLFVBQUMsR0FBNkIsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1lBQUMsY0FBTSxPQUFBLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUEzQixDQUEyQixFQUFDLEVBQWhELENBQWdELEVBQUMsQ0FBQztTQUN4SDtRQUNELElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLGVBQWU7Ozs7WUFBRSxVQUFDLEdBQTZCLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDLGNBQU0sT0FBQSxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBOUIsQ0FBOEIsRUFBQyxFQUFuRCxDQUFtRCxFQUFDLENBQUM7U0FDOUg7UUFDRCxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQzVDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLGtCQUFrQjs7O1lBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1lBQUMsY0FBTSxPQUFBLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBOUIsQ0FBOEIsRUFBQyxFQUFuRCxDQUFtRCxFQUFDLENBQUM7U0FDcEc7UUFDRCxJQUFJLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLHNCQUFzQjs7O1lBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1lBQUMsY0FBTSxPQUFBLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsRUFBbEMsQ0FBa0MsRUFBQyxFQUF2RCxDQUF1RCxFQUFDLENBQUM7U0FDNUc7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxRQUFROzs7WUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7WUFBQyxjQUFNLE9BQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBcEIsQ0FBb0IsRUFBQyxFQUF6QyxDQUF5QyxFQUFDLENBQUM7U0FDaEY7UUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxPQUFPOzs7O1lBQUUsVUFBQyxHQUF3QixJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7WUFBQyxjQUFNLE9BQUEsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQXRCLENBQXNCLEVBQUMsRUFBM0MsQ0FBMkMsRUFBQyxDQUFDO1NBQ3pHO1FBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsTUFBTTs7OztZQUFFLFVBQUMsR0FBdUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1lBQUMsY0FBTSxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFyQixDQUFxQixFQUFDLEVBQTFDLENBQTBDLEVBQUMsQ0FBQztTQUN0RztRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVc7Ozs7WUFBRSxVQUFDLEdBQXVCLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDLGNBQU0sT0FBQSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBMUIsQ0FBMEIsRUFBQyxFQUEvQyxDQUErQyxFQUFDLENBQUM7U0FDaEg7UUFDRCxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxZQUFZOzs7O1lBQUUsVUFBQyxHQUF1QixJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7WUFBQyxjQUFNLE9BQUEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQTNCLENBQTJCLEVBQUMsRUFBaEQsQ0FBZ0QsRUFBQyxDQUFDO1NBQ2xIO1FBQ0QsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsYUFBYTs7OztZQUFFLFVBQUMsR0FBdUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1lBQUMsY0FBTSxPQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUE1QixDQUE0QixFQUFDLEVBQWpELENBQWlELEVBQUMsQ0FBQztTQUNwSDtRQUNELElBQUksTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsa0JBQWtCOzs7O1lBQUUsVUFBQyxHQUF1QixJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7WUFBQyxjQUFNLE9BQUEsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBakMsQ0FBaUMsRUFBQyxFQUF0RCxDQUFzRCxFQUFDLENBQUM7U0FDOUg7UUFDRCxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLG1CQUFtQjs7OztZQUFFLFVBQUMsR0FBdUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1lBQUMsY0FBTSxPQUFBLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQWxDLENBQWtDLEVBQUMsRUFBdkQsQ0FBdUQsRUFBQyxDQUFDO1NBQ2hJO1FBQ0QsSUFBSSxNQUFNLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxtQkFBSyxtQkFBbUIsRUFBQTs7OztZQUFFLFVBQUMsR0FBaUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1lBQUMsY0FBTSxPQUFBLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQWxDLENBQWtDLEVBQUMsRUFBdkQsQ0FBdUQsRUFBQyxDQUFDO1NBQy9IO1FBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsTUFBTTs7O1lBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1lBQUMsY0FBTSxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQWxCLENBQWtCLEVBQUMsRUFBdkMsQ0FBdUMsRUFBQyxDQUFDO1NBQzVFO0lBQ0gsQ0FBQztJQUVELDJCQUEyQjs7Ozs7Ozs7O0lBQ25CLDJCQUFNOzs7Ozs7Ozs7SUFBZCxVQUFlLEdBQVEsRUFBRSxJQUFTLEVBQUUsS0FBVTtRQUM1QyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixxREFBcUQ7WUFDckQsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDeEI7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztnQkFDYixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxpQkFBaUI7b0JBQzFELENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNSLENBQUMsQ0FBQyxFQUFFLEVBQ04sSUFBSSxFQUNKLEtBQUssQ0FBQyxDQUFDO1NBQ1Y7YUFBTTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDdEI7SUFDSCxDQUFDOztnQkFscEJGLFVBQVU7Ozs7Z0JBekRnRCxNQUFNOzZDQTJFNUQsUUFBUSxZQUFJLE1BQU0sU0FBQyxjQUFjO2dCQUNrQixxQkFBcUIsdUJBQXhFLFFBQVE7O0lBZ29CYixpQkFBQztDQUFBLEFBbnBCRCxJQW1wQkM7U0FscEJZLFVBQVU7OztJQUNyQixpQ0FBMEI7O0lBQzFCLGlDQUE4Qjs7SUFDOUIsZ0NBQTZCOztJQUM3QiwrQkFBb0I7Ozs7O0lBRXBCLGdDQUE4Qzs7Ozs7SUFDOUMsK0JBQTZDOzs7OztJQUM3QyxzQ0FBd0M7Ozs7O0lBQ3hDLHVDQUF5Qzs7Ozs7SUFDekMscUNBQWdEOzs7OztJQUNoRCxvQ0FBOEM7Ozs7O0lBQzlDLHNDQUF3Qzs7Ozs7SUFDeEMsa0NBQTBDOzs7OztJQUd4QywwQkFBb0I7Ozs7O0lBQ3BCLG9DQUEyRTs7Ozs7SUFDM0UsMkNBQXlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBOZ1pvbmUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBNYXBib3hHbCBmcm9tICdtYXBib3gtZ2wnO1xuaW1wb3J0IHsgQXN5bmNTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTWFwRXZlbnQsIE1hcEltYWdlRGF0YSwgTWFwSW1hZ2VPcHRpb25zIH0gZnJvbSAnLi9tYXAudHlwZXMnO1xuXG5leHBvcnQgY29uc3QgTUFQQk9YX0FQSV9LRVkgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ01hcGJveEFwaUtleScpO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTWdsUmVzaXplRXZlbnRFbWl0dGVyIHtcbiAgYWJzdHJhY3QgcmVzaXplRXZlbnQ6IE9ic2VydmFibGU8dm9pZD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0dXBNYXAge1xuICBhY2Nlc3NUb2tlbj86IHN0cmluZztcbiAgY3VzdG9tTWFwYm94QXBpVXJsPzogc3RyaW5nO1xuICBtYXBPcHRpb25zOiBhbnk7IC8vIE1hcGJveEdsLk1hcGJveE9wdGlvbnNcbiAgbWFwRXZlbnRzOiBNYXBFdmVudDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXR1cExheWVyIHtcbiAgbGF5ZXJPcHRpb25zOiBNYXBib3hHbC5MYXllcjtcbiAgbGF5ZXJFdmVudHM6IHtcbiAgICBjbGljazogRXZlbnRFbWl0dGVyPE1hcGJveEdsLk1hcE1vdXNlRXZlbnQ+O1xuICAgIG1vdXNlRW50ZXI6IEV2ZW50RW1pdHRlcjxNYXBib3hHbC5NYXBNb3VzZUV2ZW50PjtcbiAgICBtb3VzZUxlYXZlOiBFdmVudEVtaXR0ZXI8TWFwYm94R2wuTWFwTW91c2VFdmVudD47XG4gICAgbW91c2VNb3ZlOiBFdmVudEVtaXR0ZXI8TWFwYm94R2wuTWFwTW91c2VFdmVudD47XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0dXBQb3B1cCB7XG4gIHBvcHVwT3B0aW9uczogTWFwYm94R2wuUG9wdXBPcHRpb25zO1xuICBwb3B1cEV2ZW50czoge1xuICAgIG9wZW46IEV2ZW50RW1pdHRlcjx2b2lkPjtcbiAgICBjbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNldHVwTWFya2VyIHtcbiAgbWFya2Vyc09wdGlvbnM6IHtcbiAgICBvZmZzZXQ/OiBNYXBib3hHbC5Qb2ludExpa2U7XG4gICAgYW5jaG9yPzogTWFwYm94R2wuQW5jaG9yO1xuICAgIGRyYWdnYWJsZT86IGJvb2xlYW47XG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgZmVhdHVyZT86IEdlb0pTT04uRmVhdHVyZTxHZW9KU09OLlBvaW50PjtcbiAgICBsbmdMYXQ/OiBNYXBib3hHbC5MbmdMYXRMaWtlO1xuICB9O1xuICBtYXJrZXJzRXZlbnRzOiB7XG4gICAgZHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8TWFwYm94R2wuTWFya2VyPjtcbiAgICBkcmFnOiBFdmVudEVtaXR0ZXI8TWFwYm94R2wuTWFya2VyPjtcbiAgICBkcmFnRW5kOiBFdmVudEVtaXR0ZXI8TWFwYm94R2wuTWFya2VyPjtcbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgTW92aW5nT3B0aW9ucyA9IE1hcGJveEdsLkZseVRvT3B0aW9ucyB8XG4gIChNYXBib3hHbC5BbmltYXRpb25PcHRpb25zICYgTWFwYm94R2wuQ2FtZXJhT3B0aW9ucykgfFxuICBNYXBib3hHbC5DYW1lcmFPcHRpb25zO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWFwU2VydmljZSB7XG4gIG1hcEluc3RhbmNlOiBNYXBib3hHbC5NYXA7XG4gIG1hcENyZWF0ZWQkOiBPYnNlcnZhYmxlPHZvaWQ+O1xuICBtYXBMb2FkZWQkOiBPYnNlcnZhYmxlPHZvaWQ+O1xuICBtYXBFdmVudHM6IE1hcEV2ZW50O1xuXG4gIHByaXZhdGUgbWFwQ3JlYXRlZCA9IG5ldyBBc3luY1N1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBtYXBMb2FkZWQgPSBuZXcgQXN5bmNTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgbGF5ZXJJZHNUb1JlbW92ZTogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBzb3VyY2VJZHNUb1JlbW92ZTogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBtYXJrZXJzVG9SZW1vdmU6IE1hcGJveEdsLk1hcmtlcltdID0gW107XG4gIHByaXZhdGUgcG9wdXBzVG9SZW1vdmU6IE1hcGJveEdsLlBvcHVwW10gPSBbXTtcbiAgcHJpdmF0ZSBpbWFnZUlkc1RvUmVtb3ZlOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1BUEJPWF9BUElfS0VZKSBwcml2YXRlIHJlYWRvbmx5IE1BUEJPWF9BUElfS0VZOiBzdHJpbmcsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByZWFkb25seSBNZ2xSZXNpemVFdmVudEVtaXR0ZXI6IE1nbFJlc2l6ZUV2ZW50RW1pdHRlclxuICApIHtcbiAgICB0aGlzLm1hcENyZWF0ZWQkID0gdGhpcy5tYXBDcmVhdGVkLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHRoaXMubWFwTG9hZGVkJCA9IHRoaXMubWFwTG9hZGVkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgc2V0dXAob3B0aW9uczogU2V0dXBNYXApIHtcbiAgICAvLyBOZWVkIG9uU3RhYmxlIHRvIHdhaXQgZm9yIGEgcG90ZW50aWFsIEBhbmd1bGFyL3JvdXRlIHRyYW5zaXRpb24gdG8gZW5kXG4gICAgdGhpcy56b25lLm9uU3RhYmxlLnBpcGUoZmlyc3QoKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIC8vIFdvcmthcm91bmQgcm9sbHVwIGlzc3VlXG4gICAgICB0aGlzLmFzc2lnbihNYXBib3hHbCwgJ2FjY2Vzc1Rva2VuJywgb3B0aW9ucy5hY2Nlc3NUb2tlbiB8fCB0aGlzLk1BUEJPWF9BUElfS0VZKTtcbiAgICAgIGlmIChvcHRpb25zLmN1c3RvbU1hcGJveEFwaVVybCkge1xuICAgICAgICB0aGlzLmFzc2lnbihNYXBib3hHbCwgJ2NvbmZpZy5BUElfVVJMJywgb3B0aW9ucy5jdXN0b21NYXBib3hBcGlVcmwpO1xuICAgICAgfVxuICAgICAgdGhpcy5jcmVhdGVNYXAob3B0aW9ucy5tYXBPcHRpb25zKTtcbiAgICAgIHRoaXMuaG9va0V2ZW50cyhvcHRpb25zLm1hcEV2ZW50cyk7XG4gICAgICB0aGlzLm1hcEV2ZW50cyA9IG9wdGlvbnMubWFwRXZlbnRzO1xuICAgICAgdGhpcy5tYXBDcmVhdGVkLm5leHQodW5kZWZpbmVkKTtcbiAgICAgIHRoaXMubWFwQ3JlYXRlZC5jb21wbGV0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveU1hcCgpIHtcbiAgICBpZiAodGhpcy5tYXBJbnN0YW5jZSkge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2UucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTWluWm9vbShtaW5ab29tOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uuc2V0TWluWm9vbShtaW5ab29tKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZU1heFpvb20obWF4Wm9vbTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLnNldE1heFpvb20obWF4Wm9vbSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVTY3JvbGxab29tKHN0YXR1czogYm9vbGVhbikge1xuICAgIHJldHVybiB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgc3RhdHVzID8gdGhpcy5tYXBJbnN0YW5jZS5zY3JvbGxab29tLmVuYWJsZSgpIDogdGhpcy5tYXBJbnN0YW5jZS5zY3JvbGxab29tLmRpc2FibGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZURyYWdSb3RhdGUoc3RhdHVzOiBib29sZWFuKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBzdGF0dXMgPyB0aGlzLm1hcEluc3RhbmNlLmRyYWdSb3RhdGUuZW5hYmxlKCkgOiB0aGlzLm1hcEluc3RhbmNlLmRyYWdSb3RhdGUuZGlzYWJsZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlVG91Y2hab29tUm90YXRlKHN0YXR1czogYm9vbGVhbikge1xuICAgIHJldHVybiB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgc3RhdHVzID8gdGhpcy5tYXBJbnN0YW5jZS50b3VjaFpvb21Sb3RhdGUuZW5hYmxlKCkgOiB0aGlzLm1hcEluc3RhbmNlLnRvdWNoWm9vbVJvdGF0ZS5kaXNhYmxlKCk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVEb3VibGVDbGlja1pvb20oc3RhdHVzOiBib29sZWFuKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBzdGF0dXMgPyB0aGlzLm1hcEluc3RhbmNlLmRvdWJsZUNsaWNrWm9vbS5lbmFibGUoKSA6IHRoaXMubWFwSW5zdGFuY2UuZG91YmxlQ2xpY2tab29tLmRpc2FibGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUtleWJvYXJkKHN0YXR1czogYm9vbGVhbikge1xuICAgIHJldHVybiB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgc3RhdHVzID8gdGhpcy5tYXBJbnN0YW5jZS5rZXlib2FyZC5lbmFibGUoKSA6IHRoaXMubWFwSW5zdGFuY2Uua2V5Ym9hcmQuZGlzYWJsZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlRHJhZ1BhbihzdGF0dXM6IGJvb2xlYW4pIHtcbiAgICByZXR1cm4gdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHN0YXR1cyA/IHRoaXMubWFwSW5zdGFuY2UuZHJhZ1Bhbi5lbmFibGUoKSA6IHRoaXMubWFwSW5zdGFuY2UuZHJhZ1Bhbi5kaXNhYmxlKCk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVCb3hab29tKHN0YXR1czogYm9vbGVhbikge1xuICAgIHJldHVybiB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgc3RhdHVzID8gdGhpcy5tYXBJbnN0YW5jZS5ib3hab29tLmVuYWJsZSgpIDogdGhpcy5tYXBJbnN0YW5jZS5ib3hab29tLmRpc2FibGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVN0eWxlKHN0eWxlOiBNYXBib3hHbC5TdHlsZSkge1xuICAgIHJldHVybiB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5zZXRTdHlsZShzdHlsZSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVNYXhCb3VuZHMobWF4Qm91bmRzOiBNYXBib3hHbC5MbmdMYXRCb3VuZHNMaWtlKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLnNldE1heEJvdW5kcyhtYXhCb3VuZHMpO1xuICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlQ2FudmFzQ3Vyc29yKGN1cnNvcjogc3RyaW5nKSB7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5tYXBJbnN0YW5jZS5nZXRDYW52YXNDb250YWluZXIoKTtcbiAgICBjYW52YXMuc3R5bGUuY3Vyc29yID0gY3Vyc29yO1xuICB9XG5cbiAgcXVlcnlSZW5kZXJlZEZlYXR1cmVzKFxuICAgIHBvaW50T3JCb3g/OiBNYXBib3hHbC5Qb2ludExpa2UgfCBbTWFwYm94R2wuUG9pbnRMaWtlLCBNYXBib3hHbC5Qb2ludExpa2VdLFxuICAgIHBhcmFtZXRlcnM/OiB7IGxheWVycz86IHN0cmluZ1tdLCBmaWx0ZXI/OiBhbnlbXSB9XG4gICk6IEdlb0pTT04uRmVhdHVyZTxHZW9KU09OLkdlb21ldHJ5T2JqZWN0PltdIHtcbiAgICByZXR1cm4gdGhpcy5tYXBJbnN0YW5jZS5xdWVyeVJlbmRlcmVkRmVhdHVyZXMocG9pbnRPckJveCwgcGFyYW1ldGVycyk7XG4gIH1cblxuICBwYW5UbyhjZW50ZXI6IE1hcGJveEdsLkxuZ0xhdExpa2UsIG9wdGlvbnM/OiBNYXBib3hHbC5BbmltYXRpb25PcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLnBhblRvKGNlbnRlciwgb3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cblxuICBtb3ZlKFxuICAgIG1vdmluZ01ldGhvZDogJ2p1bXBUbycgfCAnZWFzZVRvJyB8ICdmbHlUbycsXG4gICAgbW92aW5nT3B0aW9ucz86IE1vdmluZ09wdGlvbnMsXG4gICAgem9vbT86IG51bWJlcixcbiAgICBjZW50ZXI/OiBNYXBib3hHbC5MbmdMYXRMaWtlLFxuICAgIGJlYXJpbmc/OiBudW1iZXIsXG4gICAgcGl0Y2g/OiBudW1iZXJcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAoPGFueT50aGlzLm1hcEluc3RhbmNlW21vdmluZ01ldGhvZF0pKHtcbiAgICAgICAgLi4ubW92aW5nT3B0aW9ucyxcbiAgICAgICAgem9vbTogem9vbSA/IHpvb20gOiB0aGlzLm1hcEluc3RhbmNlLmdldFpvb20oKSxcbiAgICAgICAgY2VudGVyOiBjZW50ZXIgPyBjZW50ZXIgOiB0aGlzLm1hcEluc3RhbmNlLmdldENlbnRlcigpLFxuICAgICAgICBiZWFyaW5nOiBiZWFyaW5nID8gYmVhcmluZyA6IHRoaXMubWFwSW5zdGFuY2UuZ2V0QmVhcmluZygpLFxuICAgICAgICBwaXRjaDogcGl0Y2ggPyBwaXRjaCA6IHRoaXMubWFwSW5zdGFuY2UuZ2V0UGl0Y2goKVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRMYXllcihsYXllcjogU2V0dXBMYXllciwgYmluZEV2ZW50czogYm9vbGVhbiwgYmVmb3JlPzogc3RyaW5nKSB7XG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKGxheWVyLmxheWVyT3B0aW9ucylcbiAgICAgICAgLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGtleSA9IDxrZXlvZiBNYXBib3hHbC5MYXllcj5rZXk7XG4gICAgICAgICAgaWYgKGxheWVyLmxheWVyT3B0aW9uc1t0a2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkZWxldGUgbGF5ZXIubGF5ZXJPcHRpb25zW3RrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLmFkZExheWVyKGxheWVyLmxheWVyT3B0aW9ucywgYmVmb3JlKTtcbiAgICAgIGlmIChiaW5kRXZlbnRzKSB7XG4gICAgICAgIGlmIChsYXllci5sYXllckV2ZW50cy5jbGljay5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbignY2xpY2snLCBsYXllci5sYXllck9wdGlvbnMuaWQsIChldnQ6IE1hcGJveEdsLk1hcE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICBsYXllci5sYXllckV2ZW50cy5jbGljay5lbWl0KGV2dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGF5ZXIubGF5ZXJFdmVudHMubW91c2VFbnRlci5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbignbW91c2VlbnRlcicsIGxheWVyLmxheWVyT3B0aW9ucy5pZCwgKGV2dDogTWFwYm94R2wuTWFwTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIGxheWVyLmxheWVyRXZlbnRzLm1vdXNlRW50ZXIuZW1pdChldnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxheWVyLmxheWVyRXZlbnRzLm1vdXNlTGVhdmUub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ21vdXNlbGVhdmUnLCBsYXllci5sYXllck9wdGlvbnMuaWQsIChldnQ6IE1hcGJveEdsLk1hcE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICBsYXllci5sYXllckV2ZW50cy5tb3VzZUxlYXZlLmVtaXQoZXZ0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXllci5sYXllckV2ZW50cy5tb3VzZU1vdmUub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ21vdXNlbW92ZScsIGxheWVyLmxheWVyT3B0aW9ucy5pZCwgKGV2dDogTWFwYm94R2wuTWFwTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIGxheWVyLmxheWVyRXZlbnRzLm1vdXNlTW92ZS5lbWl0KGV2dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlTGF5ZXIobGF5ZXJJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5sYXllcklkc1RvUmVtb3ZlLnB1c2gobGF5ZXJJZCk7XG4gIH1cblxuICBhZGRNYXJrZXIobWFya2VyOiBTZXR1cE1hcmtlcikge1xuICAgIGNvbnN0IG9wdGlvbnM6IE1hcGJveEdsLk1hcmtlck9wdGlvbnMgPSB7XG4gICAgICBvZmZzZXQ6IG1hcmtlci5tYXJrZXJzT3B0aW9ucy5vZmZzZXQsXG4gICAgICBhbmNob3I6IG1hcmtlci5tYXJrZXJzT3B0aW9ucy5hbmNob3IsXG4gICAgICBkcmFnZ2FibGU6ICEhbWFya2VyLm1hcmtlcnNPcHRpb25zLmRyYWdnYWJsZVxuICAgIH07XG4gICAgaWYgKG1hcmtlci5tYXJrZXJzT3B0aW9ucy5lbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgb3B0aW9ucy5lbGVtZW50ID0gbWFya2VyLm1hcmtlcnNPcHRpb25zLmVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IG1hcmtlckluc3RhbmNlID0gbmV3IE1hcGJveEdsLk1hcmtlcihvcHRpb25zKTtcbiAgICBpZiAobWFya2VyLm1hcmtlcnNFdmVudHMuZHJhZ1N0YXJ0Lm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIG1hcmtlckluc3RhbmNlLm9uKCdkcmFnc3RhcnQnLCAoZXZlbnQ6IHsgdGFyZ2V0OiBNYXBib3hHbC5NYXJrZXIgfSkgPT5cbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiBtYXJrZXIubWFya2Vyc0V2ZW50cy5kcmFnU3RhcnQuZW1pdChldmVudC50YXJnZXQpKVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKG1hcmtlci5tYXJrZXJzRXZlbnRzLmRyYWcub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgbWFya2VySW5zdGFuY2Uub24oJ2RyYWcnLCAoZXZlbnQ6IHsgdGFyZ2V0OiBNYXBib3hHbC5NYXJrZXIgfSkgPT5cbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiBtYXJrZXIubWFya2Vyc0V2ZW50cy5kcmFnLmVtaXQoZXZlbnQudGFyZ2V0KSlcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChtYXJrZXIubWFya2Vyc0V2ZW50cy5kcmFnRW5kLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIG1hcmtlckluc3RhbmNlLm9uKCdkcmFnZW5kJywgKGV2ZW50OiB7IHRhcmdldDogTWFwYm94R2wuTWFya2VyIH0pID0+XG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4gbWFya2VyLm1hcmtlcnNFdmVudHMuZHJhZ0VuZC5lbWl0KGV2ZW50LnRhcmdldCkpXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCBsbmdMYXQ6IE1hcGJveEdsLkxuZ0xhdExpa2UgPSBtYXJrZXIubWFya2Vyc09wdGlvbnMuZmVhdHVyZSA/XG4gICAgICA8W251bWJlciwgbnVtYmVyXT5tYXJrZXIubWFya2Vyc09wdGlvbnMuZmVhdHVyZS5nZW9tZXRyeSEuY29vcmRpbmF0ZXMgOlxuICAgICAgbWFya2VyLm1hcmtlcnNPcHRpb25zLmxuZ0xhdCE7XG4gICAgbWFya2VySW5zdGFuY2Uuc2V0TG5nTGF0KGxuZ0xhdCk7XG4gICAgcmV0dXJuIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBtYXJrZXJJbnN0YW5jZS5hZGRUbyh0aGlzLm1hcEluc3RhbmNlKTtcbiAgICAgIHJldHVybiBtYXJrZXJJbnN0YW5jZTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZU1hcmtlcihtYXJrZXI6IE1hcGJveEdsLk1hcmtlcikge1xuICAgIHRoaXMubWFya2Vyc1RvUmVtb3ZlLnB1c2gobWFya2VyKTtcbiAgfVxuXG4gIGNyZWF0ZVBvcHVwKHBvcHVwOiBTZXR1cFBvcHVwLCBlbGVtZW50OiBOb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhwb3B1cC5wb3B1cE9wdGlvbnMpXG4gICAgICAgIC5mb3JFYWNoKChrZXkpID0+XG4gICAgICAgICAgKDxhbnk+cG9wdXAucG9wdXBPcHRpb25zKVtrZXldID09PSB1bmRlZmluZWQgJiYgZGVsZXRlICg8YW55PnBvcHVwLnBvcHVwT3B0aW9ucylba2V5XSk7XG4gICAgICBjb25zdCBwb3B1cEluc3RhbmNlID0gbmV3IE1hcGJveEdsLlBvcHVwKHBvcHVwLnBvcHVwT3B0aW9ucyk7XG4gICAgICBwb3B1cEluc3RhbmNlLnNldERPTUNvbnRlbnQoZWxlbWVudCk7XG4gICAgICBpZiAocG9wdXAucG9wdXBFdmVudHMuY2xvc2Uub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICBwb3B1cEluc3RhbmNlLm9uKCdjbG9zZScsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHBvcHVwLnBvcHVwRXZlbnRzLmNsb3NlLmVtaXQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAocG9wdXAucG9wdXBFdmVudHMub3Blbi5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgIHBvcHVwSW5zdGFuY2Uub24oJ29wZW4nLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICBwb3B1cC5wb3B1cEV2ZW50cy5vcGVuLmVtaXQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcG9wdXBJbnN0YW5jZTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFBvcHVwVG9NYXAocG9wdXA6IE1hcGJveEdsLlBvcHVwLCBsbmdMYXQ6IE1hcGJveEdsLkxuZ0xhdExpa2UsIHNraXBPcGVuRXZlbnQgPSBmYWxzZSkge1xuICAgIHJldHVybiB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgaWYgKHNraXBPcGVuRXZlbnQgJiYgKDxhbnk+cG9wdXApLl9saXN0ZW5lcnMpIHtcbiAgICAgICAgZGVsZXRlICg8YW55PnBvcHVwKS5fbGlzdGVuZXJzWydvcGVuJ107XG4gICAgICB9XG4gICAgICBwb3B1cC5zZXRMbmdMYXQobG5nTGF0KTtcbiAgICAgIHBvcHVwLmFkZFRvKHRoaXMubWFwSW5zdGFuY2UpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkUG9wdXBUb01hcmtlcihtYXJrZXI6IE1hcGJveEdsLk1hcmtlciwgcG9wdXA6IE1hcGJveEdsLlBvcHVwKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBtYXJrZXIuc2V0UG9wdXAocG9wdXApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlUG9wdXBGcm9tTWFwKHBvcHVwOiBNYXBib3hHbC5Qb3B1cCwgc2tpcENsb3NlRXZlbnQgPSBmYWxzZSkge1xuICAgIGlmIChza2lwQ2xvc2VFdmVudCAmJiAoPGFueT5wb3B1cCkuX2xpc3RlbmVycykge1xuICAgICAgZGVsZXRlICg8YW55PnBvcHVwKS5fbGlzdGVuZXJzWydjbG9zZSddO1xuICAgIH1cbiAgICB0aGlzLnBvcHVwc1RvUmVtb3ZlLnB1c2gocG9wdXApO1xuICB9XG5cbiAgcmVtb3ZlUG9wdXBGcm9tTWFya2VyKG1hcmtlcjogTWFwYm94R2wuTWFya2VyKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBtYXJrZXIuc2V0UG9wdXAodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZENvbnRyb2woY29udHJvbDogTWFwYm94R2wuQ29udHJvbCB8IE1hcGJveEdsLklDb250cm9sLCBwb3NpdGlvbj86ICd0b3AtcmlnaHQnIHwgJ3RvcC1sZWZ0JyB8ICdib3R0b20tcmlnaHQnIHwgJ2JvdHRvbS1sZWZ0Jykge1xuICAgIHJldHVybiB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5hZGRDb250cm9sKDxhbnk+Y29udHJvbCwgcG9zaXRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlQ29udHJvbChjb250cm9sOiBNYXBib3hHbC5Db250cm9sIHwgTWFwYm94R2wuSUNvbnRyb2wpIHtcbiAgICByZXR1cm4gdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2UucmVtb3ZlQ29udHJvbCg8YW55PmNvbnRyb2wpO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgbG9hZEFuZEFkZEltYWdlKGltYWdlSWQ6IHN0cmluZywgdXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBNYXBJbWFnZU9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMubWFwSW5zdGFuY2UubG9hZEltYWdlKHVybCwgKGVycm9yOiB7IHN0YXR1czogbnVtYmVyIH0gfCBudWxsLCBpbWFnZTogSW1hZ2VEYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmFkZEltYWdlKGltYWdlSWQsIGltYWdlLCBvcHRpb25zKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRJbWFnZShpbWFnZUlkOiBzdHJpbmcsIGRhdGE6IE1hcEltYWdlRGF0YSwgb3B0aW9ucz86IE1hcEltYWdlT3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5hZGRJbWFnZShpbWFnZUlkLCA8YW55PmRhdGEsIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlSW1hZ2UoaW1hZ2VJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5pbWFnZUlkc1RvUmVtb3ZlLnB1c2goaW1hZ2VJZCk7XG4gIH1cblxuICBhZGRTb3VyY2Uoc291cmNlSWQ6IHN0cmluZywgc291cmNlOiBNYXBib3hHbC5BbnlTb3VyY2VEYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhzb3VyY2UpXG4gICAgICAgIC5mb3JFYWNoKChrZXkpID0+XG4gICAgICAgICAgKDxhbnk+c291cmNlKVtrZXldID09PSB1bmRlZmluZWQgJiYgZGVsZXRlICg8YW55PnNvdXJjZSlba2V5XSk7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLmFkZFNvdXJjZShzb3VyY2VJZCwgc291cmNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFNvdXJjZTxUPihzb3VyY2VJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIDxUPjxhbnk+dGhpcy5tYXBJbnN0YW5jZS5nZXRTb3VyY2Uoc291cmNlSWQpO1xuICB9XG5cbiAgcmVtb3ZlU291cmNlKHNvdXJjZUlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNvdXJjZUlkc1RvUmVtb3ZlLnB1c2goc291cmNlSWQpO1xuICB9XG5cbiAgc2V0QWxsTGF5ZXJQYWludFByb3BlcnR5KFxuICAgIGxheWVySWQ6IHN0cmluZyxcbiAgICBwYWludDogTWFwYm94R2wuQmFja2dyb3VuZFBhaW50IHxcbiAgICAgIE1hcGJveEdsLkZpbGxQYWludCB8XG4gICAgICBNYXBib3hHbC5GaWxsRXh0cnVzaW9uUGFpbnQgfFxuICAgICAgTWFwYm94R2wuTGluZVBhaW50IHxcbiAgICAgIE1hcGJveEdsLlN5bWJvbFBhaW50IHxcbiAgICAgIE1hcGJveEdsLlJhc3RlclBhaW50IHxcbiAgICAgIE1hcGJveEdsLkNpcmNsZVBhaW50XG4gICkge1xuICAgIHJldHVybiB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgT2JqZWN0LmtleXMocGFpbnQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAvLyBUT0RPIENoZWNrIGZvciBwZXJmLCBzZXRQYWludFByb3BlcnR5IG9ubHkgb24gY2hhbmdlZCBwYWludCBwcm9wcyBtYXliZVxuICAgICAgICB0aGlzLm1hcEluc3RhbmNlLnNldFBhaW50UHJvcGVydHkobGF5ZXJJZCwga2V5LCAoPGFueT5wYWludClba2V5XSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldEFsbExheWVyTGF5b3V0UHJvcGVydHkoXG4gICAgbGF5ZXJJZDogc3RyaW5nLFxuICAgIGxheW91dDogTWFwYm94R2wuQmFja2dyb3VuZExheW91dCB8XG4gICAgICBNYXBib3hHbC5GaWxsTGF5b3V0IHxcbiAgICAgIE1hcGJveEdsLkZpbGxFeHRydXNpb25MYXlvdXQgfFxuICAgICAgTWFwYm94R2wuTGluZUxheW91dCB8XG4gICAgICBNYXBib3hHbC5TeW1ib2xMYXlvdXQgfFxuICAgICAgTWFwYm94R2wuUmFzdGVyTGF5b3V0IHxcbiAgICAgIE1hcGJveEdsLkNpcmNsZUxheW91dFxuICApIHtcbiAgICByZXR1cm4gdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKGxheW91dCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIC8vIFRPRE8gQ2hlY2sgZm9yIHBlcmYsIHNldFBhaW50UHJvcGVydHkgb25seSBvbiBjaGFuZ2VkIHBhaW50IHByb3BzIG1heWJlXG4gICAgICAgIHRoaXMubWFwSW5zdGFuY2Uuc2V0TGF5b3V0UHJvcGVydHkobGF5ZXJJZCwga2V5LCAoPGFueT5sYXlvdXQpW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRMYXllckZpbHRlcihsYXllcklkOiBzdHJpbmcsIGZpbHRlcjogYW55W10pIHtcbiAgICByZXR1cm4gdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uuc2V0RmlsdGVyKGxheWVySWQsIGZpbHRlcik7XG4gICAgfSk7XG4gIH1cblxuICBzZXRMYXllckJlZm9yZShsYXllcklkOiBzdHJpbmcsIGJlZm9yZUlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2UubW92ZUxheWVyKGxheWVySWQsIGJlZm9yZUlkKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldExheWVyWm9vbVJhbmdlKGxheWVySWQ6IHN0cmluZywgbWluWm9vbT86IG51bWJlciwgbWF4Wm9vbT86IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5zZXRMYXllclpvb21SYW5nZShsYXllcklkLCBtaW5ab29tID8gbWluWm9vbSA6IDAsIG1heFpvb20gPyBtYXhab29tIDogMjApO1xuICAgIH0pO1xuICB9XG5cbiAgZml0Qm91bmRzKGJvdW5kczogTWFwYm94R2wuTG5nTGF0Qm91bmRzTGlrZSwgb3B0aW9ucz86IE1hcGJveEdsLkZpdEJvdW5kc09wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2UuZml0Qm91bmRzKGJvdW5kcywgb3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cblxuICBmaXRTY3JlZW5Db29yZGluYXRlcyhcbiAgICBwb2ludHM6IFtNYXBib3hHbC5Qb2ludExpa2UsIE1hcGJveEdsLlBvaW50TGlrZV0sXG4gICAgYmVhcmluZzogbnVtYmVyLFxuICAgIG9wdGlvbnM/OiBNYXBib3hHbC5BbmltYXRpb25PcHRpb25zICYgTWFwYm94R2wuQ2FtZXJhT3B0aW9uc1xuICApIHtcbiAgICByZXR1cm4gdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2UuZml0U2NyZWVuQ29vcmRpbmF0ZXMocG9pbnRzWzBdLCBwb2ludHNbMV0sIGJlYXJpbmcsIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG5cbiAgYXBwbHlDaGFuZ2VzKCkge1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZUxheWVycygpO1xuICAgICAgdGhpcy5yZW1vdmVTb3VyY2VzKCk7XG4gICAgICB0aGlzLnJlbW92ZU1hcmtlcnMoKTtcbiAgICAgIHRoaXMucmVtb3ZlUG9wdXBzKCk7XG4gICAgICB0aGlzLnJlbW92ZUltYWdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVNYXAob3B0aW9uczogTWFwYm94R2wuTWFwYm94T3B0aW9ucykge1xuICAgIE5nWm9uZS5hc3NlcnROb3RJbkFuZ3VsYXJab25lKCk7XG4gICAgT2JqZWN0LmtleXMob3B0aW9ucylcbiAgICAgIC5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB0a2V5ID0gPGtleW9mIE1hcGJveEdsLk1hcGJveE9wdGlvbnM+a2V5O1xuICAgICAgICBpZiAob3B0aW9uc1t0a2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZGVsZXRlIG9wdGlvbnNbdGtleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIHRoaXMubWFwSW5zdGFuY2UgPSBuZXcgTWFwYm94R2wuTWFwKG9wdGlvbnMpO1xuXG4gICAgY29uc3QgaXNJRW9yRWRnZSA9IHdpbmRvdyAmJiAvbXNpZVxcc3x0cmlkZW50XFwvfGVkZ2VcXC8vaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICBpZiAoaXNJRW9yRWRnZSkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5zZXRTdHlsZShvcHRpb25zLnN0eWxlISk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3ViQ2hhbmdlcyA9IHRoaXMuem9uZS5vbk1pY3JvdGFza0VtcHR5XG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuYXBwbHlDaGFuZ2VzKCkpO1xuICAgIGlmICh0aGlzLk1nbFJlc2l6ZUV2ZW50RW1pdHRlcikge1xuICAgICAgY29uc3Qgc3ViUmVzaXplID0gdGhpcy5NZ2xSZXNpemVFdmVudEVtaXR0ZXIucmVzaXplRXZlbnQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5tYXBJbnN0YW5jZS5yZXNpemUoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKHN1YlJlc2l6ZSk7XG4gICAgfVxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChzdWJDaGFuZ2VzKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlTGF5ZXJzKCkge1xuICAgIGZvciAoY29uc3QgbGF5ZXJJZCBvZiB0aGlzLmxheWVySWRzVG9SZW1vdmUpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2UucmVtb3ZlTGF5ZXIobGF5ZXJJZCk7XG4gICAgfVxuICAgIHRoaXMubGF5ZXJJZHNUb1JlbW92ZSA9IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVTb3VyY2VzKCkge1xuICAgIGZvciAoY29uc3Qgc291cmNlSWQgb2YgdGhpcy5zb3VyY2VJZHNUb1JlbW92ZSkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5yZW1vdmVTb3VyY2Uoc291cmNlSWQpO1xuICAgIH1cbiAgICB0aGlzLnNvdXJjZUlkc1RvUmVtb3ZlID0gW107XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZU1hcmtlcnMoKSB7XG4gICAgZm9yIChjb25zdCBtYXJrZXIgb2YgdGhpcy5tYXJrZXJzVG9SZW1vdmUpIHtcbiAgICAgIG1hcmtlci5yZW1vdmUoKTtcbiAgICB9XG4gICAgdGhpcy5tYXJrZXJzVG9SZW1vdmUgPSBbXTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlUG9wdXBzKCkge1xuICAgIGZvciAoY29uc3QgcG9wdXAgb2YgdGhpcy5wb3B1cHNUb1JlbW92ZSkge1xuICAgICAgcG9wdXAucmVtb3ZlKCk7XG4gICAgfVxuICAgIHRoaXMucG9wdXBzVG9SZW1vdmUgPSBbXTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlSW1hZ2VzKCkge1xuICAgIGZvciAoY29uc3QgaW1hZ2VJZCBvZiB0aGlzLmltYWdlSWRzVG9SZW1vdmUpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2UucmVtb3ZlSW1hZ2UoaW1hZ2VJZCk7XG4gICAgfVxuICAgIHRoaXMuaW1hZ2VJZHNUb1JlbW92ZSA9IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBob29rRXZlbnRzKGV2ZW50czogTWFwRXZlbnQpIHtcbiAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCdsb2FkJywgKCkgPT4ge1xuICAgICAgdGhpcy5tYXBMb2FkZWQubmV4dCh1bmRlZmluZWQpO1xuICAgICAgdGhpcy5tYXBMb2FkZWQuY29tcGxldGUoKTtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLmxvYWQuZW1pdCh0aGlzLm1hcEluc3RhbmNlKSk7XG4gICAgfSk7XG4gICAgaWYgKGV2ZW50cy5yZXNpemUub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbigncmVzaXplJywgKCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMucmVzaXplLmVtaXQoKSkpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLnJlbW92ZS5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCdyZW1vdmUnLCAoKSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5yZW1vdmUuZW1pdCgpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMubW91c2VEb3duLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ21vdXNlZG93bicsIChldnQ6IE1hcGJveEdsLk1hcE1vdXNlRXZlbnQpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLm1vdXNlRG93bi5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5tb3VzZVVwLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ21vdXNldXAnLCAoZXZ0OiBNYXBib3hHbC5NYXBNb3VzZUV2ZW50KSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5tb3VzZVVwLmVtaXQoZXZ0KSkpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLm1vdXNlTW92ZS5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCdtb3VzZW1vdmUnLCAoZXZ0OiBNYXBib3hHbC5NYXBNb3VzZUV2ZW50KSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5tb3VzZU1vdmUuZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMuY2xpY2sub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbignY2xpY2snLCAoZXZ0OiBNYXBib3hHbC5NYXBNb3VzZUV2ZW50KSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5jbGljay5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5kYmxDbGljay5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCdkYmxjbGljaycsIChldnQ6IE1hcGJveEdsLk1hcE1vdXNlRXZlbnQpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLmRibENsaWNrLmVtaXQoZXZ0KSkpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLm1vdXNlRW50ZXIub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbignbW91c2VlbnRlcicsIChldnQ6IE1hcGJveEdsLk1hcE1vdXNlRXZlbnQpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLm1vdXNlRW50ZXIuZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMubW91c2VMZWF2ZS5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCdtb3VzZWxlYXZlJywgKGV2dDogTWFwYm94R2wuTWFwTW91c2VFdmVudCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMubW91c2VMZWF2ZS5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5tb3VzZU92ZXIub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbignbW91c2VvdmVyJywgKGV2dDogTWFwYm94R2wuTWFwTW91c2VFdmVudCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMubW91c2VPdmVyLmVtaXQoZXZ0KSkpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLm1vdXNlT3V0Lm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ21vdXNlb3V0JywgKGV2dDogTWFwYm94R2wuTWFwTW91c2VFdmVudCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMubW91c2VPdXQuZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMuY29udGV4dE1lbnUub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbignY29udGV4dG1lbnUnLCAoZXZ0OiBNYXBib3hHbC5NYXBNb3VzZUV2ZW50KSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5jb250ZXh0TWVudS5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy50b3VjaFN0YXJ0Lm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ3RvdWNoc3RhcnQnLCAoZXZ0OiBNYXBib3hHbC5NYXBUb3VjaEV2ZW50KSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy50b3VjaFN0YXJ0LmVtaXQoZXZ0KSkpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLnRvdWNoRW5kLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ3RvdWNoZW5kJywgKGV2dDogTWFwYm94R2wuTWFwVG91Y2hFdmVudCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMudG91Y2hFbmQuZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMudG91Y2hNb3ZlLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ3RvdWNobW92ZScsIChldnQ6IE1hcGJveEdsLk1hcFRvdWNoRXZlbnQpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLnRvdWNoTW92ZS5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy50b3VjaENhbmNlbC5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCd0b3VjaGNhbmNlbCcsIChldnQ6IE1hcGJveEdsLk1hcFRvdWNoRXZlbnQpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLnRvdWNoQ2FuY2VsLmVtaXQoZXZ0KSkpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLndoZWVsLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIC8vIE1hcGJveEdsLk1hcFdoZWVsRXZlbnRcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ3doZWVsJywgKGV2dDogYW55KSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy53aGVlbC5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5tb3ZlU3RhcnQub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbignbW92ZXN0YXJ0JywgKGV2dDogRHJhZ0V2ZW50KSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5tb3ZlU3RhcnQuZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMubW92ZS5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCdtb3ZlJywgKGV2dDogTWFwYm94R2wuTWFwVG91Y2hFdmVudCB8IE1hcGJveEdsLk1hcE1vdXNlRXZlbnQpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLm1vdmUuZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMubW92ZUVuZC5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCdtb3ZlZW5kJywgKGV2dDogRHJhZ0V2ZW50KSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5tb3ZlRW5kLmVtaXQoZXZ0KSkpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLmRyYWdTdGFydC5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCdkcmFnc3RhcnQnLCAoZXZ0OiBEcmFnRXZlbnQpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLmRyYWdTdGFydC5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5kcmFnLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ2RyYWcnLCAoZXZ0OiBNYXBib3hHbC5NYXBUb3VjaEV2ZW50IHwgTWFwYm94R2wuTWFwTW91c2VFdmVudCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMuZHJhZy5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5kcmFnRW5kLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ2RyYWdlbmQnLCAoZXZ0OiBEcmFnRXZlbnQpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLmRyYWdFbmQuZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMuem9vbVN0YXJ0Lm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ3pvb21zdGFydCcsIChldnQ6IE1hcGJveEdsLk1hcFRvdWNoRXZlbnQgfCBNYXBib3hHbC5NYXBNb3VzZUV2ZW50KSA9PiB0aGlzLnpvbmUucnVuKCgpID0+XG4gICAgICAgIGV2ZW50cy56b29tU3RhcnQuZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMuem9vbUV2dC5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCd6b29tJywgKGV2dDogTWFwYm94R2wuTWFwVG91Y2hFdmVudCB8IE1hcGJveEdsLk1hcE1vdXNlRXZlbnQpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLnpvb21FdnQuZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMuem9vbUVuZC5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCd6b29tZW5kJywgKGV2dDogTWFwYm94R2wuTWFwVG91Y2hFdmVudCB8IE1hcGJveEdsLk1hcE1vdXNlRXZlbnQpID0+IHRoaXMuem9uZS5ydW4oKCkgPT5cbiAgICAgICAgZXZlbnRzLnpvb21FbmQuZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMucm90YXRlU3RhcnQub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbigncm90YXRlc3RhcnQnLCAoZXZ0OiBNYXBib3hHbC5NYXBUb3VjaEV2ZW50IHwgTWFwYm94R2wuTWFwTW91c2VFdmVudCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PlxuICAgICAgICBldmVudHMucm90YXRlU3RhcnQuZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMucm90YXRlLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ3JvdGF0ZScsIChldnQ6IE1hcGJveEdsLk1hcFRvdWNoRXZlbnQgfCBNYXBib3hHbC5NYXBNb3VzZUV2ZW50KSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5yb3RhdGUuZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMucm90YXRlRW5kLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ3JvdGF0ZWVuZCcsIChldnQ6IE1hcGJveEdsLk1hcFRvdWNoRXZlbnQgfCBNYXBib3hHbC5NYXBNb3VzZUV2ZW50KSA9PiB0aGlzLnpvbmUucnVuKCgpID0+XG4gICAgICAgIGV2ZW50cy5yb3RhdGVFbmQuZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMucGl0Y2hTdGFydC5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCdwaXRjaHN0YXJ0JywgKGV2dDogTWFwYm94R2wuRXZlbnREYXRhKSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5waXRjaFN0YXJ0LmVtaXQoZXZ0KSkpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLnBpdGNoRXZ0Lm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ3BpdGNoJywgKGV2dDogTWFwYm94R2wuRXZlbnREYXRhKSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5waXRjaEV2dC5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5waXRjaEVuZC5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCdwaXRjaGVuZCcsIChldnQ6IE1hcGJveEdsLkV2ZW50RGF0YSkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMucGl0Y2hFbmQuZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMuYm94Wm9vbVN0YXJ0Lm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ2JveHpvb21zdGFydCcsIChldnQ6IE1hcGJveEdsLk1hcEJveFpvb21FdmVudCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMuYm94Wm9vbVN0YXJ0LmVtaXQoZXZ0KSkpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLmJveFpvb21FbmQub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbignYm94em9vbWVuZCcsIChldnQ6IE1hcGJveEdsLk1hcEJveFpvb21FdmVudCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMuYm94Wm9vbUVuZC5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5ib3hab29tQ2FuY2VsLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ2JveHpvb21jYW5jZWwnLCAoZXZ0OiBNYXBib3hHbC5NYXBCb3hab29tRXZlbnQpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLmJveFpvb21DYW5jZWwuZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMud2ViR2xDb250ZXh0TG9zdC5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCd3ZWJnbGNvbnRleHRsb3N0JywgKCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMud2ViR2xDb250ZXh0TG9zdC5lbWl0KCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy53ZWJHbENvbnRleHRSZXN0b3JlZC5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCd3ZWJnbGNvbnRleHRyZXN0b3JlZCcsICgpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLndlYkdsQ29udGV4dFJlc3RvcmVkLmVtaXQoKSkpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLnJlbmRlci5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCdyZW5kZXInLCAoKSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5yZW5kZXIuZW1pdCgpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMuZXJyb3Iub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbignZXJyb3InLCAoZXZ0OiBNYXBib3hHbC5FcnJvckV2ZW50KSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5lcnJvci5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5kYXRhLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ2RhdGEnLCAoZXZ0OiBNYXBib3hHbC5FdmVudERhdGEpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLmRhdGEuZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMuc3R5bGVEYXRhLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ3N0eWxlZGF0YScsIChldnQ6IE1hcGJveEdsLkV2ZW50RGF0YSkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMuc3R5bGVEYXRhLmVtaXQoZXZ0KSkpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLnNvdXJjZURhdGEub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbignc291cmNlZGF0YScsIChldnQ6IE1hcGJveEdsLkV2ZW50RGF0YSkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMuc291cmNlRGF0YS5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5kYXRhTG9hZGluZy5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCdkYXRhbG9hZGluZycsIChldnQ6IE1hcGJveEdsLkV2ZW50RGF0YSkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMuZGF0YUxvYWRpbmcuZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMuc3R5bGVEYXRhTG9hZGluZy5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCdzdHlsZWRhdGFsb2FkaW5nJywgKGV2dDogTWFwYm94R2wuRXZlbnREYXRhKSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5zdHlsZURhdGFMb2FkaW5nLmVtaXQoZXZ0KSkpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLnNvdXJjZURhdGFMb2FkaW5nLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ3NvdXJjZWRhdGFsb2FkaW5nJywgKGV2dDogTWFwYm94R2wuRXZlbnREYXRhKSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5zb3VyY2VEYXRhTG9hZGluZy5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5zdHlsZUltYWdlTWlzc2luZy5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKDxhbnk+J3N0eWxlaW1hZ2VtaXNzaW5nJywgKGV2dDoge2lkOiBzdHJpbmd9KSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5zdHlsZUltYWdlTWlzc2luZy5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5pZGxlLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ2lkbGUnLCAoKSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5pZGxlLmVtaXQoKSkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRPRE8gbW92ZSB0aGlzIGVsc2V3aGVyZVxuICBwcml2YXRlIGFzc2lnbihvYmo6IGFueSwgcHJvcDogYW55LCB2YWx1ZTogYW55KSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXBhcmFtZXRlci1yZWFzc2lnbm1lbnRcbiAgICAgIHByb3AgPSBwcm9wLnNwbGl0KCcuJyk7XG4gICAgfVxuICAgIGlmIChwcm9wLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IGUgPSBwcm9wLnNoaWZ0KCk7XG4gICAgICB0aGlzLmFzc2lnbihvYmpbZV0gPVxuICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqW2VdKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSdcbiAgICAgICAgICA/IG9ialtlXVxuICAgICAgICAgIDoge30sXG4gICAgICAgIHByb3AsXG4gICAgICAgIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW3Byb3BbMF1dID0gdmFsdWU7XG4gICAgfVxuICB9XG59XG4iXX0=