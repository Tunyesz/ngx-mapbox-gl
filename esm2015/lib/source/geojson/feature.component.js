/**
 * @fileoverview added by tsickle
 * Generated from: lib/source/geojson/feature.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Inject, Input, ChangeDetectionStrategy } from '@angular/core';
import { GeoJSONSourceComponent } from './geojson-source.component';
export class FeatureComponent {
    /**
     * @param {?} GeoJSONSourceComponent
     */
    constructor(GeoJSONSourceComponent) {
        this.GeoJSONSourceComponent = GeoJSONSourceComponent;
        this.type = 'Feature';
    }
    /**
     * @return {?}
     */
    get properties() {
        return this._properties;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set properties(value) {
        this._properties = value;
        if (this.feature) {
            this.feature.properties = value;
            this.GeoJSONSourceComponent.updateFeatureData.next();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.GeoJSONSourceComponent._removeFeature(this.feature);
    }
    /**
     * @param {?} coordinates
     * @return {?}
     */
    updateCoordinates(coordinates) {
        ((/** @type {?} */ (this.feature.geometry))).coordinates = coordinates;
        this.GeoJSONSourceComponent.updateFeatureData.next();
    }
}
FeatureComponent.decorators = [
    { type: Component, args: [{
                selector: 'mgl-feature',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
FeatureComponent.ctorParameters = () => [
    { type: GeoJSONSourceComponent, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => GeoJSONSourceComponent)),] }] }
];
FeatureComponent.propDecorators = {
    id: [{ type: Input }],
    geometry: [{ type: Input }],
    properties: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FeatureComponent.prototype.id;
    /** @type {?} */
    FeatureComponent.prototype.geometry;
    /**
     * @type {?}
     * @private
     */
    FeatureComponent.prototype._properties;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWFwYm94LWdsLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZS9nZW9qc29uL2ZlYXR1cmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBcUIsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFPcEUsTUFBTSxPQUFPLGdCQUFnQjs7OztJQXVCM0IsWUFDNEQsc0JBQThDO1FBQTlDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFMMUcsU0FBSSxHQUFjLFNBQVMsQ0FBQztJQU14QixDQUFDOzs7O0lBbkJMLElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFDRCxJQUNXLFVBQVUsQ0FBQyxLQUFVO1FBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBRXpCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3REO0lBQ0gsQ0FBQzs7OztJQVVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNaLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDMUQ7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ25ELENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxXQUFxQjtRQUNyQyxDQUFDLG1CQUFlLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFBLENBQUMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2RCxDQUFDOzs7WUFwREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsRUFBRTtnQkFDWixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQU5RLHNCQUFzQix1QkErQjFCLE1BQU0sU0FBQyxVQUFVOzs7b0JBQUMsR0FBRyxFQUFFLENBQUMsc0JBQXNCLEVBQUM7OztpQkF0QmpELEtBQUs7dUJBQ0wsS0FBSzt5QkFNTCxLQUFLOzs7O0lBUE4sOEJBQXFCOztJQUNyQixvQ0FBMEM7Ozs7O0lBRTFDLHVDQUF5Qjs7SUFjekIsZ0NBQTRCOzs7OztJQUU1QixtQ0FBeUQ7Ozs7O0lBR3ZELGtEQUF3RyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5qZWN0LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHZW9KU09OU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9nZW9qc29uLXNvdXJjZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZ2wtZmVhdHVyZScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBHZW9KU09OLkZlYXR1cmU8R2VvSlNPTi5HZW9tZXRyeU9iamVjdD4ge1xuICAvKiBJbml0IGlucHV0cyAqL1xuICBASW5wdXQoKSBpZD86IG51bWJlcjsgLy8gRklYTUUgbnVtYmVyIG9ubHkgZm9yIG5vdyBodHRwczovL2dpdGh1Yi5jb20vbWFwYm94L21hcGJveC1nbC1qcy9pc3N1ZXMvMjcxNlxuICBASW5wdXQoKSBnZW9tZXRyeTogR2VvSlNPTi5HZW9tZXRyeU9iamVjdDtcblxuICBwcml2YXRlIF9wcm9wZXJ0aWVzOiBhbnk7XG4gIHB1YmxpYyBnZXQgcHJvcGVydGllcygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9wcm9wZXJ0aWVzO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcHJvcGVydGllcyh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fcHJvcGVydGllcyA9IHZhbHVlO1xuICAgIFxuICAgIGlmICh0aGlzLmZlYXR1cmUpIHtcbiAgICAgIHRoaXMuZmVhdHVyZS5wcm9wZXJ0aWVzID0gdmFsdWU7XG4gICAgICB0aGlzLkdlb0pTT05Tb3VyY2VDb21wb25lbnQudXBkYXRlRmVhdHVyZURhdGEubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIHR5cGU6ICdGZWF0dXJlJyA9ICdGZWF0dXJlJztcblxuICBwcml2YXRlIGZlYXR1cmU6IEdlb0pTT04uRmVhdHVyZTxHZW9KU09OLkdlb21ldHJ5T2JqZWN0PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gR2VvSlNPTlNvdXJjZUNvbXBvbmVudCkpIHByaXZhdGUgR2VvSlNPTlNvdXJjZUNvbXBvbmVudDogR2VvSlNPTlNvdXJjZUNvbXBvbmVudFxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5pZCkge1xuICAgICAgdGhpcy5pZCA9IHRoaXMuR2VvSlNPTlNvdXJjZUNvbXBvbmVudC5fZ2V0TmV3RmVhdHVyZUlkKCk7XG4gICAgfVxuICAgIHRoaXMuZmVhdHVyZSA9IHtcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgcHJvcGVydGllczogdGhpcy5wcm9wZXJ0aWVzID8gdGhpcy5wcm9wZXJ0aWVzIDoge31cbiAgICB9O1xuICAgIHRoaXMuZmVhdHVyZS5pZCA9IHRoaXMuaWQ7XG4gICAgdGhpcy5HZW9KU09OU291cmNlQ29tcG9uZW50Ll9hZGRGZWF0dXJlKHRoaXMuZmVhdHVyZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLkdlb0pTT05Tb3VyY2VDb21wb25lbnQuX3JlbW92ZUZlYXR1cmUodGhpcy5mZWF0dXJlKTtcbiAgfVxuXG4gIHVwZGF0ZUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzOiBudW1iZXJbXSkge1xuICAgICg8R2VvSlNPTi5Qb2ludD50aGlzLmZlYXR1cmUuZ2VvbWV0cnkpLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgdGhpcy5HZW9KU09OU291cmNlQ29tcG9uZW50LnVwZGF0ZUZlYXR1cmVEYXRhLm5leHQoKTtcbiAgfVxufVxuIl19