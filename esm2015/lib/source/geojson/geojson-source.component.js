/**
 * @fileoverview added by tsickle
 * Generated from: lib/source/geojson/geojson-source.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, NgZone } from '@angular/core';
import { fromEvent, Subject, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { MapService } from '../../map/map.service';
export class GeoJSONSourceComponent {
    /**
     * @param {?} MapService
     * @param {?} zone
     */
    constructor(MapService, zone) {
        this.MapService = MapService;
        this.zone = zone;
        this.updateFeatureData = new Subject();
        this.sub = new Subscription();
        this.sourceAdded = false;
        this.featureIdCounter = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.data) {
            this.data = {
                type: 'FeatureCollection',
                features: []
            };
        }
        this.MapService.mapLoaded$.subscribe((/**
         * @return {?}
         */
        () => {
            this.init();
            /** @type {?} */
            const sub = fromEvent((/** @type {?} */ (this.MapService.mapInstance)), 'styledata').pipe(filter((/**
             * @return {?}
             */
            () => !this.MapService.mapInstance.getSource(this.id)))).subscribe((/**
             * @return {?}
             */
            () => {
                this.init();
            }));
            this.sub.add(sub);
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this.sourceAdded) {
            return;
        }
        if (changes.maxzoom && !changes.maxzoom.isFirstChange() ||
            changes.minzoom && !changes.minzoom.isFirstChange() ||
            changes.buffer && !changes.buffer.isFirstChange() ||
            changes.tolerance && !changes.tolerance.isFirstChange() ||
            changes.cluster && !changes.cluster.isFirstChange() ||
            changes.clusterRadius && !changes.clusterRadius.isFirstChange() ||
            changes.clusterMaxZoom && !changes.clusterMaxZoom.isFirstChange() ||
            changes.clusterProperties && !changes.clusterProperties.isFirstChange()) {
            this.ngOnDestroy();
            this.ngOnInit();
        }
        if (changes.data && !changes.data.isFirstChange()) {
            /** @type {?} */
            const source = this.MapService.getSource(this.id);
            source.setData((/** @type {?} */ (this.data)));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.sub.unsubscribe();
        if (this.sourceAdded) {
            this.MapService.removeSource(this.id);
        }
    }
    /**
     * For clustered sources, fetches the zoom at which the given cluster expands.
     * @param {?} clusterId The value of the cluster's cluster_id property.
     * @return {?}
     */
    getClusterExpansionZoom(clusterId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const source = this.MapService.getSource(this.id);
            return this.zone.run((/**
             * @return {?}
             */
            () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return new Promise((/**
                 * @param {?} resolve
                 * @param {?} reject
                 * @return {?}
                 */
                (resolve, reject) => {
                    source.getClusterExpansionZoom(clusterId, (/**
                     * @param {?} error
                     * @param {?} zoom
                     * @return {?}
                     */
                    (error, zoom) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            resolve(zoom);
                        }
                    }));
                }));
            })));
        });
    }
    /**
     * For clustered sources, fetches the children of the given cluster on the next zoom level (as an array of GeoJSON features).
     * @param {?} clusterId The value of the cluster's cluster_id property.
     * @return {?}
     */
    getClusterChildren(clusterId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const source = this.MapService.getSource(this.id);
            return this.zone.run((/**
             * @return {?}
             */
            () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return new Promise((/**
                 * @param {?} resolve
                 * @param {?} reject
                 * @return {?}
                 */
                (resolve, reject) => {
                    source.getClusterChildren(clusterId, (/**
                     * @param {?} error
                     * @param {?} features
                     * @return {?}
                     */
                    (error, features) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            resolve(features);
                        }
                    }));
                }));
            })));
        });
    }
    /**
     * For clustered sources, fetches the original points that belong to the cluster (as an array of GeoJSON features).
     * @param {?} clusterId The value of the cluster's cluster_id property.
     * @param {?} limit The maximum number of features to return.
     * @param {?} offset The number of features to skip (e.g. for pagination).
     * @return {?}
     */
    getClusterLeaves(clusterId, limit, offset) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const source = this.MapService.getSource(this.id);
            return this.zone.run((/**
             * @return {?}
             */
            () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return new Promise((/**
                 * @param {?} resolve
                 * @param {?} reject
                 * @return {?}
                 */
                (resolve, reject) => {
                    source.getClusterLeaves(clusterId, limit, offset, (/**
                     * @param {?} error
                     * @param {?} features
                     * @return {?}
                     */
                    (error, features) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            resolve(features);
                        }
                    }));
                }));
            })));
        });
    }
    /**
     * @param {?} feature
     * @return {?}
     */
    _addFeature(feature) {
        /** @type {?} */
        const collection = (/** @type {?} */ (this.data));
        collection.features.push(feature);
        this.updateFeatureData.next();
    }
    /**
     * @param {?} feature
     * @return {?}
     */
    _removeFeature(feature) {
        /** @type {?} */
        const collection = (/** @type {?} */ (this.data));
        /** @type {?} */
        const index = collection.features.indexOf(feature);
        if (index > -1) {
            collection.features.splice(index, 1);
        }
        this.updateFeatureData.next();
    }
    /**
     * @return {?}
     */
    _getNewFeatureId() {
        return ++this.featureIdCounter;
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        this.MapService.addSource(this.id, (/** @type {?} */ ({
            // clusterProperties missing in typings
            type: 'geojson',
            data: this.data,
            maxzoom: this.maxzoom,
            minzoom: this.minzoom,
            buffer: this.buffer,
            tolerance: this.tolerance,
            cluster: this.cluster,
            clusterRadius: this.clusterRadius,
            clusterMaxZoom: this.clusterMaxZoom,
            clusterProperties: this.clusterProperties
        })));
        /** @type {?} */
        const sub = this.updateFeatureData.pipe(debounceTime(0)).subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const source = this.MapService.getSource(this.id);
            source.setData((/** @type {?} */ (this.data)));
        }));
        this.sub.add(sub);
        this.sourceAdded = true;
    }
}
GeoJSONSourceComponent.decorators = [
    { type: Component, args: [{
                selector: 'mgl-geojson-source',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
GeoJSONSourceComponent.ctorParameters = () => [
    { type: MapService },
    { type: NgZone }
];
GeoJSONSourceComponent.propDecorators = {
    id: [{ type: Input }],
    data: [{ type: Input }],
    minzoom: [{ type: Input }],
    maxzoom: [{ type: Input }],
    buffer: [{ type: Input }],
    tolerance: [{ type: Input }],
    cluster: [{ type: Input }],
    clusterRadius: [{ type: Input }],
    clusterMaxZoom: [{ type: Input }],
    clusterProperties: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GeoJSONSourceComponent.prototype.id;
    /** @type {?} */
    GeoJSONSourceComponent.prototype.data;
    /** @type {?} */
    GeoJSONSourceComponent.prototype.minzoom;
    /** @type {?} */
    GeoJSONSourceComponent.prototype.maxzoom;
    /** @type {?} */
    GeoJSONSourceComponent.prototype.buffer;
    /** @type {?} */
    GeoJSONSourceComponent.prototype.tolerance;
    /** @type {?} */
    GeoJSONSourceComponent.prototype.cluster;
    /** @type {?} */
    GeoJSONSourceComponent.prototype.clusterRadius;
    /** @type {?} */
    GeoJSONSourceComponent.prototype.clusterMaxZoom;
    /** @type {?} */
    GeoJSONSourceComponent.prototype.clusterProperties;
    /** @type {?} */
    GeoJSONSourceComponent.prototype.updateFeatureData;
    /**
     * @type {?}
     * @private
     */
    GeoJSONSourceComponent.prototype.sub;
    /**
     * @type {?}
     * @private
     */
    GeoJSONSourceComponent.prototype.sourceAdded;
    /**
     * @type {?}
     * @private
     */
    GeoJSONSourceComponent.prototype.featureIdCounter;
    /**
     * @type {?}
     * @private
     */
    GeoJSONSourceComponent.prototype.MapService;
    /**
     * @type {?}
     * @private
     */
    GeoJSONSourceComponent.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvanNvbi1zb3VyY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hcGJveC1nbC8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2UvZ2VvanNvbi9nZW9qc29uLXNvdXJjZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQStDLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvSCxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFPbkQsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFxQmpDLFlBQ1UsVUFBc0IsRUFDdEIsSUFBWTtRQURaLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQVJ0QixzQkFBaUIsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRTFCLFFBQUcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3pCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLHFCQUFnQixHQUFHLENBQUMsQ0FBQztJQUt6QixDQUFDOzs7O0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUksR0FBRztnQkFDVixJQUFJLEVBQUUsbUJBQW1CO2dCQUN6QixRQUFRLEVBQUUsRUFBRTthQUNiLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUN4QyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7O2tCQUNOLEdBQUcsR0FBRyxTQUFTLENBQUMs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SUFDNUIsa0RBQTZCOzs7OztJQUczQiw0Q0FBOEI7Ozs7O0lBQzlCLHNDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdlb0pTT05Tb3VyY2UsIEdlb0pTT05Tb3VyY2VPcHRpb25zIH0gZnJvbSAnbWFwYm94LWdsJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi8uLi9tYXAvbWFwLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZ2wtZ2VvanNvbi1zb3VyY2UnLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEdlb0pTT05Tb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBHZW9KU09OU291cmNlT3B0aW9ucyB7XG4gIC8qIEluaXQgaW5wdXRzICovXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG5cbiAgLyogRHluYW1pYyBpbnB1dHMgKi9cbiAgQElucHV0KCkgZGF0YT86IEdlb0pTT04uRmVhdHVyZTxHZW9KU09OLkdlb21ldHJ5PiB8IEdlb0pTT04uRmVhdHVyZUNvbGxlY3Rpb248R2VvSlNPTi5HZW9tZXRyeT4gfCBzdHJpbmc7XG4gIEBJbnB1dCgpIG1pbnpvb20/OiBudW1iZXI7XG4gIEBJbnB1dCgpIG1heHpvb20/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGJ1ZmZlcj86IG51bWJlcjtcbiAgQElucHV0KCkgdG9sZXJhbmNlPzogbnVtYmVyO1xuICBASW5wdXQoKSBjbHVzdGVyPzogYm9vbGVhbjtcbiAgQElucHV0KCkgY2x1c3RlclJhZGl1cz86IG51bWJlcjtcbiAgQElucHV0KCkgY2x1c3Rlck1heFpvb20/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGNsdXN0ZXJQcm9wZXJ0aWVzPzogYW55O1xuXG4gIHVwZGF0ZUZlYXR1cmVEYXRhID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIHN1YiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgcHJpdmF0ZSBzb3VyY2VBZGRlZCA9IGZhbHNlO1xuICBwcml2YXRlIGZlYXR1cmVJZENvdW50ZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgTWFwU2VydmljZTogTWFwU2VydmljZSxcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5kYXRhKSB7XG4gICAgICB0aGlzLmRhdGEgPSB7XG4gICAgICAgIHR5cGU6ICdGZWF0dXJlQ29sbGVjdGlvbicsXG4gICAgICAgIGZlYXR1cmVzOiBbXVxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5NYXBTZXJ2aWNlLm1hcExvYWRlZCQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgY29uc3Qgc3ViID0gZnJvbUV2ZW50KDxhbnk+dGhpcy5NYXBTZXJ2aWNlLm1hcEluc3RhbmNlLCAnc3R5bGVkYXRhJykucGlwZShcbiAgICAgICAgZmlsdGVyKCgpID0+ICF0aGlzLk1hcFNlcnZpY2UubWFwSW5zdGFuY2UuZ2V0U291cmNlKHRoaXMuaWQpKVxuICAgICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zdWIuYWRkKHN1Yik7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCF0aGlzLnNvdXJjZUFkZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGNoYW5nZXMubWF4em9vbSAmJiAhY2hhbmdlcy5tYXh6b29tLmlzRmlyc3RDaGFuZ2UoKSB8fFxuICAgICAgY2hhbmdlcy5taW56b29tICYmICFjaGFuZ2VzLm1pbnpvb20uaXNGaXJzdENoYW5nZSgpIHx8XG4gICAgICBjaGFuZ2VzLmJ1ZmZlciAmJiAhY2hhbmdlcy5idWZmZXIuaXNGaXJzdENoYW5nZSgpIHx8XG4gICAgICBjaGFuZ2VzLnRvbGVyYW5jZSAmJiAhY2hhbmdlcy50b2xlcmFuY2UuaXNGaXJzdENoYW5nZSgpIHx8XG4gICAgICBjaGFuZ2VzLmNsdXN0ZXIgJiYgIWNoYW5nZXMuY2x1c3Rlci5pc0ZpcnN0Q2hhbmdlKCkgfHxcbiAgICAgIGNoYW5nZXMuY2x1c3RlclJhZGl1cyAmJiAhY2hhbmdlcy5jbHVzdGVyUmFkaXVzLmlzRmlyc3RDaGFuZ2UoKSB8fFxuICAgICAgY2hhbmdlcy5jbHVzdGVyTWF4Wm9vbSAmJiAhY2hhbmdlcy5jbHVzdGVyTWF4Wm9vbS5pc0ZpcnN0Q2hhbmdlKCkgfHxcbiAgICAgIGNoYW5nZXMuY2x1c3RlclByb3BlcnRpZXMgJiYgIWNoYW5nZXMuY2x1c3RlclByb3BlcnRpZXMuaXNGaXJzdENoYW5nZSgpXG4gICAgKSB7XG4gICAgICB0aGlzLm5nT25EZXN0cm95KCk7XG4gICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmRhdGEgJiYgIWNoYW5nZXMuZGF0YS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIGNvbnN0IHNvdXJjZSA9IHRoaXMuTWFwU2VydmljZS5nZXRTb3VyY2U8R2VvSlNPTlNvdXJjZT4odGhpcy5pZCk7XG4gICAgICBzb3VyY2Uuc2V0RGF0YSh0aGlzLmRhdGEhKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIGlmICh0aGlzLnNvdXJjZUFkZGVkKSB7XG4gICAgICB0aGlzLk1hcFNlcnZpY2UucmVtb3ZlU291cmNlKHRoaXMuaWQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgY2x1c3RlcmVkIHNvdXJjZXMsIGZldGNoZXMgdGhlIHpvb20gYXQgd2hpY2ggdGhlIGdpdmVuIGNsdXN0ZXIgZXhwYW5kcy5cbiAgICogQHBhcmFtIGNsdXN0ZXJJZCBUaGUgdmFsdWUgb2YgdGhlIGNsdXN0ZXIncyBjbHVzdGVyX2lkIHByb3BlcnR5LlxuICAgKi9cbiAgYXN5bmMgZ2V0Q2x1c3RlckV4cGFuc2lvblpvb20oY2x1c3RlcklkOiBudW1iZXIpIHtcbiAgICBjb25zdCBzb3VyY2UgPSB0aGlzLk1hcFNlcnZpY2UuZ2V0U291cmNlPEdlb0pTT05Tb3VyY2U+KHRoaXMuaWQpO1xuICAgIHJldHVybiB0aGlzLnpvbmUucnVuKGFzeW5jICgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxudW1iZXI+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc291cmNlLmdldENsdXN0ZXJFeHBhbnNpb25ab29tKGNsdXN0ZXJJZCwgKGVycm9yLCB6b29tKSA9PiB7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKHpvb20pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgY2x1c3RlcmVkIHNvdXJjZXMsIGZldGNoZXMgdGhlIGNoaWxkcmVuIG9mIHRoZSBnaXZlbiBjbHVzdGVyIG9uIHRoZSBuZXh0IHpvb20gbGV2ZWwgKGFzIGFuIGFycmF5IG9mIEdlb0pTT04gZmVhdHVyZXMpLlxuICAgKiBAcGFyYW0gY2x1c3RlcklkIFRoZSB2YWx1ZSBvZiB0aGUgY2x1c3RlcidzIGNsdXN0ZXJfaWQgcHJvcGVydHkuXG4gICAqL1xuICBhc3luYyBnZXRDbHVzdGVyQ2hpbGRyZW4oY2x1c3RlcklkOiBudW1iZXIpIHtcbiAgICBjb25zdCBzb3VyY2UgPSB0aGlzLk1hcFNlcnZpY2UuZ2V0U291cmNlPEdlb0pTT05Tb3VyY2U+KHRoaXMuaWQpO1xuICAgIHJldHVybiB0aGlzLnpvbmUucnVuKGFzeW5jICgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxHZW9KU09OLkZlYXR1cmU8R2VvSlNPTi5HZW9tZXRyeT5bXT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBzb3VyY2UuZ2V0Q2x1c3RlckNoaWxkcmVuKGNsdXN0ZXJJZCwgKGVycm9yLCBmZWF0dXJlcykgPT4ge1xuICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShmZWF0dXJlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvciBjbHVzdGVyZWQgc291cmNlcywgZmV0Y2hlcyB0aGUgb3JpZ2luYWwgcG9pbnRzIHRoYXQgYmVsb25nIHRvIHRoZSBjbHVzdGVyIChhcyBhbiBhcnJheSBvZiBHZW9KU09OIGZlYXR1cmVzKS5cbiAgICogQHBhcmFtIGNsdXN0ZXJJZCBUaGUgdmFsdWUgb2YgdGhlIGNsdXN0ZXIncyBjbHVzdGVyX2lkIHByb3BlcnR5LlxuICAgKiBAcGFyYW0gbGltaXQgVGhlIG1heGltdW0gbnVtYmVyIG9mIGZlYXR1cmVzIHRvIHJldHVybi5cbiAgICogQHBhcmFtIG9mZnNldCBUaGUgbnVtYmVyIG9mIGZlYXR1cmVzIHRvIHNraXAgKGUuZy4gZm9yIHBhZ2luYXRpb24pLlxuICAgKi9cbiAgYXN5bmMgZ2V0Q2x1c3RlckxlYXZlcyhjbHVzdGVySWQ6IG51bWJlciwgbGltaXQ6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIpIHtcbiAgICBjb25zdCBzb3VyY2UgPSB0aGlzLk1hcFNlcnZpY2UuZ2V0U291cmNlPEdlb0pTT05Tb3VyY2U+KHRoaXMuaWQpO1xuICAgIHJldHVybiB0aGlzLnpvbmUucnVuKGFzeW5jICgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxHZW9KU09OLkZlYXR1cmU8R2VvSlNPTi5HZW9tZXRyeT5bXT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBzb3VyY2UuZ2V0Q2x1c3RlckxlYXZlcyhjbHVzdGVySWQsIGxpbWl0LCBvZmZzZXQsIChlcnJvciwgZmVhdHVyZXMpID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUoZmVhdHVyZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIF9hZGRGZWF0dXJlKGZlYXR1cmU6IEdlb0pTT04uRmVhdHVyZTxHZW9KU09OLkdlb21ldHJ5T2JqZWN0Pikge1xuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSA8R2VvSlNPTi5GZWF0dXJlQ29sbGVjdGlvbjxHZW9KU09OLkdlb21ldHJ5T2JqZWN0Pj50aGlzLmRhdGE7XG4gICAgY29sbGVjdGlvbi5mZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgIHRoaXMudXBkYXRlRmVhdHVyZURhdGEubmV4dCgpO1xuICB9XG5cbiAgX3JlbW92ZUZlYXR1cmUoZmVhdHVyZTogR2VvSlNPTi5GZWF0dXJlPEdlb0pTT04uR2VvbWV0cnlPYmplY3Q+KSB7XG4gICAgY29uc3QgY29sbGVjdGlvbiA9IDxHZW9KU09OLkZlYXR1cmVDb2xsZWN0aW9uPEdlb0pTT04uR2VvbWV0cnlPYmplY3Q+PnRoaXMuZGF0YTtcbiAgICBjb25zdCBpbmRleCA9IGNvbGxlY3Rpb24uZmVhdHVyZXMuaW5kZXhPZihmZWF0dXJlKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgY29sbGVjdGlvbi5mZWF0dXJlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUZlYXR1cmVEYXRhLm5leHQoKTtcbiAgfVxuXG4gIF9nZXROZXdGZWF0dXJlSWQoKSB7XG4gICAgcmV0dXJuICsrdGhpcy5mZWF0dXJlSWRDb3VudGVyO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCkge1xuICAgIHRoaXMuTWFwU2VydmljZS5hZGRTb3VyY2UodGhpcy5pZCwgPGFueT57IC8vIGNsdXN0ZXJQcm9wZXJ0aWVzIG1pc3NpbmcgaW4gdHlwaW5nc1xuICAgICAgdHlwZTogJ2dlb2pzb24nLFxuICAgICAgZGF0YTogdGhpcy5kYXRhLFxuICAgICAgbWF4em9vbTogdGhpcy5tYXh6b29tLFxuICAgICAgbWluem9vbTogdGhpcy5taW56b29tLFxuICAgICAgYnVmZmVyOiB0aGlzLmJ1ZmZlcixcbiAgICAgIHRvbGVyYW5jZTogdGhpcy50b2xlcmFuY2UsXG4gICAgICBjbHVzdGVyOiB0aGlzLmNsdXN0ZXIsXG4gICAgICBjbHVzdGVyUmFkaXVzOiB0aGlzLmNsdXN0ZXJSYWRpdXMsXG4gICAgICBjbHVzdGVyTWF4Wm9vbTogdGhpcy5jbHVzdGVyTWF4Wm9vbSxcbiAgICAgIGNsdXN0ZXJQcm9wZXJ0aWVzOiB0aGlzLmNsdXN0ZXJQcm9wZXJ0aWVzXG4gICAgfSk7XG4gICAgY29uc3Qgc3ViID0gdGhpcy51cGRhdGVGZWF0dXJlRGF0YS5waXBlKGRlYm91bmNlVGltZSgwKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZSA9IHRoaXMuTWFwU2VydmljZS5nZXRTb3VyY2U8R2VvSlNPTlNvdXJjZT4odGhpcy5pZCk7XG4gICAgICBzb3VyY2Uuc2V0RGF0YSh0aGlzLmRhdGEhKTtcbiAgICB9KTtcbiAgICB0aGlzLnN1Yi5hZGQoc3ViKTtcbiAgICB0aGlzLnNvdXJjZUFkZGVkID0gdHJ1ZTtcbiAgfVxufVxuIl19