/**
 * @fileoverview added by tsickle
 * Generated from: lib/control/fullscreen-control.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Host, Input } from '@angular/core';
import { FullscreenControl } from 'mapbox-gl';
import { MapService } from '../map/map.service';
import { ControlComponent } from './control.component';
var FullscreenControlDirective = /** @class */ (function () {
    function FullscreenControlDirective(MapService, ControlComponent) {
        this.MapService = MapService;
        this.ControlComponent = ControlComponent;
    }
    /**
     * @return {?}
     */
    FullscreenControlDirective.prototype.ngAfterContentInit = /**
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
            _this.ControlComponent.control = new FullscreenControl({ container: _this.container });
            _this.MapService.addControl(_this.ControlComponent.control, _this.ControlComponent.position);
        }));
    };
    FullscreenControlDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mglFullscreen]'
                },] }
    ];
    /** @nocollapse */
    FullscreenControlDirective.ctorParameters = function () { return [
        { type: MapService },
        { type: ControlComponent, decorators: [{ type: Host }] }
    ]; };
    FullscreenControlDirective.propDecorators = {
        container: [{ type: Input }]
    };
    return FullscreenControlDirective;
}());
export { FullscreenControlDirective };
if (false) {
    /** @type {?} */
    FullscreenControlDirective.prototype.container;
    /**
     * @type {?}
     * @private
     */
    FullscreenControlDirective.prototype.MapService;
    /**
     * @type {?}
     * @private
     */
    FullscreenControlDirective.prototype.ControlComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi1jb250cm9sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXBib3gtZ2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbC9mdWxsc2NyZWVuLWNvbnRyb2wuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFvQixTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZEO0lBT0Usb0NBQ1UsVUFBc0IsRUFDZCxnQkFBa0M7UUFEMUMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDaEQsQ0FBQzs7OztJQUVMLHVEQUFrQjs7O0lBQWxCO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTOzs7UUFBQztZQUNwQyxJQUFJLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQzthQUNwRTtZQUNELEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUNyRixLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXBCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7Ozs7Z0JBTFEsVUFBVTtnQkFDVixnQkFBZ0IsdUJBV3BCLElBQUk7Ozs0QkFKTixLQUFLOztJQWdCUixpQ0FBQztDQUFBLEFBckJELElBcUJDO1NBbEJZLDBCQUEwQjs7O0lBRXJDLCtDQUFpQzs7Ozs7SUFHL0IsZ0RBQThCOzs7OztJQUM5QixzREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBEaXJlY3RpdmUsIEhvc3QsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGdWxsc2NyZWVuQ29udHJvbCB9IGZyb20gJ21hcGJveC1nbCc7XG5pbXBvcnQgeyBNYXBTZXJ2aWNlIH0gZnJvbSAnLi4vbWFwL21hcC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2wuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21nbEZ1bGxzY3JlZW5dJ1xufSlcbmV4cG9ydCBjbGFzcyBGdWxsc2NyZWVuQ29udHJvbERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAvKiBJbml0IGlucHV0cyAqL1xuICBASW5wdXQoKSBjb250YWluZXI/OiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIE1hcFNlcnZpY2U6IE1hcFNlcnZpY2UsXG4gICAgQEhvc3QoKSBwcml2YXRlIENvbnRyb2xDb21wb25lbnQ6IENvbnRyb2xDb21wb25lbnRcbiAgKSB7IH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5NYXBTZXJ2aWNlLm1hcENyZWF0ZWQkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5Db250cm9sQ29tcG9uZW50LmNvbnRyb2wpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBbm90aGVyIGNvbnRyb2wgaXMgYWxyZWFkeSBzZXQgZm9yIHRoaXMgY29udHJvbCcpO1xuICAgICAgfVxuICAgICAgdGhpcy5Db250cm9sQ29tcG9uZW50LmNvbnRyb2wgPSBuZXcgRnVsbHNjcmVlbkNvbnRyb2woeyBjb250YWluZXI6IHRoaXMuY29udGFpbmVyIH0pO1xuICAgICAgdGhpcy5NYXBTZXJ2aWNlLmFkZENvbnRyb2wodGhpcy5Db250cm9sQ29tcG9uZW50LmNvbnRyb2wsIHRoaXMuQ29udHJvbENvbXBvbmVudC5wb3NpdGlvbik7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==