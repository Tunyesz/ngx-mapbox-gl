import { OnChanges, OnDestroy, OnInit, SimpleChanges, NgZone } from '@angular/core';
import { GeoJSONSourceOptions } from 'mapbox-gl';
import { Subject } from 'rxjs';
import { MapService } from '../../map/map.service';
export declare class GeoJSONSourceComponent implements OnInit, OnDestroy, OnChanges, GeoJSONSourceOptions {
    private MapService;
    private zone;
    id: string;
    data?: GeoJSON.Feature<GeoJSON.Geometry> | GeoJSON.FeatureCollection<GeoJSON.Geometry> | string;
    minzoom?: number;
    maxzoom?: number;
    buffer?: number;
    tolerance?: number;
    cluster?: boolean;
    clusterRadius?: number;
    clusterMaxZoom?: number;
    clusterProperties?: any;
    lineMetrics: boolean;
    updateFeatureData: Subject<unknown>;
    private sub;
    private sourceAdded;
    private featureIdCounter;
    constructor(MapService: MapService, zone: NgZone);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    /**
     * For clustered sources, fetches the zoom at which the given cluster expands.
     * @param clusterId The value of the cluster's cluster_id property.
     */
    getClusterExpansionZoom(clusterId: number): Promise<number>;
    /**
     * For clustered sources, fetches the children of the given cluster on the next zoom level (as an array of GeoJSON features).
     * @param clusterId The value of the cluster's cluster_id property.
     */
    getClusterChildren(clusterId: number): Promise<import("geojson").Feature<import("geojson").Geometry, import("geojson").GeoJsonProperties>[]>;
    /**
     * For clustered sources, fetches the original points that belong to the cluster (as an array of GeoJSON features).
     * @param clusterId The value of the cluster's cluster_id property.
     * @param limit The maximum number of features to return.
     * @param offset The number of features to skip (e.g. for pagination).
     */
    getClusterLeaves(clusterId: number, limit: number, offset: number): Promise<import("geojson").Feature<import("geojson").Geometry, import("geojson").GeoJsonProperties>[]>;
    _addFeature(feature: GeoJSON.Feature<GeoJSON.GeometryObject>): void;
    _removeFeature(feature: GeoJSON.Feature<GeoJSON.GeometryObject>): void;
    _getNewFeatureId(): number;
    private init;
}