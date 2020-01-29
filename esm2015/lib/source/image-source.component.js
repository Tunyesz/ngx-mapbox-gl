/**
 * @fileoverview added by tsickle
 * Generated from: lib/source/image-source.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MapService } from '../map/map.service';
export class ImageSourceComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utc291cmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXBib3gtZ2wvIiwic291cmNlcyI6WyJsaWIvc291cmNlL2ltYWdlLXNvdXJjZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBK0MsTUFBTSxlQUFlLENBQUM7QUFHdkgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBT2hELE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFXL0IsWUFDVSxVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQzVCLENBQUM7Ozs7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVU7YUFDbEMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUMvQixPQUFPO1NBQ1I7O2NBRUssTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFjLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDcEUsTUFBTSxDQUFDLFdBQVcsQ0FBQztZQUNqQixHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDckQsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXO1NBQzlFLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDOzs7OztJQUVPLElBQUk7O2NBQ0osV0FBVyxHQUFtQjtZQUNsQyxJQUFJLEVBQUUsT0FBTztZQUNiLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztTQUM5QjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQXZERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFOUSxVQUFVOzs7aUJBU2hCLEtBQUs7a0JBR0wsS0FBSzswQkFDTCxLQUFLOzs7O0lBSk4sa0NBQW9COztJQUdwQixtQ0FBcUI7O0lBQ3JCLDJDQUFpQzs7Ozs7SUFFakMsbUNBQTBCOzs7OztJQUMxQix3Q0FBMEI7Ozs7O0lBR3hCLDBDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbWFnZVNvdXJjZSwgSW1hZ2VTb3VyY2VPcHRpb25zLCBJbWFnZVNvdXJjZVJhdyB9IGZyb20gJ21hcGJveC1nbCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi9tYXAvbWFwLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZ2wtaW1hZ2Utc291cmNlJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZVNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIEltYWdlU291cmNlT3B0aW9ucyB7XG4gIC8qIEluaXQgaW5wdXRzICovXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG5cbiAgLyogRHluYW1pYyBpbnB1dHMgKi9cbiAgQElucHV0KCkgdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvb3JkaW5hdGVzOiBudW1iZXJbXVtdO1xuXG4gIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgc291cmNlSWQ/OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBNYXBTZXJ2aWNlOiBNYXBTZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWIgPSB0aGlzLk1hcFNlcnZpY2UubWFwTG9hZGVkJFxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmluaXQoKSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMuc291cmNlSWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZSA9IHRoaXMuTWFwU2VydmljZS5nZXRTb3VyY2U8SW1hZ2VTb3VyY2U+KHRoaXMuc291cmNlSWQpO1xuICAgIHNvdXJjZS51cGRhdGVJbWFnZSh7XG4gICAgICB1cmw6IGNoYW5nZXMudXJsID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiB0aGlzLnVybCxcbiAgICAgIGNvb3JkaW5hdGVzOiBjaGFuZ2VzLmNvb3JkaW5hdGVzID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiB0aGlzLmNvb3JkaW5hdGVzXG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zb3VyY2VJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLk1hcFNlcnZpY2UucmVtb3ZlU291cmNlKHRoaXMuc291cmNlSWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpIHtcbiAgICBjb25zdCBpbWFnZVNvdXJjZTogSW1hZ2VTb3VyY2VSYXcgPSB7XG4gICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgIGNvb3JkaW5hdGVzOiB0aGlzLmNvb3JkaW5hdGVzXG4gICAgfTtcbiAgICB0aGlzLk1hcFNlcnZpY2UuYWRkU291cmNlKHRoaXMuaWQsIGltYWdlU291cmNlKTtcbiAgICB0aGlzLnNvdXJjZUlkID0gdGhpcy5pZDtcbiAgfVxufVxuIl19