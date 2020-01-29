/**
 * @fileoverview added by tsickle
 * Generated from: lib/marker/marker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Output, ViewChild, ViewEncapsulation, EventEmitter } from '@angular/core';
import { MapService } from '../map/map.service';
var MarkerComponent = /** @class */ (function () {
    function MarkerComponent(MapService) {
        this.MapService = MapService;
        this.dragStart = new EventEmitter();
        this.drag = new EventEmitter();
        this.dragEnd = new EventEmitter();
    }
    /**
     * @return {?}
     */
    MarkerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.feature && this.lngLat) {
            throw new Error('feature and lngLat input are mutually exclusive');
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MarkerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
    };
    /**
     * @return {?}
     */
    MarkerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.MapService.mapCreated$.subscribe((/**
         * @return {?}
         */
        function () {
            _this.markerInstance = _this.MapService.addMarker({
                markersOptions: {
                    offset: _this.offset,
                    anchor: _this.anchor,
                    draggable: !!_this.draggable,
                    element: _this.content.nativeElement,
                    feature: _this.feature,
                    lngLat: _this.lngLat
                },
                markersEvents: {
                    dragStart: _this.dragStart,
                    drag: _this.drag,
                    dragEnd: _this.dragEnd
                }
            });
        }));
    };
    /**
     * @return {?}
     */
    MarkerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.MapService.removeMarker((/** @type {?} */ (this.markerInstance)));
        this.markerInstance = undefined;
    };
    /**
     * @return {?}
     */
    MarkerComponent.prototype.togglePopup = /**
     * @return {?}
     */
    function () {
        (/** @type {?} */ (this.markerInstance)).togglePopup();
    };
    /**
     * @param {?} coordinates
     * @return {?}
     */
    MarkerComponent.prototype.updateCoordinates = /**
     * @param {?} coordinates
     * @return {?}
     */
    function (coordinates) {
        (/** @type {?} */ (this.markerInstance)).setLngLat((/** @type {?} */ (coordinates)));
    };
    MarkerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mgl-marker',
                    template: '<div [class]="className" #content><ng-content></ng-content></div>',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    MarkerComponent.ctorParameters = function () { return [
        { type: MapService }
    ]; };
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
    return MarkerComponent;
}());
export { MarkerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXBib3gtZ2wvIiwic291cmNlcyI6WyJsaWIvbWFya2VyL21hcmtlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFaEQ7SUEwQkUseUJBQ1UsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVR0QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN2QyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNsQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQVEzQyxDQUFDOzs7O0lBRUwsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDL0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxxQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUNyRCxtQkFBQSxJQUFJLENBQUMsY0FBYyxFQUFDLENBQUMsU0FBUyxDQUFDLG1CQUFBLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN2RCxtQkFBQSxJQUFJLENBQUMsY0FBYyxF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RTFCLGlDQUE0Qjs7SUFDNUIsaUNBQXlCOztJQUd6QixrQ0FBa0Q7O0lBQ2xELGlDQUE2Qjs7SUFDN0Isb0NBQTZCOztJQUM3QixxQ0FBOEI7O0lBQzlCLG9DQUEyQjs7SUFFM0Isb0NBQWlEOztJQUNqRCwrQkFBNEM7O0lBQzVDLGtDQUErQzs7SUFFL0Msa0NBQTREOztJQUU1RCx5Q0FBd0I7Ozs7O0lBR3RCLHFDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExuZ0xhdExpa2UsIE1hcmtlciwgUG9pbnRMaWtlLCBBbmNob3IgfSBmcm9tICdtYXBib3gtZ2wnO1xuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL21hcC9tYXAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nbC1tYXJrZXInLFxuICB0ZW1wbGF0ZTogJzxkaXYgW2NsYXNzXT1cImNsYXNzTmFtZVwiICNjb250ZW50PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBNYXJrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcbiAgLyogSW5pdCBpbnB1dCAqL1xuICBASW5wdXQoKSBvZmZzZXQ/OiBQb2ludExpa2U7XG4gIEBJbnB1dCgpIGFuY2hvcj86IEFuY2hvcjtcblxuICAvKiBEeW5hbWljIGlucHV0ICovXG4gIEBJbnB1dCgpIGZlYXR1cmU/OiBHZW9KU09OLkZlYXR1cmU8R2VvSlNPTi5Qb2ludD47XG4gIEBJbnB1dCgpIGxuZ0xhdD86IExuZ0xhdExpa2U7XG4gIEBJbnB1dCgpIGRyYWdnYWJsZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHBvcHVwU2hvd24/OiBib29sZWFuO1xuICBASW5wdXQoKSBjbGFzc05hbWU6IHN0cmluZztcblxuICBAT3V0cHV0KCkgZHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxNYXJrZXI+KCk7XG4gIEBPdXRwdXQoKSBkcmFnID0gbmV3IEV2ZW50RW1pdHRlcjxNYXJrZXI+KCk7XG4gIEBPdXRwdXQoKSBkcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxNYXJrZXI+KCk7XG5cbiAgQFZpZXdDaGlsZCgnY29udGVudCcsIHsgc3RhdGljOiB0cnVlIH0pIGNvbnRlbnQ6IEVsZW1lbnRSZWY7XG5cbiAgbWFya2VySW5zdGFuY2U/OiBNYXJrZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBNYXBTZXJ2aWNlOiBNYXBTZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZmVhdHVyZSAmJiB0aGlzLmxuZ0xhdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdmZWF0dXJlIGFuZCBsbmdMYXQgaW5wdXQgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZScpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5sbmdMYXQgJiYgIWNoYW5nZXMubG5nTGF0LmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5tYXJrZXJJbnN0YW5jZSEuc2V0TG5nTGF0KHRoaXMubG5nTGF0ISk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmZlYXR1cmUgJiYgIWNoYW5nZXMuZmVhdHVyZS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMubWFya2VySW5zdGFuY2UhLnNldExuZ0xhdCg8W251bWJlciwgbnVtYmVyXT50aGlzLmZlYXR1cmUhLmdlb21ldHJ5IS5jb29yZGluYXRlcyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmRyYWdnYWJsZSAmJiAhY2hhbmdlcy5kcmFnZ2FibGUuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLm1hcmtlckluc3RhbmNlIS5zZXREcmFnZ2FibGUoISF0aGlzLmRyYWdnYWJsZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnBvcHVwU2hvd24gJiYgIWNoYW5nZXMucG9wdXBTaG93bi5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIGNoYW5nZXMucG9wdXBTaG93bi5jdXJyZW50VmFsdWVcbiAgICAgICAgPyB0aGlzLm1hcmtlckluc3RhbmNlIS5nZXRQb3B1cCgpLmFkZFRvKHRoaXMuTWFwU2VydmljZS5tYXBJbnN0YW5jZSlcbiAgICAgICAgOiB0aGlzLm1hcmtlckluc3RhbmNlIS5nZXRQb3B1cCgpLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLk1hcFNlcnZpY2UubWFwQ3JlYXRlZCQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubWFya2VySW5zdGFuY2UgPSB0aGlzLk1hcFNlcnZpY2UuYWRkTWFya2VyKHtcbiAgICAgICAgbWFya2Vyc09wdGlvbnM6IHtcbiAgICAgICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0LFxuICAgICAgICAgIGFuY2hvcjogdGhpcy5hbmNob3IsXG4gICAgICAgICAgZHJhZ2dhYmxlOiAhIXRoaXMuZHJhZ2dhYmxlLFxuICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuY29udGVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgIGZlYXR1cmU6IHRoaXMuZmVhdHVyZSxcbiAgICAgICAgICBsbmdMYXQ6IHRoaXMubG5nTGF0XG4gICAgICAgIH0sXG4gICAgICAgIG1hcmtlcnNFdmVudHM6IHtcbiAgICAgICAgICBkcmFnU3RhcnQ6IHRoaXMuZHJhZ1N0YXJ0LFxuICAgICAgICAgIGRyYWc6IHRoaXMuZHJhZyxcbiAgICAgICAgICBkcmFnRW5kOiB0aGlzLmRyYWdFbmRcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLk1hcFNlcnZpY2UucmVtb3ZlTWFya2VyKHRoaXMubWFya2VySW5zdGFuY2UhKTtcbiAgICB0aGlzLm1hcmtlckluc3RhbmNlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgdG9nZ2xlUG9wdXAoKSB7XG4gICAgdGhpcy5tYXJrZXJJbnN0YW5jZSEudG9nZ2xlUG9wdXAoKTtcbiAgfVxuXG4gIHVwZGF0ZUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzOiBudW1iZXJbXSkge1xuICAgIHRoaXMubWFya2VySW5zdGFuY2UhLnNldExuZ0xhdCg8W251bWJlciwgbnVtYmVyXT5jb29yZGluYXRlcyk7XG4gIH1cbn1cbiJdfQ==