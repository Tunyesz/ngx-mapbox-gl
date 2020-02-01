import { AfterContentInit, EventEmitter } from '@angular/core';
import { FitBoundsOptions } from 'mapbox-gl';
import { MapService } from '../map/map.service';
import { ControlComponent } from './control.component';
export declare class GeolocateControlDirective implements AfterContentInit {
    private MapService;
    private ControlComponent;
    positionOptions?: PositionOptions;
    fitBoundsOptions?: FitBoundsOptions;
    trackUserLocation?: boolean;
    showUserLocation?: boolean;
    geolocate: EventEmitter<Position>;
    constructor(MapService: MapService, ControlComponent: ControlComponent);
    ngAfterContentInit(): void;
}