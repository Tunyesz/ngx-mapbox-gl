/**
 * @fileoverview added by tsickle
 * Generated from: lib/control/geolocate-control.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, Host, Input, Output } from '@angular/core';
import { GeolocateControl } from 'mapbox-gl';
import { MapService } from '../map/map.service';
import { ControlComponent } from './control.component';
export class GeolocateControlDirective {
    /**
     * @param {?} MapService
     * @param {?} ControlComponent
     */
    constructor(MapService, ControlComponent) {
        this.MapService = MapService;
        this.ControlComponent = ControlComponent;
        this.geolocate = new EventEmitter();
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
            const options = {
                positionOptions: this.positionOptions,
                fitBoundsOptions: this.fitBoundsOptions,
                trackUserLocation: this.trackUserLocation,
                showUserLocation: this.showUserLocation
            };
            Object.keys(options)
                .forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => {
                /** @type {?} */
                const tkey = (/** @type {?} */ (key));
                if (options[tkey] === undefined) {
                    delete options[tkey];
                }
            }));
            this.ControlComponent.control = new GeolocateControl(options);
            this.ControlComponent.control.on('geolocate', (/**
             * @param {?} data
             * @return {?}
             */
            (data) => this.geolocate.emit(data)));
            this.MapService.addControl(this.ControlComponent.control, this.ControlComponent.position);
        }));
    }
}
GeolocateControlDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mglGeolocate]'
            },] }
];
/** @nocollapse */
GeolocateControlDirective.ctorParameters = () => [
    { type: MapService },
    { type: ControlComponent, decorators: [{ type: Host }] }
];
GeolocateControlDirective.propDecorators = {
    positionOptions: [{ type: Input }],
    fitBoundsOptions: [{ type: Input }],
    trackUserLocation: [{ type: Input }],
    showUserLocation: [{ type: Input }],
    geolocate: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbG9jYXRlLWNvbnRyb2wuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hcGJveC1nbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2dlb2xvY2F0ZS1jb250cm9sLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsZ0JBQWdCLEVBQW9CLE1BQU0sV0FBVyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUt2RCxNQUFNLE9BQU8seUJBQXlCOzs7OztJQVNwQyxZQUNVLFVBQXNCLEVBQ2QsZ0JBQWtDO1FBRDFDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSjFDLGNBQVMsR0FBMkIsSUFBSSxZQUFZLEVBQVksQ0FBQztJQUt2RSxDQUFDOzs7O0lBRUwsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUN6QyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQzthQUNwRTs7a0JBQ0ssT0FBTyxHQUFHO2dCQUNkLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtnQkFDckMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtnQkFDdkMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtnQkFDekMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjthQUN4QztZQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUNqQixPQUFPOzs7O1lBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRTs7c0JBQ2pCLElBQUksR0FBRyxtQkFBc0IsR0FBRyxFQUFBO2dCQUN0QyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLEVBQUU7b0JBQy9CLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN0QjtZQUNILENBQUMsRUFBQyxDQUFDO1lBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sR0FBRyxJQUFJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFdBQVc7Ozs7WUFBRSxDQUFDLElBQWMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQztZQUM3RixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQXhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjthQUMzQjs7OztZQUxRLFVBQVU7WUFDVixnQkFBZ0IsdUJBZ0JwQixJQUFJOzs7OEJBVE4sS0FBSzsrQkFDTCxLQUFLO2dDQUNMLEtBQUs7K0JBQ0wsS0FBSzt3QkFFTCxNQUFNOzs7O0lBTFAsb0RBQTJDOztJQUMzQyxxREFBNkM7O0lBQzdDLHNEQUFxQzs7SUFDckMscURBQW9DOztJQUVwQyw4Q0FBMkU7Ozs7O0lBR3pFLCtDQUE4Qjs7Ozs7SUFDOUIscURBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3QsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdlb2xvY2F0ZUNvbnRyb2wsIEZpdEJvdW5kc09wdGlvbnMgfSBmcm9tICdtYXBib3gtZ2wnO1xuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL21hcC9tYXAuc2VydmljZSc7XG5pbXBvcnQgeyBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9sLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZ2xHZW9sb2NhdGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBHZW9sb2NhdGVDb250cm9sRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIC8qIEluaXQgaW5wdXRzICovXG4gIEBJbnB1dCgpIHBvc2l0aW9uT3B0aW9ucz86IFBvc2l0aW9uT3B0aW9ucztcbiAgQElucHV0KCkgZml0Qm91bmRzT3B0aW9ucz86IEZpdEJvdW5kc09wdGlvbnM7XG4gIEBJbnB1dCgpIHRyYWNrVXNlckxvY2F0aW9uPzogYm9vbGVhbjtcbiAgQElucHV0KCkgc2hvd1VzZXJMb2NhdGlvbj86IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIGdlb2xvY2F0ZTogRXZlbnRFbWl0dGVyPFBvc2l0aW9uPiA9IG5ldyBFdmVudEVtaXR0ZXI8UG9zaXRpb24+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBNYXBTZXJ2aWNlOiBNYXBTZXJ2aWNlLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBDb250cm9sQ29tcG9uZW50OiBDb250cm9sQ29tcG9uZW50XG4gICkgeyB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuTWFwU2VydmljZS5tYXBDcmVhdGVkJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuQ29udHJvbENvbXBvbmVudC5jb250cm9sKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQW5vdGhlciBjb250cm9sIGlzIGFscmVhZHkgc2V0IGZvciB0aGlzIGNvbnRyb2wnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIHBvc2l0aW9uT3B0aW9uczogdGhpcy5wb3NpdGlvbk9wdGlvbnMsXG4gICAgICAgIGZpdEJvdW5kc09wdGlvbnM6IHRoaXMuZml0Qm91bmRzT3B0aW9ucyxcbiAgICAgICAgdHJhY2tVc2VyTG9jYXRpb246IHRoaXMudHJhY2tVc2VyTG9jYXRpb24sXG4gICAgICAgIHNob3dVc2VyTG9jYXRpb246IHRoaXMuc2hvd1VzZXJMb2NhdGlvblxuICAgICAgfTtcblxuICAgICAgT2JqZWN0LmtleXMob3B0aW9ucylcbiAgICAgICAgLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGtleSA9IDxrZXlvZiB0eXBlb2Ygb3B0aW9ucz5rZXk7XG4gICAgICAgICAgaWYgKG9wdGlvbnNbdGtleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGVsZXRlIG9wdGlvbnNbdGtleV07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIHRoaXMuQ29udHJvbENvbXBvbmVudC5jb250cm9sID0gbmV3IEdlb2xvY2F0ZUNvbnRyb2wob3B0aW9ucyk7XG4gICAgICB0aGlzLkNvbnRyb2xDb21wb25lbnQuY29udHJvbC5vbignZ2VvbG9jYXRlJywgKGRhdGE6IFBvc2l0aW9uKSA9PiB0aGlzLmdlb2xvY2F0ZS5lbWl0KGRhdGEpKTtcbiAgICAgIHRoaXMuTWFwU2VydmljZS5hZGRDb250cm9sKHRoaXMuQ29udHJvbENvbXBvbmVudC5jb250cm9sLCB0aGlzLkNvbnRyb2xDb21wb25lbnQucG9zaXRpb24pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=