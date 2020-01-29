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
var GeoJSONSourceComponent = /** @class */ (function () {
    function GeoJSONSourceComponent(MapService, zone) {
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
    GeoJSONSourceComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.data) {
            this.data = {
                type: 'FeatureCollection',
                features: []
            };
        }
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
    GeoJSONSourceComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
            var source = this.MapService.getSource(this.id);
            source.setData((/** @type {?} */ (this.data)));
        }
    };
    /**
     * @return {?}
     */
    GeoJSONSourceComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.sub.unsubscribe();
        if (this.sourceAdded) {
            this.MapService.removeSource(this.id);
        }
    };
    /**
     * For clustered sources, fetches the zoom at which the given cluster expands.
     * @param clusterId The value of the cluster's cluster_id property.
     */
    /**
     * For clustered sources, fetches the zoom at which the given cluster expands.
     * @param {?} clusterId The value of the cluster's cluster_id property.
     * @return {?}
     */
    GeoJSONSourceComponent.prototype.getClusterExpansionZoom = /**
     * For clustered sources, fetches the zoom at which the given cluster expands.
     * @param {?} clusterId The value of the cluster's cluster_id property.
     * @return {?}
     */
    function (clusterId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var source;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                source = this.MapService.getSource(this.id);
                return [2 /*return*/, this.zone.run((/**
                     * @return {?}
                     */
                    function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        return tslib_1.__generator(this, function (_a) {
                            return [2 /*return*/, new Promise((/**
                                 * @param {?} resolve
                                 * @param {?} reject
                                 * @return {?}
                                 */
                                function (resolve, reject) {
                                    source.getClusterExpansionZoom(clusterId, (/**
                                     * @param {?} error
                                     * @param {?} zoom
                                     * @return {?}
                                     */
                                    function (error, zoom) {
                                        if (error) {
                                            reject(error);
                                        }
                                        else {
                                            resolve(zoom);
                                        }
                                    }));
                                }))];
                        });
                    }); }))];
            });
        });
    };
    /**
     * For clustered sources, fetches the children of the given cluster on the next zoom level (as an array of GeoJSON features).
     * @param clusterId The value of the cluster's cluster_id property.
     */
    /**
     * For clustered sources, fetches the children of the given cluster on the next zoom level (as an array of GeoJSON features).
     * @param {?} clusterId The value of the cluster's cluster_id property.
     * @return {?}
     */
    GeoJSONSourceComponent.prototype.getClusterChildren = /**
     * For clustered sources, fetches the children of the given cluster on the next zoom level (as an array of GeoJSON features).
     * @param {?} clusterId The value of the cluster's cluster_id property.
     * @return {?}
     */
    function (clusterId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var source;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                source = this.MapService.getSource(this.id);
                return [2 /*return*/, this.zone.run((/**
                     * @return {?}
                     */
                    function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        return tslib_1.__generator(this, function (_a) {
                            return [2 /*return*/, new Promise((/**
                                 * @param {?} resolve
                                 * @param {?} reject
                                 * @return {?}
                                 */
                                function (resolve, reject) {
                                    source.getClusterChildren(clusterId, (/**
                                     * @param {?} error
                                     * @param {?} features
                                     * @return {?}
                                     */
                                    function (error, features) {
                                        if (error) {
                                            reject(error);
                                        }
                                        else {
                                            resolve(features);
                                        }
                                    }));
                                }))];
                        });
                    }); }))];
            });
        });
    };
    /**
     * For clustered sources, fetches the original points that belong to the cluster (as an array of GeoJSON features).
     * @param clusterId The value of the cluster's cluster_id property.
     * @param limit The maximum number of features to return.
     * @param offset The number of features to skip (e.g. for pagination).
     */
    /**
     * For clustered sources, fetches the original points that belong to the cluster (as an array of GeoJSON features).
     * @param {?} clusterId The value of the cluster's cluster_id property.
     * @param {?} limit The maximum number of features to return.
     * @param {?} offset The number of features to skip (e.g. for pagination).
     * @return {?}
     */
    GeoJSONSourceComponent.prototype.getClusterLeaves = /**
     * For clustered sources, fetches the original points that belong to the cluster (as an array of GeoJSON features).
     * @param {?} clusterId The value of the cluster's cluster_id property.
     * @param {?} limit The maximum number of features to return.
     * @param {?} offset The number of features to skip (e.g. for pagination).
     * @return {?}
     */
    function (clusterId, limit, offset) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var source;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                source = this.MapService.getSource(this.id);
                return [2 /*return*/, this.zone.run((/**
                     * @return {?}
                     */
                    function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        return tslib_1.__generator(this, function (_a) {
                            return [2 /*return*/, new Promise((/**
                                 * @param {?} resolve
                                 * @param {?} reject
                                 * @return {?}
                                 */
                                function (resolve, reject) {
                                    source.getClusterLeaves(clusterId, limit, offset, (/**
                                     * @param {?} error
                                     * @param {?} features
                                     * @return {?}
                                     */
                                    function (error, features) {
                                        if (error) {
                                            reject(error);
                                        }
                                        else {
                                            resolve(features);
                                        }
                                    }));
                                }))];
                        });
                    }); }))];
            });
        });
    };
    /**
     * @param {?} feature
     * @return {?}
     */
    GeoJSONSourceComponent.prototype._addFeature = /**
     * @param {?} feature
     * @return {?}
     */
    function (feature) {
        /** @type {?} */
        var collection = (/** @type {?} */ (this.data));
        collection.features.push(feature);
        this.updateFeatureData.next();
    };
    /**
     * @param {?} feature
     * @return {?}
     */
    GeoJSONSourceComponent.prototype._removeFeature = /**
     * @param {?} feature
     * @return {?}
     */
    function (feature) {
        /** @type {?} */
        var collection = (/** @type {?} */ (this.data));
        /** @type {?} */
        var index = collection.features.indexOf(feature);
        if (index > -1) {
            collection.features.splice(index, 1);
        }
        this.updateFeatureData.next();
    };
    /**
     * @return {?}
     */
    GeoJSONSourceComponent.prototype._getNewFeatureId = /**
     * @return {?}
     */
    function () {
        return ++this.featureIdCounter;
    };
    /**
     * @private
     * @return {?}
     */
    GeoJSONSourceComponent.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
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
            clusterProperties: this.clusterProperties,
            lineMetrics: this.lineMetrics
        })));
        /** @type {?} */
        var sub = this.updateFeatureData.pipe(debounceTime(0)).subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var source = _this.MapService.getSource(_this.id);
            source.setData((/** @type {?} */ (_this.data)));
        }));
        this.sub.add(sub);
        this.sourceAdded = true;
    };
    GeoJSONSourceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mgl-geojson-source',
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    GeoJSONSourceComponent.ctorParameters = function () { return [
        { type: MapService },
        { type: NgZone }
    ]; };
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
        clusterProperties: [{ type: Input }],
        lineMetrics: [{ type: Input }]
    };
    return GeoJSONSourceComponent;
}());
export { GeoJSONSourceComponent };
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
    GeoJSONSourceComponent.prototype.lineMetrics;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvanNvbi1zb3VyY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hcGJveC1nbC8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2UvZ2VvanNvbi9nZW9qc29uLXNvdXJjZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQStDLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvSCxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFbkQ7SUEyQkUsZ0NBQ1UsVUFBc0IsRUFDdEIsSUFBWTtRQURaLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQVJ0QixzQkFBaUIsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRTFCLFFBQUcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3pCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLHFCQUFnQixHQUFHLENBQUMsQ0FBQztJQUt6QixDQUFDOzs7O0lBRUwseUNBQVE7OztJQUFSO1FBQUEsaUJBZ0JDO1FBZkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHO2dCQUNWLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLFFBQVEsRUFBRSxFQUFFO2FBQ2IsQ0FBQztTQUNIO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUzs7O1FBQUM7WUFDbkMsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDOztnQkFDTixHQUFHLEdBQUcsU0FBUyxDQUFDLG1CQUFLLEtBQUks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QUFnQzs7SUFDaEMsZ0RBQWlDOztJQUNqQyxtREFBaUM7O0lBQ2pDLDZDQUE4Qjs7SUFFOUIsbURBQWtDOzs7OztJQUVsQyxxQ0FBaUM7Ozs7O0lBQ2pDLDZDQUE0Qjs7Ozs7SUFDNUIsa0RBQTZCOzs7OztJQUczQiw0Q0FBOEI7Ozs7O0lBQzlCLHNDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdlb0pTT05Tb3VyY2UsIEdlb0pTT05Tb3VyY2VPcHRpb25zIH0gZnJvbSAnbWFwYm94LWdsJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi8uLi9tYXAvbWFwLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZ2wtZ2VvanNvbi1zb3VyY2UnLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEdlb0pTT05Tb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBHZW9KU09OU291cmNlT3B0aW9ucyB7XG4gIC8qIEluaXQgaW5wdXRzICovXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG5cbiAgLyogRHluYW1pYyBpbnB1dHMgKi9cbiAgQElucHV0KCkgZGF0YT86IEdlb0pTT04uRmVhdHVyZTxHZW9KU09OLkdlb21ldHJ5PiB8IEdlb0pTT04uRmVhdHVyZUNvbGxlY3Rpb248R2VvSlNPTi5HZW9tZXRyeT4gfCBzdHJpbmc7XG4gIEBJbnB1dCgpIG1pbnpvb20/OiBudW1iZXI7XG4gIEBJbnB1dCgpIG1heHpvb20/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGJ1ZmZlcj86IG51bWJlcjtcbiAgQElucHV0KCkgdG9sZXJhbmNlPzogbnVtYmVyO1xuICBASW5wdXQoKSBjbHVzdGVyPzogYm9vbGVhbjtcbiAgQElucHV0KCkgY2x1c3RlclJhZGl1cz86IG51bWJlcjtcbiAgQElucHV0KCkgY2x1c3Rlck1heFpvb20/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGNsdXN0ZXJQcm9wZXJ0aWVzPzogYW55O1xuICBASW5wdXQoKSBsaW5lTWV0cmljczogYm9vbGVhbjtcblxuICB1cGRhdGVGZWF0dXJlRGF0YSA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSBzdWIgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIHByaXZhdGUgc291cmNlQWRkZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBmZWF0dXJlSWRDb3VudGVyID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIE1hcFNlcnZpY2U6IE1hcFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmVcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuZGF0YSkge1xuICAgICAgdGhpcy5kYXRhID0ge1xuICAgICAgICB0eXBlOiAnRmVhdHVyZUNvbGxlY3Rpb24nLFxuICAgICAgICBmZWF0dXJlczogW11cbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMuTWFwU2VydmljZS5tYXBMb2FkZWQkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIGNvbnN0IHN1YiA9IGZyb21FdmVudCg8YW55PnRoaXMuTWFwU2VydmljZS5tYXBJbnN0YW5jZSwgJ3N0eWxlZGF0YScpLnBpcGUoXG4gICAgICAgIGZpbHRlcigoKSA9PiAhdGhpcy5NYXBTZXJ2aWNlLm1hcEluc3RhbmNlLmdldFNvdXJjZSh0aGlzLmlkKSlcbiAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc3ViLmFkZChzdWIpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICghdGhpcy5zb3VyY2VBZGRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBjaGFuZ2VzLm1heHpvb20gJiYgIWNoYW5nZXMubWF4em9vbS5pc0ZpcnN0Q2hhbmdlKCkgfHxcbiAgICAgIGNoYW5nZXMubWluem9vbSAmJiAhY2hhbmdlcy5taW56b29tLmlzRmlyc3RDaGFuZ2UoKSB8fFxuICAgICAgY2hhbmdlcy5idWZmZXIgJiYgIWNoYW5nZXMuYnVmZmVyLmlzRmlyc3RDaGFuZ2UoKSB8fFxuICAgICAgY2hhbmdlcy50b2xlcmFuY2UgJiYgIWNoYW5nZXMudG9sZXJhbmNlLmlzRmlyc3RDaGFuZ2UoKSB8fFxuICAgICAgY2hhbmdlcy5jbHVzdGVyICYmICFjaGFuZ2VzLmNsdXN0ZXIuaXNGaXJzdENoYW5nZSgpIHx8XG4gICAgICBjaGFuZ2VzLmNsdXN0ZXJSYWRpdXMgJiYgIWNoYW5nZXMuY2x1c3RlclJhZGl1cy5pc0ZpcnN0Q2hhbmdlKCkgfHxcbiAgICAgIGNoYW5nZXMuY2x1c3Rlck1heFpvb20gJiYgIWNoYW5nZXMuY2x1c3Rlck1heFpvb20uaXNGaXJzdENoYW5nZSgpIHx8XG4gICAgICBjaGFuZ2VzLmNsdXN0ZXJQcm9wZXJ0aWVzICYmICFjaGFuZ2VzLmNsdXN0ZXJQcm9wZXJ0aWVzLmlzRmlyc3RDaGFuZ2UoKVxuICAgICkge1xuICAgICAgdGhpcy5uZ09uRGVzdHJveSgpO1xuICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5kYXRhICYmICFjaGFuZ2VzLmRhdGEuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICBjb25zdCBzb3VyY2UgPSB0aGlzLk1hcFNlcnZpY2UuZ2V0U291cmNlPEdlb0pTT05Tb3VyY2U+KHRoaXMuaWQpO1xuICAgICAgc291cmNlLnNldERhdGEodGhpcy5kYXRhISk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICBpZiAodGhpcy5zb3VyY2VBZGRlZCkge1xuICAgICAgdGhpcy5NYXBTZXJ2aWNlLnJlbW92ZVNvdXJjZSh0aGlzLmlkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRm9yIGNsdXN0ZXJlZCBzb3VyY2VzLCBmZXRjaGVzIHRoZSB6b29tIGF0IHdoaWNoIHRoZSBnaXZlbiBjbHVzdGVyIGV4cGFuZHMuXG4gICAqIEBwYXJhbSBjbHVzdGVySWQgVGhlIHZhbHVlIG9mIHRoZSBjbHVzdGVyJ3MgY2x1c3Rlcl9pZCBwcm9wZXJ0eS5cbiAgICovXG4gIGFzeW5jIGdldENsdXN0ZXJFeHBhbnNpb25ab29tKGNsdXN0ZXJJZDogbnVtYmVyKSB7XG4gICAgY29uc3Qgc291cmNlID0gdGhpcy5NYXBTZXJ2aWNlLmdldFNvdXJjZTxHZW9KU09OU291cmNlPih0aGlzLmlkKTtcbiAgICByZXR1cm4gdGhpcy56b25lLnJ1bihhc3luYyAoKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2U8bnVtYmVyPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHNvdXJjZS5nZXRDbHVzdGVyRXhwYW5zaW9uWm9vbShjbHVzdGVySWQsIChlcnJvciwgem9vbSkgPT4ge1xuICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZSh6b29tKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRm9yIGNsdXN0ZXJlZCBzb3VyY2VzLCBmZXRjaGVzIHRoZSBjaGlsZHJlbiBvZiB0aGUgZ2l2ZW4gY2x1c3RlciBvbiB0aGUgbmV4dCB6b29tIGxldmVsIChhcyBhbiBhcnJheSBvZiBHZW9KU09OIGZlYXR1cmVzKS5cbiAgICogQHBhcmFtIGNsdXN0ZXJJZCBUaGUgdmFsdWUgb2YgdGhlIGNsdXN0ZXIncyBjbHVzdGVyX2lkIHByb3BlcnR5LlxuICAgKi9cbiAgYXN5bmMgZ2V0Q2x1c3RlckNoaWxkcmVuKGNsdXN0ZXJJZDogbnVtYmVyKSB7XG4gICAgY29uc3Qgc291cmNlID0gdGhpcy5NYXBTZXJ2aWNlLmdldFNvdXJjZTxHZW9KU09OU291cmNlPih0aGlzLmlkKTtcbiAgICByZXR1cm4gdGhpcy56b25lLnJ1bihhc3luYyAoKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2U8R2VvSlNPTi5GZWF0dXJlPEdlb0pTT04uR2VvbWV0cnk+W10+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc291cmNlLmdldENsdXN0ZXJDaGlsZHJlbihjbHVzdGVySWQsIChlcnJvciwgZmVhdHVyZXMpID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUoZmVhdHVyZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgY2x1c3RlcmVkIHNvdXJjZXMsIGZldGNoZXMgdGhlIG9yaWdpbmFsIHBvaW50cyB0aGF0IGJlbG9uZyB0byB0aGUgY2x1c3RlciAoYXMgYW4gYXJyYXkgb2YgR2VvSlNPTiBmZWF0dXJlcykuXG4gICAqIEBwYXJhbSBjbHVzdGVySWQgVGhlIHZhbHVlIG9mIHRoZSBjbHVzdGVyJ3MgY2x1c3Rlcl9pZCBwcm9wZXJ0eS5cbiAgICogQHBhcmFtIGxpbWl0IFRoZSBtYXhpbXVtIG51bWJlciBvZiBmZWF0dXJlcyB0byByZXR1cm4uXG4gICAqIEBwYXJhbSBvZmZzZXQgVGhlIG51bWJlciBvZiBmZWF0dXJlcyB0byBza2lwIChlLmcuIGZvciBwYWdpbmF0aW9uKS5cbiAgICovXG4gIGFzeW5jIGdldENsdXN0ZXJMZWF2ZXMoY2x1c3RlcklkOiBudW1iZXIsIGxpbWl0OiBudW1iZXIsIG9mZnNldDogbnVtYmVyKSB7XG4gICAgY29uc3Qgc291cmNlID0gdGhpcy5NYXBTZXJ2aWNlLmdldFNvdXJjZTxHZW9KU09OU291cmNlPih0aGlzLmlkKTtcbiAgICByZXR1cm4gdGhpcy56b25lLnJ1bihhc3luYyAoKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2U8R2VvSlNPTi5GZWF0dXJlPEdlb0pTT04uR2VvbWV0cnk+W10+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc291cmNlLmdldENsdXN0ZXJMZWF2ZXMoY2x1c3RlcklkLCBsaW1pdCwgb2Zmc2V0LCAoZXJyb3IsIGZlYXR1cmVzKSA9PiB7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKGZlYXR1cmVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBfYWRkRmVhdHVyZShmZWF0dXJlOiBHZW9KU09OLkZlYXR1cmU8R2VvSlNPTi5HZW9tZXRyeU9iamVjdD4pIHtcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gPEdlb0pTT04uRmVhdHVyZUNvbGxlY3Rpb248R2VvSlNPTi5HZW9tZXRyeU9iamVjdD4+dGhpcy5kYXRhO1xuICAgIGNvbGxlY3Rpb24uZmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICB0aGlzLnVwZGF0ZUZlYXR1cmVEYXRhLm5leHQoKTtcbiAgfVxuXG4gIF9yZW1vdmVGZWF0dXJlKGZlYXR1cmU6IEdlb0pTT04uRmVhdHVyZTxHZW9KU09OLkdlb21ldHJ5T2JqZWN0Pikge1xuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSA8R2VvSlNPTi5GZWF0dXJlQ29sbGVjdGlvbjxHZW9KU09OLkdlb21ldHJ5T2JqZWN0Pj50aGlzLmRhdGE7XG4gICAgY29uc3QgaW5kZXggPSBjb2xsZWN0aW9uLmZlYXR1cmVzLmluZGV4T2YoZmVhdHVyZSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGNvbGxlY3Rpb24uZmVhdHVyZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVGZWF0dXJlRGF0YS5uZXh0KCk7XG4gIH1cblxuICBfZ2V0TmV3RmVhdHVyZUlkKCkge1xuICAgIHJldHVybiArK3RoaXMuZmVhdHVyZUlkQ291bnRlcjtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpIHtcbiAgICB0aGlzLk1hcFNlcnZpY2UuYWRkU291cmNlKHRoaXMuaWQsIDxhbnk+eyAvLyBjbHVzdGVyUHJvcGVydGllcyBtaXNzaW5nIGluIHR5cGluZ3NcbiAgICAgIHR5cGU6ICdnZW9qc29uJyxcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgIG1heHpvb206IHRoaXMubWF4em9vbSxcbiAgICAgIG1pbnpvb206IHRoaXMubWluem9vbSxcbiAgICAgIGJ1ZmZlcjogdGhpcy5idWZmZXIsXG4gICAgICB0b2xlcmFuY2U6IHRoaXMudG9sZXJhbmNlLFxuICAgICAgY2x1c3RlcjogdGhpcy5jbHVzdGVyLFxuICAgICAgY2x1c3RlclJhZGl1czogdGhpcy5jbHVzdGVyUmFkaXVzLFxuICAgICAgY2x1c3Rlck1heFpvb206IHRoaXMuY2x1c3Rlck1heFpvb20sXG4gICAgICBjbHVzdGVyUHJvcGVydGllczogdGhpcy5jbHVzdGVyUHJvcGVydGllcyxcbiAgICAgIGxpbmVNZXRyaWNzOiB0aGlzLmxpbmVNZXRyaWNzXG4gICAgfSk7XG4gICAgY29uc3Qgc3ViID0gdGhpcy51cGRhdGVGZWF0dXJlRGF0YS5waXBlKGRlYm91bmNlVGltZSgwKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZSA9IHRoaXMuTWFwU2VydmljZS5nZXRTb3VyY2U8R2VvSlNPTlNvdXJjZT4odGhpcy5pZCk7XG4gICAgICBzb3VyY2Uuc2V0RGF0YSh0aGlzLmRhdGEhKTtcbiAgICB9KTtcbiAgICB0aGlzLnN1Yi5hZGQoc3ViKTtcbiAgICB0aGlzLnNvdXJjZUFkZGVkID0gdHJ1ZTtcbiAgfVxufVxuIl19