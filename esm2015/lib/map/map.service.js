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
export const MAPBOX_API_KEY = new InjectionToken('MapboxApiKey');
/**
 * @abstract
 */
export class MglResizeEventEmitter {
}
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
export class MapService {
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
        const markerInstance = new MapboxGl.Marker(options);
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
            const popupInstance = new MapboxGl.Popup(popup.popupOptions);
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        this.mapInstance = new MapboxGl.Map(options);
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
        if (events.move.observers.length) {
            this.mapInstance.on('move', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.move.emit(evt)))));
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWFwYm94LWdsLyIsInNvdXJjZXMiOlsibGliL21hcC9tYXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQWdCLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxLQUFLLFFBQVEsTUFBTSxXQUFXLENBQUM7QUFDdEMsT0FBTyxFQUFFLFlBQVksRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUd2QyxNQUFNLE9BQU8sY0FBYyxHQUFHLElBQUksY0FBYyxDQUFDLGNBQWMsQ0FBQzs7OztBQUVoRSxNQUFNLE9BQWdCLHFCQUFxQjtDQUUxQzs7O0lBREMsNENBQXVDOzs7OztBQUd6Qyw4QkFLQzs7O0lBSkMsK0JBQXFCOztJQUNyQixzQ0FBNEI7O0lBQzVCLDhCQUFnQjs7SUFDaEIsNkJBQW9COzs7OztBQUd0QixnQ0FRQzs7O0lBUEMsa0NBQTZCOztJQUM3QixpQ0FLRTs7Ozs7QUFHSixnQ0FNQzs7O0lBTEMsa0NBQW9DOztJQUNwQyxpQ0FHRTs7Ozs7QUFHSixpQ0FjQzs7O0lBYkMscUNBT0U7O0lBQ0Ysb0NBSUU7O0FBUUosTUFBTSxPQUFPLFVBQVU7Ozs7OztJQWVyQixZQUNVLElBQVksRUFDaUMsY0FBc0IsRUFDOUMscUJBQTRDO1FBRmpFLFNBQUksR0FBSixJQUFJLENBQVE7UUFDaUMsbUJBQWMsR0FBZCxjQUFjLENBQVE7UUFDOUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQVpuRSxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN0QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNyQyxxQkFBZ0IsR0FBYSxFQUFFLENBQUM7UUFD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QUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsWUFBWTs7OztZQUFFLENBQUMsR0FBMkIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7WUFBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxFQUFDLENBQUM7U0FDdEg7UUFDRCxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxZQUFZOzs7O1lBQUUsQ0FBQyxHQUEyQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQUMsQ0FBQztTQUN0SDtRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVc7Ozs7WUFBRSxDQUFDLEdBQTJCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1lBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsRUFBQyxDQUFDO1NBQ3BIO1FBQ0QsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsVUFBVTs7OztZQUFFLENBQUMsR0FBMkIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7WUFBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMs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QyxFQUFFLENBQUMsYUFBYTs7OztZQUFFLENBQUMsR0FBb0QsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7WUFBQyxHQUFHLEVBQUUsQ0FDOUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsRUFBQyxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsUUFBUTs7OztZQUFFLENBQUMsR0FBb0QsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7WUFBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxFQUFDLENBQUM7U0FDdkk7UUFDRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXOzs7O1lBQUUsQ0FBQyxHQUFvRCxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDLEdBQUcsRUFBRSxDQUM1RyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxFQUFDLENBQUM7U0FDaEM7UUFDRCxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxZQUFZOzs7O1lBQUUsQ0FBQyxHQUF1QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQUMsQ0FBQztTQUNsSDtRQUNELElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMs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Ozs7O0lBakJYLGlDQUEwQjs7SUFDMUIsaUNBQThCOztJQUM5QixnQ0FBNkI7O0lBQzdCLCtCQUFvQjs7Ozs7SUFFcEIsZ0NBQThDOzs7OztJQUM5QywrQkFBNkM7Ozs7O0lBQzdDLHNDQUF3Qzs7Ozs7SUFDeEMsdUNBQXlDOzs7OztJQUN6QyxxQ0FBZ0Q7Ozs7O0lBQ2hELG9DQUE4Qzs7Ozs7SUFDOUMsc0NBQXdDOzs7OztJQUN4QyxrQ0FBMEM7Ozs7O0lBR3hDLDBCQUFvQjs7Ozs7SUFDcEIsb0NBQTJFOzs7OztJQUMzRSwyQ0FBeUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIE5nWm9uZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIE1hcGJveEdsIGZyb20gJ21hcGJveC1nbCc7XG5pbXBvcnQgeyBBc3luY1N1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNYXBFdmVudCwgTWFwSW1hZ2VEYXRhLCBNYXBJbWFnZU9wdGlvbnMgfSBmcm9tICcuL21hcC50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBNQVBCT1hfQVBJX0tFWSA9IG5ldyBJbmplY3Rpb25Ub2tlbignTWFwYm94QXBpS2V5Jyk7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNZ2xSZXNpemVFdmVudEVtaXR0ZXIge1xuICBhYnN0cmFjdCByZXNpemVFdmVudDogT2JzZXJ2YWJsZTx2b2lkPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXR1cE1hcCB7XG4gIGFjY2Vzc1Rva2VuPzogc3RyaW5nO1xuICBjdXN0b21NYXBib3hBcGlVcmw/OiBzdHJpbmc7XG4gIG1hcE9wdGlvbnM6IGFueTsgLy8gTWFwYm94R2wuTWFwYm94T3B0aW9uc1xuICBtYXBFdmVudHM6IE1hcEV2ZW50O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNldHVwTGF5ZXIge1xuICBsYXllck9wdGlvbnM6IE1hcGJveEdsLkxheWVyO1xuICBsYXllckV2ZW50czoge1xuICAgIGNsaWNrOiBFdmVudEVtaXR0ZXI8TWFwYm94R2wuTWFwTW91c2VFdmVudD47XG4gICAgbW91c2VFbnRlcjogRXZlbnRFbWl0dGVyPE1hcGJveEdsLk1hcE1vdXNlRXZlbnQ+O1xuICAgIG1vdXNlTGVhdmU6IEV2ZW50RW1pdHRlcjxNYXBib3hHbC5NYXBNb3VzZUV2ZW50PjtcbiAgICBtb3VzZU1vdmU6IEV2ZW50RW1pdHRlcjxNYXBib3hHbC5NYXBNb3VzZUV2ZW50PjtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXR1cFBvcHVwIHtcbiAgcG9wdXBPcHRpb25zOiBNYXBib3hHbC5Qb3B1cE9wdGlvbnM7XG4gIHBvcHVwRXZlbnRzOiB7XG4gICAgb3BlbjogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuICAgIGNsb3NlOiBFdmVudEVtaXR0ZXI8dm9pZD47XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0dXBNYXJrZXIge1xuICBtYXJrZXJzT3B0aW9uczoge1xuICAgIG9mZnNldD86IE1hcGJveEdsLlBvaW50TGlrZTtcbiAgICBhbmNob3I/OiBNYXBib3hHbC5BbmNob3I7XG4gICAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBmZWF0dXJlPzogR2VvSlNPTi5GZWF0dXJlPEdlb0pTT04uUG9pbnQ+O1xuICAgIGxuZ0xhdD86IE1hcGJveEdsLkxuZ0xhdExpa2U7XG4gIH07XG4gIG1hcmtlcnNFdmVudHM6IHtcbiAgICBkcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxNYXBib3hHbC5NYXJrZXI+O1xuICAgIGRyYWc6IEV2ZW50RW1pdHRlcjxNYXBib3hHbC5NYXJrZXI+O1xuICAgIGRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxNYXBib3hHbC5NYXJrZXI+O1xuICB9O1xufVxuXG5leHBvcnQgdHlwZSBNb3ZpbmdPcHRpb25zID0gTWFwYm94R2wuRmx5VG9PcHRpb25zIHxcbiAgKE1hcGJveEdsLkFuaW1hdGlvbk9wdGlvbnMgJiBNYXBib3hHbC5DYW1lcmFPcHRpb25zKSB8XG4gIE1hcGJveEdsLkNhbWVyYU9wdGlvbnM7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNYXBTZXJ2aWNlIHtcbiAgbWFwSW5zdGFuY2U6IE1hcGJveEdsLk1hcDtcbiAgbWFwQ3JlYXRlZCQ6IE9ic2VydmFibGU8dm9pZD47XG4gIG1hcExvYWRlZCQ6IE9ic2VydmFibGU8dm9pZD47XG4gIG1hcEV2ZW50czogTWFwRXZlbnQ7XG5cbiAgcHJpdmF0ZSBtYXBDcmVhdGVkID0gbmV3IEFzeW5jU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIG1hcExvYWRlZCA9IG5ldyBBc3luY1N1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBsYXllcklkc1RvUmVtb3ZlOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIHNvdXJjZUlkc1RvUmVtb3ZlOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIG1hcmtlcnNUb1JlbW92ZTogTWFwYm94R2wuTWFya2VyW10gPSBbXTtcbiAgcHJpdmF0ZSBwb3B1cHNUb1JlbW92ZTogTWFwYm94R2wuUG9wdXBbXSA9IFtdO1xuICBwcml2YXRlIGltYWdlSWRzVG9SZW1vdmU6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUFQQk9YX0FQSV9LRVkpIHByaXZhdGUgcmVhZG9ubHkgTUFQQk9YX0FQSV9LRVk6IHN0cmluZyxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJlYWRvbmx5IE1nbFJlc2l6ZUV2ZW50RW1pdHRlcjogTWdsUmVzaXplRXZlbnRFbWl0dGVyXG4gICkge1xuICAgIHRoaXMubWFwQ3JlYXRlZCQgPSB0aGlzLm1hcENyZWF0ZWQuYXNPYnNlcnZhYmxlKCk7XG4gICAgdGhpcy5tYXBMb2FkZWQkID0gdGhpcy5tYXBMb2FkZWQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBzZXR1cChvcHRpb25zOiBTZXR1cE1hcCkge1xuICAgIC8vIE5lZWQgb25TdGFibGUgdG8gd2FpdCBmb3IgYSBwb3RlbnRpYWwgQGFuZ3VsYXIvcm91dGUgdHJhbnNpdGlvbiB0byBlbmRcbiAgICB0aGlzLnpvbmUub25TdGFibGUucGlwZShmaXJzdCgpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgLy8gV29ya2Fyb3VuZCByb2xsdXAgaXNzdWVcbiAgICAgIHRoaXMuYXNzaWduKE1hcGJveEdsLCAnYWNjZXNzVG9rZW4nLCBvcHRpb25zLmFjY2Vzc1Rva2VuIHx8IHRoaXMuTUFQQk9YX0FQSV9LRVkpO1xuICAgICAgaWYgKG9wdGlvbnMuY3VzdG9tTWFwYm94QXBpVXJsKSB7XG4gICAgICAgIHRoaXMuYXNzaWduKE1hcGJveEdsLCAnY29uZmlnLkFQSV9VUkwnLCBvcHRpb25zLmN1c3RvbU1hcGJveEFwaVVybCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNyZWF0ZU1hcChvcHRpb25zLm1hcE9wdGlvbnMpO1xuICAgICAgdGhpcy5ob29rRXZlbnRzKG9wdGlvbnMubWFwRXZlbnRzKTtcbiAgICAgIHRoaXMubWFwRXZlbnRzID0gb3B0aW9ucy5tYXBFdmVudHM7XG4gICAgICB0aGlzLm1hcENyZWF0ZWQubmV4dCh1bmRlZmluZWQpO1xuICAgICAgdGhpcy5tYXBDcmVhdGVkLmNvbXBsZXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBkZXN0cm95TWFwKCkge1xuICAgIGlmICh0aGlzLm1hcEluc3RhbmNlKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVNaW5ab29tKG1pblpvb206IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5zZXRNaW5ab29tKG1pblpvb20pO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlTWF4Wm9vbShtYXhab29tOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uuc2V0TWF4Wm9vbShtYXhab29tKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVNjcm9sbFpvb20oc3RhdHVzOiBib29sZWFuKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBzdGF0dXMgPyB0aGlzLm1hcEluc3RhbmNlLnNjcm9sbFpvb20uZW5hYmxlKCkgOiB0aGlzLm1hcEluc3RhbmNlLnNjcm9sbFpvb20uZGlzYWJsZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlRHJhZ1JvdGF0ZShzdGF0dXM6IGJvb2xlYW4pIHtcbiAgICByZXR1cm4gdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHN0YXR1cyA/IHRoaXMubWFwSW5zdGFuY2UuZHJhZ1JvdGF0ZS5lbmFibGUoKSA6IHRoaXMubWFwSW5zdGFuY2UuZHJhZ1JvdGF0ZS5kaXNhYmxlKCk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVUb3VjaFpvb21Sb3RhdGUoc3RhdHVzOiBib29sZWFuKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBzdGF0dXMgPyB0aGlzLm1hcEluc3RhbmNlLnRvdWNoWm9vbVJvdGF0ZS5lbmFibGUoKSA6IHRoaXMubWFwSW5zdGFuY2UudG91Y2hab29tUm90YXRlLmRpc2FibGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZURvdWJsZUNsaWNrWm9vbShzdGF0dXM6IGJvb2xlYW4pIHtcbiAgICByZXR1cm4gdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHN0YXR1cyA/IHRoaXMubWFwSW5zdGFuY2UuZG91YmxlQ2xpY2tab29tLmVuYWJsZSgpIDogdGhpcy5tYXBJbnN0YW5jZS5kb3VibGVDbGlja1pvb20uZGlzYWJsZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlS2V5Ym9hcmQoc3RhdHVzOiBib29sZWFuKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBzdGF0dXMgPyB0aGlzLm1hcEluc3RhbmNlLmtleWJvYXJkLmVuYWJsZSgpIDogdGhpcy5tYXBJbnN0YW5jZS5rZXlib2FyZC5kaXNhYmxlKCk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVEcmFnUGFuKHN0YXR1czogYm9vbGVhbikge1xuICAgIHJldHVybiB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgc3RhdHVzID8gdGhpcy5tYXBJbnN0YW5jZS5kcmFnUGFuLmVuYWJsZSgpIDogdGhpcy5tYXBJbnN0YW5jZS5kcmFnUGFuLmRpc2FibGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUJveFpvb20oc3RhdHVzOiBib29sZWFuKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBzdGF0dXMgPyB0aGlzLm1hcEluc3RhbmNlLmJveFpvb20uZW5hYmxlKCkgOiB0aGlzLm1hcEluc3RhbmNlLmJveFpvb20uZGlzYWJsZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlU3R5bGUoc3R5bGU6IE1hcGJveEdsLlN0eWxlKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLnNldFN0eWxlKHN0eWxlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZU1heEJvdW5kcyhtYXhCb3VuZHM6IE1hcGJveEdsLkxuZ0xhdEJvdW5kc0xpa2UpIHtcbiAgICByZXR1cm4gdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uuc2V0TWF4Qm91bmRzKG1heEJvdW5kcyk7XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2VDYW52YXNDdXJzb3IoY3Vyc29yOiBzdHJpbmcpIHtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLm1hcEluc3RhbmNlLmdldENhbnZhc0NvbnRhaW5lcigpO1xuICAgIGNhbnZhcy5zdHlsZS5jdXJzb3IgPSBjdXJzb3I7XG4gIH1cblxuICBxdWVyeVJlbmRlcmVkRmVhdHVyZXMoXG4gICAgcG9pbnRPckJveD86IE1hcGJveEdsLlBvaW50TGlrZSB8IFtNYXBib3hHbC5Qb2ludExpa2UsIE1hcGJveEdsLlBvaW50TGlrZV0sXG4gICAgcGFyYW1ldGVycz86IHsgbGF5ZXJzPzogc3RyaW5nW10sIGZpbHRlcj86IGFueVtdIH1cbiAgKTogR2VvSlNPTi5GZWF0dXJlPEdlb0pTT04uR2VvbWV0cnlPYmplY3Q+W10ge1xuICAgIHJldHVybiB0aGlzLm1hcEluc3RhbmNlLnF1ZXJ5UmVuZGVyZWRGZWF0dXJlcyhwb2ludE9yQm94LCBwYXJhbWV0ZXJzKTtcbiAgfVxuXG4gIHBhblRvKGNlbnRlcjogTWFwYm94R2wuTG5nTGF0TGlrZSwgb3B0aW9ucz86IE1hcGJveEdsLkFuaW1hdGlvbk9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2UucGFuVG8oY2VudGVyLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1vdmUoXG4gICAgbW92aW5nTWV0aG9kOiAnanVtcFRvJyB8ICdlYXNlVG8nIHwgJ2ZseVRvJyxcbiAgICBtb3ZpbmdPcHRpb25zPzogTW92aW5nT3B0aW9ucyxcbiAgICB6b29tPzogbnVtYmVyLFxuICAgIGNlbnRlcj86IE1hcGJveEdsLkxuZ0xhdExpa2UsXG4gICAgYmVhcmluZz86IG51bWJlcixcbiAgICBwaXRjaD86IG51bWJlclxuICApIHtcbiAgICByZXR1cm4gdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICg8YW55PnRoaXMubWFwSW5zdGFuY2VbbW92aW5nTWV0aG9kXSkoe1xuICAgICAgICAuLi5tb3ZpbmdPcHRpb25zLFxuICAgICAgICB6b29tOiB6b29tID8gem9vbSA6IHRoaXMubWFwSW5zdGFuY2UuZ2V0Wm9vbSgpLFxuICAgICAgICBjZW50ZXI6IGNlbnRlciA/IGNlbnRlciA6IHRoaXMubWFwSW5zdGFuY2UuZ2V0Q2VudGVyKCksXG4gICAgICAgIGJlYXJpbmc6IGJlYXJpbmcgPyBiZWFyaW5nIDogdGhpcy5tYXBJbnN0YW5jZS5nZXRCZWFyaW5nKCksXG4gICAgICAgIHBpdGNoOiBwaXRjaCA/IHBpdGNoIDogdGhpcy5tYXBJbnN0YW5jZS5nZXRQaXRjaCgpXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZExheWVyKGxheWVyOiBTZXR1cExheWVyLCBiaW5kRXZlbnRzOiBib29sZWFuLCBiZWZvcmU/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgT2JqZWN0LmtleXMobGF5ZXIubGF5ZXJPcHRpb25zKVxuICAgICAgICAuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBjb25zdCB0a2V5ID0gPGtleW9mIE1hcGJveEdsLkxheWVyPmtleTtcbiAgICAgICAgICBpZiAobGF5ZXIubGF5ZXJPcHRpb25zW3RrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBsYXllci5sYXllck9wdGlvbnNbdGtleV07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2UuYWRkTGF5ZXIobGF5ZXIubGF5ZXJPcHRpb25zLCBiZWZvcmUpO1xuICAgICAgaWYgKGJpbmRFdmVudHMpIHtcbiAgICAgICAgaWYgKGxheWVyLmxheWVyRXZlbnRzLmNsaWNrLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCdjbGljaycsIGxheWVyLmxheWVyT3B0aW9ucy5pZCwgKGV2dDogTWFwYm94R2wuTWFwTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIGxheWVyLmxheWVyRXZlbnRzLmNsaWNrLmVtaXQoZXZ0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXllci5sYXllckV2ZW50cy5tb3VzZUVudGVyLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCdtb3VzZWVudGVyJywgbGF5ZXIubGF5ZXJPcHRpb25zLmlkLCAoZXZ0OiBNYXBib3hHbC5NYXBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgbGF5ZXIubGF5ZXJFdmVudHMubW91c2VFbnRlci5lbWl0KGV2dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGF5ZXIubGF5ZXJFdmVudHMubW91c2VMZWF2ZS5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbignbW91c2VsZWF2ZScsIGxheWVyLmxheWVyT3B0aW9ucy5pZCwgKGV2dDogTWFwYm94R2wuTWFwTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIGxheWVyLmxheWVyRXZlbnRzLm1vdXNlTGVhdmUuZW1pdChldnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxheWVyLmxheWVyRXZlbnRzLm1vdXNlTW92ZS5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbignbW91c2Vtb3ZlJywgbGF5ZXIubGF5ZXJPcHRpb25zLmlkLCAoZXZ0OiBNYXBib3hHbC5NYXBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgbGF5ZXIubGF5ZXJFdmVudHMubW91c2VNb3ZlLmVtaXQoZXZ0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVMYXllcihsYXllcklkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxheWVySWRzVG9SZW1vdmUucHVzaChsYXllcklkKTtcbiAgfVxuXG4gIGFkZE1hcmtlcihtYXJrZXI6IFNldHVwTWFya2VyKSB7XG4gICAgY29uc3Qgb3B0aW9uczogTWFwYm94R2wuTWFya2VyT3B0aW9ucyA9IHtcbiAgICAgIG9mZnNldDogbWFya2VyLm1hcmtlcnNPcHRpb25zLm9mZnNldCxcbiAgICAgIGFuY2hvcjogbWFya2VyLm1hcmtlcnNPcHRpb25zLmFuY2hvcixcbiAgICAgIGRyYWdnYWJsZTogISFtYXJrZXIubWFya2Vyc09wdGlvbnMuZHJhZ2dhYmxlXG4gICAgfTtcbiAgICBpZiAobWFya2VyLm1hcmtlcnNPcHRpb25zLmVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICBvcHRpb25zLmVsZW1lbnQgPSBtYXJrZXIubWFya2Vyc09wdGlvbnMuZWxlbWVudDtcbiAgICB9XG4gICAgY29uc3QgbWFya2VySW5zdGFuY2UgPSBuZXcgTWFwYm94R2wuTWFya2VyKG9wdGlvbnMpO1xuICAgIGlmIChtYXJrZXIubWFya2Vyc0V2ZW50cy5kcmFnU3RhcnQub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgbWFya2VySW5zdGFuY2Uub24oJ2RyYWdzdGFydCcsIChldmVudDogeyB0YXJnZXQ6IE1hcGJveEdsLk1hcmtlciB9KSA9PlxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IG1hcmtlci5tYXJrZXJzRXZlbnRzLmRyYWdTdGFydC5lbWl0KGV2ZW50LnRhcmdldCkpXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAobWFya2VyLm1hcmtlcnNFdmVudHMuZHJhZy5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICBtYXJrZXJJbnN0YW5jZS5vbignZHJhZycsIChldmVudDogeyB0YXJnZXQ6IE1hcGJveEdsLk1hcmtlciB9KSA9PlxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IG1hcmtlci5tYXJrZXJzRXZlbnRzLmRyYWcuZW1pdChldmVudC50YXJnZXQpKVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKG1hcmtlci5tYXJrZXJzRXZlbnRzLmRyYWdFbmQub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgbWFya2VySW5zdGFuY2Uub24oJ2RyYWdlbmQnLCAoZXZlbnQ6IHsgdGFyZ2V0OiBNYXBib3hHbC5NYXJrZXIgfSkgPT5cbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiBtYXJrZXIubWFya2Vyc0V2ZW50cy5kcmFnRW5kLmVtaXQoZXZlbnQudGFyZ2V0KSlcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IGxuZ0xhdDogTWFwYm94R2wuTG5nTGF0TGlrZSA9IG1hcmtlci5tYXJrZXJzT3B0aW9ucy5mZWF0dXJlID9cbiAgICAgIDxbbnVtYmVyLCBudW1iZXJdPm1hcmtlci5tYXJrZXJzT3B0aW9ucy5mZWF0dXJlLmdlb21ldHJ5IS5jb29yZGluYXRlcyA6XG4gICAgICBtYXJrZXIubWFya2Vyc09wdGlvbnMubG5nTGF0ITtcbiAgICBtYXJrZXJJbnN0YW5jZS5zZXRMbmdMYXQobG5nTGF0KTtcbiAgICByZXR1cm4gdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIG1hcmtlckluc3RhbmNlLmFkZFRvKHRoaXMubWFwSW5zdGFuY2UpO1xuICAgICAgcmV0dXJuIG1hcmtlckluc3RhbmNlO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlTWFya2VyKG1hcmtlcjogTWFwYm94R2wuTWFya2VyKSB7XG4gICAgdGhpcy5tYXJrZXJzVG9SZW1vdmUucHVzaChtYXJrZXIpO1xuICB9XG5cbiAgY3JlYXRlUG9wdXAocG9wdXA6IFNldHVwUG9wdXAsIGVsZW1lbnQ6IE5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHBvcHVwLnBvcHVwT3B0aW9ucylcbiAgICAgICAgLmZvckVhY2goKGtleSkgPT5cbiAgICAgICAgICAoPGFueT5wb3B1cC5wb3B1cE9wdGlvbnMpW2tleV0gPT09IHVuZGVmaW5lZCAmJiBkZWxldGUgKDxhbnk+cG9wdXAucG9wdXBPcHRpb25zKVtrZXldKTtcbiAgICAgIGNvbnN0IHBvcHVwSW5zdGFuY2UgPSBuZXcgTWFwYm94R2wuUG9wdXAocG9wdXAucG9wdXBPcHRpb25zKTtcbiAgICAgIHBvcHVwSW5zdGFuY2Uuc2V0RE9NQ29udGVudChlbGVtZW50KTtcbiAgICAgIGlmIChwb3B1cC5wb3B1cEV2ZW50cy5jbG9zZS5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgIHBvcHVwSW5zdGFuY2Uub24oJ2Nsb3NlJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgcG9wdXAucG9wdXBFdmVudHMuY2xvc2UuZW1pdCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChwb3B1cC5wb3B1cEV2ZW50cy5vcGVuLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgcG9wdXBJbnN0YW5jZS5vbignb3BlbicsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHBvcHVwLnBvcHVwRXZlbnRzLm9wZW4uZW1pdCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwb3B1cEluc3RhbmNlO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkUG9wdXBUb01hcChwb3B1cDogTWFwYm94R2wuUG9wdXAsIGxuZ0xhdDogTWFwYm94R2wuTG5nTGF0TGlrZSwgc2tpcE9wZW5FdmVudCA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBpZiAoc2tpcE9wZW5FdmVudCAmJiAoPGFueT5wb3B1cCkuX2xpc3RlbmVycykge1xuICAgICAgICBkZWxldGUgKDxhbnk+cG9wdXApLl9saXN0ZW5lcnNbJ29wZW4nXTtcbiAgICAgIH1cbiAgICAgIHBvcHVwLnNldExuZ0xhdChsbmdMYXQpO1xuICAgICAgcG9wdXAuYWRkVG8odGhpcy5tYXBJbnN0YW5jZSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRQb3B1cFRvTWFya2VyKG1hcmtlcjogTWFwYm94R2wuTWFya2VyLCBwb3B1cDogTWFwYm94R2wuUG9wdXApIHtcbiAgICByZXR1cm4gdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIG1hcmtlci5zZXRQb3B1cChwb3B1cCk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVQb3B1cEZyb21NYXAocG9wdXA6IE1hcGJveEdsLlBvcHVwLCBza2lwQ2xvc2VFdmVudCA9IGZhbHNlKSB7XG4gICAgaWYgKHNraXBDbG9zZUV2ZW50ICYmICg8YW55PnBvcHVwKS5fbGlzdGVuZXJzKSB7XG4gICAgICBkZWxldGUgKDxhbnk+cG9wdXApLl9saXN0ZW5lcnNbJ2Nsb3NlJ107XG4gICAgfVxuICAgIHRoaXMucG9wdXBzVG9SZW1vdmUucHVzaChwb3B1cCk7XG4gIH1cblxuICByZW1vdmVQb3B1cEZyb21NYXJrZXIobWFya2VyOiBNYXBib3hHbC5NYXJrZXIpIHtcbiAgICByZXR1cm4gdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIG1hcmtlci5zZXRQb3B1cCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQ29udHJvbChjb250cm9sOiBNYXBib3hHbC5Db250cm9sIHwgTWFwYm94R2wuSUNvbnRyb2wsIHBvc2l0aW9uPzogJ3RvcC1yaWdodCcgfCAndG9wLWxlZnQnIHwgJ2JvdHRvbS1yaWdodCcgfCAnYm90dG9tLWxlZnQnKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLmFkZENvbnRyb2woPGFueT5jb250cm9sLCBwb3NpdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVDb250cm9sKGNvbnRyb2w6IE1hcGJveEdsLkNvbnRyb2wgfCBNYXBib3hHbC5JQ29udHJvbCkge1xuICAgIHJldHVybiB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5yZW1vdmVDb250cm9sKDxhbnk+Y29udHJvbCk7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBsb2FkQW5kQWRkSW1hZ2UoaW1hZ2VJZDogc3RyaW5nLCB1cmw6IHN0cmluZywgb3B0aW9ucz86IE1hcEltYWdlT3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdGhpcy5tYXBJbnN0YW5jZS5sb2FkSW1hZ2UodXJsLCAoZXJyb3I6IHsgc3RhdHVzOiBudW1iZXIgfSB8IG51bGwsIGltYWdlOiBJbWFnZURhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuYWRkSW1hZ2UoaW1hZ2VJZCwgaW1hZ2UsIG9wdGlvbnMpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEltYWdlKGltYWdlSWQ6IHN0cmluZywgZGF0YTogTWFwSW1hZ2VEYXRhLCBvcHRpb25zPzogTWFwSW1hZ2VPcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLmFkZEltYWdlKGltYWdlSWQsIDxhbnk+ZGF0YSwgb3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVJbWFnZShpbWFnZUlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmltYWdlSWRzVG9SZW1vdmUucHVzaChpbWFnZUlkKTtcbiAgfVxuXG4gIGFkZFNvdXJjZShzb3VyY2VJZDogc3RyaW5nLCBzb3VyY2U6IE1hcGJveEdsLkFueVNvdXJjZURhdGEpIHtcbiAgICByZXR1cm4gdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSlcbiAgICAgICAgLmZvckVhY2goKGtleSkgPT5cbiAgICAgICAgICAoPGFueT5zb3VyY2UpW2tleV0gPT09IHVuZGVmaW5lZCAmJiBkZWxldGUgKDxhbnk+c291cmNlKVtrZXldKTtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2UuYWRkU291cmNlKHNvdXJjZUlkLCBzb3VyY2UpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0U291cmNlPFQ+KHNvdXJjZUlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gPFQ+PGFueT50aGlzLm1hcEluc3RhbmNlLmdldFNvdXJjZShzb3VyY2VJZCk7XG4gIH1cblxuICByZW1vdmVTb3VyY2Uoc291cmNlSWQ6IHN0cmluZykge1xuICAgIHRoaXMuc291cmNlSWRzVG9SZW1vdmUucHVzaChzb3VyY2VJZCk7XG4gIH1cblxuICBzZXRBbGxMYXllclBhaW50UHJvcGVydHkoXG4gICAgbGF5ZXJJZDogc3RyaW5nLFxuICAgIHBhaW50OiBNYXBib3hHbC5CYWNrZ3JvdW5kUGFpbnQgfFxuICAgICAgTWFwYm94R2wuRmlsbFBhaW50IHxcbiAgICAgIE1hcGJveEdsLkZpbGxFeHRydXNpb25QYWludCB8XG4gICAgICBNYXBib3hHbC5MaW5lUGFpbnQgfFxuICAgICAgTWFwYm94R2wuU3ltYm9sUGFpbnQgfFxuICAgICAgTWFwYm94R2wuUmFzdGVyUGFpbnQgfFxuICAgICAgTWFwYm94R2wuQ2lyY2xlUGFpbnRcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhwYWludCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIC8vIFRPRE8gQ2hlY2sgZm9yIHBlcmYsIHNldFBhaW50UHJvcGVydHkgb25seSBvbiBjaGFuZ2VkIHBhaW50IHByb3BzIG1heWJlXG4gICAgICAgIHRoaXMubWFwSW5zdGFuY2Uuc2V0UGFpbnRQcm9wZXJ0eShsYXllcklkLCBrZXksICg8YW55PnBhaW50KVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0QWxsTGF5ZXJMYXlvdXRQcm9wZXJ0eShcbiAgICBsYXllcklkOiBzdHJpbmcsXG4gICAgbGF5b3V0OiBNYXBib3hHbC5CYWNrZ3JvdW5kTGF5b3V0IHxcbiAgICAgIE1hcGJveEdsLkZpbGxMYXlvdXQgfFxuICAgICAgTWFwYm94R2wuRmlsbEV4dHJ1c2lvbkxheW91dCB8XG4gICAgICBNYXBib3hHbC5MaW5lTGF5b3V0IHxcbiAgICAgIE1hcGJveEdsLlN5bWJvbExheW91dCB8XG4gICAgICBNYXBib3hHbC5SYXN0ZXJMYXlvdXQgfFxuICAgICAgTWFwYm94R2wuQ2lyY2xlTGF5b3V0XG4gICkge1xuICAgIHJldHVybiB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgT2JqZWN0LmtleXMobGF5b3V0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgLy8gVE9ETyBDaGVjayBmb3IgcGVyZiwgc2V0UGFpbnRQcm9wZXJ0eSBvbmx5IG9uIGNoYW5nZWQgcGFpbnQgcHJvcHMgbWF5YmVcbiAgICAgICAgdGhpcy5tYXBJbnN0YW5jZS5zZXRMYXlvdXRQcm9wZXJ0eShsYXllcklkLCBrZXksICg8YW55PmxheW91dClba2V5XSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldExheWVyRmlsdGVyKGxheWVySWQ6IHN0cmluZywgZmlsdGVyOiBhbnlbXSkge1xuICAgIHJldHVybiB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5zZXRGaWx0ZXIobGF5ZXJJZCwgZmlsdGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldExheWVyQmVmb3JlKGxheWVySWQ6IHN0cmluZywgYmVmb3JlSWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5tb3ZlTGF5ZXIobGF5ZXJJZCwgYmVmb3JlSWQpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0TGF5ZXJab29tUmFuZ2UobGF5ZXJJZDogc3RyaW5nLCBtaW5ab29tPzogbnVtYmVyLCBtYXhab29tPzogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLnNldExheWVyWm9vbVJhbmdlKGxheWVySWQsIG1pblpvb20gPyBtaW5ab29tIDogMCwgbWF4Wm9vbSA/IG1heFpvb20gOiAyMCk7XG4gICAgfSk7XG4gIH1cblxuICBmaXRCb3VuZHMoYm91bmRzOiBNYXBib3hHbC5MbmdMYXRCb3VuZHNMaWtlLCBvcHRpb25zPzogTWFwYm94R2wuRml0Qm91bmRzT3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5maXRCb3VuZHMoYm91bmRzLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpdFNjcmVlbkNvb3JkaW5hdGVzKFxuICAgIHBvaW50czogW01hcGJveEdsLlBvaW50TGlrZSwgTWFwYm94R2wuUG9pbnRMaWtlXSxcbiAgICBiZWFyaW5nOiBudW1iZXIsXG4gICAgb3B0aW9ucz86IE1hcGJveEdsLkFuaW1hdGlvbk9wdGlvbnMgJiBNYXBib3hHbC5DYW1lcmFPcHRpb25zXG4gICkge1xuICAgIHJldHVybiB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5maXRTY3JlZW5Db29yZGluYXRlcyhwb2ludHNbMF0sIHBvaW50c1sxXSwgYmVhcmluZywgb3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cblxuICBhcHBseUNoYW5nZXMoKSB7XG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlTGF5ZXJzKCk7XG4gICAgICB0aGlzLnJlbW92ZVNvdXJjZXMoKTtcbiAgICAgIHRoaXMucmVtb3ZlTWFya2VycygpO1xuICAgICAgdGhpcy5yZW1vdmVQb3B1cHMoKTtcbiAgICAgIHRoaXMucmVtb3ZlSW1hZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZU1hcChvcHRpb25zOiBNYXBib3hHbC5NYXBib3hPcHRpb25zKSB7XG4gICAgTmdab25lLmFzc2VydE5vdEluQW5ndWxhclpvbmUoKTtcbiAgICBPYmplY3Qua2V5cyhvcHRpb25zKVxuICAgICAgLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHRrZXkgPSA8a2V5b2YgTWFwYm94R2wuTWFwYm94T3B0aW9ucz5rZXk7XG4gICAgICAgIGlmIChvcHRpb25zW3RrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBkZWxldGUgb3B0aW9uc1t0a2V5XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgdGhpcy5tYXBJbnN0YW5jZSA9IG5ldyBNYXBib3hHbC5NYXAob3B0aW9ucyk7XG5cbiAgICBjb25zdCBpc0lFb3JFZGdlID0gd2luZG93ICYmIC9tc2llXFxzfHRyaWRlbnRcXC98ZWRnZVxcLy9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIGlmIChpc0lFb3JFZGdlKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLnNldFN0eWxlKG9wdGlvbnMuc3R5bGUhKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdWJDaGFuZ2VzID0gdGhpcy56b25lLm9uTWljcm90YXNrRW1wdHlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5hcHBseUNoYW5nZXMoKSk7XG4gICAgaWYgKHRoaXMuTWdsUmVzaXplRXZlbnRFbWl0dGVyKSB7XG4gICAgICBjb25zdCBzdWJSZXNpemUgPSB0aGlzLk1nbFJlc2l6ZUV2ZW50RW1pdHRlci5yZXNpemVFdmVudC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLm1hcEluc3RhbmNlLnJlc2l6ZSgpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoc3ViUmVzaXplKTtcbiAgICB9XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKHN1YkNoYW5nZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVMYXllcnMoKSB7XG4gICAgZm9yIChjb25zdCBsYXllcklkIG9mIHRoaXMubGF5ZXJJZHNUb1JlbW92ZSkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5yZW1vdmVMYXllcihsYXllcklkKTtcbiAgICB9XG4gICAgdGhpcy5sYXllcklkc1RvUmVtb3ZlID0gW107XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVNvdXJjZXMoKSB7XG4gICAgZm9yIChjb25zdCBzb3VyY2VJZCBvZiB0aGlzLnNvdXJjZUlkc1RvUmVtb3ZlKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLnJlbW92ZVNvdXJjZShzb3VyY2VJZCk7XG4gICAgfVxuICAgIHRoaXMuc291cmNlSWRzVG9SZW1vdmUgPSBbXTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlTWFya2VycygpIHtcbiAgICBmb3IgKGNvbnN0IG1hcmtlciBvZiB0aGlzLm1hcmtlcnNUb1JlbW92ZSkge1xuICAgICAgbWFya2VyLnJlbW92ZSgpO1xuICAgIH1cbiAgICB0aGlzLm1hcmtlcnNUb1JlbW92ZSA9IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVQb3B1cHMoKSB7XG4gICAgZm9yIChjb25zdCBwb3B1cCBvZiB0aGlzLnBvcHVwc1RvUmVtb3ZlKSB7XG4gICAgICBwb3B1cC5yZW1vdmUoKTtcbiAgICB9XG4gICAgdGhpcy5wb3B1cHNUb1JlbW92ZSA9IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVJbWFnZXMoKSB7XG4gICAgZm9yIChjb25zdCBpbWFnZUlkIG9mIHRoaXMuaW1hZ2VJZHNUb1JlbW92ZSkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5yZW1vdmVJbWFnZShpbWFnZUlkKTtcbiAgICB9XG4gICAgdGhpcy5pbWFnZUlkc1RvUmVtb3ZlID0gW107XG4gIH1cblxuICBwcml2YXRlIGhvb2tFdmVudHMoZXZlbnRzOiBNYXBFdmVudCkge1xuICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ2xvYWQnLCAoKSA9PiB7XG4gICAgICB0aGlzLm1hcExvYWRlZC5uZXh0KHVuZGVmaW5lZCk7XG4gICAgICB0aGlzLm1hcExvYWRlZC5jb21wbGV0ZSgpO1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMubG9hZC5lbWl0KHRoaXMubWFwSW5zdGFuY2UpKTtcbiAgICB9KTtcbiAgICBpZiAoZXZlbnRzLnJlc2l6ZS5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCdyZXNpemUnLCAoKSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5yZXNpemUuZW1pdCgpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMucmVtb3ZlLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ3JlbW92ZScsICgpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLnJlbW92ZS5lbWl0KCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5tb3VzZURvd24ub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbignbW91c2Vkb3duJywgKGV2dDogTWFwYm94R2wuTWFwTW91c2VFdmVudCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMubW91c2VEb3duLmVtaXQoZXZ0KSkpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLm1vdXNlVXAub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbignbW91c2V1cCcsIChldnQ6IE1hcGJveEdsLk1hcE1vdXNlRXZlbnQpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLm1vdXNlVXAuZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMubW91c2VNb3ZlLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ21vdXNlbW92ZScsIChldnQ6IE1hcGJveEdsLk1hcE1vdXNlRXZlbnQpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLm1vdXNlTW92ZS5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5jbGljay5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCdjbGljaycsIChldnQ6IE1hcGJveEdsLk1hcE1vdXNlRXZlbnQpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLmNsaWNrLmVtaXQoZXZ0KSkpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLmRibENsaWNrLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ2RibGNsaWNrJywgKGV2dDogTWFwYm94R2wuTWFwTW91c2VFdmVudCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMuZGJsQ2xpY2suZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMubW91c2VFbnRlci5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCdtb3VzZWVudGVyJywgKGV2dDogTWFwYm94R2wuTWFwTW91c2VFdmVudCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMubW91c2VFbnRlci5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5tb3VzZUxlYXZlLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ21vdXNlbGVhdmUnLCAoZXZ0OiBNYXBib3hHbC5NYXBNb3VzZUV2ZW50KSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5tb3VzZUxlYXZlLmVtaXQoZXZ0KSkpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLm1vdXNlT3Zlci5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCdtb3VzZW92ZXInLCAoZXZ0OiBNYXBib3hHbC5NYXBNb3VzZUV2ZW50KSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5tb3VzZU92ZXIuZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMubW91c2VPdXQub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbignbW91c2VvdXQnLCAoZXZ0OiBNYXBib3hHbC5NYXBNb3VzZUV2ZW50KSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5tb3VzZU91dC5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5jb250ZXh0TWVudS5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCdjb250ZXh0bWVudScsIChldnQ6IE1hcGJveEdsLk1hcE1vdXNlRXZlbnQpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLmNvbnRleHRNZW51LmVtaXQoZXZ0KSkpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLnRvdWNoU3RhcnQub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbigndG91Y2hzdGFydCcsIChldnQ6IE1hcGJveEdsLk1hcFRvdWNoRXZlbnQpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLnRvdWNoU3RhcnQuZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMudG91Y2hFbmQub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbigndG91Y2hlbmQnLCAoZXZ0OiBNYXBib3hHbC5NYXBUb3VjaEV2ZW50KSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy50b3VjaEVuZC5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy50b3VjaE1vdmUub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbigndG91Y2htb3ZlJywgKGV2dDogTWFwYm94R2wuTWFwVG91Y2hFdmVudCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMudG91Y2hNb3ZlLmVtaXQoZXZ0KSkpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLnRvdWNoQ2FuY2VsLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ3RvdWNoY2FuY2VsJywgKGV2dDogTWFwYm94R2wuTWFwVG91Y2hFdmVudCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMudG91Y2hDYW5jZWwuZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMud2hlZWwub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgLy8gTWFwYm94R2wuTWFwV2hlZWxFdmVudFxuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbignd2hlZWwnLCAoZXZ0OiBhbnkpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLndoZWVsLmVtaXQoZXZ0KSkpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLm1vdmVTdGFydC5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCdtb3Zlc3RhcnQnLCAoZXZ0OiBEcmFnRXZlbnQpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLm1vdmVTdGFydC5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5tb3ZlLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ21vdmUnLCAoZXZ0OiBNYXBib3hHbC5NYXBUb3VjaEV2ZW50IHwgTWFwYm94R2wuTWFwTW91c2VFdmVudCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMubW92ZS5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5tb3ZlRW5kLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ21vdmVlbmQnLCAoZXZ0OiBEcmFnRXZlbnQpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLm1vdmVFbmQuZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMuZHJhZ1N0YXJ0Lm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ2RyYWdzdGFydCcsIChldnQ6IERyYWdFdmVudCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMuZHJhZ1N0YXJ0LmVtaXQoZXZ0KSkpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLmRyYWcub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbignZHJhZycsIChldnQ6IE1hcGJveEdsLk1hcFRvdWNoRXZlbnQgfCBNYXBib3hHbC5NYXBNb3VzZUV2ZW50KSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5kcmFnLmVtaXQoZXZ0KSkpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLmRyYWdFbmQub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbignZHJhZ2VuZCcsIChldnQ6IERyYWdFdmVudCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMuZHJhZ0VuZC5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy56b29tU3RhcnQub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbignem9vbXN0YXJ0JywgKGV2dDogTWFwYm94R2wuTWFwVG91Y2hFdmVudCB8IE1hcGJveEdsLk1hcE1vdXNlRXZlbnQpID0+IHRoaXMuem9uZS5ydW4oKCkgPT5cbiAgICAgICAgZXZlbnRzLnpvb21TdGFydC5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy56b29tRXZ0Lm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ3pvb20nLCAoZXZ0OiBNYXBib3hHbC5NYXBUb3VjaEV2ZW50IHwgTWFwYm94R2wuTWFwTW91c2VFdmVudCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMuem9vbUV2dC5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy56b29tRW5kLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ3pvb21lbmQnLCAoZXZ0OiBNYXBib3hHbC5NYXBUb3VjaEV2ZW50IHwgTWFwYm94R2wuTWFwTW91c2VFdmVudCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PlxuICAgICAgICBldmVudHMuem9vbUVuZC5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5yb3RhdGVTdGFydC5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCdyb3RhdGVzdGFydCcsIChldnQ6IE1hcGJveEdsLk1hcFRvdWNoRXZlbnQgfCBNYXBib3hHbC5NYXBNb3VzZUV2ZW50KSA9PiB0aGlzLnpvbmUucnVuKCgpID0+XG4gICAgICAgIGV2ZW50cy5yb3RhdGVTdGFydC5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5yb3RhdGUub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbigncm90YXRlJywgKGV2dDogTWFwYm94R2wuTWFwVG91Y2hFdmVudCB8IE1hcGJveEdsLk1hcE1vdXNlRXZlbnQpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLnJvdGF0ZS5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5yb3RhdGVFbmQub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbigncm90YXRlZW5kJywgKGV2dDogTWFwYm94R2wuTWFwVG91Y2hFdmVudCB8IE1hcGJveEdsLk1hcE1vdXNlRXZlbnQpID0+IHRoaXMuem9uZS5ydW4oKCkgPT5cbiAgICAgICAgZXZlbnRzLnJvdGF0ZUVuZC5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5waXRjaFN0YXJ0Lm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ3BpdGNoc3RhcnQnLCAoZXZ0OiBNYXBib3hHbC5FdmVudERhdGEpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLnBpdGNoU3RhcnQuZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMucGl0Y2hFdnQub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbigncGl0Y2gnLCAoZXZ0OiBNYXBib3hHbC5FdmVudERhdGEpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLnBpdGNoRXZ0LmVtaXQoZXZ0KSkpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLnBpdGNoRW5kLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ3BpdGNoZW5kJywgKGV2dDogTWFwYm94R2wuRXZlbnREYXRhKSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5waXRjaEVuZC5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5ib3hab29tU3RhcnQub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbignYm94em9vbXN0YXJ0JywgKGV2dDogTWFwYm94R2wuTWFwQm94Wm9vbUV2ZW50KSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5ib3hab29tU3RhcnQuZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMuYm94Wm9vbUVuZC5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCdib3h6b29tZW5kJywgKGV2dDogTWFwYm94R2wuTWFwQm94Wm9vbUV2ZW50KSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5ib3hab29tRW5kLmVtaXQoZXZ0KSkpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLmJveFpvb21DYW5jZWwub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbignYm94em9vbWNhbmNlbCcsIChldnQ6IE1hcGJveEdsLk1hcEJveFpvb21FdmVudCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMuYm94Wm9vbUNhbmNlbC5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy53ZWJHbENvbnRleHRMb3N0Lm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ3dlYmdsY29udGV4dGxvc3QnLCAoKSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy53ZWJHbENvbnRleHRMb3N0LmVtaXQoKSkpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLndlYkdsQ29udGV4dFJlc3RvcmVkLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ3dlYmdsY29udGV4dHJlc3RvcmVkJywgKCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMud2ViR2xDb250ZXh0UmVzdG9yZWQuZW1pdCgpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMucmVuZGVyLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ3JlbmRlcicsICgpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLnJlbmRlci5lbWl0KCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5lcnJvci5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCdlcnJvcicsIChldnQ6IE1hcGJveEdsLkVycm9yRXZlbnQpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLmVycm9yLmVtaXQoZXZ0KSkpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLmRhdGEub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbignZGF0YScsIChldnQ6IE1hcGJveEdsLkV2ZW50RGF0YSkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMuZGF0YS5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5zdHlsZURhdGEub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbignc3R5bGVkYXRhJywgKGV2dDogTWFwYm94R2wuRXZlbnREYXRhKSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5zdHlsZURhdGEuZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMuc291cmNlRGF0YS5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLm9uKCdzb3VyY2VkYXRhJywgKGV2dDogTWFwYm94R2wuRXZlbnREYXRhKSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5zb3VyY2VEYXRhLmVtaXQoZXZ0KSkpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLmRhdGFMb2FkaW5nLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ2RhdGFsb2FkaW5nJywgKGV2dDogTWFwYm94R2wuRXZlbnREYXRhKSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5kYXRhTG9hZGluZy5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5zdHlsZURhdGFMb2FkaW5nLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oJ3N0eWxlZGF0YWxvYWRpbmcnLCAoZXZ0OiBNYXBib3hHbC5FdmVudERhdGEpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLnN0eWxlRGF0YUxvYWRpbmcuZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMuc291cmNlRGF0YUxvYWRpbmcub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbignc291cmNlZGF0YWxvYWRpbmcnLCAoZXZ0OiBNYXBib3hHbC5FdmVudERhdGEpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLnNvdXJjZURhdGFMb2FkaW5nLmVtaXQoZXZ0KSkpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLnN0eWxlSW1hZ2VNaXNzaW5nLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2Uub24oPGFueT4nc3R5bGVpbWFnZW1pc3NpbmcnLCAoZXZ0OiB7aWQ6IHN0cmluZ30pID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLnN0eWxlSW1hZ2VNaXNzaW5nLmVtaXQoZXZ0KSkpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLmlkbGUub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5vbignaWRsZScsICgpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLmlkbGUuZW1pdCgpKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gVE9ETyBtb3ZlIHRoaXMgZWxzZXdoZXJlXG4gIHByaXZhdGUgYXNzaWduKG9iajogYW55LCBwcm9wOiBhbnksIHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tcGFyYW1ldGVyLXJlYXNzaWdubWVudFxuICAgICAgcHJvcCA9IHByb3Auc3BsaXQoJy4nKTtcbiAgICB9XG4gICAgaWYgKHByb3AubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3QgZSA9IHByb3Auc2hpZnQoKTtcbiAgICAgIHRoaXMuYXNzaWduKG9ialtlXSA9XG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmpbZV0pID09PSAnW29iamVjdCBPYmplY3RdJ1xuICAgICAgICAgID8gb2JqW2VdXG4gICAgICAgICAgOiB7fSxcbiAgICAgICAgcHJvcCxcbiAgICAgICAgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmpbcHJvcFswXV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==