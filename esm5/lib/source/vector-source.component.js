/**
 * @fileoverview added by tsickle
 * Generated from: lib/source/vector-source.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MapService } from '../map/map.service';
var VectorSourceComponent = /** @class */ (function () {
    function VectorSourceComponent(MapService) {
        this.MapService = MapService;
        this.type = 'vector'; // Just to make ts happy
        // Just to make ts happy
        this.sourceAdded = false;
        this.sub = new Subscription();
    }
    /**
     * @return {?}
     */
    VectorSourceComponent.prototype.ngOnInit = /**
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
    VectorSourceComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
    };
    /**
     * @return {?}
     */
    VectorSourceComponent.prototype.ngOnDestroy = /**
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
    VectorSourceComponent.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        this.MapService.addSource(this.id, {
            type: this.type,
            url: this.url,
            tiles: this.tiles,
            minzoom: this.minzoom,
            maxzoom: this.maxzoom,
        });
        this.sourceAdded = true;
    };
    VectorSourceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mgl-vector-source',
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    VectorSourceComponent.ctorParameters = function () { return [
        { type: MapService }
    ]; };
    VectorSourceComponent.propDecorators = {
        id: [{ type: Input }],
        url: [{ type: Input }],
        tiles: [{ type: Input }],
        minzoom: [{ type: Input }],
        maxzoom: [{ type: Input }]
    };
    return VectorSourceComponent;
}());
export { VectorSourceComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9yLXNvdXJjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWFwYm94LWdsLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZS92ZWN0b3Itc291cmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUErQyxNQUFNLGVBQWUsQ0FBQztBQUV2SCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhEO0lBb0JFLCtCQUNVLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFOaEMsU0FBSSxHQUFhLFFBQVEsQ0FBQyxDQUFDLHdCQUF3Qjs7UUFFM0MsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsUUFBRyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFJN0IsQ0FBQzs7OztJQUVMLHdDQUFROzs7SUFBUjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUzs7O1FBQUM7WUFDbkMsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDOztnQkFDTixHQUFHLEdBQUcsU0FBUyxDQUFDLG1CQUFLLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFBLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUN2RSxNQUFNOzs7WUFBQyxjQUFNLE9BQUEsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxFQUEvQyxDQUErQyxFQUFDLENBQzlELENBQUMsU0FBUzs7O1lBQUM7Z0JBQ1YsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2QsQ0FBQyxFQUFDO1lBQ0YsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELDJDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixPQUFPO1NBQ1I7UUFDRCxJQUNFLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRTtZQUMzQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7WUFDL0MsT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQ25ELE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUNuRDtZQUNBLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7SUFDSCxDQUFDOzs7O0lBRUQsMkNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxvQ0FBSTs7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDOztnQkFuRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxFQUFFO29CQUNaLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFOUSxVQUFVOzs7cUJBU2hCLEtBQUs7c0JBR0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzs7SUF1RFIsNEJBQUM7Q0FBQSxBQXBFRCxJQW9FQztTQS9EWSxxQkFBcUI7OztJQUVoQyxtQ0FBb0I7O0lBR3BCLG9DQUFzQjs7SUFDdEIsc0NBQTBCOztJQUMxQix3Q0FBMEI7O0lBQzFCLHdDQUEwQjs7SUFFMUIscUNBQTBCOzs7OztJQUUxQiw0Q0FBNEI7Ozs7O0lBQzVCLG9DQUFpQzs7Ozs7SUFHL0IsMkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZlY3RvclNvdXJjZSB9IGZyb20gJ21hcGJveC1nbCc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL21hcC9tYXAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nbC12ZWN0b3Itc291cmNlJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBWZWN0b3JTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBWZWN0b3JTb3VyY2Uge1xuICAvKiBJbml0IGlucHV0cyAqL1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuXG4gIC8qIER5bmFtaWMgaW5wdXRzICovXG4gIEBJbnB1dCgpIHVybD86IHN0cmluZztcbiAgQElucHV0KCkgdGlsZXM/OiBzdHJpbmdbXTtcbiAgQElucHV0KCkgbWluem9vbT86IG51bWJlcjtcbiAgQElucHV0KCkgbWF4em9vbT86IG51bWJlcjtcblxuICB0eXBlOiAndmVjdG9yJyA9ICd2ZWN0b3InOyAvLyBKdXN0IHRvIG1ha2UgdHMgaGFwcHlcblxuICBwcml2YXRlIHNvdXJjZUFkZGVkID0gZmFsc2U7XG4gIHByaXZhdGUgc3ViID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgTWFwU2VydmljZTogTWFwU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuTWFwU2VydmljZS5tYXBMb2FkZWQkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIGNvbnN0IHN1YiA9IGZyb21FdmVudCg8YW55PnRoaXMuTWFwU2VydmljZS5tYXBJbnN0YW5jZSwgJ3N0eWxlZGF0YScpLnBpcGUoXG4gICAgICAgIGZpbHRlcigoKSA9PiAhdGhpcy5NYXBTZXJ2aWNlLm1hcEluc3RhbmNlLmdldFNvdXJjZSh0aGlzLmlkKSlcbiAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc3ViLmFkZChzdWIpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICghdGhpcy5zb3VyY2VBZGRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBjaGFuZ2VzLnVybCAmJiAhY2hhbmdlcy51cmwuaXNGaXJzdENoYW5nZSgpIHx8XG4gICAgICBjaGFuZ2VzLnRpbGVzICYmICFjaGFuZ2VzLnRpbGVzLmlzRmlyc3RDaGFuZ2UoKSB8fFxuICAgICAgY2hhbmdlcy5taW56b29tICYmICFjaGFuZ2VzLm1pbnpvb20uaXNGaXJzdENoYW5nZSgpIHx8XG4gICAgICBjaGFuZ2VzLm1heHpvb20gJiYgIWNoYW5nZXMubWF4em9vbS5pc0ZpcnN0Q2hhbmdlKClcbiAgICApIHtcbiAgICAgIHRoaXMubmdPbkRlc3Ryb3koKTtcbiAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIGlmICh0aGlzLnNvdXJjZUFkZGVkKSB7XG4gICAgICB0aGlzLk1hcFNlcnZpY2UucmVtb3ZlU291cmNlKHRoaXMuaWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpIHtcbiAgICB0aGlzLk1hcFNlcnZpY2UuYWRkU291cmNlKHRoaXMuaWQsIHtcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICB0aWxlczogdGhpcy50aWxlcyxcbiAgICAgIG1pbnpvb206IHRoaXMubWluem9vbSxcbiAgICAgIG1heHpvb206IHRoaXMubWF4em9vbSxcbiAgICB9KTtcbiAgICB0aGlzLnNvdXJjZUFkZGVkID0gdHJ1ZTtcbiAgfVxufVxuIl19