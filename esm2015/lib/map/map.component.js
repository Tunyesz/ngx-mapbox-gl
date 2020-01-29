/**
 * @fileoverview added by tsickle
 * Generated from: lib/map/map.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { MapService } from './map.service';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
export class MapComponent {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXBib3gtZ2wvIiwic291cmNlcyI6WyJsaWIvbWFwL21hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBYUEsT0FBTyxFQUFFLFVBQVUsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFMUQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUVOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQW1CdkIsTUFBTSxPQUFPLFlBQVk7Ozs7SUEyR3ZCLFlBQ1UsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTs7O1FBakV2QixpQkFBWSxHQUFrQyxPQUFPLENBQUM7UUFTckQsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDbEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDbEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQzlDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUM1QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFDOUMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQzFDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUM3QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFDL0MsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQy9DLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUM5QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFDN0MsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUNoRCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFDL0MsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFpQixD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O0lBQ3BELGtDQUFxRDs7SUFDckQsbUNBQXNEOztJQUN0RCx3Q0FBMkQ7O0lBQzNELHlDQUE0RDs7SUFDNUQseUNBQStEOztJQU0vRCxvQ0FBbUU7Ozs7O0lBR2pFLGtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFuaW1hdGlvbk9wdGlvbnMsXG4gIEV2ZW50RGF0YSxcbiAgRml0Qm91bmRzT3B0aW9ucyxcbiAgTG5nTGF0Qm91bmRzTGlrZSxcbiAgTG5nTGF0TGlrZSxcbiAgTWFwLFxuICBNYXBCb3hab29tRXZlbnQsXG4gIE1hcE1vdXNlRXZlbnQsXG4gIE1hcFRvdWNoRXZlbnQsXG4gIFBvaW50TGlrZSxcbiAgU3R5bGVcbn0gZnJvbSAnbWFwYm94LWdsJztcbmltcG9ydCB7IE1hcFNlcnZpY2UsIE1vdmluZ09wdGlvbnMgfSBmcm9tICcuL21hcC5zZXJ2aWNlJztcbmltcG9ydCB7IE1hcEV2ZW50IH0gZnJvbSAnLi9tYXAudHlwZXMnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWdsLW1hcCcsXG4gIHRlbXBsYXRlOiAnPGRpdiAjY29udGFpbmVyPjwvZGl2PicsXG4gIHN0eWxlczogW2BcbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIGRpdiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBNYXBTZXJ2aWNlXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBNYXBFdmVudCB7XG4gIC8qIEluaXQgaW5wdXRzICovXG4gIEBJbnB1dCgpIGFjY2Vzc1Rva2VuPzogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21NYXBib3hBcGlVcmw/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhhc2g/OiBib29sZWFuO1xuICBASW5wdXQoKSByZWZyZXNoRXhwaXJlZFRpbGVzPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZmFpbElmTWFqb3JQZXJmb3JtYW5jZUNhdmVhdD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNsYXNzZXM/OiBzdHJpbmdbXTtcbiAgQElucHV0KCkgYmVhcmluZ1NuYXA/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGludGVyYWN0aXZlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgcGl0Y2hXaXRoUm90YXRlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgY2xpY2tUb2xlcmFuY2U/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGF0dHJpYnV0aW9uQ29udHJvbD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxvZ29Qb3NpdGlvbj86ICd0b3AtbGVmdCcgfCAndG9wLXJpZ2h0JyB8ICdib3R0b20tbGVmdCcgfCAnYm90dG9tLXJpZ2h0JztcbiAgQElucHV0KCkgbWF4VGlsZUNhY2hlU2l6ZT86IG51bWJlcjtcbiAgQElucHV0KCkgbG9jYWxJZGVvZ3JhcGhGb250RmFtaWx5Pzogc3RyaW5nO1xuICBASW5wdXQoKSBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI/OiBib29sZWFuO1xuICBASW5wdXQoKSByZW5kZXJXb3JsZENvcGllcz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHRyYWNrUmVzaXplPzogYm9vbGVhbjtcbiAgQElucHV0KCkgdHJhbnNmb3JtUmVxdWVzdD86IEZ1bmN0aW9uO1xuICBASW5wdXQoKSBib3VuZHM/OiBMbmdMYXRCb3VuZHNMaWtlOyAvLyBVc2UgZml0Qm91bmRzIGZvciBkeW5hbWljIGlucHV0XG4gIEBJbnB1dCgpIGFudGlhbGlhcz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxvY2FsZTogeyBba2V5OnN0cmluZ106IHN0cmluZyB9O1xuXG4gIC8qIER5bmFtaWMgaW5wdXRzICovXG4gIEBJbnB1dCgpIG1pblpvb20/OiBudW1iZXI7XG4gIEBJbnB1dCgpIG1heFpvb20/OiBudW1iZXI7XG4gIEBJbnB1dCgpIHNjcm9sbFpvb20/OiBib29sZWFuO1xuICBASW5wdXQoKSBkcmFnUm90YXRlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgdG91Y2hab29tUm90YXRlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZG91YmxlQ2xpY2tab29tPzogYm9vbGVhbjtcbiAgQElucHV0KCkga2V5Ym9hcmQ/OiBib29sZWFuO1xuICBASW5wdXQoKSBkcmFnUGFuPzogYm9vbGVhbjtcbiAgQElucHV0KCkgYm94Wm9vbT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHN0eWxlOiBTdHlsZSB8IHN0cmluZztcbiAgQElucHV0KCkgY2VudGVyPzogTG5nTGF0TGlrZTtcbiAgQElucHV0KCkgbWF4Qm91bmRzPzogTG5nTGF0Qm91bmRzTGlrZTtcbiAgQElucHV0KCkgem9vbT86IFtudW1iZXJdO1xuICBASW5wdXQoKSBiZWFyaW5nPzogW251bWJlcl07XG4gIEBJbnB1dCgpIHBpdGNoPzogW251bWJlcl07XG4gIEBJbnB1dCgpIGZpdEJvdW5kc09wdGlvbnM/OiBGaXRCb3VuZHNPcHRpb25zOyAvLyBGaXJzdCB2YWx1ZSBnb2VzIHRvIG9wdGlvbnMuZml0Qm91bmRzT3B0aW9ucy4gU3Vic2VxdWVudHMgY2hhbmdlcyBhcmUgcGFzc2VkIHRvIGZpdEJvdW5kc1xuXG4gIC8qIEFkZGVkIGJ5IG5neC1tYXBib3gtZ2wgKi9cbiAgQElucHV0KCkgbW92aW5nTWV0aG9kOiAnanVtcFRvJyB8ICdlYXNlVG8nIHwgJ2ZseVRvJyA9ICdmbHlUbyc7XG4gIEBJbnB1dCgpIG1vdmluZ09wdGlvbnM/OiBNb3ZpbmdPcHRpb25zO1xuICAvLyA9PiBGaXJzdCB2YWx1ZSBpcyBhIGFsaWFzIHRvIGJvdW5kcyBpbnB1dCAoc2luY2UgbWFwYm94IDAuNTMuMCkuIFN1YnNlcXVlbnRzIGNoYW5nZXMgYXJlIHBhc3NlZCB0byBmaXRCb3VuZHNcbiAgQElucHV0KCkgZml0Qm91bmRzPzogTG5nTGF0Qm91bmRzTGlrZTtcbiAgQElucHV0KCkgZml0U2NyZWVuQ29vcmRpbmF0ZXM/OiBbUG9pbnRMaWtlLCBQb2ludExpa2VdO1xuICBASW5wdXQoKSBjZW50ZXJXaXRoUGFuVG8/OiBib29sZWFuO1xuICBASW5wdXQoKSBwYW5Ub09wdGlvbnM/OiBBbmltYXRpb25PcHRpb25zO1xuICBASW5wdXQoKSBjdXJzb3JTdHlsZT86IHN0cmluZztcblxuICBAT3V0cHV0KCkgcmVzaXplID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVtb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgbW91c2VEb3duID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgbW91c2VVcCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwTW91c2VFdmVudD4oKTtcbiAgQE91dHB1dCgpIG1vdXNlTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwTW91c2VFdmVudD4oKTtcbiAgQE91dHB1dCgpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgZGJsQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcE1vdXNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBtb3VzZUVudGVyID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgbW91c2VMZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwTW91c2VFdmVudD4oKTtcbiAgQE91dHB1dCgpIG1vdXNlT3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwTW91c2VFdmVudD4oKTtcbiAgQE91dHB1dCgpIG1vdXNlT3V0ID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgY29udGV4dE1lbnUgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcE1vdXNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSB0b3VjaFN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBUb3VjaEV2ZW50PigpO1xuICBAT3V0cHV0KCkgdG91Y2hFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcFRvdWNoRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSB0b3VjaE1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcFRvdWNoRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSB0b3VjaENhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwVG91Y2hFdmVudD4oKTtcbiAgQE91dHB1dCgpIHdoZWVsID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7IC8vIFRPRE8gTWFwV2hlZWxFdmVudFxuICBAT3V0cHV0KCkgbW92ZVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRXZlbnQ+KCk7IC8vIFRPRE8gQ2hlY2sgdHlwZVxuICBAT3V0cHV0KCkgbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwVG91Y2hFdmVudCB8IE1hcE1vdXNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBtb3ZlRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBkcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdFdmVudD4oKTtcbiAgQE91dHB1dCgpIGRyYWcgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcFRvdWNoRXZlbnQgfCBNYXBNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgZHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0V2ZW50PigpO1xuICBAT3V0cHV0KCkgem9vbVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBUb3VjaEV2ZW50IHwgTWFwTW91c2VFdmVudD4oKTtcbiAgQE91dHB1dCgpIHpvb21FdnQgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcFRvdWNoRXZlbnQgfCBNYXBNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgem9vbUVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwVG91Y2hFdmVudCB8IE1hcE1vdXNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByb3RhdGVTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwVG91Y2hFdmVudCB8IE1hcE1vdXNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByb3RhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcFRvdWNoRXZlbnQgfCBNYXBNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgcm90YXRlRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBUb3VjaEV2ZW50IHwgTWFwTW91c2VFdmVudD4oKTtcbiAgQE91dHB1dCgpIHBpdGNoU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGF0YT4oKTtcbiAgQE91dHB1dCgpIHBpdGNoRXZ0ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERhdGE+KCk7XG4gIEBPdXRwdXQoKSBwaXRjaEVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREYXRhPigpO1xuICBAT3V0cHV0KCkgYm94Wm9vbVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBCb3hab29tRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBib3hab29tRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBCb3hab29tRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBib3hab29tQ2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBCb3hab29tRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSB3ZWJHbENvbnRleHRMb3N0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgd2ViR2xDb250ZXh0UmVzdG9yZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBpZGxlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTsgLy8gVE9ETyBDaGVjayB0eXBlXG4gIEBPdXRwdXQoKSBkYXRhID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERhdGE+KCk7XG4gIEBPdXRwdXQoKSBzdHlsZURhdGEgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGF0YT4oKTtcbiAgQE91dHB1dCgpIHNvdXJjZURhdGEgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGF0YT4oKTtcbiAgQE91dHB1dCgpIGRhdGFMb2FkaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERhdGE+KCk7XG4gIEBPdXRwdXQoKSBzdHlsZURhdGFMb2FkaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERhdGE+KCk7XG4gIEBPdXRwdXQoKSBzb3VyY2VEYXRhTG9hZGluZyA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREYXRhPigpO1xuICBAT3V0cHV0KCkgc3R5bGVJbWFnZU1pc3NpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPHtpZDogc3RyaW5nfT4oKTtcblxuICBnZXQgbWFwSW5zdGFuY2UoKTogTWFwIHtcbiAgICByZXR1cm4gdGhpcy5NYXBTZXJ2aWNlLm1hcEluc3RhbmNlO1xuICB9XG5cbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgbWFwQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgTWFwU2VydmljZTogTWFwU2VydmljZVxuICApIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLk1hcFNlcnZpY2Uuc2V0dXAoe1xuICAgICAgYWNjZXNzVG9rZW46IHRoaXMuYWNjZXNzVG9rZW4sXG4gICAgICBjdXN0b21NYXBib3hBcGlVcmw6IHRoaXMuY3VzdG9tTWFwYm94QXBpVXJsLFxuICAgICAgbWFwT3B0aW9uczoge1xuICAgICAgICBjb250YWluZXI6IHRoaXMubWFwQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIG1pblpvb206IHRoaXMubWluWm9vbSxcbiAgICAgICAgbWF4Wm9vbTogdGhpcy5tYXhab29tLFxuICAgICAgICBzdHlsZTogdGhpcy5zdHlsZSxcbiAgICAgICAgaGFzaDogdGhpcy5oYXNoLFxuICAgICAgICBpbnRlcmFjdGl2ZTogdGhpcy5pbnRlcmFjdGl2ZSxcbiAgICAgICAgYmVhcmluZ1NuYXA6IHRoaXMuYmVhcmluZ1NuYXAsXG4gICAgICAgIHBpdGNoV2l0aFJvdGF0ZTogdGhpcy5waXRjaFdpdGhSb3RhdGUsXG4gICAgICAgIGNsaWNrVG9sZXJhbmNlOiB0aGlzLmNsaWNrVG9sZXJhbmNlLFxuICAgICAgICBjbGFzc2VzOiB0aGlzLmNsYXNzZXMsXG4gICAgICAgIGF0dHJpYnV0aW9uQ29udHJvbDogdGhpcy5hdHRyaWJ1dGlvbkNvbnRyb2wsXG4gICAgICAgIGxvZ29Qb3NpdGlvbjogdGhpcy5sb2dvUG9zaXRpb24sXG4gICAgICAgIGZhaWxJZk1ham9yUGVyZm9ybWFuY2VDYXZlYXQ6IHRoaXMuZmFpbElmTWFqb3JQZXJmb3JtYW5jZUNhdmVhdCxcbiAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0aGlzLnByZXNlcnZlRHJhd2luZ0J1ZmZlcixcbiAgICAgICAgcmVmcmVzaEV4cGlyZWRUaWxlczogdGhpcy5yZWZyZXNoRXhwaXJlZFRpbGVzLFxuICAgICAgICBtYXhCb3VuZHM6IHRoaXMubWF4Qm91bmRzLFxuICAgICAgICBzY3JvbGxab29tOiB0aGlzLnNjcm9sbFpvb20sXG4gICAgICAgIGJveFpvb206IHRoaXMuYm94Wm9vbSxcbiAgICAgICAgZHJhZ1JvdGF0ZTogdGhpcy5kcmFnUm90YXRlLFxuICAgICAgICBkcmFnUGFuOiB0aGlzLmRyYWdQYW4sXG4gICAgICAgIGtleWJvYXJkOiB0aGlzLmtleWJvYXJkLFxuICAgICAgICBkb3VibGVDbGlja1pvb206IHRoaXMuZG91YmxlQ2xpY2tab29tLFxuICAgICAgICB0b3VjaFpvb21Sb3RhdGU6IHRoaXMudG91Y2hab29tUm90YXRlLFxuICAgICAgICB0cmFja1Jlc2l6ZTogdGhpcy50cmFja1Jlc2l6ZSxcbiAgICAgICAgY2VudGVyOiB0aGlzLmNlbnRlcixcbiAgICAgICAgem9vbTogdGhpcy56b29tLFxuICAgICAgICBiZWFyaW5nOiB0aGlzLmJlYXJpbmcsXG4gICAgICAgIHBpdGNoOiB0aGlzLnBpdGNoLFxuICAgICAgICByZW5kZXJXb3JsZENvcGllczogdGhpcy5yZW5kZXJXb3JsZENvcGllcyxcbiAgICAgICAgbWF4VGlsZUNhY2hlU2l6ZTogdGhpcy5tYXhUaWxlQ2FjaGVTaXplLFxuICAgICAgICBsb2NhbElkZW9ncmFwaEZvbnRGYW1pbHk6IHRoaXMubG9jYWxJZGVvZ3JhcGhGb250RmFtaWx5LFxuICAgICAgICB0cmFuc2Zvcm1SZXF1ZXN0OiB0aGlzLnRyYW5zZm9ybVJlcXVlc3QsXG4gICAgICAgIGJvdW5kczogdGhpcy5ib3VuZHMgPyB0aGlzLmJvdW5kcyA6IHRoaXMuZml0Qm91bmRzLFxuICAgICAgICBmaXRCb3VuZHNPcHRpb25zOiB0aGlzLmZpdEJvdW5kc09wdGlvbnMsXG4gICAgICAgIGFudGlhbGlhczogdGhpcy5hbnRpYWxpYXMsXG4gICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGVcbiAgICAgIH0sXG4gICAgICBtYXBFdmVudHM6IHRoaXNcbiAgICB9KTtcbiAgICBpZiAodGhpcy5jdXJzb3JTdHlsZSkge1xuICAgICAgdGhpcy5NYXBTZXJ2aWNlLmNoYW5nZUNhbnZhc0N1cnNvcih0aGlzLmN1cnNvclN0eWxlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLk1hcFNlcnZpY2UuZGVzdHJveU1hcCgpO1xuICB9XG5cbiAgYXN5bmMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGF3YWl0IHRoaXMuTWFwU2VydmljZS5tYXBDcmVhdGVkJC50b1Byb21pc2UoKTtcbiAgICBpZiAoY2hhbmdlcy5jdXJzb3JTdHlsZSAmJiAhY2hhbmdlcy5jdXJzb3JTdHlsZS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuTWFwU2VydmljZS5jaGFuZ2VDYW52YXNDdXJzb3IoY2hhbmdlcy5jdXJzb3JTdHlsZS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5taW5ab29tICYmICFjaGFuZ2VzLm1pblpvb20uaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLk1hcFNlcnZpY2UudXBkYXRlTWluWm9vbShjaGFuZ2VzLm1pblpvb20uY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubWF4Wm9vbSAmJiAhY2hhbmdlcy5tYXhab29tLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5NYXBTZXJ2aWNlLnVwZGF0ZU1heFpvb20oY2hhbmdlcy5tYXhab29tLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnNjcm9sbFpvb20gJiYgIWNoYW5nZXMuc2Nyb2xsWm9vbS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuTWFwU2VydmljZS51cGRhdGVTY3JvbGxab29tKGNoYW5nZXMuc2Nyb2xsWm9vbS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5kcmFnUm90YXRlICYmICFjaGFuZ2VzLmRyYWdSb3RhdGUuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLk1hcFNlcnZpY2UudXBkYXRlRHJhZ1JvdGF0ZShjaGFuZ2VzLmRyYWdSb3RhdGUuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMudG91Y2hab29tUm90YXRlICYmICFjaGFuZ2VzLnRvdWNoWm9vbVJvdGF0ZS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuTWFwU2VydmljZS51cGRhdGVUb3VjaFpvb21Sb3RhdGUoY2hhbmdlcy50b3VjaFpvb21Sb3RhdGUuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuZG91YmxlQ2xpY2tab29tICYmICFjaGFuZ2VzLmRvdWJsZUNsaWNrWm9vbS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuTWFwU2VydmljZS51cGRhdGVEb3VibGVDbGlja1pvb20oY2hhbmdlcy5kb3VibGVDbGlja1pvb20uY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMua2V5Ym9hcmQgJiYgIWNoYW5nZXMua2V5Ym9hcmQuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLk1hcFNlcnZpY2UudXBkYXRlS2V5Ym9hcmQoY2hhbmdlcy5rZXlib2FyZC5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5kcmFnUGFuICYmICFjaGFuZ2VzLmRyYWdQYW4uaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLk1hcFNlcnZpY2UudXBkYXRlRHJhZ1BhbihjaGFuZ2VzLmRyYWdQYW4uY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuYm94Wm9vbSAmJiAhY2hhbmdlcy5ib3hab29tLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5NYXBTZXJ2aWNlLnVwZGF0ZUJveFpvb20oY2hhbmdlcy5ib3hab29tLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnN0eWxlICYmICFjaGFuZ2VzLnN0eWxlLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5NYXBTZXJ2aWNlLnVwZGF0ZVN0eWxlKGNoYW5nZXMuc3R5bGUuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubWF4Qm91bmRzICYmICFjaGFuZ2VzLm1heEJvdW5kcy5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuTWFwU2VydmljZS51cGRhdGVNYXhCb3VuZHMoY2hhbmdlcy5tYXhCb3VuZHMuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuZml0Qm91bmRzICYmIGNoYW5nZXMuZml0Qm91bmRzLmN1cnJlbnRWYWx1ZSAmJiAhY2hhbmdlcy5maXRCb3VuZHMuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLk1hcFNlcnZpY2UuZml0Qm91bmRzKGNoYW5nZXMuZml0Qm91bmRzLmN1cnJlbnRWYWx1ZSwgdGhpcy5maXRCb3VuZHNPcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuZml0U2NyZWVuQ29vcmRpbmF0ZXMgJiYgY2hhbmdlcy5maXRTY3JlZW5Db29yZGluYXRlcy5jdXJyZW50VmFsdWUpIHtcbiAgICAgIGlmICgodGhpcy5jZW50ZXIgfHwgdGhpcy56b29tIHx8IHRoaXMucGl0Y2ggfHwgdGhpcy5maXRCb3VuZHMpICYmIGNoYW5nZXMuZml0U2NyZWVuQ29vcmRpbmF0ZXMuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW25neC1tYXBib3gtZ2xdIGNlbnRlciAvIHpvb20gLyBwaXRjaCAvIGZpdEJvdW5kcyBpbnB1dHMgYXJlIGJlaW5nIG92ZXJyaWRkZW4gYnkgZml0U2NyZWVuQ29vcmRpbmF0ZXMgaW5wdXQnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuTWFwU2VydmljZS5maXRTY3JlZW5Db29yZGluYXRlcyhcbiAgICAgICAgY2hhbmdlcy5maXRTY3JlZW5Db29yZGluYXRlcy5jdXJyZW50VmFsdWUsXG4gICAgICAgIHRoaXMuYmVhcmluZyA/IHRoaXMuYmVhcmluZ1swXSA6IDAsXG4gICAgICAgIHRoaXMubW92aW5nT3B0aW9uc1xuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgdGhpcy5jZW50ZXJXaXRoUGFuVG8gJiZcbiAgICAgIGNoYW5nZXMuY2VudGVyICYmICFjaGFuZ2VzLmNlbnRlci5pc0ZpcnN0Q2hhbmdlKCkgJiZcbiAgICAgICFjaGFuZ2VzLnpvb20gJiYgIWNoYW5nZXMuYmVhcmluZyAmJiAhY2hhbmdlcy5waXRjaFxuICAgICkge1xuICAgICAgdGhpcy5NYXBTZXJ2aWNlLnBhblRvKHRoaXMuY2VudGVyISwgdGhpcy5wYW5Ub09wdGlvbnMpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjaGFuZ2VzLmNlbnRlciAmJiAhY2hhbmdlcy5jZW50ZXIuaXNGaXJzdENoYW5nZSgpIHx8XG4gICAgICBjaGFuZ2VzLnpvb20gJiYgIWNoYW5nZXMuem9vbS5pc0ZpcnN0Q2hhbmdlKCkgfHxcbiAgICAgIChjaGFuZ2VzLmJlYXJpbmcgJiYgIWNoYW5nZXMuYmVhcmluZy5pc0ZpcnN0Q2hhbmdlKCkgJiYgIWNoYW5nZXMuZml0U2NyZWVuQ29vcmRpbmF0ZXMpIHx8XG4gICAgICBjaGFuZ2VzLnBpdGNoICYmICFjaGFuZ2VzLnBpdGNoLmlzRmlyc3RDaGFuZ2UoKVxuICAgICkge1xuICAgICAgdGhpcy5NYXBTZXJ2aWNlLm1vdmUoXG4gICAgICAgIHRoaXMubW92aW5nTWV0aG9kLFxuICAgICAgICB0aGlzLm1vdmluZ09wdGlvbnMsXG4gICAgICAgIGNoYW5nZXMuem9vbSAmJiB0aGlzLnpvb20gPyB0aGlzLnpvb21bMF0gOiB1bmRlZmluZWQsXG4gICAgICAgIGNoYW5nZXMuY2VudGVyID8gdGhpcy5jZW50ZXIgOiB1bmRlZmluZWQsXG4gICAgICAgIGNoYW5nZXMuYmVhcmluZyAmJiB0aGlzLmJlYXJpbmcgPyB0aGlzLmJlYXJpbmdbMF0gOiB1bmRlZmluZWQsXG4gICAgICAgIGNoYW5nZXMucGl0Y2ggJiYgdGhpcy5waXRjaCA/IHRoaXMucGl0Y2hbMF0gOiB1bmRlZmluZWRcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=