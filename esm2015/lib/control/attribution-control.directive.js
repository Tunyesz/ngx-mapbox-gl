/**
 * @fileoverview added by tsickle
 * Generated from: lib/control/attribution-control.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Host, Input } from '@angular/core';
import { AttributionControl } from 'mapbox-gl';
import { MapService } from '../map/map.service';
import { ControlComponent } from './control.component';
export class AttributionControlDirective {
    /**
     * @param {?} MapService
     * @param {?} ControlComponent
     */
    constructor(MapService, ControlComponent) {
        this.MapService = MapService;
        this.ControlComponent = ControlComponent;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.MapService.mapCreated$.subscribe((/**
         * @return {?}
         */
        () => {
            if (this.ControlComponent.control) {
                throw new Error('Another control is already set for this control');
            }
            /** @type {?} */
            const options = {};
            if (this.compact !== undefined) {
                options.compact = this.compact;
            }
            if (this.customAttribution !== undefined) {
                options.customAttribution = this.customAttribution;
            }
            this.ControlComponent.control = new AttributionControl(options);
            this.MapService.addControl(this.ControlComponent.control, this.ControlComponent.position);
        }));
    }
}
AttributionControlDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mglAttribution]'
            },] }
];
/** @nocollapse */
AttributionControlDirective.ctorParameters = () => [
    { type: MapService },
    { type: ControlComponent, decorators: [{ type: Host }] }
];
AttributionControlDirective.propDecorators = {
    compact: [{ type: Input }],
    customAttribution: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AttributionControlDirective.prototype.compact;
    /** @type {?} */
    AttributionControlDirective.prototype.customAttribution;
    /**
     * @type {?}
     * @private
     */
    AttributionControlDirective.prototype.MapService;
    /**
     * @type {?}
     * @private
     */
    AttributionControlDirective.prototype.ControlComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb24tY29udHJvbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWFwYm94LWdsLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvYXR0cmlidXRpb24tY29udHJvbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQW9CLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFLdkQsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7SUFLdEMsWUFDVSxVQUFzQixFQUNkLGdCQUFrQztRQUQxQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUNoRCxDQUFDOzs7O0lBRUwsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUN6QyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQzthQUNwRTs7a0JBQ0ssT0FBTyxHQUFpRSxFQUFFO1lBQ2hGLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7Z0JBQzlCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNoQztZQUNELElBQUksSUFBSSxDQUFDLGlCQUFpQixLQUFLLFNBQVMsRUFBRTtnQkFDeEMsT0FBTyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzthQUNwRDtZQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQTVCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjthQUM3Qjs7OztZQUxRLFVBQVU7WUFDVixnQkFBZ0IsdUJBWXBCLElBQUk7OztzQkFMTixLQUFLO2dDQUNMLEtBQUs7Ozs7SUFETiw4Q0FBMkI7O0lBQzNCLHdEQUErQzs7Ozs7SUFHN0MsaURBQThCOzs7OztJQUM5Qix1REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBEaXJlY3RpdmUsIEhvc3QsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdHRyaWJ1dGlvbkNvbnRyb2wgfSBmcm9tICdtYXBib3gtZ2wnO1xuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL21hcC9tYXAuc2VydmljZSc7XG5pbXBvcnQgeyBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9sLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZ2xBdHRyaWJ1dGlvbl0nXG59KVxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0aW9uQ29udHJvbERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAvKiBJbml0IGlucHV0cyAqL1xuICBASW5wdXQoKSBjb21wYWN0PzogYm9vbGVhbjtcbiAgQElucHV0KCkgY3VzdG9tQXR0cmlidXRpb24/OiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIE1hcFNlcnZpY2U6IE1hcFNlcnZpY2UsXG4gICAgQEhvc3QoKSBwcml2YXRlIENvbnRyb2xDb21wb25lbnQ6IENvbnRyb2xDb21wb25lbnRcbiAgKSB7IH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5NYXBTZXJ2aWNlLm1hcENyZWF0ZWQkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5Db250cm9sQ29tcG9uZW50LmNvbnRyb2wpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBbm90aGVyIGNvbnRyb2wgaXMgYWxyZWFkeSBzZXQgZm9yIHRoaXMgY29udHJvbCcpO1xuICAgICAgfVxuICAgICAgY29uc3Qgb3B0aW9uczogeyBjb21wYWN0PzogYm9vbGVhbiwgY3VzdG9tQXR0cmlidXRpb24/OiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge307XG4gICAgICBpZiAodGhpcy5jb21wYWN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb3B0aW9ucy5jb21wYWN0ID0gdGhpcy5jb21wYWN0O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY3VzdG9tQXR0cmlidXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBvcHRpb25zLmN1c3RvbUF0dHJpYnV0aW9uID0gdGhpcy5jdXN0b21BdHRyaWJ1dGlvbjtcbiAgICAgIH1cbiAgICAgIHRoaXMuQ29udHJvbENvbXBvbmVudC5jb250cm9sID0gbmV3IEF0dHJpYnV0aW9uQ29udHJvbChvcHRpb25zKTtcbiAgICAgIHRoaXMuTWFwU2VydmljZS5hZGRDb250cm9sKHRoaXMuQ29udHJvbENvbXBvbmVudC5jb250cm9sLCB0aGlzLkNvbnRyb2xDb21wb25lbnQucG9zaXRpb24pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=