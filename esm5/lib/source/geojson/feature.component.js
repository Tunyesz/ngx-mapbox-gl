/**
 * @fileoverview added by tsickle
 * Generated from: lib/source/geojson/feature.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Inject, Input, ChangeDetectionStrategy } from '@angular/core';
import { GeoJSONSourceComponent } from './geojson-source.component';
var FeatureComponent = /** @class */ (function () {
    function FeatureComponent(GeoJSONSourceComponent) {
        this.GeoJSONSourceComponent = GeoJSONSourceComponent;
        this.type = 'Feature';
    }
    /**
     * @return {?}
     */
    FeatureComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.id) {
            this.id = this.GeoJSONSourceComponent._getNewFeatureId();
        }
        this.feature = {
            type: this.type,
            geometry: this.geometry,
            properties: this.properties ? this.properties : {}
        };
        this.feature.id = this.id;
        this.GeoJSONSourceComponent._addFeature(this.feature);
    };
    /**
     * @return {?}
     */
    FeatureComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.GeoJSONSourceComponent._removeFeature(this.feature);
    };
    /**
     * @param {?} coordinates
     * @return {?}
     */
    FeatureComponent.prototype.updateCoordinates = /**
     * @param {?} coordinates
     * @return {?}
     */
    function (coordinates) {
        ((/** @type {?} */ (this.feature.geometry))).coordinates = coordinates;
        this.GeoJSONSourceComponent.updateFeatureData.next();
    };
    FeatureComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mgl-feature',
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    FeatureComponent.ctorParameters = function () { return [
        { type: GeoJSONSourceComponent, decorators: [{ type: Inject, args: [forwardRef((/**
                         * @return {?}
                         */
                        function () { return GeoJSONSourceComponent; })),] }] }
    ]; };
    FeatureComponent.propDecorators = {
        id: [{ type: Input }],
        geometry: [{ type: Input }],
        properties: [{ type: Input }]
    };
    return FeatureComponent;
}());
export { FeatureComponent };
if (false) {
    /** @type {?} */
    FeatureComponent.prototype.id;
    /** @type {?} */
    FeatureComponent.prototype.geometry;
    /** @type {?} */
    FeatureComponent.prototype.properties;
    /** @type {?} */
    FeatureComponent.prototype.type;
    /**
     * @type {?}
     * @private
     */
    FeatureComponent.prototype.feature;
    /**
     * @type {?}
     * @private
     */
    FeatureComponent.prototype.GeoJSONSourceComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWFwYm94LWdsLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZS9nZW9qc29uL2ZlYXR1cmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBcUIsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFcEU7SUFjRSwwQkFDNEQsc0JBQThDO1FBQTlDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFMMUcsU0FBSSxHQUFjLFNBQVMsQ0FBQztJQU14QixDQUFDOzs7O0lBRUwsbUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDWixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtTQUNuRCxDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsc0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFFRCw0Q0FBaUI7Ozs7SUFBakIsVUFBa0IsV0FBcUI7UUFDckMsQ0FBQyxtQkFBZSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBQSxDQUFDLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNqRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7Z0JBdENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLEVBQUU7b0JBQ1osZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQU5RLHNCQUFzQix1QkFpQjFCLE1BQU0sU0FBQyxVQUFVOzs7d0JBQUMsY0FBTSxPQUFBLHNCQUFzQixFQUF0QixDQUFzQixFQUFDOzs7cUJBUmpELEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLOztJQThCUix1QkFBQztDQUFBLEFBdkNELElBdUNDO1NBbENZLGdCQUFnQjs7O0lBRTNCLDhCQUFxQjs7SUFDckIsb0NBQTBDOztJQUMxQyxzQ0FBeUI7O0lBQ3pCLGdDQUE0Qjs7Ozs7SUFFNUIsbUNBQXlEOzs7OztJQUd2RCxrREFBd0ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIEluamVjdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2VvSlNPTlNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vZ2VvanNvbi1zb3VyY2UuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWdsLWZlYXR1cmUnLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZlYXR1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgR2VvSlNPTi5GZWF0dXJlPEdlb0pTT04uR2VvbWV0cnlPYmplY3Q+IHtcbiAgLyogSW5pdCBpbnB1dHMgKi9cbiAgQElucHV0KCkgaWQ/OiBudW1iZXI7IC8vIEZJWE1FIG51bWJlciBvbmx5IGZvciBub3cgaHR0cHM6Ly9naXRodWIuY29tL21hcGJveC9tYXBib3gtZ2wtanMvaXNzdWVzLzI3MTZcbiAgQElucHV0KCkgZ2VvbWV0cnk6IEdlb0pTT04uR2VvbWV0cnlPYmplY3Q7XG4gIEBJbnB1dCgpIHByb3BlcnRpZXM6IGFueTtcbiAgdHlwZTogJ0ZlYXR1cmUnID0gJ0ZlYXR1cmUnO1xuXG4gIHByaXZhdGUgZmVhdHVyZTogR2VvSlNPTi5GZWF0dXJlPEdlb0pTT04uR2VvbWV0cnlPYmplY3Q+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBHZW9KU09OU291cmNlQ29tcG9uZW50KSkgcHJpdmF0ZSBHZW9KU09OU291cmNlQ29tcG9uZW50OiBHZW9KU09OU291cmNlQ29tcG9uZW50XG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmlkKSB7XG4gICAgICB0aGlzLmlkID0gdGhpcy5HZW9KU09OU291cmNlQ29tcG9uZW50Ll9nZXROZXdGZWF0dXJlSWQoKTtcbiAgICB9XG4gICAgdGhpcy5mZWF0dXJlID0ge1xuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICBwcm9wZXJ0aWVzOiB0aGlzLnByb3BlcnRpZXMgPyB0aGlzLnByb3BlcnRpZXMgOiB7fVxuICAgIH07XG4gICAgdGhpcy5mZWF0dXJlLmlkID0gdGhpcy5pZDtcbiAgICB0aGlzLkdlb0pTT05Tb3VyY2VDb21wb25lbnQuX2FkZEZlYXR1cmUodGhpcy5mZWF0dXJlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuR2VvSlNPTlNvdXJjZUNvbXBvbmVudC5fcmVtb3ZlRmVhdHVyZSh0aGlzLmZlYXR1cmUpO1xuICB9XG5cbiAgdXBkYXRlQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXM6IG51bWJlcltdKSB7XG4gICAgKDxHZW9KU09OLlBvaW50PnRoaXMuZmVhdHVyZS5nZW9tZXRyeSkuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICB0aGlzLkdlb0pTT05Tb3VyY2VDb21wb25lbnQudXBkYXRlRmVhdHVyZURhdGEubmV4dCgpO1xuICB9XG59XG4iXX0=