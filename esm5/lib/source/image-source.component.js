/**
 * @fileoverview added by tsickle
 * Generated from: lib/source/image-source.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MapService } from '../map/map.service';
var ImageSourceComponent = /** @class */ (function () {
    function ImageSourceComponent(MapService) {
        this.MapService = MapService;
    }
    /**
     * @return {?}
     */
    ImageSourceComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sub = this.MapService.mapLoaded$
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.init(); }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ImageSourceComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.sourceId === undefined) {
            return;
        }
        /** @type {?} */
        var source = this.MapService.getSource(this.sourceId);
        source.updateImage({
            url: changes.url === undefined ? undefined : this.url,
            coordinates: changes.coordinates === undefined ? undefined : this.coordinates
        });
    };
    /**
     * @return {?}
     */
    ImageSourceComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.sub !== undefined) {
            this.sub.unsubscribe();
        }
        if (this.sourceId !== undefined) {
            this.MapService.removeSource(this.sourceId);
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageSourceComponent.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var imageSource = {
            type: 'image',
            url: this.url,
            coordinates: this.coordinates
        };
        this.MapService.addSource(this.id, imageSource);
        this.sourceId = this.id;
    };
    ImageSourceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mgl-image-source',
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ImageSourceComponent.ctorParameters = function () { return [
        { type: MapService }
    ]; };
    ImageSourceComponent.propDecorators = {
        id: [{ type: Input }],
        url: [{ type: Input }],
        coordinates: [{ type: Input }]
    };
    return ImageSourceComponent;
}());
export { ImageSourceComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utc291cmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXBib3gtZ2wvIiwic291cmNlcyI6WyJsaWIvc291cmNlL2ltYWdlLXNvdXJjZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBK0MsTUFBTSxlQUFlLENBQUM7QUFHdkgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhEO0lBZ0JFLDhCQUNVLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFDNUIsQ0FBQzs7OztJQUVMLHVDQUFROzs7SUFBUjtRQUFBLGlCQUdDO1FBRkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVU7YUFDbEMsU0FBUzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLEVBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELDBDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQy9CLE9BQU87U0FDUjs7WUFFSyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQWMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNwRSxNQUFNLENBQUMsV0FBVyxDQUFDO1lBQ2pCLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRztZQUNyRCxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7U0FDOUUsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QjtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxtQ0FBSTs7OztJQUFaOztZQUNRLFdBQVcsR0FBbUI7WUFDbEMsSUFBSSxFQUFFLE9BQU87WUFDYixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDOUI7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUMxQixDQUFDOztnQkF2REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxFQUFFO29CQUNaLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFOUSxVQUFVOzs7cUJBU2hCLEtBQUs7c0JBR0wsS0FBSzs4QkFDTCxLQUFLOztJQTZDUiwyQkFBQztDQUFBLEFBeERELElBd0RDO1NBbkRZLG9CQUFvQjs7O0lBRS9CLGtDQUFvQjs7SUFHcEIsbUNBQXFCOztJQUNyQiwyQ0FBaUM7Ozs7O0lBRWpDLG1DQUEwQjs7Ozs7SUFDMUIsd0NBQTBCOzs7OztJQUd4QiwwQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VTb3VyY2UsIEltYWdlU291cmNlT3B0aW9ucywgSW1hZ2VTb3VyY2VSYXcgfSBmcm9tICdtYXBib3gtZ2wnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBNYXBTZXJ2aWNlIH0gZnJvbSAnLi4vbWFwL21hcC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWdsLWltYWdlLXNvdXJjZScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBJbWFnZVNvdXJjZU9wdGlvbnMge1xuICAvKiBJbml0IGlucHV0cyAqL1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuXG4gIC8qIER5bmFtaWMgaW5wdXRzICovXG4gIEBJbnB1dCgpIHVybDogc3RyaW5nO1xuICBASW5wdXQoKSBjb29yZGluYXRlczogbnVtYmVyW11bXTtcblxuICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHNvdXJjZUlkPzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgTWFwU2VydmljZTogTWFwU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3ViID0gdGhpcy5NYXBTZXJ2aWNlLm1hcExvYWRlZCRcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5pbml0KCkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh0aGlzLnNvdXJjZUlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzb3VyY2UgPSB0aGlzLk1hcFNlcnZpY2UuZ2V0U291cmNlPEltYWdlU291cmNlPih0aGlzLnNvdXJjZUlkKTtcbiAgICBzb3VyY2UudXBkYXRlSW1hZ2Uoe1xuICAgICAgdXJsOiBjaGFuZ2VzLnVybCA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogdGhpcy51cmwsXG4gICAgICBjb29yZGluYXRlczogY2hhbmdlcy5jb29yZGluYXRlcyA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogdGhpcy5jb29yZGluYXRlc1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3ViICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc291cmNlSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5NYXBTZXJ2aWNlLnJlbW92ZVNvdXJjZSh0aGlzLnNvdXJjZUlkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgY29uc3QgaW1hZ2VTb3VyY2U6IEltYWdlU291cmNlUmF3ID0ge1xuICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICBjb29yZGluYXRlczogdGhpcy5jb29yZGluYXRlc1xuICAgIH07XG4gICAgdGhpcy5NYXBTZXJ2aWNlLmFkZFNvdXJjZSh0aGlzLmlkLCBpbWFnZVNvdXJjZSk7XG4gICAgdGhpcy5zb3VyY2VJZCA9IHRoaXMuaWQ7XG4gIH1cbn1cbiJdfQ==