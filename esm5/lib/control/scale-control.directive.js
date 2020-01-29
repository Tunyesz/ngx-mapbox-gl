/**
 * @fileoverview added by tsickle
 * Generated from: lib/control/scale-control.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Host, Input } from '@angular/core';
import { ScaleControl } from 'mapbox-gl';
import { MapService } from '../map/map.service';
import { ControlComponent } from './control.component';
var ScaleControlDirective = /** @class */ (function () {
    function ScaleControlDirective(MapService, ControlComponent) {
        this.MapService = MapService;
        this.ControlComponent = ControlComponent;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ScaleControlDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.unit && !changes.unit.isFirstChange()) {
            ((/** @type {?} */ (this.ControlComponent.control))).setUnit(changes.unit.currentValue);
        }
    };
    /**
     * @return {?}
     */
    ScaleControlDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.MapService.mapCreated$.subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.ControlComponent.control) {
                throw new Error('Another control is already set for this control');
            }
            /** @type {?} */
            var options = {};
            if (_this.maxWidth !== undefined) {
                options.maxWidth = _this.maxWidth;
            }
            if (_this.unit !== undefined) {
                options.unit = _this.unit;
            }
            _this.ControlComponent.control = new ScaleControl(options);
            _this.MapService.addControl(_this.ControlComponent.control, _this.ControlComponent.position);
        }));
    };
    ScaleControlDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mglScale]'
                },] }
    ];
    /** @nocollapse */
    ScaleControlDirective.ctorParameters = function () { return [
        { type: MapService },
        { type: ControlComponent, decorators: [{ type: Host }] }
    ]; };
    ScaleControlDirective.propDecorators = {
        maxWidth: [{ type: Input }],
        unit: [{ type: Input }]
    };
    return ScaleControlDirective;
}());
export { ScaleControlDirective };
if (false) {
    /** @type {?} */
    ScaleControlDirective.prototype.maxWidth;
    /** @type {?} */
    ScaleControlDirective.prototype.unit;
    /**
     * @type {?}
     * @private
     */
    ScaleControlDirective.prototype.MapService;
    /**
     * @type {?}
     * @private
     */
    ScaleControlDirective.prototype.ControlComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhbGUtY29udHJvbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWFwYm94LWdsLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvc2NhbGUtY29udHJvbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQW9CLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RDtJQVVFLCtCQUNVLFVBQXNCLEVBQ2QsZ0JBQWtDO1FBRDFDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ2hELENBQUM7Ozs7O0lBRUwsMkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDakQsQ0FBQyxtQkFBSyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN6RTtJQUNILENBQUM7Ozs7SUFFRCxrREFBa0I7OztJQUFsQjtRQUFBLGlCQWVDO1FBZEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUzs7O1FBQUM7WUFDcEMsSUFBSSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO2dCQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7YUFDcEU7O2dCQUNLLE9BQU8sR0FBeUMsRUFBRTtZQUN4RCxJQUFJLEtBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO2dCQUMvQixPQUFPLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUM7YUFDbEM7WUFDRCxJQUFJLEtBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUMzQixPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUM7YUFDMUI7WUFDRCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxHQUFHLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFELEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVGLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBcENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtpQkFDdkI7Ozs7Z0JBTFEsVUFBVTtnQkFDVixnQkFBZ0IsdUJBY3BCLElBQUk7OzsyQkFQTixLQUFLO3VCQUdMLEtBQUs7O0lBNkJSLDRCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FsQ1kscUJBQXFCOzs7SUFFaEMseUNBQTJCOztJQUczQixxQ0FBbUQ7Ozs7O0lBR2pELDJDQUE4Qjs7Ozs7SUFDOUIsaURBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgRGlyZWN0aXZlLCBIb3N0LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY2FsZUNvbnRyb2wgfSBmcm9tICdtYXBib3gtZ2wnO1xuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL21hcC9tYXAuc2VydmljZSc7XG5pbXBvcnQgeyBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9sLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZ2xTY2FsZV0nXG59KVxuZXhwb3J0IGNsYXNzIFNjYWxlQ29udHJvbERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XG4gIC8qIEluaXQgaW5wdXRzICovXG4gIEBJbnB1dCgpIG1heFdpZHRoPzogbnVtYmVyO1xuXG4gIC8qIER5bmFtaWMgaW5wdXRzICovXG4gIEBJbnB1dCgpIHVuaXQ/OiAnaW1wZXJpYWwnIHwgJ21ldHJpYycgfCAnbmF1dGljYWwnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgTWFwU2VydmljZTogTWFwU2VydmljZSxcbiAgICBASG9zdCgpIHByaXZhdGUgQ29udHJvbENvbXBvbmVudDogQ29udHJvbENvbXBvbmVudFxuICApIHsgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy51bml0ICYmICFjaGFuZ2VzLnVuaXQuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICAoPGFueT50aGlzLkNvbnRyb2xDb21wb25lbnQuY29udHJvbCkuc2V0VW5pdChjaGFuZ2VzLnVuaXQuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5NYXBTZXJ2aWNlLm1hcENyZWF0ZWQkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5Db250cm9sQ29tcG9uZW50LmNvbnRyb2wpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBbm90aGVyIGNvbnRyb2wgaXMgYWxyZWFkeSBzZXQgZm9yIHRoaXMgY29udHJvbCcpO1xuICAgICAgfVxuICAgICAgY29uc3Qgb3B0aW9uczogeyBtYXhXaWR0aD86IG51bWJlciwgdW5pdD86IHN0cmluZyB9ID0ge307XG4gICAgICBpZiAodGhpcy5tYXhXaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG9wdGlvbnMubWF4V2lkdGggPSB0aGlzLm1heFdpZHRoO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudW5pdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG9wdGlvbnMudW5pdCA9IHRoaXMudW5pdDtcbiAgICAgIH1cbiAgICAgIHRoaXMuQ29udHJvbENvbXBvbmVudC5jb250cm9sID0gbmV3IFNjYWxlQ29udHJvbChvcHRpb25zKTtcbiAgICAgIHRoaXMuTWFwU2VydmljZS5hZGRDb250cm9sKHRoaXMuQ29udHJvbENvbXBvbmVudC5jb250cm9sLCB0aGlzLkNvbnRyb2xDb21wb25lbnQucG9zaXRpb24pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=