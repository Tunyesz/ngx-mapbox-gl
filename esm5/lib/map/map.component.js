/**
 * @fileoverview added by tsickle
 * Generated from: lib/map/map.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { MapService } from './map.service';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
var MapComponent = /** @class */ (function () {
    function MapComponent(MapService) {
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
    Object.defineProperty(MapComponent.prototype, "mapInstance", {
        get: /**
         * @return {?}
         */
        function () {
            return this.MapService.mapInstance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MapComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    MapComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.MapService.destroyMap();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MapComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.MapService.mapCreated$.toPromise()];
                    case 1:
                        _a.sent();
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
                        return [2 /*return*/];
                }
            });
        });
    };
    MapComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mgl-map',
                    template: '<div #container></div>',
                    providers: [
                        MapService
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n  :host {\n    display: block;\n  }\n  div {\n    height: 100%;\n    width: 100%;\n  }\n  "]
                }] }
    ];
    /** @nocollapse */
    MapComponent.ctorParameters = function () { return [
        { type: MapService }
    ]; };
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
    return MapComponent;
}());
export { MapComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXBib3gtZ2wvIiwic291cmNlcyI6WyJsaWIvbWFwL21hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBYUEsT0FBTyxFQUFFLFVBQVUsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFMUQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUVOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQTRIRSxzQkFDVSxVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZOzs7UUFqRXZCLGlCQUFZLEdBQWtDLE9BQU8sQ0FBQztRQVNyRCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNsQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNsQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFDOUMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQzVDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUM5QyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFDMUMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQzdDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUMvQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFDL0MsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQzlDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUM3QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQ2hELGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUMvQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFDN0MsY0FBUyxHQUFH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LHdDQUFzRDs7SUFDdEQsNENBQTBEOztJQUMxRCw0QkFBeUM7O0lBQ3pDLDRCQUEwQzs7SUFDMUMsOEJBQTRDOztJQUM1Qyw2QkFBMEM7O0lBQzFDLDRCQUErQzs7SUFDL0MsaUNBQW9EOztJQUNwRCxrQ0FBcUQ7O0lBQ3JELG1DQUFzRDs7SUFDdEQsd0NBQTJEOztJQUMzRCx5Q0FBNEQ7O0lBQzVELHlDQUErRDs7SUFNL0Qsb0NBQW1FOzs7OztJQUdqRSxrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBbmltYXRpb25PcHRpb25zLFxuICBFdmVudERhdGEsXG4gIEZpdEJvdW5kc09wdGlvbnMsXG4gIExuZ0xhdEJvdW5kc0xpa2UsXG4gIExuZ0xhdExpa2UsXG4gIE1hcCxcbiAgTWFwQm94Wm9vbUV2ZW50LFxuICBNYXBNb3VzZUV2ZW50LFxuICBNYXBUb3VjaEV2ZW50LFxuICBQb2ludExpa2UsXG4gIFN0eWxlXG59IGZyb20gJ21hcGJveC1nbCc7XG5pbXBvcnQgeyBNYXBTZXJ2aWNlLCBNb3ZpbmdPcHRpb25zIH0gZnJvbSAnLi9tYXAuc2VydmljZSc7XG5pbXBvcnQgeyBNYXBFdmVudCB9IGZyb20gJy4vbWFwLnR5cGVzJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nbC1tYXAnLFxuICB0ZW1wbGF0ZTogJzxkaXYgI2NvbnRhaW5lcj48L2Rpdj4nLFxuICBzdHlsZXM6IFtgXG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBkaXYge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTWFwU2VydmljZVxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgTWFwRXZlbnQge1xuICAvKiBJbml0IGlucHV0cyAqL1xuICBASW5wdXQoKSBhY2Nlc3NUb2tlbj86IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tTWFwYm94QXBpVXJsPzogc3RyaW5nO1xuICBASW5wdXQoKSBoYXNoPzogYm9vbGVhbjtcbiAgQElucHV0KCkgcmVmcmVzaEV4cGlyZWRUaWxlcz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGZhaWxJZk1ham9yUGVyZm9ybWFuY2VDYXZlYXQ/OiBib29sZWFuO1xuICBASW5wdXQoKSBjbGFzc2VzPzogc3RyaW5nW107XG4gIEBJbnB1dCgpIGJlYXJpbmdTbmFwPzogbnVtYmVyO1xuICBASW5wdXQoKSBpbnRlcmFjdGl2ZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHBpdGNoV2l0aFJvdGF0ZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNsaWNrVG9sZXJhbmNlPzogbnVtYmVyO1xuICBASW5wdXQoKSBhdHRyaWJ1dGlvbkNvbnRyb2w/OiBib29sZWFuO1xuICBASW5wdXQoKSBsb2dvUG9zaXRpb24/OiAndG9wLWxlZnQnIHwgJ3RvcC1yaWdodCcgfCAnYm90dG9tLWxlZnQnIHwgJ2JvdHRvbS1yaWdodCc7XG4gIEBJbnB1dCgpIG1heFRpbGVDYWNoZVNpemU/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGxvY2FsSWRlb2dyYXBoRm9udEZhbWlseT86IHN0cmluZztcbiAgQElucHV0KCkgcHJlc2VydmVEcmF3aW5nQnVmZmVyPzogYm9vbGVhbjtcbiAgQElucHV0KCkgcmVuZGVyV29ybGRDb3BpZXM/OiBib29sZWFuO1xuICBASW5wdXQoKSB0cmFja1Jlc2l6ZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHRyYW5zZm9ybVJlcXVlc3Q/OiBGdW5jdGlvbjtcbiAgQElucHV0KCkgYm91bmRzPzogTG5nTGF0Qm91bmRzTGlrZTsgLy8gVXNlIGZpdEJvdW5kcyBmb3IgZHluYW1pYyBpbnB1dFxuICBASW5wdXQoKSBhbnRpYWxpYXM/OiBib29sZWFuO1xuICBASW5wdXQoKSBsb2NhbGU6IHsgW2tleTpzdHJpbmddOiBzdHJpbmcgfTtcblxuICAvKiBEeW5hbWljIGlucHV0cyAqL1xuICBASW5wdXQoKSBtaW5ab29tPzogbnVtYmVyO1xuICBASW5wdXQoKSBtYXhab29tPzogbnVtYmVyO1xuICBASW5wdXQoKSBzY3JvbGxab29tPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZHJhZ1JvdGF0ZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHRvdWNoWm9vbVJvdGF0ZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRvdWJsZUNsaWNrWm9vbT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGtleWJvYXJkPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZHJhZ1Bhbj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGJveFpvb20/OiBib29sZWFuO1xuICBASW5wdXQoKSBzdHlsZTogU3R5bGUgfCBzdHJpbmc7XG4gIEBJbnB1dCgpIGNlbnRlcj86IExuZ0xhdExpa2U7XG4gIEBJbnB1dCgpIG1heEJvdW5kcz86IExuZ0xhdEJvdW5kc0xpa2U7XG4gIEBJbnB1dCgpIHpvb20/OiBbbnVtYmVyXTtcbiAgQElucHV0KCkgYmVhcmluZz86IFtudW1iZXJdO1xuICBASW5wdXQoKSBwaXRjaD86IFtudW1iZXJdO1xuICBASW5wdXQoKSBmaXRCb3VuZHNPcHRpb25zPzogRml0Qm91bmRzT3B0aW9uczsgLy8gRmlyc3QgdmFsdWUgZ29lcyB0byBvcHRpb25zLmZpdEJvdW5kc09wdGlvbnMuIFN1YnNlcXVlbnRzIGNoYW5nZXMgYXJlIHBhc3NlZCB0byBmaXRCb3VuZHNcblxuICAvKiBBZGRlZCBieSBuZ3gtbWFwYm94LWdsICovXG4gIEBJbnB1dCgpIG1vdmluZ01ldGhvZDogJ2p1bXBUbycgfCAnZWFzZVRvJyB8ICdmbHlUbycgPSAnZmx5VG8nO1xuICBASW5wdXQoKSBtb3ZpbmdPcHRpb25zPzogTW92aW5nT3B0aW9ucztcbiAgLy8gPT4gRmlyc3QgdmFsdWUgaXMgYSBhbGlhcyB0byBib3VuZHMgaW5wdXQgKHNpbmNlIG1hcGJveCAwLjUzLjApLiBTdWJzZXF1ZW50cyBjaGFuZ2VzIGFyZSBwYXNzZWQgdG8gZml0Qm91bmRzXG4gIEBJbnB1dCgpIGZpdEJvdW5kcz86IExuZ0xhdEJvdW5kc0xpa2U7XG4gIEBJbnB1dCgpIGZpdFNjcmVlbkNvb3JkaW5hdGVzPzogW1BvaW50TGlrZSwgUG9pbnRMaWtlXTtcbiAgQElucHV0KCkgY2VudGVyV2l0aFBhblRvPzogYm9vbGVhbjtcbiAgQElucHV0KCkgcGFuVG9PcHRpb25zPzogQW5pbWF0aW9uT3B0aW9ucztcbiAgQElucHV0KCkgY3Vyc29yU3R5bGU/OiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIHJlc2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIG1vdXNlRG93biA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwTW91c2VFdmVudD4oKTtcbiAgQE91dHB1dCgpIG1vdXNlVXAgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcE1vdXNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBtb3VzZU1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcE1vdXNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwTW91c2VFdmVudD4oKTtcbiAgQE91dHB1dCgpIGRibENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgbW91c2VFbnRlciA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwTW91c2VFdmVudD4oKTtcbiAgQE91dHB1dCgpIG1vdXNlTGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcE1vdXNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBtb3VzZU92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcE1vdXNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBtb3VzZU91dCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwTW91c2VFdmVudD4oKTtcbiAgQE91dHB1dCgpIGNvbnRleHRNZW51ID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgdG91Y2hTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwVG91Y2hFdmVudD4oKTtcbiAgQE91dHB1dCgpIHRvdWNoRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBUb3VjaEV2ZW50PigpO1xuICBAT3V0cHV0KCkgdG91Y2hNb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBUb3VjaEV2ZW50PigpO1xuICBAT3V0cHV0KCkgdG91Y2hDYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcFRvdWNoRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSB3aGVlbCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpOyAvLyBUT0RPIE1hcFdoZWVsRXZlbnRcbiAgQE91dHB1dCgpIG1vdmVTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0V2ZW50PigpOyAvLyBUT0RPIENoZWNrIHR5cGVcbiAgQE91dHB1dCgpIG1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcFRvdWNoRXZlbnQgfCBNYXBNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgbW92ZUVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0V2ZW50PigpO1xuICBAT3V0cHV0KCkgZHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBkcmFnID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBUb3VjaEV2ZW50IHwgTWFwTW91c2VFdmVudD4oKTtcbiAgQE91dHB1dCgpIGRyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdFdmVudD4oKTtcbiAgQE91dHB1dCgpIHpvb21TdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwVG91Y2hFdmVudCB8IE1hcE1vdXNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSB6b29tRXZ0ID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBUb3VjaEV2ZW50IHwgTWFwTW91c2VFdmVudD4oKTtcbiAgQE91dHB1dCgpIHpvb21FbmQgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcFRvdWNoRXZlbnQgfCBNYXBNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgcm90YXRlU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcFRvdWNoRXZlbnQgfCBNYXBNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgcm90YXRlID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBUb3VjaEV2ZW50IHwgTWFwTW91c2VFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJvdGF0ZUVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwVG91Y2hFdmVudCB8IE1hcE1vdXNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBwaXRjaFN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERhdGE+KCk7XG4gIEBPdXRwdXQoKSBwaXRjaEV2dCA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREYXRhPigpO1xuICBAT3V0cHV0KCkgcGl0Y2hFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGF0YT4oKTtcbiAgQE91dHB1dCgpIGJveFpvb21TdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwQm94Wm9vbUV2ZW50PigpO1xuICBAT3V0cHV0KCkgYm94Wm9vbUVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwQm94Wm9vbUV2ZW50PigpO1xuICBAT3V0cHV0KCkgYm94Wm9vbUNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwQm94Wm9vbUV2ZW50PigpO1xuICBAT3V0cHV0KCkgd2ViR2xDb250ZXh0TG9zdCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHdlYkdsQ29udGV4dFJlc3RvcmVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgaWRsZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7IC8vIFRPRE8gQ2hlY2sgdHlwZVxuICBAT3V0cHV0KCkgZGF0YSA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREYXRhPigpO1xuICBAT3V0cHV0KCkgc3R5bGVEYXRhID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERhdGE+KCk7XG4gIEBPdXRwdXQoKSBzb3VyY2VEYXRhID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERhdGE+KCk7XG4gIEBPdXRwdXQoKSBkYXRhTG9hZGluZyA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREYXRhPigpO1xuICBAT3V0cHV0KCkgc3R5bGVEYXRhTG9hZGluZyA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREYXRhPigpO1xuICBAT3V0cHV0KCkgc291cmNlRGF0YUxvYWRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGF0YT4oKTtcbiAgQE91dHB1dCgpIHN0eWxlSW1hZ2VNaXNzaW5nID0gbmV3IEV2ZW50RW1pdHRlcjx7aWQ6IHN0cmluZ30+KCk7XG5cbiAgZ2V0IG1hcEluc3RhbmNlKCk6IE1hcCB7XG4gICAgcmV0dXJuIHRoaXMuTWFwU2VydmljZS5tYXBJbnN0YW5jZTtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIG1hcENvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIE1hcFNlcnZpY2U6IE1hcFNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5NYXBTZXJ2aWNlLnNldHVwKHtcbiAgICAgIGFjY2Vzc1Rva2VuOiB0aGlzLmFjY2Vzc1Rva2VuLFxuICAgICAgY3VzdG9tTWFwYm94QXBpVXJsOiB0aGlzLmN1c3RvbU1hcGJveEFwaVVybCxcbiAgICAgIG1hcE9wdGlvbnM6IHtcbiAgICAgICAgY29udGFpbmVyOiB0aGlzLm1hcENvbnRhaW5lci5uYXRpdmVFbGVtZW50LFxuICAgICAgICBtaW5ab29tOiB0aGlzLm1pblpvb20sXG4gICAgICAgIG1heFpvb206IHRoaXMubWF4Wm9vbSxcbiAgICAgICAgc3R5bGU6IHRoaXMuc3R5bGUsXG4gICAgICAgIGhhc2g6IHRoaXMuaGFzaCxcbiAgICAgICAgaW50ZXJhY3RpdmU6IHRoaXMuaW50ZXJhY3RpdmUsXG4gICAgICAgIGJlYXJpbmdTbmFwOiB0aGlzLmJlYXJpbmdTbmFwLFxuICAgICAgICBwaXRjaFdpdGhSb3RhdGU6IHRoaXMucGl0Y2hXaXRoUm90YXRlLFxuICAgICAgICBjbGlja1RvbGVyYW5jZTogdGhpcy5jbGlja1RvbGVyYW5jZSxcbiAgICAgICAgY2xhc3NlczogdGhpcy5jbGFzc2VzLFxuICAgICAgICBhdHRyaWJ1dGlvbkNvbnRyb2w6IHRoaXMuYXR0cmlidXRpb25Db250cm9sLFxuICAgICAgICBsb2dvUG9zaXRpb246IHRoaXMubG9nb1Bvc2l0aW9uLFxuICAgICAgICBmYWlsSWZNYWpvclBlcmZvcm1hbmNlQ2F2ZWF0OiB0aGlzLmZhaWxJZk1ham9yUGVyZm9ybWFuY2VDYXZlYXQsXG4gICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdGhpcy5wcmVzZXJ2ZURyYXdpbmdCdWZmZXIsXG4gICAgICAgIHJlZnJlc2hFeHBpcmVkVGlsZXM6IHRoaXMucmVmcmVzaEV4cGlyZWRUaWxlcyxcbiAgICAgICAgbWF4Qm91bmRzOiB0aGlzLm1heEJvdW5kcyxcbiAgICAgICAgc2Nyb2xsWm9vbTogdGhpcy5zY3JvbGxab29tLFxuICAgICAgICBib3hab29tOiB0aGlzLmJveFpvb20sXG4gICAgICAgIGRyYWdSb3RhdGU6IHRoaXMuZHJhZ1JvdGF0ZSxcbiAgICAgICAgZHJhZ1BhbjogdGhpcy5kcmFnUGFuLFxuICAgICAgICBrZXlib2FyZDogdGhpcy5rZXlib2FyZCxcbiAgICAgICAgZG91YmxlQ2xpY2tab29tOiB0aGlzLmRvdWJsZUNsaWNrWm9vbSxcbiAgICAgICAgdG91Y2hab29tUm90YXRlOiB0aGlzLnRvdWNoWm9vbVJvdGF0ZSxcbiAgICAgICAgdHJhY2tSZXNpemU6IHRoaXMudHJhY2tSZXNpemUsXG4gICAgICAgIGNlbnRlcjogdGhpcy5jZW50ZXIsXG4gICAgICAgIHpvb206IHRoaXMuem9vbSxcbiAgICAgICAgYmVhcmluZzogdGhpcy5iZWFyaW5nLFxuICAgICAgICBwaXRjaDogdGhpcy5waXRjaCxcbiAgICAgICAgcmVuZGVyV29ybGRDb3BpZXM6IHRoaXMucmVuZGVyV29ybGRDb3BpZXMsXG4gICAgICAgIG1heFRpbGVDYWNoZVNpemU6IHRoaXMubWF4VGlsZUNhY2hlU2l6ZSxcbiAgICAgICAgbG9jYWxJZGVvZ3JhcGhGb250RmFtaWx5OiB0aGlzLmxvY2FsSWRlb2dyYXBoRm9udEZhbWlseSxcbiAgICAgICAgdHJhbnNmb3JtUmVxdWVzdDogdGhpcy50cmFuc2Zvcm1SZXF1ZXN0LFxuICAgICAgICBib3VuZHM6IHRoaXMuYm91bmRzID8gdGhpcy5ib3VuZHMgOiB0aGlzLmZpdEJvdW5kcyxcbiAgICAgICAgZml0Qm91bmRzT3B0aW9uczogdGhpcy5maXRCb3VuZHNPcHRpb25zLFxuICAgICAgICBhbnRpYWxpYXM6IHRoaXMuYW50aWFsaWFzLFxuICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlXG4gICAgICB9LFxuICAgICAgbWFwRXZlbnRzOiB0aGlzXG4gICAgfSk7XG4gICAgaWYgKHRoaXMuY3Vyc29yU3R5bGUpIHtcbiAgICAgIHRoaXMuTWFwU2VydmljZS5jaGFuZ2VDYW52YXNDdXJzb3IodGhpcy5jdXJzb3JTdHlsZSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5NYXBTZXJ2aWNlLmRlc3Ryb3lNYXAoKTtcbiAgfVxuXG4gIGFzeW5jIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBhd2FpdCB0aGlzLk1hcFNlcnZpY2UubWFwQ3JlYXRlZCQudG9Qcm9taXNlKCk7XG4gICAgaWYgKGNoYW5nZXMuY3Vyc29yU3R5bGUgJiYgIWNoYW5nZXMuY3Vyc29yU3R5bGUuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLk1hcFNlcnZpY2UuY2hhbmdlQ2FudmFzQ3Vyc29yKGNoYW5nZXMuY3Vyc29yU3R5bGUuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubWluWm9vbSAmJiAhY2hhbmdlcy5taW5ab29tLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5NYXBTZXJ2aWNlLnVwZGF0ZU1pblpvb20oY2hhbmdlcy5taW5ab29tLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm1heFpvb20gJiYgIWNoYW5nZXMubWF4Wm9vbS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuTWFwU2VydmljZS51cGRhdGVNYXhab29tKGNoYW5nZXMubWF4Wm9vbS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5zY3JvbGxab29tICYmICFjaGFuZ2VzLnNjcm9sbFpvb20uaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLk1hcFNlcnZpY2UudXBkYXRlU2Nyb2xsWm9vbShjaGFuZ2VzLnNjcm9sbFpvb20uY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuZHJhZ1JvdGF0ZSAmJiAhY2hhbmdlcy5kcmFnUm90YXRlLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5NYXBTZXJ2aWNlLnVwZGF0ZURyYWdSb3RhdGUoY2hhbmdlcy5kcmFnUm90YXRlLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnRvdWNoWm9vbVJvdGF0ZSAmJiAhY2hhbmdlcy50b3VjaFpvb21Sb3RhdGUuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLk1hcFNlcnZpY2UudXBkYXRlVG91Y2hab29tUm90YXRlKGNoYW5nZXMudG91Y2hab29tUm90YXRlLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmRvdWJsZUNsaWNrWm9vbSAmJiAhY2hhbmdlcy5kb3VibGVDbGlja1pvb20uaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLk1hcFNlcnZpY2UudXBkYXRlRG91YmxlQ2xpY2tab29tKGNoYW5nZXMuZG91YmxlQ2xpY2tab29tLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmtleWJvYXJkICYmICFjaGFuZ2VzLmtleWJvYXJkLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5NYXBTZXJ2aWNlLnVwZGF0ZUtleWJvYXJkKGNoYW5nZXMua2V5Ym9hcmQuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuZHJhZ1BhbiAmJiAhY2hhbmdlcy5kcmFnUGFuLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5NYXBTZXJ2aWNlLnVwZGF0ZURyYWdQYW4oY2hhbmdlcy5kcmFnUGFuLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmJveFpvb20gJiYgIWNoYW5nZXMuYm94Wm9vbS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuTWFwU2VydmljZS51cGRhdGVCb3hab29tKGNoYW5nZXMuYm94Wm9vbS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5zdHlsZSAmJiAhY2hhbmdlcy5zdHlsZS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuTWFwU2VydmljZS51cGRhdGVTdHlsZShjaGFuZ2VzLnN0eWxlLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm1heEJvdW5kcyAmJiAhY2hhbmdlcy5tYXhCb3VuZHMuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLk1hcFNlcnZpY2UudXBkYXRlTWF4Qm91bmRzKGNoYW5nZXMubWF4Qm91bmRzLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmZpdEJvdW5kcyAmJiBjaGFuZ2VzLmZpdEJvdW5kcy5jdXJyZW50VmFsdWUgJiYgIWNoYW5nZXMuZml0Qm91bmRzLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5NYXBTZXJ2aWNlLmZpdEJvdW5kcyhjaGFuZ2VzLmZpdEJvdW5kcy5jdXJyZW50VmFsdWUsIHRoaXMuZml0Qm91bmRzT3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmZpdFNjcmVlbkNvb3JkaW5hdGVzICYmIGNoYW5nZXMuZml0U2NyZWVuQ29vcmRpbmF0ZXMuY3VycmVudFZhbHVlKSB7XG4gICAgICBpZiAoKHRoaXMuY2VudGVyIHx8IHRoaXMuem9vbSB8fCB0aGlzLnBpdGNoIHx8IHRoaXMuZml0Qm91bmRzKSAmJiBjaGFuZ2VzLmZpdFNjcmVlbkNvb3JkaW5hdGVzLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tuZ3gtbWFwYm94LWdsXSBjZW50ZXIgLyB6b29tIC8gcGl0Y2ggLyBmaXRCb3VuZHMgaW5wdXRzIGFyZSBiZWluZyBvdmVycmlkZGVuIGJ5IGZpdFNjcmVlbkNvb3JkaW5hdGVzIGlucHV0Jyk7XG4gICAgICB9XG4gICAgICB0aGlzLk1hcFNlcnZpY2UuZml0U2NyZWVuQ29vcmRpbmF0ZXMoXG4gICAgICAgIGNoYW5nZXMuZml0U2NyZWVuQ29vcmRpbmF0ZXMuY3VycmVudFZhbHVlLFxuICAgICAgICB0aGlzLmJlYXJpbmcgPyB0aGlzLmJlYXJpbmdbMF0gOiAwLFxuICAgICAgICB0aGlzLm1vdmluZ09wdGlvbnNcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIHRoaXMuY2VudGVyV2l0aFBhblRvICYmXG4gICAgICBjaGFuZ2VzLmNlbnRlciAmJiAhY2hhbmdlcy5jZW50ZXIuaXNGaXJzdENoYW5nZSgpICYmXG4gICAgICAhY2hhbmdlcy56b29tICYmICFjaGFuZ2VzLmJlYXJpbmcgJiYgIWNoYW5nZXMucGl0Y2hcbiAgICApIHtcbiAgICAgIHRoaXMuTWFwU2VydmljZS5wYW5Ubyh0aGlzLmNlbnRlciEsIHRoaXMucGFuVG9PcHRpb25zKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY2hhbmdlcy5jZW50ZXIgJiYgIWNoYW5nZXMuY2VudGVyLmlzRmlyc3RDaGFuZ2UoKSB8fFxuICAgICAgY2hhbmdlcy56b29tICYmICFjaGFuZ2VzLnpvb20uaXNGaXJzdENoYW5nZSgpIHx8XG4gICAgICAoY2hhbmdlcy5iZWFyaW5nICYmICFjaGFuZ2VzLmJlYXJpbmcuaXNGaXJzdENoYW5nZSgpICYmICFjaGFuZ2VzLmZpdFNjcmVlbkNvb3JkaW5hdGVzKSB8fFxuICAgICAgY2hhbmdlcy5waXRjaCAmJiAhY2hhbmdlcy5waXRjaC5pc0ZpcnN0Q2hhbmdlKClcbiAgICApIHtcbiAgICAgIHRoaXMuTWFwU2VydmljZS5tb3ZlKFxuICAgICAgICB0aGlzLm1vdmluZ01ldGhvZCxcbiAgICAgICAgdGhpcy5tb3ZpbmdPcHRpb25zLFxuICAgICAgICBjaGFuZ2VzLnpvb20gJiYgdGhpcy56b29tID8gdGhpcy56b29tWzBdIDogdW5kZWZpbmVkLFxuICAgICAgICBjaGFuZ2VzLmNlbnRlciA/IHRoaXMuY2VudGVyIDogdW5kZWZpbmVkLFxuICAgICAgICBjaGFuZ2VzLmJlYXJpbmcgJiYgdGhpcy5iZWFyaW5nID8gdGhpcy5iZWFyaW5nWzBdIDogdW5kZWZpbmVkLFxuICAgICAgICBjaGFuZ2VzLnBpdGNoICYmIHRoaXMucGl0Y2ggPyB0aGlzLnBpdGNoWzBdIDogdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19