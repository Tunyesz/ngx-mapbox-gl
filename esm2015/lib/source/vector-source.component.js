/**
 * @fileoverview added by tsickle
 * Generated from: lib/source/vector-source.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MapService } from '../map/map.service';
export class VectorSourceComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9yLXNvdXJjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWFwYm94LWdsLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZS92ZWN0b3Itc291cmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUErQyxNQUFNLGVBQWUsQ0FBQztBQUV2SCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBT2hELE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFlaEMsWUFDVSxVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBTmhDLFNBQUksR0FBYSxRQUFRLENBQUMsQ0FBQyx3QkFBd0I7O1FBRTNDLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLFFBQUcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBSTdCLENBQUM7Ozs7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7a0JBQ04sR0FBRyxHQUFHLFNBQVMsQ0FBQyxtQkFBSyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBQSxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDdkUsTUFBTTs7O1lBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQzlELENBQUMsU0FBUzs7O1lBQUMsR0FBRyxFQUFFO2dCQUNmLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNkLENBQUMsRUFBQztZQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsT0FBTztTQUNSO1FBQ0QsSUFDRSxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUU7WUFDM0MsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFO1lBQy9DLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRTtZQUNuRCxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFDbkQ7WUFDQSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs7OztJQUVPLElBQUk7UUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ2pDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7OztZQW5FRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFOUSxVQUFVOzs7aUJBU2hCLEtBQUs7a0JBR0wsS0FBSztvQkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSzs7OztJQU5OLG1DQUFvQjs7SUFHcEIsb0NBQXNCOztJQUN0QixzQ0FBMEI7O0lBQzFCLHdDQUEwQjs7SUFDMUIsd0NBQTBCOztJQUUxQixxQ0FBMEI7Ozs7O0lBRTFCLDRDQUE0Qjs7Ozs7SUFDNUIsb0NBQWlDOzs7OztJQUcvQiwyQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmVjdG9yU291cmNlIH0gZnJvbSAnbWFwYm94LWdsJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNYXBTZXJ2aWNlIH0gZnJvbSAnLi4vbWFwL21hcC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWdsLXZlY3Rvci1zb3VyY2UnLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFZlY3RvclNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIFZlY3RvclNvdXJjZSB7XG4gIC8qIEluaXQgaW5wdXRzICovXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG5cbiAgLyogRHluYW1pYyBpbnB1dHMgKi9cbiAgQElucHV0KCkgdXJsPzogc3RyaW5nO1xuICBASW5wdXQoKSB0aWxlcz86IHN0cmluZ1tdO1xuICBASW5wdXQoKSBtaW56b29tPzogbnVtYmVyO1xuICBASW5wdXQoKSBtYXh6b29tPzogbnVtYmVyO1xuXG4gIHR5cGU6ICd2ZWN0b3InID0gJ3ZlY3Rvcic7IC8vIEp1c3QgdG8gbWFrZSB0cyBoYXBweVxuXG4gIHByaXZhdGUgc291cmNlQWRkZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzdWIgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBNYXBTZXJ2aWNlOiBNYXBTZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5NYXBTZXJ2aWNlLm1hcExvYWRlZCQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgY29uc3Qgc3ViID0gZnJvbUV2ZW50KDxhbnk+dGhpcy5NYXBTZXJ2aWNlLm1hcEluc3RhbmNlLCAnc3R5bGVkYXRhJykucGlwZShcbiAgICAgICAgZmlsdGVyKCgpID0+ICF0aGlzLk1hcFNlcnZpY2UubWFwSW5zdGFuY2UuZ2V0U291cmNlKHRoaXMuaWQpKVxuICAgICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zdWIuYWRkKHN1Yik7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCF0aGlzLnNvdXJjZUFkZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGNoYW5nZXMudXJsICYmICFjaGFuZ2VzLnVybC5pc0ZpcnN0Q2hhbmdlKCkgfHxcbiAgICAgIGNoYW5nZXMudGlsZXMgJiYgIWNoYW5nZXMudGlsZXMuaXNGaXJzdENoYW5nZSgpIHx8XG4gICAgICBjaGFuZ2VzLm1pbnpvb20gJiYgIWNoYW5nZXMubWluem9vbS5pc0ZpcnN0Q2hhbmdlKCkgfHxcbiAgICAgIGNoYW5nZXMubWF4em9vbSAmJiAhY2hhbmdlcy5tYXh6b29tLmlzRmlyc3RDaGFuZ2UoKVxuICAgICkge1xuICAgICAgdGhpcy5uZ09uRGVzdHJveSgpO1xuICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKHRoaXMuc291cmNlQWRkZWQpIHtcbiAgICAgIHRoaXMuTWFwU2VydmljZS5yZW1vdmVTb3VyY2UodGhpcy5pZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCkge1xuICAgIHRoaXMuTWFwU2VydmljZS5hZGRTb3VyY2UodGhpcy5pZCwge1xuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgIHRpbGVzOiB0aGlzLnRpbGVzLFxuICAgICAgbWluem9vbTogdGhpcy5taW56b29tLFxuICAgICAgbWF4em9vbTogdGhpcy5tYXh6b29tLFxuICAgIH0pO1xuICAgIHRoaXMuc291cmNlQWRkZWQgPSB0cnVlO1xuICB9XG59XG4iXX0=