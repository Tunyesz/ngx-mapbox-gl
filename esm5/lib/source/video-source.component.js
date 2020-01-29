/**
 * @fileoverview added by tsickle
 * Generated from: lib/source/video-source.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MapService } from '../map/map.service';
var VideoSourceComponent = /** @class */ (function () {
    function VideoSourceComponent(MapService) {
        this.MapService = MapService;
        this.sourceAdded = false;
        this.sub = new Subscription();
    }
    /**
     * @return {?}
     */
    VideoSourceComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.MapService.mapLoaded$.subscribe((/**
         * @return {?}
         */
        function () {
            _this.init();
            /** @type {?} */
            var sub = fromEvent((/** @type {?} */ (_this.MapService.mapInstance)), 'styledata').pipe(filter((/**
             * @return {?}
             */
            function () { return !_this.MapService.mapInstance.getSource(_this.id); }))).subscribe((/**
             * @return {?}
             */
            function () {
                _this.init();
            }));
            _this.sub.add(sub);
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    VideoSourceComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this.sourceAdded) {
            return;
        }
        if (changes.urls && !changes.urls.isFirstChange() ||
            changes.coordinates && !changes.coordinates.isFirstChange()) {
            this.ngOnDestroy();
            this.ngOnInit();
        }
    };
    /**
     * @return {?}
     */
    VideoSourceComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.sub.unsubscribe();
        if (this.sourceAdded) {
            this.MapService.removeSource(this.id);
        }
    };
    /**
     * @private
     * @return {?}
     */
    VideoSourceComponent.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        this.MapService.addSource(this.id, {
            type: 'video',
            urls: this.urls,
            coordinates: this.coordinates
        });
        this.sourceAdded = true;
    };
    VideoSourceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mgl-video-source',
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    VideoSourceComponent.ctorParameters = function () { return [
        { type: MapService }
    ]; };
    VideoSourceComponent.propDecorators = {
        id: [{ type: Input }],
        urls: [{ type: Input }],
        coordinates: [{ type: Input }]
    };
    return VideoSourceComponent;
}());
export { VideoSourceComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8tc291cmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXBib3gtZ2wvIiwic291cmNlcyI6WyJsaWIvc291cmNlL3ZpZGVvLXNvdXJjZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBK0MsTUFBTSxlQUFlLENBQUM7QUFFdkgsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRDtJQWdCRSw4QkFDVSxVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSnhCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLFFBQUcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBSTdCLENBQUM7Ozs7SUFFTCx1Q0FBUTs7O0lBQVI7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVM7OztRQUFDO1lBQ25DLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Z0JBQ04sR0FBRyxHQUFHLFNBQVMsQ0FBQyxtQkFBSyxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBQSxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDdkUsTUFBTTs7O1lBQUMsY0FBTSxPQUFBLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsRUFBL0MsQ0FBK0MsRUFBQyxDQUM5RCxDQUFDLFNBQVM7OztZQUFDO2dCQUNWLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNkLENBQUMsRUFBQztZQUNGLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCwwQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsT0FBTztTQUNSO1FBQ0QsSUFDRSxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDN0MsT0FBTyxDQUFDLFdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLEVBQzNEO1lBQ0EsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqQjtJQUNILENBQUM7Ozs7SUFFRCwwQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs7OztJQUVPLG1DQUFJOzs7O0lBQVo7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ2pDLElBQUksRUFBRSxPQUFPO1lBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQzlCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7O2dCQTNERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLEVBQUU7b0JBQ1osZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQU5RLFVBQVU7OztxQkFTaEIsS0FBSzt1QkFHTCxLQUFLOzhCQUNMLEtBQUs7O0lBaURSLDJCQUFDO0NBQUEsQUE1REQsSUE0REM7U0F2RFksb0JBQW9COzs7SUFFL0Isa0NBQW9COztJQUdwQixvQ0FBd0I7O0lBQ3hCLDJDQUFpQzs7Ozs7SUFFakMsMkNBQTRCOzs7OztJQUM1QixtQ0FBaUM7Ozs7O0lBRy9CLDBDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWaWRlb1NvdXJjZU9wdGlvbnMgfSBmcm9tICdtYXBib3gtZ2wnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi9tYXAvbWFwLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZ2wtdmlkZW8tc291cmNlJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBWaWRlb1NvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIFZpZGVvU291cmNlT3B0aW9ucyB7XG4gIC8qIEluaXQgaW5wdXRzICovXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG5cbiAgLyogRHluYW1pYyBpbnB1dHMgKi9cbiAgQElucHV0KCkgdXJsczogc3RyaW5nW107XG4gIEBJbnB1dCgpIGNvb3JkaW5hdGVzOiBudW1iZXJbXVtdO1xuXG4gIHByaXZhdGUgc291cmNlQWRkZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzdWIgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBNYXBTZXJ2aWNlOiBNYXBTZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5NYXBTZXJ2aWNlLm1hcExvYWRlZCQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgY29uc3Qgc3ViID0gZnJvbUV2ZW50KDxhbnk+dGhpcy5NYXBTZXJ2aWNlLm1hcEluc3RhbmNlLCAnc3R5bGVkYXRhJykucGlwZShcbiAgICAgICAgZmlsdGVyKCgpID0+ICF0aGlzLk1hcFNlcnZpY2UubWFwSW5zdGFuY2UuZ2V0U291cmNlKHRoaXMuaWQpKVxuICAgICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zdWIuYWRkKHN1Yik7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCF0aGlzLnNvdXJjZUFkZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGNoYW5nZXMudXJscyAmJiAhY2hhbmdlcy51cmxzLmlzRmlyc3RDaGFuZ2UoKSB8fFxuICAgICAgY2hhbmdlcy5jb29yZGluYXRlcyAmJiAhY2hhbmdlcy5jb29yZGluYXRlcy5pc0ZpcnN0Q2hhbmdlKClcbiAgICApIHtcbiAgICAgIHRoaXMubmdPbkRlc3Ryb3koKTtcbiAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIGlmICh0aGlzLnNvdXJjZUFkZGVkKSB7XG4gICAgICB0aGlzLk1hcFNlcnZpY2UucmVtb3ZlU291cmNlKHRoaXMuaWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpIHtcbiAgICB0aGlzLk1hcFNlcnZpY2UuYWRkU291cmNlKHRoaXMuaWQsIHtcbiAgICAgIHR5cGU6ICd2aWRlbycsXG4gICAgICB1cmxzOiB0aGlzLnVybHMsXG4gICAgICBjb29yZGluYXRlczogdGhpcy5jb29yZGluYXRlc1xuICAgIH0pO1xuICAgIHRoaXMuc291cmNlQWRkZWQgPSB0cnVlO1xuICB9XG59XG4iXX0=