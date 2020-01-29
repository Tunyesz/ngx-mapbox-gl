/**
 * @fileoverview added by tsickle
 * Generated from: lib/control/navigation-control.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Host, Input } from '@angular/core';
import { NavigationControl } from 'mapbox-gl';
import { MapService } from '../map/map.service';
import { ControlComponent } from './control.component';
var NavigationControlDirective = /** @class */ (function () {
    function NavigationControlDirective(MapService, ControlComponent) {
        this.MapService = MapService;
        this.ControlComponent = ControlComponent;
    }
    /**
     * @return {?}
     */
    NavigationControlDirective.prototype.ngAfterContentInit = /**
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
            if (_this.showCompass !== undefined) {
                options.showCompass = _this.showCompass;
            }
            if (_this.showZoom !== undefined) {
                options.showZoom = _this.showZoom;
            }
            _this.ControlComponent.control = new NavigationControl(options);
            _this.MapService.addControl(_this.ControlComponent.control, _this.ControlComponent.position);
        }));
    };
    NavigationControlDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mglNavigation]'
                },] }
    ];
    /** @nocollapse */
    NavigationControlDirective.ctorParameters = function () { return [
        { type: MapService },
        { type: ControlComponent, decorators: [{ type: Host }] }
    ]; };
    NavigationControlDirective.propDecorators = {
        showCompass: [{ type: Input }],
        showZoom: [{ type: Input }]
    };
    return NavigationControlDirective;
}());
export { NavigationControlDirective };
if (false) {
    /** @type {?} */
    NavigationControlDirective.prototype.showCompass;
    /** @type {?} */
    NavigationControlDirective.prototype.showZoom;
    /**
     * @type {?}
     * @private
     */
    NavigationControlDirective.prototype.MapService;
    /**
     * @type {?}
     * @private
     */
    NavigationControlDirective.prototype.ControlComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1jb250cm9sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXBib3gtZ2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbC9uYXZpZ2F0aW9uLWNvbnRyb2wuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFvQixTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZEO0lBUUUsb0NBQ1UsVUFBc0IsRUFDZCxnQkFBa0M7UUFEMUMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDaEQsQ0FBQzs7OztJQUVMLHVEQUFrQjs7O0lBQWxCO1FBQUEsaUJBZUM7UUFkQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTOzs7UUFBQztZQUNwQyxJQUFJLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQzthQUNwRTs7Z0JBQ0ssT0FBTyxHQUFrRCxFQUFFO1lBQ2pFLElBQUksS0FBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUU7Z0JBQ2xDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQzthQUN4QztZQUNELElBQUksS0FBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7Z0JBQy9CLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQzthQUNsQztZQUNELEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvRCxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQTVCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7Ozs7Z0JBTFEsVUFBVTtnQkFDVixnQkFBZ0IsdUJBWXBCLElBQUk7Ozs4QkFMTixLQUFLOzJCQUNMLEtBQUs7O0lBdUJSLGlDQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0ExQlksMEJBQTBCOzs7SUFFckMsaURBQStCOztJQUMvQiw4Q0FBNEI7Ozs7O0lBRzFCLGdEQUE4Qjs7Ozs7SUFDOUIsc0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgRGlyZWN0aXZlLCBIb3N0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkNvbnRyb2wgfSBmcm9tICdtYXBib3gtZ2wnO1xuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL21hcC9tYXAuc2VydmljZSc7XG5pbXBvcnQgeyBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9sLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZ2xOYXZpZ2F0aW9uXSdcbn0pXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkNvbnRyb2xEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgLyogSW5pdCBpbnB1dHMgKi9cbiAgQElucHV0KCkgc2hvd0NvbXBhc3M/OiBib29sZWFuO1xuICBASW5wdXQoKSBzaG93Wm9vbT86IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBNYXBTZXJ2aWNlOiBNYXBTZXJ2aWNlLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBDb250cm9sQ29tcG9uZW50OiBDb250cm9sQ29tcG9uZW50XG4gICkgeyB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuTWFwU2VydmljZS5tYXBDcmVhdGVkJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuQ29udHJvbENvbXBvbmVudC5jb250cm9sKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQW5vdGhlciBjb250cm9sIGlzIGFscmVhZHkgc2V0IGZvciB0aGlzIGNvbnRyb2wnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9wdGlvbnM6IHsgc2hvd0NvbXBhc3M/OiBib29sZWFuLCBzaG93Wm9vbT86IGJvb2xlYW4gfSA9IHt9O1xuICAgICAgaWYgKHRoaXMuc2hvd0NvbXBhc3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBvcHRpb25zLnNob3dDb21wYXNzID0gdGhpcy5zaG93Q29tcGFzcztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNob3dab29tICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb3B0aW9ucy5zaG93Wm9vbSA9IHRoaXMuc2hvd1pvb207XG4gICAgICB9XG4gICAgICB0aGlzLkNvbnRyb2xDb21wb25lbnQuY29udHJvbCA9IG5ldyBOYXZpZ2F0aW9uQ29udHJvbChvcHRpb25zKTtcbiAgICAgIHRoaXMuTWFwU2VydmljZS5hZGRDb250cm9sKHRoaXMuQ29udHJvbENvbXBvbmVudC5jb250cm9sLCB0aGlzLkNvbnRyb2xDb21wb25lbnQucG9zaXRpb24pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=