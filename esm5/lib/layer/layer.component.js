/**
 * @fileoverview added by tsickle
 * Generated from: lib/layer/layer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter, mapTo, switchMap, startWith } from 'rxjs/operators';
import { MapService } from '../map/map.service';
var LayerComponent = /** @class */ (function () {
    function LayerComponent(MapService) {
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
    LayerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sub = this.MapService.mapLoaded$.pipe(switchMap((/**
         * @return {?}
         */
        function () { return fromEvent((/** @type {?} */ (_this.MapService.mapInstance)), 'styledata').pipe(mapTo(false), filter((/**
         * @return {?}
         */
        function () { return !_this.MapService.mapInstance.getLayer(_this.id); })), startWith(true)); }))).subscribe((/**
         * @param {?} bindEvents
         * @return {?}
         */
        function (bindEvents) { return _this.init(bindEvents); }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    LayerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
    };
    /**
     * @return {?}
     */
    LayerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.layerAdded) {
            this.MapService.removeLayer(this.id);
        }
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    /**
     * @private
     * @param {?} bindEvents
     * @return {?}
     */
    LayerComponent.prototype.init = /**
     * @private
     * @param {?} bindEvents
     * @return {?}
     */
    function (bindEvents) {
        /** @type {?} */
        var layer = {
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
    };
    LayerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mgl-layer',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    LayerComponent.ctorParameters = function () { return [
        { type: MapService }
    ]; };
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
    return LayerComponent;
}());
export { LayerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hcGJveC1nbC8iLCJzb3VyY2VzIjpbImxpYi9sYXllci9sYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVQLE1BQU0sZUFBZSxDQUFDO0FBeUJ2QixPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhEO0lBNEJFLHdCQUNVLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFUdEIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFzQixDQUFDO1FBQy9DLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBc0IsQ0FBQztRQUNwRCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQXNCLENBQUM7UUFDcEQsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFzQixDQUFDO1FBRXJELGVBQVUsR0FBRyxLQUFLLENBQUM7SUFLdkIsQ0FBQzs7OztJQUVMLGlDQUFROzs7SUFBUjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ3hDLFNBQVM7OztRQUFDLGNBQU0sT0FBQSxTQUFTLENBQUMsbUJBQUssS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUEsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQzNFLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFDWixNQUFNOzs7UUFBQyxjQUFNLE9BQUEsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMs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ICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEJhY2tncm91bmRMYXlvdXQsXG4gIEJhY2tncm91bmRQYWludCxcbiAgQ2lyY2xlTGF5b3V0LFxuICBDaXJjbGVQYWludCxcbiAgRmlsbEV4dHJ1c2lvbkxheW91dCxcbiAgRmlsbEV4dHJ1c2lvblBhaW50LFxuICBGaWxsTGF5b3V0LFxuICBGaWxsUGFpbnQsXG4gIEdlb0pTT05Tb3VyY2UsXG4gIEdlb0pTT05Tb3VyY2VSYXcsXG4gIEltYWdlU291cmNlLFxuICBMYXllcixcbiAgTGluZUxheW91dCxcbiAgTGluZVBhaW50LFxuICBSYXN0ZXJMYXlvdXQsXG4gIFJhc3RlclBhaW50LFxuICBSYXN0ZXJTb3VyY2UsXG4gIFN5bWJvbExheW91dCxcbiAgU3ltYm9sUGFpbnQsXG4gIFZlY3RvclNvdXJjZSxcbiAgVmlkZW9Tb3VyY2UsXG4gIE1hcExheWVyTW91c2VFdmVudFxufSBmcm9tICdtYXBib3gtZ2wnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwVG8sIHN3aXRjaE1hcCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL21hcC9tYXAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nbC1sYXllcicsXG4gIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIExheWVyIHtcbiAgLyogSW5pdCBpbnB1dHMgKi9cbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgc291cmNlPzogc3RyaW5nIHwgVmVjdG9yU291cmNlIHwgUmFzdGVyU291cmNlIHwgR2VvSlNPTlNvdXJjZSB8IEltYWdlU291cmNlIHwgVmlkZW9Tb3VyY2UgfCBHZW9KU09OU291cmNlUmF3O1xuICBASW5wdXQoKSB0eXBlOiAnc3ltYm9sJyB8ICdmaWxsJyB8ICdsaW5lJyB8ICdjaXJjbGUnIHwgJ2ZpbGwtZXh0cnVzaW9uJyB8ICdyYXN0ZXInIHwgJ2JhY2tncm91bmQnO1xuICBASW5wdXQoKSBtZXRhZGF0YT86IGFueTtcbiAgQElucHV0KCkgc291cmNlTGF5ZXI/OiBzdHJpbmc7XG5cbiAgLyogRHluYW1pYyBpbnB1dHMgKi9cbiAgQElucHV0KCkgZmlsdGVyPzogYW55W107XG4gIEBJbnB1dCgpIGxheW91dD86IEJhY2tncm91bmRMYXlvdXQgfCBGaWxsTGF5b3V0IHwgRmlsbEV4dHJ1c2lvbkxheW91dCB8IExpbmVMYXlvdXQgfCBTeW1ib2xMYXlvdXQgfCBSYXN0ZXJMYXlvdXQgfCBDaXJjbGVMYXlvdXQ7XG4gIEBJbnB1dCgpIHBhaW50PzogQmFja2dyb3VuZFBhaW50IHwgRmlsbFBhaW50IHwgRmlsbEV4dHJ1c2lvblBhaW50IHwgTGluZVBhaW50IHwgU3ltYm9sUGFpbnQgfCBSYXN0ZXJQYWludCB8IENpcmNsZVBhaW50O1xuICBASW5wdXQoKSBiZWZvcmU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1pbnpvb20/OiBudW1iZXI7XG4gIEBJbnB1dCgpIG1heHpvb20/OiBudW1iZXI7XG5cbiAgQE91dHB1dCgpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBMYXllck1vdXNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBtb3VzZUVudGVyID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBMYXllck1vdXNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBtb3VzZUxlYXZlID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBMYXllck1vdXNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBtb3VzZU1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcExheWVyTW91c2VFdmVudD4oKTtcblxuICBwcml2YXRlIGxheWVyQWRkZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIE1hcFNlcnZpY2U6IE1hcFNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YiA9IHRoaXMuTWFwU2VydmljZS5tYXBMb2FkZWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gZnJvbUV2ZW50KDxhbnk+dGhpcy5NYXBTZXJ2aWNlLm1hcEluc3RhbmNlLCAnc3R5bGVkYXRhJykucGlwZShcbiAgICAgICAgbWFwVG8oZmFsc2UpLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gIXRoaXMuTWFwU2VydmljZS5tYXBJbnN0YW5jZS5nZXRMYXllcih0aGlzLmlkKSksXG4gICAgICAgIHN0YXJ0V2l0aCh0cnVlKVxuICAgICAgKSksXG4gICAgKS5zdWJzY3JpYmUoKGJpbmRFdmVudHM6IGJvb2xlYW4pID0+IHRoaXMuaW5pdChiaW5kRXZlbnRzKSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCF0aGlzLmxheWVyQWRkZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMucGFpbnQgJiYgIWNoYW5nZXMucGFpbnQuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLk1hcFNlcnZpY2Uuc2V0QWxsTGF5ZXJQYWludFByb3BlcnR5KHRoaXMuaWQsIGNoYW5nZXMucGFpbnQuY3VycmVudFZhbHVlISk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmxheW91dCAmJiAhY2hhbmdlcy5sYXlvdXQuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLk1hcFNlcnZpY2Uuc2V0QWxsTGF5ZXJMYXlvdXRQcm9wZXJ0eSh0aGlzLmlkLCBjaGFuZ2VzLmxheW91dC5jdXJyZW50VmFsdWUhKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuZmlsdGVyICYmICFjaGFuZ2VzLmZpbHRlci5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuTWFwU2VydmljZS5zZXRMYXllckZpbHRlcih0aGlzLmlkLCBjaGFuZ2VzLmZpbHRlci5jdXJyZW50VmFsdWUhKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuYmVmb3JlICYmICFjaGFuZ2VzLmJlZm9yZS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuTWFwU2VydmljZS5zZXRMYXllckJlZm9yZSh0aGlzLmlkLCBjaGFuZ2VzLmJlZm9yZS5jdXJyZW50VmFsdWUhKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgY2hhbmdlcy5taW56b29tICYmICFjaGFuZ2VzLm1pbnpvb20uaXNGaXJzdENoYW5nZSgpIHx8XG4gICAgICBjaGFuZ2VzLm1heHpvb20gJiYgIWNoYW5nZXMubWF4em9vbS5pc0ZpcnN0Q2hhbmdlKClcbiAgICApIHtcbiAgICAgIHRoaXMuTWFwU2VydmljZS5zZXRMYXllclpvb21SYW5nZSh0aGlzLmlkLCB0aGlzLm1pbnpvb20sIHRoaXMubWF4em9vbSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMubGF5ZXJBZGRlZCkge1xuICAgICAgdGhpcy5NYXBTZXJ2aWNlLnJlbW92ZUxheWVyKHRoaXMuaWQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdWIpIHtcbiAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0KGJpbmRFdmVudHM6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBsYXllciA9IHtcbiAgICAgIGxheWVyT3B0aW9uczoge1xuICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgICAgICBtZXRhZGF0YTogdGhpcy5tZXRhZGF0YSxcbiAgICAgICAgJ3NvdXJjZS1sYXllcic6IHRoaXMuc291cmNlTGF5ZXIsXG4gICAgICAgIG1pbnpvb206IHRoaXMubWluem9vbSxcbiAgICAgICAgbWF4em9vbTogdGhpcy5tYXh6b29tLFxuICAgICAgICBmaWx0ZXI6IHRoaXMuZmlsdGVyLFxuICAgICAgICBsYXlvdXQ6IHRoaXMubGF5b3V0LFxuICAgICAgICBwYWludDogdGhpcy5wYWludFxuICAgICAgfSxcbiAgICAgIGxheWVyRXZlbnRzOiB7XG4gICAgICAgIGNsaWNrOiB0aGlzLmNsaWNrLFxuICAgICAgICBtb3VzZUVudGVyOiB0aGlzLm1vdXNlRW50ZXIsXG4gICAgICAgIG1vdXNlTGVhdmU6IHRoaXMubW91c2VMZWF2ZSxcbiAgICAgICAgbW91c2VNb3ZlOiB0aGlzLm1vdXNlTW92ZVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5NYXBTZXJ2aWNlLmFkZExheWVyKGxheWVyLCBiaW5kRXZlbnRzLCB0aGlzLmJlZm9yZSk7XG4gICAgdGhpcy5sYXllckFkZGVkID0gdHJ1ZTtcbiAgfVxufVxuIl19