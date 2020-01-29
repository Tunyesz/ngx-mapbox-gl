/**
 * @fileoverview added by tsickle
 * Generated from: lib/source/canvas-source.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MapService } from '../map/map.service';
var CanvasSourceComponent = /** @class */ (function () {
    function CanvasSourceComponent(MapService) {
        this.MapService = MapService;
        this.sourceAdded = false;
        this.sub = new Subscription();
    }
    /**
     * @return {?}
     */
    CanvasSourceComponent.prototype.ngOnInit = /**
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
    CanvasSourceComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this.sourceAdded) {
            return;
        }
        if (changes.coordinates && !changes.coordinates.isFirstChange() ||
            changes.canvas && !changes.canvas.isFirstChange() ||
            changes.animate && !changes.animate.isFirstChange()) {
            this.ngOnDestroy();
            this.ngOnInit();
        }
    };
    /**
     * @return {?}
     */
    CanvasSourceComponent.prototype.ngOnDestroy = /**
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
    CanvasSourceComponent.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        this.MapService.addSource(this.id, {
            type: 'canvas',
            coordinates: this.coordinates,
            canvas: this.canvas,
            animate: this.animate,
        });
        this.sourceAdded = true;
    };
    CanvasSourceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mgl-canvas-source',
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CanvasSourceComponent.ctorParameters = function () { return [
        { type: MapService }
    ]; };
    CanvasSourceComponent.propDecorators = {
        id: [{ type: Input }],
        coordinates: [{ type: Input }],
        canvas: [{ type: Input }],
        animate: [{ type: Input }]
    };
    return CanvasSourceComponent;
}());
export { CanvasSourceComponent };
if (false) {
    /** @type {?} */
    CanvasSourceComponent.prototype.id;
    /** @type {?} */
    CanvasSourceComponent.prototype.coordinates;
    /** @type {?} */
    CanvasSourceComponent.prototype.canvas;
    /** @type {?} */
    CanvasSourceComponent.prototype.animate;
    /**
     * @type {?}
     * @private
     */
    CanvasSourceComponent.prototype.sourceAdded;
    /**
     * @type {?}
     * @private
     */
    CanvasSourceComponent.prototype.sub;
    /**
     * @type {?}
     * @private
     */
    CanvasSourceComponent.prototype.MapService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLXNvdXJjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWFwYm94LWdsLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZS9jYW52YXMtc291cmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUErQyxNQUFNLGVBQWUsQ0FBQztBQUV2SCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhEO0lBaUJFLCtCQUNVLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFKeEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsUUFBRyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFJN0IsQ0FBQzs7OztJQUVMLHdDQUFROzs7SUFBUjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUzs7O1FBQUM7WUFDbkMsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDOztnQkFDTixHQUFHLEdBQUcsU0FBUyxDQUFDLG1CQUFLLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFBLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUN2RSxNQUFNOzs7WUFBQyxjQUFNLE9BQUEsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxFQUEvQyxDQUErQyxFQUFDLENBQzlELENBQUMsU0FBUzs7O1lBQUM7Z0JBQ1YsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2QsQ0FBQyxFQUFDO1lBQ0YsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELDJDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixPQUFPO1NBQ1I7UUFDRCxJQUNFLE9BQU8sQ0FBQyxXQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRTtZQUMzRCxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUU7WUFDakQsT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEVBQ25EO1lBQ0EsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqQjtJQUNILENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs7OztJQUVPLG9DQUFJOzs7O0lBQVo7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ2pDLElBQUksRUFBRSxRQUFRO1lBQ2QsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDdEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQzs7Z0JBOURGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsRUFBRTtvQkFDWixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBTlEsVUFBVTs7O3FCQVNoQixLQUFLOzhCQUdMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLOztJQW1EUiw0QkFBQztDQUFBLEFBL0RELElBK0RDO1NBMURZLHFCQUFxQjs7O0lBRWhDLG1DQUFvQjs7SUFHcEIsNENBQWlDOztJQUNqQyx1Q0FBd0I7O0lBQ3hCLHdDQUEyQjs7Ozs7SUFFM0IsNENBQTRCOzs7OztJQUM1QixvQ0FBaUM7Ozs7O0lBRy9CLDJDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW52YXNTb3VyY2VPcHRpb25zIH0gZnJvbSAnbWFwYm94LWdsJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNYXBTZXJ2aWNlIH0gZnJvbSAnLi4vbWFwL21hcC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWdsLWNhbnZhcy1zb3VyY2UnLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENhbnZhc1NvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIENhbnZhc1NvdXJjZU9wdGlvbnMge1xuICAvKiBJbml0IGlucHV0cyAqL1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuXG4gIC8qIER5bmFtaWMgaW5wdXRzICovXG4gIEBJbnB1dCgpIGNvb3JkaW5hdGVzOiBudW1iZXJbXVtdO1xuICBASW5wdXQoKSBjYW52YXM6IHN0cmluZztcbiAgQElucHV0KCkgYW5pbWF0ZT86IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBzb3VyY2VBZGRlZCA9IGZhbHNlO1xuICBwcml2YXRlIHN1YiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIE1hcFNlcnZpY2U6IE1hcFNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLk1hcFNlcnZpY2UubWFwTG9hZGVkJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgICBjb25zdCBzdWIgPSBmcm9tRXZlbnQoPGFueT50aGlzLk1hcFNlcnZpY2UubWFwSW5zdGFuY2UsICdzdHlsZWRhdGEnKS5waXBlKFxuICAgICAgICBmaWx0ZXIoKCkgPT4gIXRoaXMuTWFwU2VydmljZS5tYXBJbnN0YW5jZS5nZXRTb3VyY2UodGhpcy5pZCkpXG4gICAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnN1Yi5hZGQoc3ViKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoIXRoaXMuc291cmNlQWRkZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgY2hhbmdlcy5jb29yZGluYXRlcyAmJiAhY2hhbmdlcy5jb29yZGluYXRlcy5pc0ZpcnN0Q2hhbmdlKCkgfHxcbiAgICAgIGNoYW5nZXMuY2FudmFzICYmICFjaGFuZ2VzLmNhbnZhcy5pc0ZpcnN0Q2hhbmdlKCkgfHxcbiAgICAgIGNoYW5nZXMuYW5pbWF0ZSAmJiAhY2hhbmdlcy5hbmltYXRlLmlzRmlyc3RDaGFuZ2UoKVxuICAgICkge1xuICAgICAgdGhpcy5uZ09uRGVzdHJveSgpO1xuICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKHRoaXMuc291cmNlQWRkZWQpIHtcbiAgICAgIHRoaXMuTWFwU2VydmljZS5yZW1vdmVTb3VyY2UodGhpcy5pZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCkge1xuICAgIHRoaXMuTWFwU2VydmljZS5hZGRTb3VyY2UodGhpcy5pZCwge1xuICAgICAgdHlwZTogJ2NhbnZhcycsXG4gICAgICBjb29yZGluYXRlczogdGhpcy5jb29yZGluYXRlcyxcbiAgICAgIGNhbnZhczogdGhpcy5jYW52YXMsXG4gICAgICBhbmltYXRlOiB0aGlzLmFuaW1hdGUsXG4gICAgfSk7XG4gICAgdGhpcy5zb3VyY2VBZGRlZCA9IHRydWU7XG4gIH1cbn1cbiJdfQ==