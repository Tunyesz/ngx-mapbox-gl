import { CommonModule } from '@angular/common';
import { InjectionToken, NgZone, Injectable, Optional, Inject, Component, ChangeDetectionStrategy, Input, ViewChild, Directive, Host, EventEmitter, Output, ViewEncapsulation, forwardRef, ChangeDetectorRef, ContentChild, TemplateRef, NgModule } from '@angular/core';
import * as MapboxGl from 'mapbox-gl';
import { Marker, Popup, Map, AttributionControl, FullscreenControl, GeolocateControl, NavigationControl, ScaleControl } from 'mapbox-gl';
import { __awaiter } from 'tslib';
import { AsyncSubject, Subscription, fromEvent, Subject, ReplaySubject, merge } from 'rxjs';
import { first, switchMap, mapTo, filter, startWith, debounceTime, takeUntil, tap, take } from 'rxjs/operators';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/map/map.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const MAPBOX_API_KEY = new InjectionToken('MapboxApiKey');
/**
 * @abstract
 */
class MglResizeEventEmitter {
}
if (false) {
    /** @type {?} */
    MglResizeEventEmitter.prototype.resizeEvent;
}
/**
 * @record
 */
function SetupMap() { }
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
function SetupLayer() { }
if (false) {
    /** @type {?} */
    SetupLayer.prototype.layerOptions;
    /** @type {?} */
    SetupLayer.prototype.layerEvents;
}
/**
 * @record
 */
function SetupPopup() { }
if (false) {
    /** @type {?} */
    SetupPopup.prototype.popupOptions;
    /** @type {?} */
    SetupPopup.prototype.popupEvents;
}
/**
 * @record
 */
function SetupMarker() { }
if (false) {
    /** @type {?} */
    SetupMarker.prototype.markersOptions;
    /** @type {?} */
    SetupMarker.prototype.markersEvents;
}
class MapService {
    /**
     * @param {?} zone
     * @param {?} MAPBOX_API_KEY
     * @param {?} MglResizeEventEmitter
     */
    constructor(zone, MAPBOX_API_KEY, MglResizeEventEmitter) {
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
    setup(options) {
        // Need onStable to wait for a potential @angular/route transition to end
        this.zone.onStable.pipe(first()).subscribe((/**
         * @return {?}
         */
        () => {
            // Workaround rollup issue
            this.assign(MapboxGl, 'accessToken', options.accessToken || this.MAPBOX_API_KEY);
            if (options.customMapboxApiUrl) {
                this.assign(MapboxGl, 'config.API_URL', options.customMapboxApiUrl);
            }
            this.createMap(options.mapOptions);
            this.hookEvents(options.mapEvents);
            this.mapEvents = options.mapEvents;
            this.mapCreated.next(undefined);
            this.mapCreated.complete();
        }));
    }
    /**
     * @return {?}
     */
    destroyMap() {
        if (this.mapInstance) {
            this.subscription.unsubscribe();
            this.mapInstance.remove();
        }
    }
    /**
     * @param {?} minZoom
     * @return {?}
     */
    updateMinZoom(minZoom) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.mapInstance.setMinZoom(minZoom);
        }));
    }
    /**
     * @param {?} maxZoom
     * @return {?}
     */
    updateMaxZoom(maxZoom) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.mapInstance.setMaxZoom(maxZoom);
        }));
    }
    /**
     * @param {?} status
     * @return {?}
     */
    updateScrollZoom(status) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            status ? this.mapInstance.scrollZoom.enable() : this.mapInstance.scrollZoom.disable();
        }));
    }
    /**
     * @param {?} status
     * @return {?}
     */
    updateDragRotate(status) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            status ? this.mapInstance.dragRotate.enable() : this.mapInstance.dragRotate.disable();
        }));
    }
    /**
     * @param {?} status
     * @return {?}
     */
    updateTouchZoomRotate(status) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            status ? this.mapInstance.touchZoomRotate.enable() : this.mapInstance.touchZoomRotate.disable();
        }));
    }
    /**
     * @param {?} status
     * @return {?}
     */
    updateDoubleClickZoom(status) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            status ? this.mapInstance.doubleClickZoom.enable() : this.mapInstance.doubleClickZoom.disable();
        }));
    }
    /**
     * @param {?} status
     * @return {?}
     */
    updateKeyboard(status) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            status ? this.mapInstance.keyboard.enable() : this.mapInstance.keyboard.disable();
        }));
    }
    /**
     * @param {?} status
     * @return {?}
     */
    updateDragPan(status) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            status ? this.mapInstance.dragPan.enable() : this.mapInstance.dragPan.disable();
        }));
    }
    /**
     * @param {?} status
     * @return {?}
     */
    updateBoxZoom(status) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            status ? this.mapInstance.boxZoom.enable() : this.mapInstance.boxZoom.disable();
        }));
    }
    /**
     * @param {?} style
     * @return {?}
     */
    updateStyle(style) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.mapInstance.setStyle(style);
        }));
    }
    /**
     * @param {?} maxBounds
     * @return {?}
     */
    updateMaxBounds(maxBounds) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.mapInstance.setMaxBounds(maxBounds);
        }));
    }
    /**
     * @param {?} cursor
     * @return {?}
     */
    changeCanvasCursor(cursor) {
        /** @type {?} */
        const canvas = this.mapInstance.getCanvasContainer();
        canvas.style.cursor = cursor;
    }
    /**
     * @param {?=} pointOrBox
     * @param {?=} parameters
     * @return {?}
     */
    queryRenderedFeatures(pointOrBox, parameters) {
        return this.mapInstance.queryRenderedFeatures(pointOrBox, parameters);
    }
    /**
     * @param {?} center
     * @param {?=} options
     * @return {?}
     */
    panTo(center, options) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.mapInstance.panTo(center, options);
        }));
    }
    /**
     * @param {?} movingMethod
     * @param {?=} movingOptions
     * @param {?=} zoom
     * @param {?=} center
     * @param {?=} bearing
     * @param {?=} pitch
     * @return {?}
     */
    move(movingMethod, movingOptions, zoom, center, bearing, pitch) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            ((/** @type {?} */ (this.mapInstance[movingMethod])))(Object.assign({}, movingOptions, { zoom: zoom ? zoom : this.mapInstance.getZoom(), center: center ? center : this.mapInstance.getCenter(), bearing: bearing ? bearing : this.mapInstance.getBearing(), pitch: pitch ? pitch : this.mapInstance.getPitch() }));
        }));
    }
    /**
     * @param {?} layer
     * @param {?} bindEvents
     * @param {?=} before
     * @return {?}
     */
    addLayer(layer, bindEvents, before) {
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            Object.keys(layer.layerOptions)
                .forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => {
                /** @type {?} */
                const tkey = (/** @type {?} */ (key));
                if (layer.layerOptions[tkey] === undefined) {
                    delete layer.layerOptions[tkey];
                }
            }));
            this.mapInstance.addLayer(layer.layerOptions, before);
            if (bindEvents) {
                if (layer.layerEvents.click.observers.length) {
                    this.mapInstance.on('click', layer.layerOptions.id, (/**
                     * @param {?} evt
                     * @return {?}
                     */
                    (evt) => {
                        this.zone.run((/**
                         * @return {?}
                         */
                        () => {
                            layer.layerEvents.click.emit(evt);
                        }));
                    }));
                }
                if (layer.layerEvents.mouseEnter.observers.length) {
                    this.mapInstance.on('mouseenter', layer.layerOptions.id, (/**
                     * @param {?} evt
                     * @return {?}
                     */
                    (evt) => {
                        this.zone.run((/**
                         * @return {?}
                         */
                        () => {
                            layer.layerEvents.mouseEnter.emit(evt);
                        }));
                    }));
                }
                if (layer.layerEvents.mouseLeave.observers.length) {
                    this.mapInstance.on('mouseleave', layer.layerOptions.id, (/**
                     * @param {?} evt
                     * @return {?}
                     */
                    (evt) => {
                        this.zone.run((/**
                         * @return {?}
                         */
                        () => {
                            layer.layerEvents.mouseLeave.emit(evt);
                        }));
                    }));
                }
                if (layer.layerEvents.mouseMove.observers.length) {
                    this.mapInstance.on('mousemove', layer.layerOptions.id, (/**
                     * @param {?} evt
                     * @return {?}
                     */
                    (evt) => {
                        this.zone.run((/**
                         * @return {?}
                         */
                        () => {
                            layer.layerEvents.mouseMove.emit(evt);
                        }));
                    }));
                }
            }
        }));
    }
    /**
     * @param {?} layerId
     * @return {?}
     */
    removeLayer(layerId) {
        this.layerIdsToRemove.push(layerId);
    }
    /**
     * @param {?} marker
     * @return {?}
     */
    addMarker(marker) {
        /** @type {?} */
        const options = {
            offset: marker.markersOptions.offset,
            anchor: marker.markersOptions.anchor,
            draggable: !!marker.markersOptions.draggable
        };
        if (marker.markersOptions.element.childNodes.length > 0) {
            options.element = marker.markersOptions.element;
        }
        /** @type {?} */
        const markerInstance = new Marker(options);
        if (marker.markersEvents.dragStart.observers.length) {
            markerInstance.on('dragstart', (/**
             * @param {?} event
             * @return {?}
             */
            (event) => this.zone.run((/**
             * @return {?}
             */
            () => marker.markersEvents.dragStart.emit(event.target)))));
        }
        if (marker.markersEvents.drag.observers.length) {
            markerInstance.on('drag', (/**
             * @param {?} event
             * @return {?}
             */
            (event) => this.zone.run((/**
             * @return {?}
             */
            () => marker.markersEvents.drag.emit(event.target)))));
        }
        if (marker.markersEvents.dragEnd.observers.length) {
            markerInstance.on('dragend', (/**
             * @param {?} event
             * @return {?}
             */
            (event) => this.zone.run((/**
             * @return {?}
             */
            () => marker.markersEvents.dragEnd.emit(event.target)))));
        }
        /** @type {?} */
        const lngLat = marker.markersOptions.feature ?
            (/** @type {?} */ ((/** @type {?} */ (marker.markersOptions.feature.geometry)).coordinates)) :
            (/** @type {?} */ (marker.markersOptions.lngLat));
        markerInstance.setLngLat(lngLat);
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            markerInstance.addTo(this.mapInstance);
            return markerInstance;
        }));
    }
    /**
     * @param {?} marker
     * @return {?}
     */
    removeMarker(marker) {
        this.markersToRemove.push(marker);
    }
    /**
     * @param {?} popup
     * @param {?} element
     * @return {?}
     */
    createPopup(popup, element) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            Object.keys(popup.popupOptions)
                .forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => ((/** @type {?} */ (popup.popupOptions)))[key] === undefined && delete ((/** @type {?} */ (popup.popupOptions)))[key]));
            /** @type {?} */
            const popupInstance = new Popup(popup.popupOptions);
            popupInstance.setDOMContent(element);
            if (popup.popupEvents.close.observers.length) {
                popupInstance.on('close', (/**
                 * @return {?}
                 */
                () => {
                    this.zone.run((/**
                     * @return {?}
                     */
                    () => {
                        popup.popupEvents.close.emit();
                    }));
                }));
            }
            if (popup.popupEvents.open.observers.length) {
                popupInstance.on('open', (/**
                 * @return {?}
                 */
                () => {
                    this.zone.run((/**
                     * @return {?}
                     */
                    () => {
                        popup.popupEvents.open.emit();
                    }));
                }));
            }
            return popupInstance;
        }));
    }
    /**
     * @param {?} popup
     * @param {?} lngLat
     * @param {?=} skipOpenEvent
     * @return {?}
     */
    addPopupToMap(popup, lngLat, skipOpenEvent = false) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            if (skipOpenEvent && ((/** @type {?} */ (popup)))._listeners) {
                delete ((/** @type {?} */ (popup)))._listeners['open'];
            }
            popup.setLngLat(lngLat);
            popup.addTo(this.mapInstance);
        }));
    }
    /**
     * @param {?} marker
     * @param {?} popup
     * @return {?}
     */
    addPopupToMarker(marker, popup) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            marker.setPopup(popup);
        }));
    }
    /**
     * @param {?} popup
     * @param {?=} skipCloseEvent
     * @return {?}
     */
    removePopupFromMap(popup, skipCloseEvent = false) {
        if (skipCloseEvent && ((/** @type {?} */ (popup)))._listeners) {
            delete ((/** @type {?} */ (popup)))._listeners['close'];
        }
        this.popupsToRemove.push(popup);
    }
    /**
     * @param {?} marker
     * @return {?}
     */
    removePopupFromMarker(marker) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            marker.setPopup(undefined);
        }));
    }
    /**
     * @param {?} control
     * @param {?=} position
     * @return {?}
     */
    addControl(control, position) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.mapInstance.addControl((/** @type {?} */ (control)), position);
        }));
    }
    /**
     * @param {?} control
     * @return {?}
     */
    removeControl(control) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.mapInstance.removeControl((/** @type {?} */ (control)));
        }));
    }
    /**
     * @param {?} imageId
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    loadAndAddImage(imageId, url, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                return new Promise((/**
                 * @param {?} resolve
                 * @param {?} reject
                 * @return {?}
                 */
                (resolve, reject) => {
                    this.mapInstance.loadImage(url, (/**
                     * @param {?} error
                     * @param {?} image
                     * @return {?}
                     */
                    (error, image) => {
                        if (error) {
                            reject(error);
                            return;
                        }
                        this.addImage(imageId, image, options);
                        resolve();
                    }));
                }));
            }));
        });
    }
    /**
     * @param {?} imageId
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    addImage(imageId, data, options) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.mapInstance.addImage(imageId, (/** @type {?} */ (data)), options);
        }));
    }
    /**
     * @param {?} imageId
     * @return {?}
     */
    removeImage(imageId) {
        this.imageIdsToRemove.push(imageId);
    }
    /**
     * @param {?} sourceId
     * @param {?} source
     * @return {?}
     */
    addSource(sourceId, source) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            Object.keys(source)
                .forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => ((/** @type {?} */ (source)))[key] === undefined && delete ((/** @type {?} */ (source)))[key]));
            this.mapInstance.addSource(sourceId, source);
        }));
    }
    /**
     * @template T
     * @param {?} sourceId
     * @return {?}
     */
    getSource(sourceId) {
        return (/** @type {?} */ ((/** @type {?} */ (this.mapInstance.getSource(sourceId)))));
    }
    /**
     * @param {?} sourceId
     * @return {?}
     */
    removeSource(sourceId) {
        this.sourceIdsToRemove.push(sourceId);
    }
    /**
     * @param {?} layerId
     * @param {?} paint
     * @return {?}
     */
    setAllLayerPaintProperty(layerId, paint) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            Object.keys(paint).forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => {
                // TODO Check for perf, setPaintProperty only on changed paint props maybe
                this.mapInstance.setPaintProperty(layerId, key, ((/** @type {?} */ (paint)))[key]);
            }));
        }));
    }
    /**
     * @param {?} layerId
     * @param {?} layout
     * @return {?}
     */
    setAllLayerLayoutProperty(layerId, layout) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            Object.keys(layout).forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => {
                // TODO Check for perf, setPaintProperty only on changed paint props maybe
                this.mapInstance.setLayoutProperty(layerId, key, ((/** @type {?} */ (layout)))[key]);
            }));
        }));
    }
    /**
     * @param {?} layerId
     * @param {?} filter
     * @return {?}
     */
    setLayerFilter(layerId, filter) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.mapInstance.setFilter(layerId, filter);
        }));
    }
    /**
     * @param {?} layerId
     * @param {?} beforeId
     * @return {?}
     */
    setLayerBefore(layerId, beforeId) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.mapInstance.moveLayer(layerId, beforeId);
        }));
    }
    /**
     * @param {?} layerId
     * @param {?=} minZoom
     * @param {?=} maxZoom
     * @return {?}
     */
    setLayerZoomRange(layerId, minZoom, maxZoom) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.mapInstance.setLayerZoomRange(layerId, minZoom ? minZoom : 0, maxZoom ? maxZoom : 20);
        }));
    }
    /**
     * @param {?} bounds
     * @param {?=} options
     * @return {?}
     */
    fitBounds(bounds, options) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.mapInstance.fitBounds(bounds, options);
        }));
    }
    /**
     * @param {?} points
     * @param {?} bearing
     * @param {?=} options
     * @return {?}
     */
    fitScreenCoordinates(points, bearing, options) {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.mapInstance.fitScreenCoordinates(points[0], points[1], bearing, options);
        }));
    }
    /**
     * @return {?}
     */
    applyChanges() {
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.removeLayers();
            this.removeSources();
            this.removeMarkers();
            this.removePopups();
            this.removeImages();
        }));
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    createMap(options) {
        NgZone.assertNotInAngularZone();
        Object.keys(options)
            .forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            /** @type {?} */
            const tkey = (/** @type {?} */ (key));
            if (options[tkey] === undefined) {
                delete options[tkey];
            }
        }));
        this.mapInstance = new Map(options);
        /** @type {?} */
        const isIEorEdge = window && /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);
        if (isIEorEdge) {
            this.mapInstance.setStyle((/** @type {?} */ (options.style)));
        }
        /** @type {?} */
        const subChanges = this.zone.onMicrotaskEmpty
            .subscribe((/**
         * @return {?}
         */
        () => this.applyChanges()));
        if (this.MglResizeEventEmitter) {
            /** @type {?} */
            const subResize = this.MglResizeEventEmitter.resizeEvent.subscribe((/**
             * @return {?}
             */
            () => {
                this.mapInstance.resize();
            }));
            this.subscription.add(subResize);
        }
        this.subscription.add(subChanges);
    }
    /**
     * @private
     * @return {?}
     */
    removeLayers() {
        for (const layerId of this.layerIdsToRemove) {
            this.mapInstance.removeLayer(layerId);
        }
        this.layerIdsToRemove = [];
    }
    /**
     * @private
     * @return {?}
     */
    removeSources() {
        for (const sourceId of this.sourceIdsToRemove) {
            this.mapInstance.removeSource(sourceId);
        }
        this.sourceIdsToRemove = [];
    }
    /**
     * @private
     * @return {?}
     */
    removeMarkers() {
        for (const marker of this.markersToRemove) {
            marker.remove();
        }
        this.markersToRemove = [];
    }
    /**
     * @private
     * @return {?}
     */
    removePopups() {
        for (const popup of this.popupsToRemove) {
            popup.remove();
        }
        this.popupsToRemove = [];
    }
    /**
     * @private
     * @return {?}
     */
    removeImages() {
        for (const imageId of this.imageIdsToRemove) {
            this.mapInstance.removeImage(imageId);
        }
        this.imageIdsToRemove = [];
    }
    /**
     * @private
     * @param {?} events
     * @return {?}
     */
    hookEvents(events) {
        this.mapInstance.on('load', (/**
         * @return {?}
         */
        () => {
            this.mapLoaded.next(undefined);
            this.mapLoaded.complete();
            this.zone.run((/**
             * @return {?}
             */
            () => events.load.emit(this.mapInstance)));
        }));
        if (events.resize.observers.length) {
            this.mapInstance.on('resize', (/**
             * @return {?}
             */
            () => this.zone.run((/**
             * @return {?}
             */
            () => events.resize.emit()))));
        }
        if (events.remove.observers.length) {
            this.mapInstance.on('remove', (/**
             * @return {?}
             */
            () => this.zone.run((/**
             * @return {?}
             */
            () => events.remove.emit()))));
        }
        if (events.mouseDown.observers.length) {
            this.mapInstance.on('mousedown', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.mouseDown.emit(evt)))));
        }
        if (events.mouseUp.observers.length) {
            this.mapInstance.on('mouseup', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.mouseUp.emit(evt)))));
        }
        if (events.mouseMove.observers.length) {
            this.mapInstance.on('mousemove', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.mouseMove.emit(evt)))));
        }
        if (events.click.observers.length) {
            this.mapInstance.on('click', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.click.emit(evt)))));
        }
        if (events.dblClick.observers.length) {
            this.mapInstance.on('dblclick', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.dblClick.emit(evt)))));
        }
        if (events.mouseEnter.observers.length) {
            this.mapInstance.on('mouseenter', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.mouseEnter.emit(evt)))));
        }
        if (events.mouseLeave.observers.length) {
            this.mapInstance.on('mouseleave', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.mouseLeave.emit(evt)))));
        }
        if (events.mouseOver.observers.length) {
            this.mapInstance.on('mouseover', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.mouseOver.emit(evt)))));
        }
        if (events.mouseOut.observers.length) {
            this.mapInstance.on('mouseout', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.mouseOut.emit(evt)))));
        }
        if (events.contextMenu.observers.length) {
            this.mapInstance.on('contextmenu', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.contextMenu.emit(evt)))));
        }
        if (events.touchStart.observers.length) {
            this.mapInstance.on('touchstart', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.touchStart.emit(evt)))));
        }
        if (events.touchEnd.observers.length) {
            this.mapInstance.on('touchend', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.touchEnd.emit(evt)))));
        }
        if (events.touchMove.observers.length) {
            this.mapInstance.on('touchmove', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.touchMove.emit(evt)))));
        }
        if (events.touchCancel.observers.length) {
            this.mapInstance.on('touchcancel', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.touchCancel.emit(evt)))));
        }
        if (events.wheel.observers.length) {
            // MapboxGl.MapWheelEvent
            this.mapInstance.on('wheel', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.wheel.emit(evt)))));
        }
        if (events.moveStart.observers.length) {
            this.mapInstance.on('movestart', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.moveStart.emit(evt)))));
        }
        // if (events.move.observers.length) {
        this.mapInstance.on('move', (/**
         * @param {?} evt
         * @return {?}
         */
        (evt) => this.zone.run((/**
         * @return {?}
         */
        () => events.move.emit(evt)))));
        // }
        if (events.moveEnd.observers.length) {
            this.mapInstance.on('moveend', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.moveEnd.emit(evt)))));
        }
        if (events.dragStart.observers.length) {
            this.mapInstance.on('dragstart', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.dragStart.emit(evt)))));
        }
        if (events.drag.observers.length) {
            this.mapInstance.on('drag', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.drag.emit(evt)))));
        }
        if (events.dragEnd.observers.length) {
            this.mapInstance.on('dragend', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.dragEnd.emit(evt)))));
        }
        if (events.zoomStart.observers.length) {
            this.mapInstance.on('zoomstart', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.zoomStart.emit(evt)))));
        }
        if (events.zoomEvt.observers.length) {
            this.mapInstance.on('zoom', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.zoomEvt.emit(evt)))));
        }
        if (events.zoomEnd.observers.length) {
            this.mapInstance.on('zoomend', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.zoomEnd.emit(evt)))));
        }
        if (events.rotateStart.observers.length) {
            this.mapInstance.on('rotatestart', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.rotateStart.emit(evt)))));
        }
        if (events.rotate.observers.length) {
            this.mapInstance.on('rotate', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.rotate.emit(evt)))));
        }
        if (events.rotateEnd.observers.length) {
            this.mapInstance.on('rotateend', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.rotateEnd.emit(evt)))));
        }
        if (events.pitchStart.observers.length) {
            this.mapInstance.on('pitchstart', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.pitchStart.emit(evt)))));
        }
        if (events.pitchEvt.observers.length) {
            this.mapInstance.on('pitch', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.pitchEvt.emit(evt)))));
        }
        if (events.pitchEnd.observers.length) {
            this.mapInstance.on('pitchend', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.pitchEnd.emit(evt)))));
        }
        if (events.boxZoomStart.observers.length) {
            this.mapInstance.on('boxzoomstart', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.boxZoomStart.emit(evt)))));
        }
        if (events.boxZoomEnd.observers.length) {
            this.mapInstance.on('boxzoomend', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.boxZoomEnd.emit(evt)))));
        }
        if (events.boxZoomCancel.observers.length) {
            this.mapInstance.on('boxzoomcancel', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.boxZoomCancel.emit(evt)))));
        }
        if (events.webGlContextLost.observers.length) {
            this.mapInstance.on('webglcontextlost', (/**
             * @return {?}
             */
            () => this.zone.run((/**
             * @return {?}
             */
            () => events.webGlContextLost.emit()))));
        }
        if (events.webGlContextRestored.observers.length) {
            this.mapInstance.on('webglcontextrestored', (/**
             * @return {?}
             */
            () => this.zone.run((/**
             * @return {?}
             */
            () => events.webGlContextRestored.emit()))));
        }
        if (events.render.observers.length) {
            this.mapInstance.on('render', (/**
             * @return {?}
             */
            () => this.zone.run((/**
             * @return {?}
             */
            () => events.render.emit()))));
        }
        if (events.error.observers.length) {
            this.mapInstance.on('error', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.error.emit(evt)))));
        }
        if (events.data.observers.length) {
            this.mapInstance.on('data', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.data.emit(evt)))));
        }
        if (events.styleData.observers.length) {
            this.mapInstance.on('styledata', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.styleData.emit(evt)))));
        }
        if (events.sourceData.observers.length) {
            this.mapInstance.on('sourcedata', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.sourceData.emit(evt)))));
        }
        if (events.dataLoading.observers.length) {
            this.mapInstance.on('dataloading', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.dataLoading.emit(evt)))));
        }
        if (events.styleDataLoading.observers.length) {
            this.mapInstance.on('styledataloading', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.styleDataLoading.emit(evt)))));
        }
        if (events.sourceDataLoading.observers.length) {
            this.mapInstance.on('sourcedataloading', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.sourceDataLoading.emit(evt)))));
        }
        if (events.styleImageMissing.observers.length) {
            this.mapInstance.on((/** @type {?} */ ('styleimagemissing')), (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.styleImageMissing.emit(evt)))));
        }
        if (events.idle.observers.length) {
            this.mapInstance.on('idle', (/**
             * @return {?}
             */
            () => this.zone.run((/**
             * @return {?}
             */
            () => events.idle.emit()))));
        }
    }
    // TODO move this elsewhere
    /**
     * @private
     * @param {?} obj
     * @param {?} prop
     * @param {?} value
     * @return {?}
     */
    assign(obj, prop, value) {
        if (typeof prop === 'string') {
            // tslint:disable-next-line:no-parameter-reassignment
            prop = prop.split('.');
        }
        if (prop.length > 1) {
            /** @type {?} */
            const e = prop.shift();
            this.assign(obj[e] =
                Object.prototype.toString.call(obj[e]) === '[object Object]'
                    ? obj[e]
                    : {}, prop, value);
        }
        else {
            obj[prop[0]] = value;
        }
    }
}
MapService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
MapService.ctorParameters = () => [
    { type: NgZone },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [MAPBOX_API_KEY,] }] },
    { type: MglResizeEventEmitter, decorators: [{ type: Optional }] }
];
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/control/control.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomControl {
    /**
     * @param {?} container
     */
    constructor(container) {
        this.container = container;
    }
    /**
     * @return {?}
     */
    onAdd() {
        return this.container;
    }
    /**
     * @return {?}
     */
    onRemove() {
        return (/** @type {?} */ (this.container.parentNode)).removeChild(this.container);
    }
    /**
     * @return {?}
     */
    getDefaultPosition() {
        return 'top-right';
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomControl.prototype.container;
}
class ControlComponent {
    /**
     * @param {?} MapService
     */
    constructor(MapService) {
        this.MapService = MapService;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.content.nativeElement.childNodes.length) {
            this.control = new CustomControl(this.content.nativeElement);
            this.MapService.mapCreated$.subscribe((/**
             * @return {?}
             */
            () => {
                this.MapService.addControl((/** @type {?} */ (this.control)), this.position);
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.control) {
            this.MapService.removeControl(this.control);
        }
    }
}
ControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'mgl-control',
                template: '<div class="mapboxgl-ctrl" #content><ng-content></ng-content></div>',
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ControlComponent.ctorParameters = () => [
    { type: MapService }
];
ControlComponent.propDecorators = {
    position: [{ type: Input }],
    content: [{ type: ViewChild, args: ['content', { static: true },] }]
};
if (false) {
    /** @type {?} */
    ControlComponent.prototype.position;
    /** @type {?} */
    ControlComponent.prototype.content;
    /** @type {?} */
    ControlComponent.prototype.control;
    /**
     * @type {?}
     * @private
     */
    ControlComponent.prototype.MapService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/control/attribution-control.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AttributionControlDirective {
    /**
     * @param {?} MapService
     * @param {?} ControlComponent
     */
    constructor(MapService, ControlComponent) {
        this.MapService = MapService;
        this.ControlComponent = ControlComponent;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.MapService.mapCreated$.subscribe((/**
         * @return {?}
         */
        () => {
            if (this.ControlComponent.control) {
                throw new Error('Another control is already set for this control');
            }
            /** @type {?} */
            const options = {};
            if (this.compact !== undefined) {
                options.compact = this.compact;
            }
            if (this.customAttribution !== undefined) {
                options.customAttribution = this.customAttribution;
            }
            this.ControlComponent.control = new AttributionControl(options);
            this.MapService.addControl(this.ControlComponent.control, this.ControlComponent.position);
        }));
    }
}
AttributionControlDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mglAttribution]'
            },] }
];
/** @nocollapse */
AttributionControlDirective.ctorParameters = () => [
    { type: MapService },
    { type: ControlComponent, decorators: [{ type: Host }] }
];
AttributionControlDirective.propDecorators = {
    compact: [{ type: Input }],
    customAttribution: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AttributionControlDirective.prototype.compact;
    /** @type {?} */
    AttributionControlDirective.prototype.customAttribution;
    /**
     * @type {?}
     * @private
     */
    AttributionControlDirective.prototype.MapService;
    /**
     * @type {?}
     * @private
     */
    AttributionControlDirective.prototype.ControlComponent;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/control/fullscreen-control.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FullscreenControlDirective {
    /**
     * @param {?} MapService
     * @param {?} ControlComponent
     */
    constructor(MapService, ControlComponent) {
        this.MapService = MapService;
        this.ControlComponent = ControlComponent;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.MapService.mapCreated$.subscribe((/**
         * @return {?}
         */
        () => {
            if (this.ControlComponent.control) {
                throw new Error('Another control is already set for this control');
            }
            this.ControlComponent.control = new FullscreenControl({ container: this.container });
            this.MapService.addControl(this.ControlComponent.control, this.ControlComponent.position);
        }));
    }
}
FullscreenControlDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mglFullscreen]'
            },] }
];
/** @nocollapse */
FullscreenControlDirective.ctorParameters = () => [
    { type: MapService },
    { type: ControlComponent, decorators: [{ type: Host }] }
];
FullscreenControlDirective.propDecorators = {
    container: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FullscreenControlDirective.prototype.container;
    /**
     * @type {?}
     * @private
     */
    FullscreenControlDirective.prototype.MapService;
    /**
     * @type {?}
     * @private
     */
    FullscreenControlDirective.prototype.ControlComponent;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/control/geocoder-control.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const MAPBOX_GEOCODER_API_KEY = new InjectionToken('MapboxApiKey');
/**
 * @record
 */
function LngLatLiteral() { }
if (false) {
    /** @type {?} */
    LngLatLiteral.prototype.latitude;
    /** @type {?} */
    LngLatLiteral.prototype.longitude;
}
/**
 * @record
 */
function Results() { }
if (false) {
    /** @type {?} */
    Results.prototype.attribution;
    /** @type {?} */
    Results.prototype.query;
}
/**
 * @record
 */
function Result() { }
if (false) {
    /** @type {?} */
    Result.prototype.bbox;
    /** @type {?} */
    Result.prototype.center;
    /** @type {?} */
    Result.prototype.place_name;
    /** @type {?} */
    Result.prototype.place_type;
    /** @type {?} */
    Result.prototype.relevance;
    /** @type {?} */
    Result.prototype.text;
    /** @type {?} */
    Result.prototype.address;
    /** @type {?} */
    Result.prototype.context;
}
class GeocoderControlDirective {
    /**
     * @param {?} MapService
     * @param {?} zone
     * @param {?} ControlComponent
     * @param {?} MAPBOX_GEOCODER_API_KEY
     */
    constructor(MapService, zone, ControlComponent, MAPBOX_GEOCODER_API_KEY) {
        this.MapService = MapService;
        this.zone = zone;
        this.ControlComponent = ControlComponent;
        this.MAPBOX_GEOCODER_API_KEY = MAPBOX_GEOCODER_API_KEY;
        this.clear = new EventEmitter();
        this.loading = new EventEmitter();
        this.results = new EventEmitter();
        this.result = new EventEmitter();
        this.error = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.MapService.mapCreated$.subscribe((/**
         * @return {?}
         */
        () => {
            if (this.ControlComponent.control) {
                throw new Error('Another control is already set for this control');
            }
            /** @type {?} */
            const options = {
                proximity: this.proximity,
                countries: this.countries,
                placeholder: this.placeholder,
                zoom: this.zoom,
                bbox: this.bbox,
                types: this.types,
                flyTo: this.flyTo,
                minLength: this.minLength,
                limit: this.limit,
                language: this.language,
                filter: this.filter,
                localGeocoder: this.localGeocoder,
                accessToken: this.accessToken || this.MAPBOX_GEOCODER_API_KEY
            };
            Object.keys(options).forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => {
                /** @type {?} */
                const tkey = (/** @type {?} */ (key));
                if (options[tkey] === undefined) {
                    delete options[tkey];
                }
            }));
            this.geocoder = new MapboxGeocoder(options);
            this.hookEvents(this);
            this.addControl();
        }));
        if (this.searchInput) {
            this.MapService.mapLoaded$.subscribe((/**
             * @return {?}
             */
            () => {
                this.geocoder.query(this.searchInput);
            }));
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this.geocoder) {
            return;
        }
        if (changes.proximity && !changes.proximity.isFirstChange()) {
            this.geocoder.setProximity(changes.proximity.currentValue);
        }
        if (changes.searchInput) {
            this.geocoder.query(this.searchInput);
        }
    }
    /**
     * @private
     * @return {?}
     */
    addControl() {
        this.ControlComponent.control = this.geocoder;
        this.MapService.addControl(this.ControlComponent.control, this.ControlComponent.position);
    }
    /**
     * @private
     * @param {?} events
     * @return {?}
     */
    hookEvents(events) {
        if (events.results.observers.length) {
            this.geocoder.on('results', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.results.emit(evt)))));
        }
        if (events.result.observers.length) {
            this.geocoder.on('result', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => {
                // Workaroud issue https://github.com/mapbox/mapbox-gl-geocoder/issues/99
                if (this.lastResultId !== evt.result.id) {
                    this.lastResultId = evt.result.id;
                    this.zone.run((/**
                     * @return {?}
                     */
                    () => events.result.emit(evt)));
                }
            }));
        }
        if (events.error.observers.length) {
            this.geocoder.on('error', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.error.emit(evt)))));
        }
        if (events.loading.observers.length) {
            this.geocoder.on('loading', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.loading.emit(evt)))));
        }
        if (events.clear.observers.length) {
            this.geocoder.on('clear', (/**
             * @return {?}
             */
            () => this.zone.run((/**
             * @return {?}
             */
            () => events.clear.emit()))));
        }
    }
}
GeocoderControlDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mglGeocoder]'
            },] }
];
/** @nocollapse */
GeocoderControlDirective.ctorParameters = () => [
    { type: MapService },
    { type: NgZone },
    { type: ControlComponent, decorators: [{ type: Host }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [MAPBOX_GEOCODER_API_KEY,] }] }
];
GeocoderControlDirective.propDecorators = {
    countries: [{ type: Input }],
    placeholder: [{ type: Input }],
    zoom: [{ type: Input }],
    bbox: [{ type: Input }],
    types: [{ type: Input }],
    flyTo: [{ type: Input }],
    minLength: [{ type: Input }],
    limit: [{ type: Input }],
    language: [{ type: Input }],
    accessToken: [{ type: Input }],
    filter: [{ type: Input }],
    localGeocoder: [{ type: Input }],
    proximity: [{ type: Input }],
    searchInput: [{ type: Input }],
    clear: [{ type: Output }],
    loading: [{ type: Output }],
    results: [{ type: Output }],
    result: [{ type: Output }],
    error: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    GeocoderControlDirective.prototype.countries;
    /** @type {?} */
    GeocoderControlDirective.prototype.placeholder;
    /** @type {?} */
    GeocoderControlDirective.prototype.zoom;
    /** @type {?} */
    GeocoderControlDirective.prototype.bbox;
    /** @type {?} */
    GeocoderControlDirective.prototype.types;
    /** @type {?} */
    GeocoderControlDirective.prototype.flyTo;
    /** @type {?} */
    GeocoderControlDirective.prototype.minLength;
    /** @type {?} */
    GeocoderControlDirective.prototype.limit;
    /** @type {?} */
    GeocoderControlDirective.prototype.language;
    /** @type {?} */
    GeocoderControlDirective.prototype.accessToken;
    /** @type {?} */
    GeocoderControlDirective.prototype.filter;
    /** @type {?} */
    GeocoderControlDirective.prototype.localGeocoder;
    /** @type {?} */
    GeocoderControlDirective.prototype.proximity;
    /** @type {?} */
    GeocoderControlDirective.prototype.searchInput;
    /** @type {?} */
    GeocoderControlDirective.prototype.clear;
    /** @type {?} */
    GeocoderControlDirective.prototype.loading;
    /** @type {?} */
    GeocoderControlDirective.prototype.results;
    /** @type {?} */
    GeocoderControlDirective.prototype.result;
    /** @type {?} */
    GeocoderControlDirective.prototype.error;
    /** @type {?} */
    GeocoderControlDirective.prototype.geocoder;
    /**
     * @type {?}
     * @private
     */
    GeocoderControlDirective.prototype.lastResultId;
    /**
     * @type {?}
     * @private
     */
    GeocoderControlDirective.prototype.MapService;
    /**
     * @type {?}
     * @private
     */
    GeocoderControlDirective.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    GeocoderControlDirective.prototype.ControlComponent;
    /**
     * @type {?}
     * @private
     */
    GeocoderControlDirective.prototype.MAPBOX_GEOCODER_API_KEY;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/control/geolocate-control.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GeolocateControlDirective {
    /**
     * @param {?} MapService
     * @param {?} ControlComponent
     */
    constructor(MapService, ControlComponent) {
        this.MapService = MapService;
        this.ControlComponent = ControlComponent;
        this.geolocate = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.MapService.mapCreated$.subscribe((/**
         * @return {?}
         */
        () => {
            if (this.ControlComponent.control) {
                throw new Error('Another control is already set for this control');
            }
            /** @type {?} */
            const options = {
                positionOptions: this.positionOptions,
                fitBoundsOptions: this.fitBoundsOptions,
                trackUserLocation: this.trackUserLocation,
                showUserLocation: this.showUserLocation
            };
            Object.keys(options)
                .forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => {
                /** @type {?} */
                const tkey = (/** @type {?} */ (key));
                if (options[tkey] === undefined) {
                    delete options[tkey];
                }
            }));
            this.ControlComponent.control = new GeolocateControl(options);
            this.ControlComponent.control.on('geolocate', (/**
             * @param {?} data
             * @return {?}
             */
            (data) => this.geolocate.emit(data)));
            this.MapService.addControl(this.ControlComponent.control, this.ControlComponent.position);
        }));
    }
}
GeolocateControlDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mglGeolocate]'
            },] }
];
/** @nocollapse */
GeolocateControlDirective.ctorParameters = () => [
    { type: MapService },
    { type: ControlComponent, decorators: [{ type: Host }] }
];
GeolocateControlDirective.propDecorators = {
    positionOptions: [{ type: Input }],
    fitBoundsOptions: [{ type: Input }],
    trackUserLocation: [{ type: Input }],
    showUserLocation: [{ type: Input }],
    geolocate: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    GeolocateControlDirective.prototype.positionOptions;
    /** @type {?} */
    GeolocateControlDirective.prototype.fitBoundsOptions;
    /** @type {?} */
    GeolocateControlDirective.prototype.trackUserLocation;
    /** @type {?} */
    GeolocateControlDirective.prototype.showUserLocation;
    /** @type {?} */
    GeolocateControlDirective.prototype.geolocate;
    /**
     * @type {?}
     * @private
     */
    GeolocateControlDirective.prototype.MapService;
    /**
     * @type {?}
     * @private
     */
    GeolocateControlDirective.prototype.ControlComponent;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/control/navigation-control.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavigationControlDirective {
    /**
     * @param {?} MapService
     * @param {?} ControlComponent
     */
    constructor(MapService, ControlComponent) {
        this.MapService = MapService;
        this.ControlComponent = ControlComponent;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.MapService.mapCreated$.subscribe((/**
         * @return {?}
         */
        () => {
            if (this.ControlComponent.control) {
                throw new Error('Another control is already set for this control');
            }
            /** @type {?} */
            const options = {};
            if (this.showCompass !== undefined) {
                options.showCompass = this.showCompass;
            }
            if (this.showZoom !== undefined) {
                options.showZoom = this.showZoom;
            }
            this.ControlComponent.control = new NavigationControl(options);
            this.MapService.addControl(this.ControlComponent.control, this.ControlComponent.position);
        }));
    }
}
NavigationControlDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mglNavigation]'
            },] }
];
/** @nocollapse */
NavigationControlDirective.ctorParameters = () => [
    { type: MapService },
    { type: ControlComponent, decorators: [{ type: Host }] }
];
NavigationControlDirective.propDecorators = {
    showCompass: [{ type: Input }],
    showZoom: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NavigationControlDirective.prototype.showCompass;
    /** @type {?} */
    NavigationControlDirective.prototype.showZoom;
    /**
     * @type {?}
     * @private
     */
    NavigationControlDirective.prototype.MapService;
    /**
     * @type {?}
     * @private
     */
    NavigationControlDirective.prototype.ControlComponent;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/control/scale-control.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ScaleControlDirective {
    /**
     * @param {?} MapService
     * @param {?} ControlComponent
     */
    constructor(MapService, ControlComponent) {
        this.MapService = MapService;
        this.ControlComponent = ControlComponent;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.unit && !changes.unit.isFirstChange()) {
            ((/** @type {?} */ (this.ControlComponent.control))).setUnit(changes.unit.currentValue);
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.MapService.mapCreated$.subscribe((/**
         * @return {?}
         */
        () => {
            if (this.ControlComponent.control) {
                throw new Error('Another control is already set for this control');
            }
            /** @type {?} */
            const options = {};
            if (this.maxWidth !== undefined) {
                options.maxWidth = this.maxWidth;
            }
            if (this.unit !== undefined) {
                options.unit = this.unit;
            }
            this.ControlComponent.control = new ScaleControl(options);
            this.MapService.addControl(this.ControlComponent.control, this.ControlComponent.position);
        }));
    }
}
ScaleControlDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mglScale]'
            },] }
];
/** @nocollapse */
ScaleControlDirective.ctorParameters = () => [
    { type: MapService },
    { type: ControlComponent, decorators: [{ type: Host }] }
];
ScaleControlDirective.propDecorators = {
    maxWidth: [{ type: Input }],
    unit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ScaleControlDirective.prototype.maxWidth;
    /** @type {?} */
    ScaleControlDirective.prototype.unit;
    /**
     * @type {?}
     * @private
     */
    ScaleControlDirective.prototype.MapService;
    /**
     * @type {?}
     * @private
     */
    ScaleControlDirective.prototype.ControlComponent;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/layer/layer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LayerComponent {
    /**
     * @param {?} MapService
     */
    constructor(MapService) {
        this.MapService = MapService;
        this.click = new EventEmitter();
        this.mouseEnter = new EventEmitter();
        this.mouseLeave = new EventEmitter();
        this.mouseMove = new EventEmitter();
        this.layerAdded = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.sub = this.MapService.mapLoaded$.pipe(switchMap((/**
         * @return {?}
         */
        () => fromEvent((/** @type {?} */ (this.MapService.mapInstance)), 'styledata').pipe(mapTo(false), filter((/**
         * @return {?}
         */
        () => !this.MapService.mapInstance.getLayer(this.id))), startWith(true))))).subscribe((/**
         * @param {?} bindEvents
         * @return {?}
         */
        (bindEvents) => this.init(bindEvents)));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this.layerAdded) {
            return;
        }
        if (changes.paint && !changes.paint.isFirstChange()) {
            this.MapService.setAllLayerPaintProperty(this.id, (/** @type {?} */ (changes.paint.currentValue)));
        }
        if (changes.layout && !changes.layout.isFirstChange()) {
            this.MapService.setAllLayerLayoutProperty(this.id, (/** @type {?} */ (changes.layout.currentValue)));
        }
        if (changes.filter && !changes.filter.isFirstChange()) {
            this.MapService.setLayerFilter(this.id, (/** @type {?} */ (changes.filter.currentValue)));
        }
        if (changes.before && !changes.before.isFirstChange()) {
            this.MapService.setLayerBefore(this.id, (/** @type {?} */ (changes.before.currentValue)));
        }
        if (changes.minzoom && !changes.minzoom.isFirstChange() ||
            changes.maxzoom && !changes.maxzoom.isFirstChange()) {
            this.MapService.setLayerZoomRange(this.id, this.minzoom, this.maxzoom);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.layerAdded) {
            this.MapService.removeLayer(this.id);
        }
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
    /**
     * @private
     * @param {?} bindEvents
     * @return {?}
     */
    init(bindEvents) {
        /** @type {?} */
        const layer = {
            layerOptions: {
                id: this.id,
                type: this.type,
                source: this.source,
                metadata: this.metadata,
                'source-layer': this.sourceLayer,
                minzoom: this.minzoom,
                maxzoom: this.maxzoom,
                filter: this.filter,
                layout: this.layout,
                paint: this.paint
            },
            layerEvents: {
                click: this.click,
                mouseEnter: this.mouseEnter,
                mouseLeave: this.mouseLeave,
                mouseMove: this.mouseMove
            }
        };
        this.MapService.addLayer(layer, bindEvents, this.before);
        this.layerAdded = true;
    }
}
LayerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mgl-layer',
                template: ''
            }] }
];
/** @nocollapse */
LayerComponent.ctorParameters = () => [
    { type: MapService }
];
LayerComponent.propDecorators = {
    id: [{ type: Input }],
    source: [{ type: Input }],
    type: [{ type: Input }],
    metadata: [{ type: Input }],
    sourceLayer: [{ type: Input }],
    filter: [{ type: Input }],
    layout: [{ type: Input }],
    paint: [{ type: Input }],
    before: [{ type: Input }],
    minzoom: [{ type: Input }],
    maxzoom: [{ type: Input }],
    click: [{ type: Output }],
    mouseEnter: [{ type: Output }],
    mouseLeave: [{ type: Output }],
    mouseMove: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    LayerComponent.prototype.id;
    /** @type {?} */
    LayerComponent.prototype.source;
    /** @type {?} */
    LayerComponent.prototype.type;
    /** @type {?} */
    LayerComponent.prototype.metadata;
    /** @type {?} */
    LayerComponent.prototype.sourceLayer;
    /** @type {?} */
    LayerComponent.prototype.filter;
    /** @type {?} */
    LayerComponent.prototype.layout;
    /** @type {?} */
    LayerComponent.prototype.paint;
    /** @type {?} */
    LayerComponent.prototype.before;
    /** @type {?} */
    LayerComponent.prototype.minzoom;
    /** @type {?} */
    LayerComponent.prototype.maxzoom;
    /** @type {?} */
    LayerComponent.prototype.click;
    /** @type {?} */
    LayerComponent.prototype.mouseEnter;
    /** @type {?} */
    LayerComponent.prototype.mouseLeave;
    /** @type {?} */
    LayerComponent.prototype.mouseMove;
    /**
     * @type {?}
     * @private
     */
    LayerComponent.prototype.layerAdded;
    /**
     * @type {?}
     * @private
     */
    LayerComponent.prototype.sub;
    /**
     * @type {?}
     * @private
     */
    LayerComponent.prototype.MapService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/marker/marker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MarkerComponent {
    /**
     * @param {?} MapService
     */
    constructor(MapService) {
        this.MapService = MapService;
        this.dragStart = new EventEmitter();
        this.drag = new EventEmitter();
        this.dragEnd = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.feature && this.lngLat) {
            throw new Error('feature and lngLat input are mutually exclusive');
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.lngLat && !changes.lngLat.isFirstChange()) {
            (/** @type {?} */ (this.markerInstance)).setLngLat((/** @type {?} */ (this.lngLat)));
        }
        if (changes.feature && !changes.feature.isFirstChange()) {
            (/** @type {?} */ (this.markerInstance)).setLngLat((/** @type {?} */ ((/** @type {?} */ ((/** @type {?} */ (this.feature)).geometry)).coordinates)));
        }
        if (changes.draggable && !changes.draggable.isFirstChange()) {
            (/** @type {?} */ (this.markerInstance)).setDraggable(!!this.draggable);
        }
        if (changes.popupShown && !changes.popupShown.isFirstChange()) {
            changes.popupShown.currentValue
                ? (/** @type {?} */ (this.markerInstance)).getPopup().addTo(this.MapService.mapInstance)
                : (/** @type {?} */ (this.markerInstance)).getPopup().remove();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.MapService.mapCreated$.subscribe((/**
         * @return {?}
         */
        () => {
            this.markerInstance = this.MapService.addMarker({
                markersOptions: {
                    offset: this.offset,
                    anchor: this.anchor,
                    draggable: !!this.draggable,
                    element: this.content.nativeElement,
                    feature: this.feature,
                    lngLat: this.lngLat
                },
                markersEvents: {
                    dragStart: this.dragStart,
                    drag: this.drag,
                    dragEnd: this.dragEnd
                }
            });
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.MapService.removeMarker((/** @type {?} */ (this.markerInstance)));
        this.markerInstance = undefined;
    }
    /**
     * @return {?}
     */
    togglePopup() {
        (/** @type {?} */ (this.markerInstance)).togglePopup();
    }
    /**
     * @param {?} coordinates
     * @return {?}
     */
    updateCoordinates(coordinates) {
        (/** @type {?} */ (this.markerInstance)).setLngLat((/** @type {?} */ (coordinates)));
    }
}
MarkerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mgl-marker',
                template: '<div [class]="className" #content><ng-content></ng-content></div>',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
MarkerComponent.ctorParameters = () => [
    { type: MapService }
];
MarkerComponent.propDecorators = {
    offset: [{ type: Input }],
    anchor: [{ type: Input }],
    feature: [{ type: Input }],
    lngLat: [{ type: Input }],
    draggable: [{ type: Input }],
    popupShown: [{ type: Input }],
    className: [{ type: Input }],
    dragStart: [{ type: Output }],
    drag: [{ type: Output }],
    dragEnd: [{ type: Output }],
    content: [{ type: ViewChild, args: ['content', { static: true },] }]
};
if (false) {
    /** @type {?} */
    MarkerComponent.prototype.offset;
    /** @type {?} */
    MarkerComponent.prototype.anchor;
    /** @type {?} */
    MarkerComponent.prototype.feature;
    /** @type {?} */
    MarkerComponent.prototype.lngLat;
    /** @type {?} */
    MarkerComponent.prototype.draggable;
    /** @type {?} */
    MarkerComponent.prototype.popupShown;
    /** @type {?} */
    MarkerComponent.prototype.className;
    /** @type {?} */
    MarkerComponent.prototype.dragStart;
    /** @type {?} */
    MarkerComponent.prototype.drag;
    /** @type {?} */
    MarkerComponent.prototype.dragEnd;
    /** @type {?} */
    MarkerComponent.prototype.content;
    /** @type {?} */
    MarkerComponent.prototype.markerInstance;
    /**
     * @type {?}
     * @private
     */
    MarkerComponent.prototype.MapService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/source/geojson/geojson-source.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GeoJSONSourceComponent {
    /**
     * @param {?} MapService
     * @param {?} zone
     */
    constructor(MapService, zone) {
        this.MapService = MapService;
        this.zone = zone;
        this.updateFeatureData = new Subject();
        this.sub = new Subscription();
        this.sourceAdded = false;
        this.featureIdCounter = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.data) {
            this.data = {
                type: 'FeatureCollection',
                features: []
            };
        }
        this.MapService.mapLoaded$.subscribe((/**
         * @return {?}
         */
        () => {
            this.init();
            /** @type {?} */
            const sub = fromEvent((/** @type {?} */ (this.MapService.mapInstance)), 'styledata').pipe(filter((/**
             * @return {?}
             */
            () => !this.MapService.mapInstance.getSource(this.id)))).subscribe((/**
             * @return {?}
             */
            () => {
                this.init();
            }));
            this.sub.add(sub);
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this.sourceAdded) {
            return;
        }
        if (changes.maxzoom && !changes.maxzoom.isFirstChange() ||
            changes.minzoom && !changes.minzoom.isFirstChange() ||
            changes.buffer && !changes.buffer.isFirstChange() ||
            changes.tolerance && !changes.tolerance.isFirstChange() ||
            changes.cluster && !changes.cluster.isFirstChange() ||
            changes.clusterRadius && !changes.clusterRadius.isFirstChange() ||
            changes.clusterMaxZoom && !changes.clusterMaxZoom.isFirstChange() ||
            changes.clusterProperties && !changes.clusterProperties.isFirstChange()) {
            this.ngOnDestroy();
            this.ngOnInit();
        }
        if (changes.data && !changes.data.isFirstChange()) {
            /** @type {?} */
            const source = this.MapService.getSource(this.id);
            source.setData((/** @type {?} */ (this.data)));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.sub.unsubscribe();
        if (this.sourceAdded) {
            this.MapService.removeSource(this.id);
        }
    }
    /**
     * For clustered sources, fetches the zoom at which the given cluster expands.
     * @param {?} clusterId The value of the cluster's cluster_id property.
     * @return {?}
     */
    getClusterExpansionZoom(clusterId) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const source = this.MapService.getSource(this.id);
            return this.zone.run((/**
             * @return {?}
             */
            () => __awaiter(this, void 0, void 0, function* () {
                return new Promise((/**
                 * @param {?} resolve
                 * @param {?} reject
                 * @return {?}
                 */
                (resolve, reject) => {
                    source.getClusterExpansionZoom(clusterId, (/**
                     * @param {?} error
                     * @param {?} zoom
                     * @return {?}
                     */
                    (error, zoom) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            resolve(zoom);
                        }
                    }));
                }));
            })));
        });
    }
    /**
     * For clustered sources, fetches the children of the given cluster on the next zoom level (as an array of GeoJSON features).
     * @param {?} clusterId The value of the cluster's cluster_id property.
     * @return {?}
     */
    getClusterChildren(clusterId) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const source = this.MapService.getSource(this.id);
            return this.zone.run((/**
             * @return {?}
             */
            () => __awaiter(this, void 0, void 0, function* () {
                return new Promise((/**
                 * @param {?} resolve
                 * @param {?} reject
                 * @return {?}
                 */
                (resolve, reject) => {
                    source.getClusterChildren(clusterId, (/**
                     * @param {?} error
                     * @param {?} features
                     * @return {?}
                     */
                    (error, features) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            resolve(features);
                        }
                    }));
                }));
            })));
        });
    }
    /**
     * For clustered sources, fetches the original points that belong to the cluster (as an array of GeoJSON features).
     * @param {?} clusterId The value of the cluster's cluster_id property.
     * @param {?} limit The maximum number of features to return.
     * @param {?} offset The number of features to skip (e.g. for pagination).
     * @return {?}
     */
    getClusterLeaves(clusterId, limit, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const source = this.MapService.getSource(this.id);
            return this.zone.run((/**
             * @return {?}
             */
            () => __awaiter(this, void 0, void 0, function* () {
                return new Promise((/**
                 * @param {?} resolve
                 * @param {?} reject
                 * @return {?}
                 */
                (resolve, reject) => {
                    source.getClusterLeaves(clusterId, limit, offset, (/**
                     * @param {?} error
                     * @param {?} features
                     * @return {?}
                     */
                    (error, features) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            resolve(features);
                        }
                    }));
                }));
            })));
        });
    }
    /**
     * @param {?} feature
     * @return {?}
     */
    _addFeature(feature) {
        /** @type {?} */
        const collection = (/** @type {?} */ (this.data));
        collection.features.push(feature);
        this.updateFeatureData.next();
    }
    /**
     * @param {?} feature
     * @return {?}
     */
    _removeFeature(feature) {
        /** @type {?} */
        const collection = (/** @type {?} */ (this.data));
        /** @type {?} */
        const index = collection.features.indexOf(feature);
        if (index > -1) {
            collection.features.splice(index, 1);
        }
        this.updateFeatureData.next();
    }
    /**
     * @return {?}
     */
    _getNewFeatureId() {
        return ++this.featureIdCounter;
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        this.MapService.addSource(this.id, (/** @type {?} */ ({
            // clusterProperties missing in typings
            type: 'geojson',
            data: this.data,
            maxzoom: this.maxzoom,
            minzoom: this.minzoom,
            buffer: this.buffer,
            tolerance: this.tolerance,
            cluster: this.cluster,
            clusterRadius: this.clusterRadius,
            clusterMaxZoom: this.clusterMaxZoom,
            clusterProperties: this.clusterProperties,
            lineMetrics: this.lineMetrics
        })));
        /** @type {?} */
        const sub = this.updateFeatureData.pipe(debounceTime(0)).subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const source = this.MapService.getSource(this.id);
            source.setData((/** @type {?} */ (this.data)));
        }));
        this.sub.add(sub);
        this.sourceAdded = true;
    }
}
GeoJSONSourceComponent.decorators = [
    { type: Component, args: [{
                selector: 'mgl-geojson-source',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
GeoJSONSourceComponent.ctorParameters = () => [
    { type: MapService },
    { type: NgZone }
];
GeoJSONSourceComponent.propDecorators = {
    id: [{ type: Input }],
    data: [{ type: Input }],
    minzoom: [{ type: Input }],
    maxzoom: [{ type: Input }],
    buffer: [{ type: Input }],
    tolerance: [{ type: Input }],
    cluster: [{ type: Input }],
    clusterRadius: [{ type: Input }],
    clusterMaxZoom: [{ type: Input }],
    clusterProperties: [{ type: Input }],
    lineMetrics: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GeoJSONSourceComponent.prototype.id;
    /** @type {?} */
    GeoJSONSourceComponent.prototype.data;
    /** @type {?} */
    GeoJSONSourceComponent.prototype.minzoom;
    /** @type {?} */
    GeoJSONSourceComponent.prototype.maxzoom;
    /** @type {?} */
    GeoJSONSourceComponent.prototype.buffer;
    /** @type {?} */
    GeoJSONSourceComponent.prototype.tolerance;
    /** @type {?} */
    GeoJSONSourceComponent.prototype.cluster;
    /** @type {?} */
    GeoJSONSourceComponent.prototype.clusterRadius;
    /** @type {?} */
    GeoJSONSourceComponent.prototype.clusterMaxZoom;
    /** @type {?} */
    GeoJSONSourceComponent.prototype.clusterProperties;
    /** @type {?} */
    GeoJSONSourceComponent.prototype.lineMetrics;
    /** @type {?} */
    GeoJSONSourceComponent.prototype.updateFeatureData;
    /**
     * @type {?}
     * @private
     */
    GeoJSONSourceComponent.prototype.sub;
    /**
     * @type {?}
     * @private
     */
    GeoJSONSourceComponent.prototype.sourceAdded;
    /**
     * @type {?}
     * @private
     */
    GeoJSONSourceComponent.prototype.featureIdCounter;
    /**
     * @type {?}
     * @private
     */
    GeoJSONSourceComponent.prototype.MapService;
    /**
     * @type {?}
     * @private
     */
    GeoJSONSourceComponent.prototype.zone;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/source/geojson/feature.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FeatureComponent {
    /**
     * @param {?} GeoJSONSourceComponent
     */
    constructor(GeoJSONSourceComponent) {
        this.GeoJSONSourceComponent = GeoJSONSourceComponent;
        this.type = 'Feature';
    }
    /**
     * @return {?}
     */
    get properties() {
        return this._properties;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set properties(value) {
        this._properties = value;
        if (this.feature) {
            this.feature.properties = value;
            this.GeoJSONSourceComponent.updateFeatureData.next();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.id) {
            this.id = this.GeoJSONSourceComponent._getNewFeatureId();
        }
        this.feature = {
            type: this.type,
            geometry: this.geometry,
            properties: this.properties ? this.properties : {}
        };
        this.feature.id = this.id;
        this.GeoJSONSourceComponent._addFeature(this.feature);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.GeoJSONSourceComponent._removeFeature(this.feature);
    }
    /**
     * @param {?} coordinates
     * @return {?}
     */
    updateCoordinates(coordinates) {
        ((/** @type {?} */ (this.feature.geometry))).coordinates = coordinates;
        this.GeoJSONSourceComponent.updateFeatureData.next();
    }
}
FeatureComponent.decorators = [
    { type: Component, args: [{
                selector: 'mgl-feature',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
FeatureComponent.ctorParameters = () => [
    { type: GeoJSONSourceComponent, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => GeoJSONSourceComponent)),] }] }
];
FeatureComponent.propDecorators = {
    id: [{ type: Input }],
    geometry: [{ type: Input }],
    properties: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FeatureComponent.prototype.id;
    /** @type {?} */
    FeatureComponent.prototype.geometry;
    /**
     * @type {?}
     * @private
     */
    FeatureComponent.prototype._properties;
    /** @type {?} */
    FeatureComponent.prototype.type;
    /**
     * @type {?}
     * @private
     */
    FeatureComponent.prototype.feature;
    /**
     * @type {?}
     * @private
     */
    FeatureComponent.prototype.GeoJSONSourceComponent;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/draggable/draggable.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DraggableDirective {
    /**
     * @param {?} MapService
     * @param {?} NgZone
     * @param {?=} FeatureComponent
     * @param {?=} MarkerComponent
     */
    constructor(MapService, NgZone, FeatureComponent, MarkerComponent) {
        this.MapService = MapService;
        this.NgZone = NgZone;
        this.FeatureComponent = FeatureComponent;
        this.MarkerComponent = MarkerComponent;
        this.dragStart = new EventEmitter();
        this.dragEnd = new EventEmitter();
        this.drag = new EventEmitter();
        this.destroyed$ = new ReplaySubject(1);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let enter$;
        /** @type {?} */
        let leave$;
        /** @type {?} */
        let updateCoords;
        if (this.MarkerComponent) {
            console.warn('[ngx-mapbox-gl] mglDraggable on Marker is deprecated, use draggable input instead');
            /** @type {?} */
            let markerElement = ((/** @type {?} */ (this.MarkerComponent.content.nativeElement)));
            if (markerElement.children.length === 1) {
                markerElement = markerElement.children[0];
            }
            enter$ = fromEvent(markerElement, 'mouseenter');
            leave$ = fromEvent(markerElement, 'mouseleave');
            updateCoords = this.MarkerComponent.updateCoordinates.bind(this.MarkerComponent);
        }
        else if (this.FeatureComponent && this.layer) {
            enter$ = this.layer.mouseEnter;
            leave$ = this.layer.mouseLeave;
            updateCoords = this.FeatureComponent.updateCoordinates.bind(this.FeatureComponent);
            if (this.FeatureComponent.geometry.type !== 'Point') {
                throw new Error('mglDraggable only support point feature');
            }
        }
        else {
            throw new Error('mglDraggable can only be used on Feature (with a layer as input) or Marker');
        }
        this.handleDraggable(enter$, leave$, updateCoords);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed$.next(undefined);
        this.destroyed$.complete();
    }
    /**
     * @private
     * @param {?} enter$
     * @param {?} leave$
     * @param {?} updateCoords
     * @return {?}
     */
    handleDraggable(enter$, leave$, updateCoords) {
        /** @type {?} */
        let moving = false;
        /** @type {?} */
        let inside = false;
        this.MapService.mapCreated$.subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const mouseUp$ = fromEvent((/** @type {?} */ (this.MapService.mapInstance)), 'mouseup');
            /** @type {?} */
            const dragStart$ = enter$.pipe(takeUntil(this.destroyed$), filter((/**
             * @return {?}
             */
            () => !moving)), filter((/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.filterFeature(evt))), tap((/**
             * @return {?}
             */
            () => {
                inside = true;
                this.MapService.changeCanvasCursor('move');
                this.MapService.updateDragPan(false);
            })), switchMap((/**
             * @return {?}
             */
            () => fromEvent((/** @type {?} */ (this.MapService.mapInstance)), 'mousedown')
                .pipe(takeUntil(leave$)))));
            /** @type {?} */
            const dragging$ = dragStart$.pipe(switchMap((/**
             * @return {?}
             */
            () => fromEvent((/** @type {?} */ (this.MapService.mapInstance)), 'mousemove')
                .pipe(takeUntil(mouseUp$)))));
            /** @type {?} */
            const dragEnd$ = dragStart$.pipe(switchMap((/**
             * @return {?}
             */
            () => mouseUp$.pipe(take(1)))));
            dragStart$.subscribe((/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => {
                moving = true;
                if (this.dragStart.observers.length) {
                    this.NgZone.run((/**
                     * @return {?}
                     */
                    () => this.dragStart.emit(evt)));
                }
            }));
            dragging$.subscribe((/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => {
                updateCoords([evt.lngLat.lng, evt.lngLat.lat]);
                if (this.drag.observers.length) {
                    this.NgZone.run((/**
                     * @return {?}
                     */
                    () => this.drag.emit(evt)));
                }
            }));
            dragEnd$.subscribe((/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => {
                moving = false;
                if (this.dragEnd.observers.length) {
                    this.NgZone.run((/**
                     * @return {?}
                     */
                    () => this.dragEnd.emit(evt)));
                }
                if (!inside) { // It's possible to dragEnd outside the target (small input lag)
                    this.MapService.changeCanvasCursor('');
                    this.MapService.updateDragPan(true);
                }
            }));
            leave$.pipe(takeUntil(this.destroyed$), tap((/**
             * @return {?}
             */
            () => inside = false)), filter((/**
             * @return {?}
             */
            () => !moving))).subscribe((/**
             * @return {?}
             */
            () => {
                this.MapService.changeCanvasCursor('');
                this.MapService.updateDragPan(true);
            }));
        }));
    }
    /**
     * @private
     * @param {?} evt
     * @return {?}
     */
    filterFeature(evt) {
        if (this.FeatureComponent && this.layer) {
            /** @type {?} */
            const feature = this.MapService.queryRenderedFeatures(evt.point, {
                layers: [this.layer.id],
                filter: [
                    'all',
                    ['==', '$type', 'Point'],
                    ['==', '$id', this.FeatureComponent.id]
                ]
            })[0];
            if (!feature) {
                return false;
            }
        }
        return true;
    }
}
DraggableDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mglDraggable]'
            },] }
];
/** @nocollapse */
DraggableDirective.ctorParameters = () => [
    { type: MapService },
    { type: NgZone },
    { type: FeatureComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: MarkerComponent, decorators: [{ type: Optional }, { type: Host }] }
];
DraggableDirective.propDecorators = {
    layer: [{ type: Input, args: ['mglDraggable',] }],
    dragStart: [{ type: Output }],
    dragEnd: [{ type: Output }],
    drag: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DraggableDirective.prototype.layer;
    /** @type {?} */
    DraggableDirective.prototype.dragStart;
    /** @type {?} */
    DraggableDirective.prototype.dragEnd;
    /** @type {?} */
    DraggableDirective.prototype.drag;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.MapService;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.NgZone;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.FeatureComponent;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.MarkerComponent;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/image/image.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageComponent {
    /**
     * @param {?} MapService
     * @param {?} zone
     */
    constructor(MapService, zone) {
        this.MapService = MapService;
        this.zone = zone;
        this.error = new EventEmitter();
        this.loaded = new EventEmitter();
        this.isAdded = false;
        this.isAdding = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.sub = this.MapService.mapLoaded$.pipe(switchMap((/**
         * @return {?}
         */
        () => fromEvent((/** @type {?} */ (this.MapService.mapInstance)), 'styledata').pipe(startWith(undefined), filter((/**
         * @return {?}
         */
        () => !this.isAdding && !this.MapService.mapInstance.hasImage(this.id))))))).subscribe((/**
         * @return {?}
         */
        () => this.init()));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.data && !changes.data.isFirstChange() ||
            changes.options && !changes.options.isFirstChange() ||
            changes.url && !changes.url.isFirstChange()) {
            this.ngOnDestroy();
            this.ngOnInit();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.isAdded) {
            this.MapService.removeImage(this.id);
        }
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.isAdding = true;
            if (this.data) {
                this.MapService.addImage(this.id, this.data, this.options);
                this.isAdded = true;
                this.isAdding = false;
            }
            else if (this.url) {
                try {
                    yield this.MapService.loadAndAddImage(this.id, this.url, this.options);
                    this.isAdded = true;
                    this.isAdding = false;
                    this.zone.run((/**
                     * @return {?}
                     */
                    () => {
                        this.loaded.emit();
                    }));
                }
                catch (error) {
                    this.zone.run((/**
                     * @return {?}
                     */
                    () => {
                        this.error.emit(error);
                    }));
                }
            }
        });
    }
}
ImageComponent.decorators = [
    { type: Component, args: [{
                selector: 'mgl-image',
                template: ''
            }] }
];
/** @nocollapse */
ImageComponent.ctorParameters = () => [
    { type: MapService },
    { type: NgZone }
];
ImageComponent.propDecorators = {
    id: [{ type: Input }],
    data: [{ type: Input }],
    options: [{ type: Input }],
    url: [{ type: Input }],
    error: [{ type: Output }],
    loaded: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ImageComponent.prototype.id;
    /** @type {?} */
    ImageComponent.prototype.data;
    /** @type {?} */
    ImageComponent.prototype.options;
    /** @type {?} */
    ImageComponent.prototype.url;
    /** @type {?} */
    ImageComponent.prototype.error;
    /** @type {?} */
    ImageComponent.prototype.loaded;
    /**
     * @type {?}
     * @private
     */
    ImageComponent.prototype.isAdded;
    /**
     * @type {?}
     * @private
     */
    ImageComponent.prototype.isAdding;
    /**
     * @type {?}
     * @private
     */
    ImageComponent.prototype.sub;
    /**
     * @type {?}
     * @private
     */
    ImageComponent.prototype.MapService;
    /**
     * @type {?}
     * @private
     */
    ImageComponent.prototype.zone;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/map/map.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MapComponent {
    /**
     * @param {?} MapService
     */
    constructor(MapService) {
        this.MapService = MapService;
        // First value goes to options.fitBoundsOptions. Subsequents changes are passed to fitBounds
        /* Added by ngx-mapbox-gl */
        this.movingMethod = 'flyTo';
        this.resize = new EventEmitter();
        this.remove = new EventEmitter();
        this.mouseDown = new EventEmitter();
        this.mouseUp = new EventEmitter();
        this.mouseMove = new EventEmitter();
        this.click = new EventEmitter();
        this.dblClick = new EventEmitter();
        this.mouseEnter = new EventEmitter();
        this.mouseLeave = new EventEmitter();
        this.mouseOver = new EventEmitter();
        this.mouseOut = new EventEmitter();
        this.contextMenu = new EventEmitter();
        this.touchStart = new EventEmitter();
        this.touchEnd = new EventEmitter();
        this.touchMove = new EventEmitter();
        this.touchCancel = new EventEmitter();
        this.wheel = new EventEmitter(); // TODO MapWheelEvent
        // TODO MapWheelEvent
        this.moveStart = new EventEmitter(); // TODO Check type
        // TODO Check type
        this.move = new EventEmitter();
        this.moveEnd = new EventEmitter();
        this.dragStart = new EventEmitter();
        this.drag = new EventEmitter();
        this.dragEnd = new EventEmitter();
        this.zoomStart = new EventEmitter();
        this.zoomEvt = new EventEmitter();
        this.zoomEnd = new EventEmitter();
        this.rotateStart = new EventEmitter();
        this.rotate = new EventEmitter();
        this.rotateEnd = new EventEmitter();
        this.pitchStart = new EventEmitter();
        this.pitchEvt = new EventEmitter();
        this.pitchEnd = new EventEmitter();
        this.boxZoomStart = new EventEmitter();
        this.boxZoomEnd = new EventEmitter();
        this.boxZoomCancel = new EventEmitter();
        this.webGlContextLost = new EventEmitter();
        this.webGlContextRestored = new EventEmitter();
        this.load = new EventEmitter();
        this.idle = new EventEmitter();
        this.render = new EventEmitter();
        this.error = new EventEmitter(); // TODO Check type
        // TODO Check type
        this.data = new EventEmitter();
        this.styleData = new EventEmitter();
        this.sourceData = new EventEmitter();
        this.dataLoading = new EventEmitter();
        this.styleDataLoading = new EventEmitter();
        this.sourceDataLoading = new EventEmitter();
        this.styleImageMissing = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get mapInstance() {
        return this.MapService.mapInstance;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.MapService.setup({
            accessToken: this.accessToken,
            customMapboxApiUrl: this.customMapboxApiUrl,
            mapOptions: {
                container: this.mapContainer.nativeElement,
                minZoom: this.minZoom,
                maxZoom: this.maxZoom,
                style: this.style,
                hash: this.hash,
                interactive: this.interactive,
                bearingSnap: this.bearingSnap,
                pitchWithRotate: this.pitchWithRotate,
                clickTolerance: this.clickTolerance,
                classes: this.classes,
                attributionControl: this.attributionControl,
                logoPosition: this.logoPosition,
                failIfMajorPerformanceCaveat: this.failIfMajorPerformanceCaveat,
                preserveDrawingBuffer: this.preserveDrawingBuffer,
                refreshExpiredTiles: this.refreshExpiredTiles,
                maxBounds: this.maxBounds,
                scrollZoom: this.scrollZoom,
                boxZoom: this.boxZoom,
                dragRotate: this.dragRotate,
                dragPan: this.dragPan,
                keyboard: this.keyboard,
                doubleClickZoom: this.doubleClickZoom,
                touchZoomRotate: this.touchZoomRotate,
                trackResize: this.trackResize,
                center: this.center,
                zoom: this.zoom,
                bearing: this.bearing,
                pitch: this.pitch,
                renderWorldCopies: this.renderWorldCopies,
                maxTileCacheSize: this.maxTileCacheSize,
                localIdeographFontFamily: this.localIdeographFontFamily,
                transformRequest: this.transformRequest,
                bounds: this.bounds ? this.bounds : this.fitBounds,
                fitBoundsOptions: this.fitBoundsOptions,
                antialias: this.antialias,
                locale: this.locale
            },
            mapEvents: this
        });
        if (this.cursorStyle) {
            this.MapService.changeCanvasCursor(this.cursorStyle);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.MapService.destroyMap();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.MapService.mapCreated$.toPromise();
            if (changes.cursorStyle && !changes.cursorStyle.isFirstChange()) {
                this.MapService.changeCanvasCursor(changes.cursorStyle.currentValue);
            }
            if (changes.minZoom && !changes.minZoom.isFirstChange()) {
                this.MapService.updateMinZoom(changes.minZoom.currentValue);
            }
            if (changes.maxZoom && !changes.maxZoom.isFirstChange()) {
                this.MapService.updateMaxZoom(changes.maxZoom.currentValue);
            }
            if (changes.scrollZoom && !changes.scrollZoom.isFirstChange()) {
                this.MapService.updateScrollZoom(changes.scrollZoom.currentValue);
            }
            if (changes.dragRotate && !changes.dragRotate.isFirstChange()) {
                this.MapService.updateDragRotate(changes.dragRotate.currentValue);
            }
            if (changes.touchZoomRotate && !changes.touchZoomRotate.isFirstChange()) {
                this.MapService.updateTouchZoomRotate(changes.touchZoomRotate.currentValue);
            }
            if (changes.doubleClickZoom && !changes.doubleClickZoom.isFirstChange()) {
                this.MapService.updateDoubleClickZoom(changes.doubleClickZoom.currentValue);
            }
            if (changes.keyboard && !changes.keyboard.isFirstChange()) {
                this.MapService.updateKeyboard(changes.keyboard.currentValue);
            }
            if (changes.dragPan && !changes.dragPan.isFirstChange()) {
                this.MapService.updateDragPan(changes.dragPan.currentValue);
            }
            if (changes.boxZoom && !changes.boxZoom.isFirstChange()) {
                this.MapService.updateBoxZoom(changes.boxZoom.currentValue);
            }
            if (changes.style && !changes.style.isFirstChange()) {
                this.MapService.updateStyle(changes.style.currentValue);
            }
            if (changes.maxBounds && !changes.maxBounds.isFirstChange()) {
                this.MapService.updateMaxBounds(changes.maxBounds.currentValue);
            }
            if (changes.fitBounds && changes.fitBounds.currentValue && !changes.fitBounds.isFirstChange()) {
                this.MapService.fitBounds(changes.fitBounds.currentValue, this.fitBoundsOptions);
            }
            if (changes.fitScreenCoordinates && changes.fitScreenCoordinates.currentValue) {
                if ((this.center || this.zoom || this.pitch || this.fitBounds) && changes.fitScreenCoordinates.isFirstChange()) {
                    console.warn('[ngx-mapbox-gl] center / zoom / pitch / fitBounds inputs are being overridden by fitScreenCoordinates input');
                }
                this.MapService.fitScreenCoordinates(changes.fitScreenCoordinates.currentValue, this.bearing ? this.bearing[0] : 0, this.movingOptions);
            }
            if (this.centerWithPanTo &&
                changes.center && !changes.center.isFirstChange() &&
                !changes.zoom && !changes.bearing && !changes.pitch) {
                this.MapService.panTo((/** @type {?} */ (this.center)), this.panToOptions);
            }
            else if (changes.center && !changes.center.isFirstChange() ||
                changes.zoom && !changes.zoom.isFirstChange() ||
                (changes.bearing && !changes.bearing.isFirstChange() && !changes.fitScreenCoordinates) ||
                changes.pitch && !changes.pitch.isFirstChange()) {
                this.MapService.move(this.movingMethod, this.movingOptions, changes.zoom && this.zoom ? this.zoom[0] : undefined, changes.center ? this.center : undefined, changes.bearing && this.bearing ? this.bearing[0] : undefined, changes.pitch && this.pitch ? this.pitch[0] : undefined);
            }
        });
    }
}
MapComponent.decorators = [
    { type: Component, args: [{
                selector: 'mgl-map',
                template: '<div #container></div>',
                providers: [
                    MapService
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
  :host {
    display: block;
  }
  div {
    height: 100%;
    width: 100%;
  }
  `]
            }] }
];
/** @nocollapse */
MapComponent.ctorParameters = () => [
    { type: MapService }
];
MapComponent.propDecorators = {
    accessToken: [{ type: Input }],
    customMapboxApiUrl: [{ type: Input }],
    hash: [{ type: Input }],
    refreshExpiredTiles: [{ type: Input }],
    failIfMajorPerformanceCaveat: [{ type: Input }],
    classes: [{ type: Input }],
    bearingSnap: [{ type: Input }],
    interactive: [{ type: Input }],
    pitchWithRotate: [{ type: Input }],
    clickTolerance: [{ type: Input }],
    attributionControl: [{ type: Input }],
    logoPosition: [{ type: Input }],
    maxTileCacheSize: [{ type: Input }],
    localIdeographFontFamily: [{ type: Input }],
    preserveDrawingBuffer: [{ type: Input }],
    renderWorldCopies: [{ type: Input }],
    trackResize: [{ type: Input }],
    transformRequest: [{ type: Input }],
    bounds: [{ type: Input }],
    antialias: [{ type: Input }],
    locale: [{ type: Input }],
    minZoom: [{ type: Input }],
    maxZoom: [{ type: Input }],
    scrollZoom: [{ type: Input }],
    dragRotate: [{ type: Input }],
    touchZoomRotate: [{ type: Input }],
    doubleClickZoom: [{ type: Input }],
    keyboard: [{ type: Input }],
    dragPan: [{ type: Input }],
    boxZoom: [{ type: Input }],
    style: [{ type: Input }],
    center: [{ type: Input }],
    maxBounds: [{ type: Input }],
    zoom: [{ type: Input }],
    bearing: [{ type: Input }],
    pitch: [{ type: Input }],
    fitBoundsOptions: [{ type: Input }],
    movingMethod: [{ type: Input }],
    movingOptions: [{ type: Input }],
    fitBounds: [{ type: Input }],
    fitScreenCoordinates: [{ type: Input }],
    centerWithPanTo: [{ type: Input }],
    panToOptions: [{ type: Input }],
    cursorStyle: [{ type: Input }],
    resize: [{ type: Output }],
    remove: [{ type: Output }],
    mouseDown: [{ type: Output }],
    mouseUp: [{ type: Output }],
    mouseMove: [{ type: Output }],
    click: [{ type: Output }],
    dblClick: [{ type: Output }],
    mouseEnter: [{ type: Output }],
    mouseLeave: [{ type: Output }],
    mouseOver: [{ type: Output }],
    mouseOut: [{ type: Output }],
    contextMenu: [{ type: Output }],
    touchStart: [{ type: Output }],
    touchEnd: [{ type: Output }],
    touchMove: [{ type: Output }],
    touchCancel: [{ type: Output }],
    wheel: [{ type: Output }],
    moveStart: [{ type: Output }],
    move: [{ type: Output }],
    moveEnd: [{ type: Output }],
    dragStart: [{ type: Output }],
    drag: [{ type: Output }],
    dragEnd: [{ type: Output }],
    zoomStart: [{ type: Output }],
    zoomEvt: [{ type: Output }],
    zoomEnd: [{ type: Output }],
    rotateStart: [{ type: Output }],
    rotate: [{ type: Output }],
    rotateEnd: [{ type: Output }],
    pitchStart: [{ type: Output }],
    pitchEvt: [{ type: Output }],
    pitchEnd: [{ type: Output }],
    boxZoomStart: [{ type: Output }],
    boxZoomEnd: [{ type: Output }],
    boxZoomCancel: [{ type: Output }],
    webGlContextLost: [{ type: Output }],
    webGlContextRestored: [{ type: Output }],
    load: [{ type: Output }],
    idle: [{ type: Output }],
    render: [{ type: Output }],
    error: [{ type: Output }],
    data: [{ type: Output }],
    styleData: [{ type: Output }],
    sourceData: [{ type: Output }],
    dataLoading: [{ type: Output }],
    styleDataLoading: [{ type: Output }],
    sourceDataLoading: [{ type: Output }],
    styleImageMissing: [{ type: Output }],
    mapContainer: [{ type: ViewChild, args: ['container', { static: true },] }]
};
if (false) {
    /** @type {?} */
    MapComponent.prototype.accessToken;
    /** @type {?} */
    MapComponent.prototype.customMapboxApiUrl;
    /** @type {?} */
    MapComponent.prototype.hash;
    /** @type {?} */
    MapComponent.prototype.refreshExpiredTiles;
    /** @type {?} */
    MapComponent.prototype.failIfMajorPerformanceCaveat;
    /** @type {?} */
    MapComponent.prototype.classes;
    /** @type {?} */
    MapComponent.prototype.bearingSnap;
    /** @type {?} */
    MapComponent.prototype.interactive;
    /** @type {?} */
    MapComponent.prototype.pitchWithRotate;
    /** @type {?} */
    MapComponent.prototype.clickTolerance;
    /** @type {?} */
    MapComponent.prototype.attributionControl;
    /** @type {?} */
    MapComponent.prototype.logoPosition;
    /** @type {?} */
    MapComponent.prototype.maxTileCacheSize;
    /** @type {?} */
    MapComponent.prototype.localIdeographFontFamily;
    /** @type {?} */
    MapComponent.prototype.preserveDrawingBuffer;
    /** @type {?} */
    MapComponent.prototype.renderWorldCopies;
    /** @type {?} */
    MapComponent.prototype.trackResize;
    /** @type {?} */
    MapComponent.prototype.transformRequest;
    /** @type {?} */
    MapComponent.prototype.bounds;
    /** @type {?} */
    MapComponent.prototype.antialias;
    /** @type {?} */
    MapComponent.prototype.locale;
    /** @type {?} */
    MapComponent.prototype.minZoom;
    /** @type {?} */
    MapComponent.prototype.maxZoom;
    /** @type {?} */
    MapComponent.prototype.scrollZoom;
    /** @type {?} */
    MapComponent.prototype.dragRotate;
    /** @type {?} */
    MapComponent.prototype.touchZoomRotate;
    /** @type {?} */
    MapComponent.prototype.doubleClickZoom;
    /** @type {?} */
    MapComponent.prototype.keyboard;
    /** @type {?} */
    MapComponent.prototype.dragPan;
    /** @type {?} */
    MapComponent.prototype.boxZoom;
    /** @type {?} */
    MapComponent.prototype.style;
    /** @type {?} */
    MapComponent.prototype.center;
    /** @type {?} */
    MapComponent.prototype.maxBounds;
    /** @type {?} */
    MapComponent.prototype.zoom;
    /** @type {?} */
    MapComponent.prototype.bearing;
    /** @type {?} */
    MapComponent.prototype.pitch;
    /** @type {?} */
    MapComponent.prototype.fitBoundsOptions;
    /** @type {?} */
    MapComponent.prototype.movingMethod;
    /** @type {?} */
    MapComponent.prototype.movingOptions;
    /** @type {?} */
    MapComponent.prototype.fitBounds;
    /** @type {?} */
    MapComponent.prototype.fitScreenCoordinates;
    /** @type {?} */
    MapComponent.prototype.centerWithPanTo;
    /** @type {?} */
    MapComponent.prototype.panToOptions;
    /** @type {?} */
    MapComponent.prototype.cursorStyle;
    /** @type {?} */
    MapComponent.prototype.resize;
    /** @type {?} */
    MapComponent.prototype.remove;
    /** @type {?} */
    MapComponent.prototype.mouseDown;
    /** @type {?} */
    MapComponent.prototype.mouseUp;
    /** @type {?} */
    MapComponent.prototype.mouseMove;
    /** @type {?} */
    MapComponent.prototype.click;
    /** @type {?} */
    MapComponent.prototype.dblClick;
    /** @type {?} */
    MapComponent.prototype.mouseEnter;
    /** @type {?} */
    MapComponent.prototype.mouseLeave;
    /** @type {?} */
    MapComponent.prototype.mouseOver;
    /** @type {?} */
    MapComponent.prototype.mouseOut;
    /** @type {?} */
    MapComponent.prototype.contextMenu;
    /** @type {?} */
    MapComponent.prototype.touchStart;
    /** @type {?} */
    MapComponent.prototype.touchEnd;
    /** @type {?} */
    MapComponent.prototype.touchMove;
    /** @type {?} */
    MapComponent.prototype.touchCancel;
    /** @type {?} */
    MapComponent.prototype.wheel;
    /** @type {?} */
    MapComponent.prototype.moveStart;
    /** @type {?} */
    MapComponent.prototype.move;
    /** @type {?} */
    MapComponent.prototype.moveEnd;
    /** @type {?} */
    MapComponent.prototype.dragStart;
    /** @type {?} */
    MapComponent.prototype.drag;
    /** @type {?} */
    MapComponent.prototype.dragEnd;
    /** @type {?} */
    MapComponent.prototype.zoomStart;
    /** @type {?} */
    MapComponent.prototype.zoomEvt;
    /** @type {?} */
    MapComponent.prototype.zoomEnd;
    /** @type {?} */
    MapComponent.prototype.rotateStart;
    /** @type {?} */
    MapComponent.prototype.rotate;
    /** @type {?} */
    MapComponent.prototype.rotateEnd;
    /** @type {?} */
    MapComponent.prototype.pitchStart;
    /** @type {?} */
    MapComponent.prototype.pitchEvt;
    /** @type {?} */
    MapComponent.prototype.pitchEnd;
    /** @type {?} */
    MapComponent.prototype.boxZoomStart;
    /** @type {?} */
    MapComponent.prototype.boxZoomEnd;
    /** @type {?} */
    MapComponent.prototype.boxZoomCancel;
    /** @type {?} */
    MapComponent.prototype.webGlContextLost;
    /** @type {?} */
    MapComponent.prototype.webGlContextRestored;
    /** @type {?} */
    MapComponent.prototype.load;
    /** @type {?} */
    MapComponent.prototype.idle;
    /** @type {?} */
    MapComponent.prototype.render;
    /** @type {?} */
    MapComponent.prototype.error;
    /** @type {?} */
    MapComponent.prototype.data;
    /** @type {?} */
    MapComponent.prototype.styleData;
    /** @type {?} */
    MapComponent.prototype.sourceData;
    /** @type {?} */
    MapComponent.prototype.dataLoading;
    /** @type {?} */
    MapComponent.prototype.styleDataLoading;
    /** @type {?} */
    MapComponent.prototype.sourceDataLoading;
    /** @type {?} */
    MapComponent.prototype.styleImageMissing;
    /** @type {?} */
    MapComponent.prototype.mapContainer;
    /**
     * @type {?}
     * @private
     */
    MapComponent.prototype.MapService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/markers-for-clusters/markers-for-clusters.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PointDirective {
}
PointDirective.decorators = [
    { type: Directive, args: [{ selector: 'ng-template[mglPoint]' },] }
];
class ClusterPointDirective {
}
ClusterPointDirective.decorators = [
    { type: Directive, args: [{ selector: 'ng-template[mglClusterPoint]' },] }
];
/** @type {?} */
let uniqId = 0;
class MarkersForClustersComponent {
    /**
     * @param {?} MapService
     * @param {?} ChangeDetectorRef
     * @param {?} zone
     */
    constructor(MapService, ChangeDetectorRef, zone) {
        this.MapService = MapService;
        this.ChangeDetectorRef = ChangeDetectorRef;
        this.zone = zone;
        // Incorrect typings
        this.layerId = `mgl-markers-for-clusters-${uniqId++}`;
        this.sub = new Subscription();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        /** @type {?} */
        const sub = this.MapService.mapCreated$.pipe(switchMap((/**
         * @return {?}
         */
        () => fromEvent((/** @type {?} */ (this.MapService.mapInstance)), 'data').pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        (e) => e.sourceId === this.source && e.isSourceLoaded && e.sourceDataType !== 'metadata')), take(1)))), switchMap((/**
         * @return {?}
         */
        () => merge(fromEvent((/** @type {?} */ (this.MapService.mapInstance)), 'move'), fromEvent((/** @type {?} */ (this.MapService.mapInstance)), 'moveend')).pipe(startWith(undefined))))).subscribe((/**
         * @return {?}
         */
        () => {
            this.zone.run((/**
             * @return {?}
             */
            () => {
                this.updateCluster();
            }));
        }));
        this.sub.add(sub);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    /**
     * @param {?} _index
     * @param {?} clusterPoint
     * @return {?}
     */
    trackByClusterPoint(_index, clusterPoint) {
        return clusterPoint.id;
    }
    /**
     * @private
     * @return {?}
     */
    updateCluster() {
        // Invalid queryRenderedFeatures typing
        /** @type {?} */
        const params = { layers: [this.layerId] };
        if (!this.pointTpl) {
            params.filter = ['==', 'cluster', true];
        }
        this.clusterPoints = this.MapService.mapInstance.queryRenderedFeatures(params);
        this.ChangeDetectorRef.markForCheck();
    }
}
MarkersForClustersComponent.decorators = [
    { type: Component, args: [{
                selector: 'mgl-markers-for-clusters',
                template: `
    <mgl-layer
      [id]="layerId"
      [source]="source"
      type="circle"
      [paint]="{'circle-radius': 0}"
    ></mgl-layer>
    <ng-container *ngFor="let feature of clusterPoints; trackBy: trackByClusterPoint">
      <ng-container *ngIf="feature.properties.cluster">
        <mgl-marker
          [feature]="feature"
        >
          <ng-container *ngTemplateOutlet="clusterPointTpl; context: { $implicit: feature }"></ng-container>
        </mgl-marker>
      </ng-container>
      <ng-container *ngIf="!feature.properties.cluster">
        <mgl-marker
          [feature]="feature"
        >
          <ng-container *ngTemplateOutlet="pointTpl; context: { $implicit: feature }"></ng-container>
        </mgl-marker>
      </ng-container>
    </ng-container>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
MarkersForClustersComponent.ctorParameters = () => [
    { type: MapService },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
MarkersForClustersComponent.propDecorators = {
    source: [{ type: Input }],
    pointTpl: [{ type: ContentChild, args: [PointDirective, { read: TemplateRef, static: false },] }],
    clusterPointTpl: [{ type: ContentChild, args: [ClusterPointDirective, { read: TemplateRef, static: false },] }]
};
if (false) {
    /** @type {?} */
    MarkersForClustersComponent.prototype.source;
    /** @type {?} */
    MarkersForClustersComponent.prototype.pointTpl;
    /** @type {?} */
    MarkersForClustersComponent.prototype.clusterPointTpl;
    /** @type {?} */
    MarkersForClustersComponent.prototype.clusterPoints;
    /** @type {?} */
    MarkersForClustersComponent.prototype.layerId;
    /**
     * @type {?}
     * @private
     */
    MarkersForClustersComponent.prototype.sub;
    /**
     * @type {?}
     * @private
     */
    MarkersForClustersComponent.prototype.MapService;
    /**
     * @type {?}
     * @private
     */
    MarkersForClustersComponent.prototype.ChangeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    MarkersForClustersComponent.prototype.zone;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/popup/popup.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PopupComponent {
    /**
     * @param {?} MapService
     */
    constructor(MapService) {
        this.MapService = MapService;
        this.close = new EventEmitter();
        this.open = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.lngLat && this.marker || this.feature && this.lngLat || this.feature && this.marker) {
            throw new Error('marker, lngLat, feature input are mutually exclusive');
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.lngLat && !changes.lngLat.isFirstChange() ||
            changes.feature && !changes.feature.isFirstChange()) {
            /** @type {?} */
            const newlngLat = changes.lngLat ? (/** @type {?} */ (this.lngLat)) : (/** @type {?} */ ((/** @type {?} */ ((/** @type {?} */ ((/** @type {?} */ (this.feature)).geometry)).coordinates))));
            this.MapService.removePopupFromMap((/** @type {?} */ (this.popupInstance)), true);
            /** @type {?} */
            const popupInstanceTmp = this.createPopup();
            this.MapService.addPopupToMap(popupInstanceTmp, newlngLat, (/** @type {?} */ (this.popupInstance)).isOpen());
            this.popupInstance = popupInstanceTmp;
        }
        if (changes.marker && !changes.marker.isFirstChange()) {
            /** @type {?} */
            const previousMarker = changes.marker.previousValue;
            if (previousMarker.markerInstance) {
                this.MapService.removePopupFromMarker(previousMarker.markerInstance);
            }
            if (this.marker && this.marker.markerInstance && this.popupInstance) {
                this.MapService.addPopupToMarker(this.marker.markerInstance, this.popupInstance);
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.popupInstance = this.createPopup();
        this.addPopup(this.popupInstance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.popupInstance) {
            if (this.lngLat || this.feature) {
                this.MapService.removePopupFromMap(this.popupInstance);
            }
            else if (this.marker && this.marker.markerInstance) {
                this.MapService.removePopupFromMarker(this.marker.markerInstance);
            }
        }
        this.popupInstance = undefined;
    }
    /**
     * @private
     * @return {?}
     */
    createPopup() {
        return this.MapService.createPopup({
            popupOptions: {
                closeButton: this.closeButton,
                closeOnClick: this.closeOnClick,
                anchor: this.anchor,
                offset: this.offset,
                className: this.className,
                maxWidth: this.maxWidth
            },
            popupEvents: {
                open: this.open,
                close: this.close
            }
        }, this.content.nativeElement);
    }
    /**
     * @private
     * @param {?} popup
     * @return {?}
     */
    addPopup(popup) {
        this.MapService.mapCreated$.subscribe((/**
         * @return {?}
         */
        () => {
            if (this.lngLat || this.feature) {
                this.MapService.addPopupToMap(popup, this.lngLat ? this.lngLat : (/** @type {?} */ ((/** @type {?} */ ((/** @type {?} */ ((/** @type {?} */ (this.feature)).geometry)).coordinates)))));
            }
            else if (this.marker && this.marker.markerInstance) {
                this.MapService.addPopupToMarker(this.marker.markerInstance, popup);
            }
            else {
                throw new Error('mgl-popup need either lngLat/marker/feature to be set');
            }
        }));
    }
}
PopupComponent.decorators = [
    { type: Component, args: [{
                selector: 'mgl-popup',
                template: '<div #content><ng-content></ng-content></div>',
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
PopupComponent.ctorParameters = () => [
    { type: MapService }
];
PopupComponent.propDecorators = {
    closeButton: [{ type: Input }],
    closeOnClick: [{ type: Input }],
    anchor: [{ type: Input }],
    offset: [{ type: Input }],
    className: [{ type: Input }],
    maxWidth: [{ type: Input }],
    feature: [{ type: Input }],
    lngLat: [{ type: Input }],
    marker: [{ type: Input }],
    close: [{ type: Output }],
    open: [{ type: Output }],
    content: [{ type: ViewChild, args: ['content', { static: true },] }]
};
if (false) {
    /** @type {?} */
    PopupComponent.prototype.closeButton;
    /** @type {?} */
    PopupComponent.prototype.closeOnClick;
    /** @type {?} */
    PopupComponent.prototype.anchor;
    /** @type {?} */
    PopupComponent.prototype.offset;
    /** @type {?} */
    PopupComponent.prototype.className;
    /** @type {?} */
    PopupComponent.prototype.maxWidth;
    /** @type {?} */
    PopupComponent.prototype.feature;
    /** @type {?} */
    PopupComponent.prototype.lngLat;
    /** @type {?} */
    PopupComponent.prototype.marker;
    /** @type {?} */
    PopupComponent.prototype.close;
    /** @type {?} */
    PopupComponent.prototype.open;
    /** @type {?} */
    PopupComponent.prototype.content;
    /** @type {?} */
    PopupComponent.prototype.popupInstance;
    /**
     * @type {?}
     * @private
     */
    PopupComponent.prototype.MapService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/source/canvas-source.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CanvasSourceComponent {
    /**
     * @param {?} MapService
     */
    constructor(MapService) {
        this.MapService = MapService;
        this.sourceAdded = false;
        this.sub = new Subscription();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.MapService.mapLoaded$.subscribe((/**
         * @return {?}
         */
        () => {
            this.init();
            /** @type {?} */
            const sub = fromEvent((/** @type {?} */ (this.MapService.mapInstance)), 'styledata').pipe(filter((/**
             * @return {?}
             */
            () => !this.MapService.mapInstance.getSource(this.id)))).subscribe((/**
             * @return {?}
             */
            () => {
                this.init();
            }));
            this.sub.add(sub);
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this.sourceAdded) {
            return;
        }
        if (changes.coordinates && !changes.coordinates.isFirstChange() ||
            changes.canvas && !changes.canvas.isFirstChange() ||
            changes.animate && !changes.animate.isFirstChange()) {
            this.ngOnDestroy();
            this.ngOnInit();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.sub.unsubscribe();
        if (this.sourceAdded) {
            this.MapService.removeSource(this.id);
        }
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        this.MapService.addSource(this.id, {
            type: 'canvas',
            coordinates: this.coordinates,
            canvas: this.canvas,
            animate: this.animate,
        });
        this.sourceAdded = true;
    }
}
CanvasSourceComponent.decorators = [
    { type: Component, args: [{
                selector: 'mgl-canvas-source',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CanvasSourceComponent.ctorParameters = () => [
    { type: MapService }
];
CanvasSourceComponent.propDecorators = {
    id: [{ type: Input }],
    coordinates: [{ type: Input }],
    canvas: [{ type: Input }],
    animate: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CanvasSourceComponent.prototype.id;
    /** @type {?} */
    CanvasSourceComponent.prototype.coordinates;
    /** @type {?} */
    CanvasSourceComponent.prototype.canvas;
    /** @type {?} */
    CanvasSourceComponent.prototype.animate;
    /**
     * @type {?}
     * @private
     */
    CanvasSourceComponent.prototype.sourceAdded;
    /**
     * @type {?}
     * @private
     */
    CanvasSourceComponent.prototype.sub;
    /**
     * @type {?}
     * @private
     */
    CanvasSourceComponent.prototype.MapService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/source/image-source.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageSourceComponent {
    /**
     * @param {?} MapService
     */
    constructor(MapService) {
        this.MapService = MapService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.sub = this.MapService.mapLoaded$
            .subscribe((/**
         * @return {?}
         */
        () => this.init()));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.sourceId === undefined) {
            return;
        }
        /** @type {?} */
        const source = this.MapService.getSource(this.sourceId);
        source.updateImage({
            url: changes.url === undefined ? undefined : this.url,
            coordinates: changes.coordinates === undefined ? undefined : this.coordinates
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.sub !== undefined) {
            this.sub.unsubscribe();
        }
        if (this.sourceId !== undefined) {
            this.MapService.removeSource(this.sourceId);
        }
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        /** @type {?} */
        const imageSource = {
            type: 'image',
            url: this.url,
            coordinates: this.coordinates
        };
        this.MapService.addSource(this.id, imageSource);
        this.sourceId = this.id;
    }
}
ImageSourceComponent.decorators = [
    { type: Component, args: [{
                selector: 'mgl-image-source',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ImageSourceComponent.ctorParameters = () => [
    { type: MapService }
];
ImageSourceComponent.propDecorators = {
    id: [{ type: Input }],
    url: [{ type: Input }],
    coordinates: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ImageSourceComponent.prototype.id;
    /** @type {?} */
    ImageSourceComponent.prototype.url;
    /** @type {?} */
    ImageSourceComponent.prototype.coordinates;
    /**
     * @type {?}
     * @private
     */
    ImageSourceComponent.prototype.sub;
    /**
     * @type {?}
     * @private
     */
    ImageSourceComponent.prototype.sourceId;
    /**
     * @type {?}
     * @private
     */
    ImageSourceComponent.prototype.MapService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/source/raster-source.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RasterSourceComponent {
    /**
     * @param {?} MapService
     */
    constructor(MapService) {
        this.MapService = MapService;
        this.type = 'raster'; // Just to make ts happy
        // Just to make ts happy
        this.sourceAdded = false;
        this.sub = new Subscription();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.MapService.mapLoaded$.subscribe((/**
         * @return {?}
         */
        () => {
            this.init();
            /** @type {?} */
            const sub = fromEvent((/** @type {?} */ (this.MapService.mapInstance)), 'styledata').pipe(filter((/**
             * @return {?}
             */
            () => !this.MapService.mapInstance.getSource(this.id)))).subscribe((/**
             * @return {?}
             */
            () => {
                this.init();
            }));
            this.sub.add(sub);
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this.sourceAdded) {
            return;
        }
        if (changes.url && !changes.url.isFirstChange() ||
            changes.tiles && !changes.tiles.isFirstChange() ||
            changes.bounds && !changes.bounds.isFirstChange() ||
            changes.minzoom && !changes.minzoom.isFirstChange() ||
            changes.maxzoom && !changes.maxzoom.isFirstChange() ||
            changes.tileSize && !changes.tileSize.isFirstChange()) {
            this.ngOnDestroy();
            this.ngOnInit();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.sub.unsubscribe();
        if (this.sourceAdded) {
            this.MapService.removeSource(this.id);
        }
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        /** @type {?} */
        const source = {
            type: this.type,
            url: this.url,
            tiles: this.tiles,
            bounds: this.bounds,
            minzoom: this.minzoom,
            maxzoom: this.maxzoom,
            tileSize: this.tileSize
        };
        this.MapService.addSource(this.id, source);
        this.sourceAdded = true;
    }
}
RasterSourceComponent.decorators = [
    { type: Component, args: [{
                selector: 'mgl-raster-source',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
RasterSourceComponent.ctorParameters = () => [
    { type: MapService }
];
RasterSourceComponent.propDecorators = {
    id: [{ type: Input }],
    url: [{ type: Input }],
    tiles: [{ type: Input }],
    bounds: [{ type: Input }],
    minzoom: [{ type: Input }],
    maxzoom: [{ type: Input }],
    tileSize: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    RasterSourceComponent.prototype.id;
    /** @type {?} */
    RasterSourceComponent.prototype.url;
    /** @type {?} */
    RasterSourceComponent.prototype.tiles;
    /** @type {?} */
    RasterSourceComponent.prototype.bounds;
    /** @type {?} */
    RasterSourceComponent.prototype.minzoom;
    /** @type {?} */
    RasterSourceComponent.prototype.maxzoom;
    /** @type {?} */
    RasterSourceComponent.prototype.tileSize;
    /** @type {?} */
    RasterSourceComponent.prototype.type;
    /**
     * @type {?}
     * @private
     */
    RasterSourceComponent.prototype.sourceAdded;
    /**
     * @type {?}
     * @private
     */
    RasterSourceComponent.prototype.sub;
    /**
     * @type {?}
     * @private
     */
    RasterSourceComponent.prototype.MapService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/source/vector-source.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VectorSourceComponent {
    /**
     * @param {?} MapService
     */
    constructor(MapService) {
        this.MapService = MapService;
        this.type = 'vector'; // Just to make ts happy
        // Just to make ts happy
        this.sourceAdded = false;
        this.sub = new Subscription();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.MapService.mapLoaded$.subscribe((/**
         * @return {?}
         */
        () => {
            this.init();
            /** @type {?} */
            const sub = fromEvent((/** @type {?} */ (this.MapService.mapInstance)), 'styledata').pipe(filter((/**
             * @return {?}
             */
            () => !this.MapService.mapInstance.getSource(this.id)))).subscribe((/**
             * @return {?}
             */
            () => {
                this.init();
            }));
            this.sub.add(sub);
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this.sourceAdded) {
            return;
        }
        if (changes.url && !changes.url.isFirstChange() ||
            changes.tiles && !changes.tiles.isFirstChange() ||
            changes.minzoom && !changes.minzoom.isFirstChange() ||
            changes.maxzoom && !changes.maxzoom.isFirstChange()) {
            this.ngOnDestroy();
            this.ngOnInit();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.sub.unsubscribe();
        if (this.sourceAdded) {
            this.MapService.removeSource(this.id);
        }
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        this.MapService.addSource(this.id, {
            type: this.type,
            url: this.url,
            tiles: this.tiles,
            minzoom: this.minzoom,
            maxzoom: this.maxzoom,
        });
        this.sourceAdded = true;
    }
}
VectorSourceComponent.decorators = [
    { type: Component, args: [{
                selector: 'mgl-vector-source',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
VectorSourceComponent.ctorParameters = () => [
    { type: MapService }
];
VectorSourceComponent.propDecorators = {
    id: [{ type: Input }],
    url: [{ type: Input }],
    tiles: [{ type: Input }],
    minzoom: [{ type: Input }],
    maxzoom: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VectorSourceComponent.prototype.id;
    /** @type {?} */
    VectorSourceComponent.prototype.url;
    /** @type {?} */
    VectorSourceComponent.prototype.tiles;
    /** @type {?} */
    VectorSourceComponent.prototype.minzoom;
    /** @type {?} */
    VectorSourceComponent.prototype.maxzoom;
    /** @type {?} */
    VectorSourceComponent.prototype.type;
    /**
     * @type {?}
     * @private
     */
    VectorSourceComponent.prototype.sourceAdded;
    /**
     * @type {?}
     * @private
     */
    VectorSourceComponent.prototype.sub;
    /**
     * @type {?}
     * @private
     */
    VectorSourceComponent.prototype.MapService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/source/video-source.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VideoSourceComponent {
    /**
     * @param {?} MapService
     */
    constructor(MapService) {
        this.MapService = MapService;
        this.sourceAdded = false;
        this.sub = new Subscription();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.MapService.mapLoaded$.subscribe((/**
         * @return {?}
         */
        () => {
            this.init();
            /** @type {?} */
            const sub = fromEvent((/** @type {?} */ (this.MapService.mapInstance)), 'styledata').pipe(filter((/**
             * @return {?}
             */
            () => !this.MapService.mapInstance.getSource(this.id)))).subscribe((/**
             * @return {?}
             */
            () => {
                this.init();
            }));
            this.sub.add(sub);
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this.sourceAdded) {
            return;
        }
        if (changes.urls && !changes.urls.isFirstChange() ||
            changes.coordinates && !changes.coordinates.isFirstChange()) {
            this.ngOnDestroy();
            this.ngOnInit();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.sub.unsubscribe();
        if (this.sourceAdded) {
            this.MapService.removeSource(this.id);
        }
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        this.MapService.addSource(this.id, {
            type: 'video',
            urls: this.urls,
            coordinates: this.coordinates
        });
        this.sourceAdded = true;
    }
}
VideoSourceComponent.decorators = [
    { type: Component, args: [{
                selector: 'mgl-video-source',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
VideoSourceComponent.ctorParameters = () => [
    { type: MapService }
];
VideoSourceComponent.propDecorators = {
    id: [{ type: Input }],
    urls: [{ type: Input }],
    coordinates: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VideoSourceComponent.prototype.id;
    /** @type {?} */
    VideoSourceComponent.prototype.urls;
    /** @type {?} */
    VideoSourceComponent.prototype.coordinates;
    /**
     * @type {?}
     * @private
     */
    VideoSourceComponent.prototype.sourceAdded;
    /**
     * @type {?}
     * @private
     */
    VideoSourceComponent.prototype.sub;
    /**
     * @type {?}
     * @private
     */
    VideoSourceComponent.prototype.MapService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-mapbox-gl.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxMapboxGLModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static withConfig(config) {
        return {
            ngModule: NgxMapboxGLModule,
            providers: [
                {
                    provide: MAPBOX_API_KEY,
                    useValue: config.accessToken
                },
                {
                    provide: MAPBOX_GEOCODER_API_KEY,
                    useValue: config.geocoderAccessToken || config.accessToken
                }
            ],
        };
    }
}
NgxMapboxGLModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    MapComponent,
                    LayerComponent,
                    DraggableDirective,
                    ImageComponent,
                    VectorSourceComponent,
                    GeoJSONSourceComponent,
                    RasterSourceComponent,
                    ImageSourceComponent,
                    VideoSourceComponent,
                    CanvasSourceComponent,
                    FeatureComponent,
                    MarkerComponent,
                    PopupComponent,
                    ControlComponent,
                    FullscreenControlDirective,
                    NavigationControlDirective,
                    GeocoderControlDirective,
                    GeolocateControlDirective,
                    AttributionControlDirective,
                    ScaleControlDirective,
                    PointDirective,
                    ClusterPointDirective,
                    MarkersForClustersComponent
                ],
                exports: [
                    MapComponent,
                    LayerComponent,
                    DraggableDirective,
                    ImageComponent,
                    VectorSourceComponent,
                    GeoJSONSourceComponent,
                    RasterSourceComponent,
                    ImageSourceComponent,
                    VideoSourceComponent,
                    CanvasSourceComponent,
                    FeatureComponent,
                    MarkerComponent,
                    PopupComponent,
                    ControlComponent,
                    FullscreenControlDirective,
                    NavigationControlDirective,
                    GeocoderControlDirective,
                    GeolocateControlDirective,
                    AttributionControlDirective,
                    ScaleControlDirective,
                    PointDirective,
                    ClusterPointDirective,
                    MarkersForClustersComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/map/map.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MapEvent() { }
if (false) {
    /** @type {?} */
    MapEvent.prototype.resize;
    /** @type {?} */
    MapEvent.prototype.remove;
    /** @type {?} */
    MapEvent.prototype.mouseDown;
    /** @type {?} */
    MapEvent.prototype.mouseUp;
    /** @type {?} */
    MapEvent.prototype.mouseMove;
    /** @type {?} */
    MapEvent.prototype.click;
    /** @type {?} */
    MapEvent.prototype.dblClick;
    /** @type {?} */
    MapEvent.prototype.mouseEnter;
    /** @type {?} */
    MapEvent.prototype.mouseLeave;
    /** @type {?} */
    MapEvent.prototype.mouseOver;
    /** @type {?} */
    MapEvent.prototype.mouseOut;
    /** @type {?} */
    MapEvent.prototype.contextMenu;
    /** @type {?} */
    MapEvent.prototype.touchStart;
    /** @type {?} */
    MapEvent.prototype.touchEnd;
    /** @type {?} */
    MapEvent.prototype.touchMove;
    /** @type {?} */
    MapEvent.prototype.touchCancel;
    /** @type {?} */
    MapEvent.prototype.wheel;
    /** @type {?} */
    MapEvent.prototype.moveStart;
    /** @type {?} */
    MapEvent.prototype.move;
    /** @type {?} */
    MapEvent.prototype.moveEnd;
    /** @type {?} */
    MapEvent.prototype.dragStart;
    /** @type {?} */
    MapEvent.prototype.drag;
    /** @type {?} */
    MapEvent.prototype.dragEnd;
    /** @type {?} */
    MapEvent.prototype.zoomStart;
    /** @type {?} */
    MapEvent.prototype.zoomEvt;
    /** @type {?} */
    MapEvent.prototype.zoomEnd;
    /** @type {?} */
    MapEvent.prototype.rotateStart;
    /** @type {?} */
    MapEvent.prototype.rotate;
    /** @type {?} */
    MapEvent.prototype.rotateEnd;
    /** @type {?} */
    MapEvent.prototype.pitchStart;
    /** @type {?} */
    MapEvent.prototype.pitchEvt;
    /** @type {?} */
    MapEvent.prototype.pitchEnd;
    /** @type {?} */
    MapEvent.prototype.boxZoomStart;
    /** @type {?} */
    MapEvent.prototype.boxZoomEnd;
    /** @type {?} */
    MapEvent.prototype.boxZoomCancel;
    /** @type {?} */
    MapEvent.prototype.webGlContextLost;
    /** @type {?} */
    MapEvent.prototype.webGlContextRestored;
    /** @type {?} */
    MapEvent.prototype.load;
    /** @type {?} */
    MapEvent.prototype.render;
    /** @type {?} */
    MapEvent.prototype.error;
    /** @type {?} */
    MapEvent.prototype.data;
    /** @type {?} */
    MapEvent.prototype.styleData;
    /** @type {?} */
    MapEvent.prototype.sourceData;
    /** @type {?} */
    MapEvent.prototype.dataLoading;
    /** @type {?} */
    MapEvent.prototype.styleDataLoading;
    /** @type {?} */
    MapEvent.prototype.sourceDataLoading;
    /** @type {?} */
    MapEvent.prototype.styleImageMissing;
    /** @type {?} */
    MapEvent.prototype.idle;
}
/**
 * @record
 */
function GeocoderEvent() { }
if (false) {
    /** @type {?} */
    GeocoderEvent.prototype.clear;
    /** @type {?} */
    GeocoderEvent.prototype.loading;
    /** @type {?} */
    GeocoderEvent.prototype.results;
    /** @type {?} */
    GeocoderEvent.prototype.result;
    /** @type {?} */
    GeocoderEvent.prototype.error;
}
/**
 * @record
 */
function MapImageOptions() { }
if (false) {
    /** @type {?} */
    MapImageOptions.prototype.pixelRatio;
    /** @type {?} */
    MapImageOptions.prototype.sdf;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-mapbox-gl.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ControlComponent, CustomControl, GeoJSONSourceComponent, MAPBOX_API_KEY, MAPBOX_GEOCODER_API_KEY, MapComponent, MapService, MglResizeEventEmitter, NgxMapboxGLModule, GeocoderControlDirective as ɵa, LayerComponent as ɵb, DraggableDirective as ɵc, FeatureComponent as ɵd, MarkerComponent as ɵe, ImageComponent as ɵf, VectorSourceComponent as ɵg, RasterSourceComponent as ɵh, ImageSourceComponent as ɵi, VideoSourceComponent as ɵj, CanvasSourceComponent as ɵk, PopupComponent as ɵl, FullscreenControlDirective as ɵm, NavigationControlDirective as ɵn, GeolocateControlDirective as ɵo, AttributionControlDirective as ɵp, ScaleControlDirective as ɵq, PointDirective as ɵr, ClusterPointDirective as ɵs, MarkersForClustersComponent as ɵt };
//# sourceMappingURL=ngx-mapbox-gl.js.map