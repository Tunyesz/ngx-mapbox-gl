/**
 * @fileoverview added by tsickle
 * Generated from: lib/marker/marker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Output, ViewChild, ViewEncapsulation, EventEmitter } from '@angular/core';
import { MapService } from '../map/map.service';
export class MarkerComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXBib3gtZ2wvIiwic291cmNlcyI6WyJsaWIvbWFya2VyL21hcmtlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFRaEQsTUFBTSxPQUFPLGVBQWU7Ozs7SUFvQjFCLFlBQ1UsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVR0QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN2QyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNsQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQVEzQyxDQUFDOzs7O0lBRUwsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQztTQUNwRTtJQUNILENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDckQsbUJBQUEsSUFBSSxDQUFDLGNBQWMsRUFBQyxDQUFDLFNBQVMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztTQUM5QztRQUNELElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDdkQsbUJBQUEsSUFBSSxDQUFDLGNBQWMs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Qjs7SUFDOUIsb0NBQTJCOztJQUUzQixvQ0FBaUQ7O0lBQ2pELCtCQUE0Qzs7SUFDNUMsa0NBQStDOztJQUUvQyxrQ0FBNEQ7O0lBRTVELHlDQUF3Qjs7Ozs7SUFHdEIscUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG5nTGF0TGlrZSwgTWFya2VyLCBQb2ludExpa2UsIEFuY2hvciB9IGZyb20gJ21hcGJveC1nbCc7XG5pbXBvcnQgeyBNYXBTZXJ2aWNlIH0gZnJvbSAnLi4vbWFwL21hcC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWdsLW1hcmtlcicsXG4gIHRlbXBsYXRlOiAnPGRpdiBbY2xhc3NdPVwiY2xhc3NOYW1lXCIgI2NvbnRlbnQ+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PicsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE1hcmtlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBPbkluaXQge1xuICAvKiBJbml0IGlucHV0ICovXG4gIEBJbnB1dCgpIG9mZnNldD86IFBvaW50TGlrZTtcbiAgQElucHV0KCkgYW5jaG9yPzogQW5jaG9yO1xuXG4gIC8qIER5bmFtaWMgaW5wdXQgKi9cbiAgQElucHV0KCkgZmVhdHVyZT86IEdlb0pTT04uRmVhdHVyZTxHZW9KU09OLlBvaW50PjtcbiAgQElucHV0KCkgbG5nTGF0PzogTG5nTGF0TGlrZTtcbiAgQElucHV0KCkgZHJhZ2dhYmxlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgcG9wdXBTaG93bj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNsYXNzTmFtZTogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBkcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcmtlcj4oKTtcbiAgQE91dHB1dCgpIGRyYWcgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcmtlcj4oKTtcbiAgQE91dHB1dCgpIGRyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcmtlcj4oKTtcblxuICBAVmlld0NoaWxkKCdjb250ZW50JywgeyBzdGF0aWM6IHRydWUgfSkgY29udGVudDogRWxlbWVudFJlZjtcblxuICBtYXJrZXJJbnN0YW5jZT86IE1hcmtlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIE1hcFNlcnZpY2U6IE1hcFNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5mZWF0dXJlICYmIHRoaXMubG5nTGF0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZlYXR1cmUgYW5kIGxuZ0xhdCBpbnB1dCBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlJyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmxuZ0xhdCAmJiAhY2hhbmdlcy5sbmdMYXQuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLm1hcmtlckluc3RhbmNlIS5zZXRMbmdMYXQodGhpcy5sbmdMYXQhKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuZmVhdHVyZSAmJiAhY2hhbmdlcy5mZWF0dXJlLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5tYXJrZXJJbnN0YW5jZSEuc2V0TG5nTGF0KDxbbnVtYmVyLCBudW1iZXJdPnRoaXMuZmVhdHVyZSEuZ2VvbWV0cnkhLmNvb3JkaW5hdGVzKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuZHJhZ2dhYmxlICYmICFjaGFuZ2VzLmRyYWdnYWJsZS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMubWFya2VySW5zdGFuY2UhLnNldERyYWdnYWJsZSghIXRoaXMuZHJhZ2dhYmxlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMucG9wdXBTaG93biAmJiAhY2hhbmdlcy5wb3B1cFNob3duLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgY2hhbmdlcy5wb3B1cFNob3duLmN1cnJlbnRWYWx1ZVxuICAgICAgICA/IHRoaXMubWFya2VySW5zdGFuY2UhLmdldFBvcHVwKCkuYWRkVG8odGhpcy5NYXBTZXJ2aWNlLm1hcEluc3RhbmNlKVxuICAgICAgICA6IHRoaXMubWFya2VySW5zdGFuY2UhLmdldFBvcHVwKCkucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuTWFwU2VydmljZS5tYXBDcmVhdGVkJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5tYXJrZXJJbnN0YW5jZSA9IHRoaXMuTWFwU2VydmljZS5hZGRNYXJrZXIoe1xuICAgICAgICBtYXJrZXJzT3B0aW9uczoge1xuICAgICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICAgICAgYW5jaG9yOiB0aGlzLmFuY2hvcixcbiAgICAgICAgICBkcmFnZ2FibGU6ICEhdGhpcy5kcmFnZ2FibGUsXG4gICAgICAgICAgZWxlbWVudDogdGhpcy5jb250ZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgZmVhdHVyZTogdGhpcy5mZWF0dXJlLFxuICAgICAgICAgIGxuZ0xhdDogdGhpcy5sbmdMYXRcbiAgICAgICAgfSxcbiAgICAgICAgbWFya2Vyc0V2ZW50czoge1xuICAgICAgICAgIGRyYWdTdGFydDogdGhpcy5kcmFnU3RhcnQsXG4gICAgICAgICAgZHJhZzogdGhpcy5kcmFnLFxuICAgICAgICAgIGRyYWdFbmQ6IHRoaXMuZHJhZ0VuZFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuTWFwU2VydmljZS5yZW1vdmVNYXJrZXIodGhpcy5tYXJrZXJJbnN0YW5jZSEpO1xuICAgIHRoaXMubWFya2VySW5zdGFuY2UgPSB1bmRlZmluZWQ7XG4gIH1cblxuICB0b2dnbGVQb3B1cCgpIHtcbiAgICB0aGlzLm1hcmtlckluc3RhbmNlIS50b2dnbGVQb3B1cCgpO1xuICB9XG5cbiAgdXBkYXRlQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXM6IG51bWJlcltdKSB7XG4gICAgdGhpcy5tYXJrZXJJbnN0YW5jZSEuc2V0TG5nTGF0KDxbbnVtYmVyLCBudW1iZXJdPmNvb3JkaW5hdGVzKTtcbiAgfVxufVxuIl19