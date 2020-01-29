/**
 * @fileoverview added by tsickle
 * Generated from: lib/control/geolocate-control.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, Host, Input, Output } from '@angular/core';
import { GeolocateControl } from 'mapbox-gl';
import { MapService } from '../map/map.service';
import { ControlComponent } from './control.component';
var GeolocateControlDirective = /** @class */ (function () {
    function GeolocateControlDirective(MapService, ControlComponent) {
        this.MapService = MapService;
        this.ControlComponent = ControlComponent;
        this.geolocate = new EventEmitter();
    }
    /**
     * @return {?}
     */
    GeolocateControlDirective.prototype.ngAfterContentInit = /**
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
            var options = {
                positionOptions: _this.positionOptions,
                fitBoundsOptions: _this.fitBoundsOptions,
                trackUserLocation: _this.trackUserLocation,
                showUserLocation: _this.showUserLocation
            };
            Object.keys(options)
                .forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                /** @type {?} */
                var tkey = (/** @type {?} */ (key));
                if (options[tkey] === undefined) {
                    delete options[tkey];
                }
            }));
            _this.ControlComponent.control = new GeolocateControl(options);
            _this.ControlComponent.control.on('geolocate', (/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return _this.geolocate.emit(data); }));
            _this.MapService.addControl(_this.ControlComponent.control, _this.ControlComponent.position);
        }));
    };
    GeolocateControlDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mglGeolocate]'
                },] }
    ];
    /** @nocollapse */
    GeolocateControlDirective.ctorParameters = function () { return [
        { type: MapService },
        { type: ControlComponent, decorators: [{ type: Host }] }
    ]; };
    GeolocateControlDirective.propDecorators = {
        positionOptions: [{ type: Input }],
        fitBoundsOptions: [{ type: Input }],
        trackUserLocation: [{ type: Input }],
        showUserLocation: [{ type: Input }],
        geolocate: [{ type: Output }]
    };
    return GeolocateControlDirective;
}());
export { GeolocateControlDirective };
if (false) {
    /** @type {?} */
    GeolocateControlDirective.prototype.positionOptions;
    /** @type {?} */
    GeolocateControlDirective.prototype.fitBoundsOptions;
    /** @type {?} */
    GeolocateControlDirective.prototype.trackUserLocation;
    /** @type {?} */
    GeolocateControlDirective.prototype.showUserLocation;
    /** @type {?} */
    GeolocateControlDirective.prototype.geolocate;
    /**
     * @type {?}
     * @private
     */
    GeolocateControlDirective.prototype.MapService;
    /**
     * @type {?}
     * @private
     */
    GeolocateControlDirective.prototype.ControlComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbG9jYXRlLWNvbnRyb2wuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hcGJveC1nbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2dlb2xvY2F0ZS1jb250cm9sLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsZ0JBQWdCLEVBQW9CLE1BQU0sV0FBVyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RDtJQVlFLG1DQUNVLFVBQXNCLEVBQ2QsZ0JBQWtDO1FBRDFDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSjFDLGNBQVMsR0FBMkIsSUFBSSxZQUFZLEVBQVksQ0FBQztJQUt2RSxDQUFDOzs7O0lBRUwsc0RBQWtCOzs7SUFBbEI7UUFBQSxpQkF1QkM7UUF0QkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUzs7O1FBQUM7WUFDcEMsSUFBSSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO2dCQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7YUFDcEU7O2dCQUNLLE9BQU8sR0FBRztnQkFDZCxlQUFlLEVBQUUsS0FBSSxDQUFDLGVBQWU7Z0JBQ3JDLGdCQUFnQixFQUFFLEtBQUksQ0FBQyxnQkFBZ0I7Z0JBQ3ZDLGlCQUFpQixFQUFFLEtBQUksQ0FBQyxpQkFBaUI7Z0JBQ3pDLGdCQUFnQixFQUFFLEtBQUksQ0FBQyxnQkFBZ0I7YUFDeEM7WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztpQkFDakIsT0FBTzs7OztZQUFDLFVBQUMsR0FBVzs7b0JBQ2IsSUFBSSxHQUFHLG1CQUFzQixHQUFHLEVBQUE7Z0JBQ3RDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtvQkFDL0IsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3RCO1lBQ0gsQ0FBQyxFQUFDLENBQUM7WUFDTCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxHQUFHLElBQUksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUQsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsV0FBVzs7OztZQUFFLFVBQUMsSUFBYyxJQUFLLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQXpCLENBQXlCLEVBQUMsQ0FBQztZQUM3RixLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7Ozs7Z0JBTFEsVUFBVTtnQkFDVixnQkFBZ0IsdUJBZ0JwQixJQUFJOzs7a0NBVE4sS0FBSzttQ0FDTCxLQUFLO29DQUNMLEtBQUs7bUNBQ0wsS0FBSzs0QkFFTCxNQUFNOztJQStCVCxnQ0FBQztDQUFBLEFBekNELElBeUNDO1NBdENZLHlCQUF5Qjs7O0lBRXBDLG9EQUEyQzs7SUFDM0MscURBQTZDOztJQUM3QyxzREFBcUM7O0lBQ3JDLHFEQUFvQzs7SUFFcEMsOENBQTJFOzs7OztJQUd6RSwrQ0FBOEI7Ozs7O0lBQzlCLHFEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHZW9sb2NhdGVDb250cm9sLCBGaXRCb3VuZHNPcHRpb25zIH0gZnJvbSAnbWFwYm94LWdsJztcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi9tYXAvbWFwLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbC5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWdsR2VvbG9jYXRlXSdcbn0pXG5leHBvcnQgY2xhc3MgR2VvbG9jYXRlQ29udHJvbERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAvKiBJbml0IGlucHV0cyAqL1xuICBASW5wdXQoKSBwb3NpdGlvbk9wdGlvbnM/OiBQb3NpdGlvbk9wdGlvbnM7XG4gIEBJbnB1dCgpIGZpdEJvdW5kc09wdGlvbnM/OiBGaXRCb3VuZHNPcHRpb25zO1xuICBASW5wdXQoKSB0cmFja1VzZXJMb2NhdGlvbj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNob3dVc2VyTG9jYXRpb24/OiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSBnZW9sb2NhdGU6IEV2ZW50RW1pdHRlcjxQb3NpdGlvbj4gPSBuZXcgRXZlbnRFbWl0dGVyPFBvc2l0aW9uPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgTWFwU2VydmljZTogTWFwU2VydmljZSxcbiAgICBASG9zdCgpIHByaXZhdGUgQ29udHJvbENvbXBvbmVudDogQ29udHJvbENvbXBvbmVudFxuICApIHsgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLk1hcFNlcnZpY2UubWFwQ3JlYXRlZCQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLkNvbnRyb2xDb21wb25lbnQuY29udHJvbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Fub3RoZXIgY29udHJvbCBpcyBhbHJlYWR5IHNldCBmb3IgdGhpcyBjb250cm9sJyk7XG4gICAgICB9XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBwb3NpdGlvbk9wdGlvbnM6IHRoaXMucG9zaXRpb25PcHRpb25zLFxuICAgICAgICBmaXRCb3VuZHNPcHRpb25zOiB0aGlzLmZpdEJvdW5kc09wdGlvbnMsXG4gICAgICAgIHRyYWNrVXNlckxvY2F0aW9uOiB0aGlzLnRyYWNrVXNlckxvY2F0aW9uLFxuICAgICAgICBzaG93VXNlckxvY2F0aW9uOiB0aGlzLnNob3dVc2VyTG9jYXRpb25cbiAgICAgIH07XG5cbiAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpXG4gICAgICAgIC5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgIGNvbnN0IHRrZXkgPSA8a2V5b2YgdHlwZW9mIG9wdGlvbnM+a2V5O1xuICAgICAgICAgIGlmIChvcHRpb25zW3RrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25zW3RrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB0aGlzLkNvbnRyb2xDb21wb25lbnQuY29udHJvbCA9IG5ldyBHZW9sb2NhdGVDb250cm9sKG9wdGlvbnMpO1xuICAgICAgdGhpcy5Db250cm9sQ29tcG9uZW50LmNvbnRyb2wub24oJ2dlb2xvY2F0ZScsIChkYXRhOiBQb3NpdGlvbikgPT4gdGhpcy5nZW9sb2NhdGUuZW1pdChkYXRhKSk7XG4gICAgICB0aGlzLk1hcFNlcnZpY2UuYWRkQ29udHJvbCh0aGlzLkNvbnRyb2xDb21wb25lbnQuY29udHJvbCwgdGhpcy5Db250cm9sQ29tcG9uZW50LnBvc2l0aW9uKTtcbiAgICB9KTtcbiAgfVxufVxuIl19