/**
 * @fileoverview added by tsickle
 * Generated from: lib/source/raster-source.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MapService } from '../map/map.service';
export class RasterSourceComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFzdGVyLXNvdXJjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWFwYm94LWdsLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZS9yYXN0ZXItc291cmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUErQyxNQUFNLGVBQWUsQ0FBQztBQUV2SCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBT2hELE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFpQmhDLFlBQ1UsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQU5oQyxTQUFJLEdBQWEsUUFBUSxDQUFDLENBQUMsd0JBQXdCOztRQUUzQyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixRQUFHLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUk3QixDQUFDOzs7O0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUN4QyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7O2tCQUNOLEdBQUcsR0FBRyxTQUFTLENBQUMsbUJBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUEsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ3ZFLE1BQU07OztZQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUM5RCxDQUFDLFNBQVM7OztZQUFDLEdBQUcsRUFBRTtnQkFDZixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZCxDQUFDLEVBQUM7WUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLE9BQU87U0FDUjtRQUNELElBQ0UsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFO1lBQzNDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtZQUMvQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUU7WUFDakQsT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQ25ELE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRTtZQUNuRCxPQUFPLENBQUMsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsRUFDckQ7WUFDQSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs7OztJQUVPLElBQUk7O2NBQ0osTUFBTSxHQUFHO1lBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN4QjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQzs7O1lBMUVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsRUFBRTtnQkFDWixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQU5RLFVBQVU7OztpQkFTaEIsS0FBSztrQkFHTCxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSzs7OztJQVJOLG1DQUFvQjs7SUFHcEIsb0NBQXFCOztJQUNyQixzQ0FBMEI7O0lBQzFCLHVDQUEyQjs7SUFDM0Isd0NBQTBCOztJQUMxQix3Q0FBMEI7O0lBQzFCLHlDQUEyQjs7SUFFM0IscUNBQTBCOzs7OztJQUUxQiw0Q0FBNEI7Ozs7O0lBQzVCLG9DQUFpQzs7Ozs7SUFHL0IsMkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJhc3RlclNvdXJjZSB9IGZyb20gJ21hcGJveC1nbCc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL21hcC9tYXAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nbC1yYXN0ZXItc291cmNlJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBSYXN0ZXJTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBSYXN0ZXJTb3VyY2Uge1xuICAvKiBJbml0IGlucHV0cyAqL1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuXG4gIC8qIER5bmFtaWMgaW5wdXRzICovXG4gIEBJbnB1dCgpIHVybDogc3RyaW5nO1xuICBASW5wdXQoKSB0aWxlcz86IHN0cmluZ1tdO1xuICBASW5wdXQoKSBib3VuZHM/OiBudW1iZXJbXTtcbiAgQElucHV0KCkgbWluem9vbT86IG51bWJlcjtcbiAgQElucHV0KCkgbWF4em9vbT86IG51bWJlcjtcbiAgQElucHV0KCkgdGlsZVNpemU/OiBudW1iZXI7XG5cbiAgdHlwZTogJ3Jhc3RlcicgPSAncmFzdGVyJzsgLy8gSnVzdCB0byBtYWtlIHRzIGhhcHB5XG5cbiAgcHJpdmF0ZSBzb3VyY2VBZGRlZCA9IGZhbHNlO1xuICBwcml2YXRlIHN1YiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIE1hcFNlcnZpY2U6IE1hcFNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLk1hcFNlcnZpY2UubWFwTG9hZGVkJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgICBjb25zdCBzdWIgPSBmcm9tRXZlbnQoPGFueT50aGlzLk1hcFNlcnZpY2UubWFwSW5zdGFuY2UsICdzdHlsZWRhdGEnKS5waXBlKFxuICAgICAgICBmaWx0ZXIoKCkgPT4gIXRoaXMuTWFwU2VydmljZS5tYXBJbnN0YW5jZS5nZXRTb3VyY2UodGhpcy5pZCkpXG4gICAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnN1Yi5hZGQoc3ViKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoIXRoaXMuc291cmNlQWRkZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgY2hhbmdlcy51cmwgJiYgIWNoYW5nZXMudXJsLmlzRmlyc3RDaGFuZ2UoKSB8fFxuICAgICAgY2hhbmdlcy50aWxlcyAmJiAhY2hhbmdlcy50aWxlcy5pc0ZpcnN0Q2hhbmdlKCkgfHxcbiAgICAgIGNoYW5nZXMuYm91bmRzICYmICFjaGFuZ2VzLmJvdW5kcy5pc0ZpcnN0Q2hhbmdlKCkgfHxcbiAgICAgIGNoYW5nZXMubWluem9vbSAmJiAhY2hhbmdlcy5taW56b29tLmlzRmlyc3RDaGFuZ2UoKSB8fFxuICAgICAgY2hhbmdlcy5tYXh6b29tICYmICFjaGFuZ2VzLm1heHpvb20uaXNGaXJzdENoYW5nZSgpIHx8XG4gICAgICBjaGFuZ2VzLnRpbGVTaXplICYmICFjaGFuZ2VzLnRpbGVTaXplLmlzRmlyc3RDaGFuZ2UoKVxuICAgICkge1xuICAgICAgdGhpcy5uZ09uRGVzdHJveSgpO1xuICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKHRoaXMuc291cmNlQWRkZWQpIHtcbiAgICAgIHRoaXMuTWFwU2VydmljZS5yZW1vdmVTb3VyY2UodGhpcy5pZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCkge1xuICAgIGNvbnN0IHNvdXJjZSA9IHtcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICB0aWxlczogdGhpcy50aWxlcyxcbiAgICAgIGJvdW5kczogdGhpcy5ib3VuZHMsXG4gICAgICBtaW56b29tOiB0aGlzLm1pbnpvb20sXG4gICAgICBtYXh6b29tOiB0aGlzLm1heHpvb20sXG4gICAgICB0aWxlU2l6ZTogdGhpcy50aWxlU2l6ZVxuICAgIH07XG4gICAgdGhpcy5NYXBTZXJ2aWNlLmFkZFNvdXJjZSh0aGlzLmlkLCBzb3VyY2UpO1xuICAgIHRoaXMuc291cmNlQWRkZWQgPSB0cnVlO1xuICB9XG59XG4iXX0=