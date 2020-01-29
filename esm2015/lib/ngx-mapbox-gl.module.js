/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-mapbox-gl.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AttributionControlDirective } from './control/attribution-control.directive';
import { ControlComponent } from './control/control.component';
import { FullscreenControlDirective } from './control/fullscreen-control.directive';
import { GeocoderControlDirective, MAPBOX_GEOCODER_API_KEY } from './control/geocoder-control.directive';
import { GeolocateControlDirective } from './control/geolocate-control.directive';
import { NavigationControlDirective } from './control/navigation-control.directive';
import { ScaleControlDirective } from './control/scale-control.directive';
import { DraggableDirective } from './draggable/draggable.directive';
import { ImageComponent } from './image/image.component';
import { LayerComponent } from './layer/layer.component';
import { MapComponent } from './map/map.component';
import { MAPBOX_API_KEY } from './map/map.service';
import { MarkerComponent } from './marker/marker.component';
import { ClusterPointDirective, PointDirective, MarkersForClustersComponent } from './markers-for-clusters/markers-for-clusters.component';
import { PopupComponent } from './popup/popup.component';
import { CanvasSourceComponent } from './source/canvas-source.component';
import { FeatureComponent } from './source/geojson/feature.component';
import { GeoJSONSourceComponent } from './source/geojson/geojson-source.component';
import { ImageSourceComponent } from './source/image-source.component';
import { RasterSourceComponent } from './source/raster-source.component';
import { VectorSourceComponent } from './source/vector-source.component';
import { VideoSourceComponent } from './source/video-source.component';
export class NgxMapboxGLModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static withConfig(config) {
        return {
            ngModule: NgxMapboxGLModule,
            providers: [
                {
                    provide: MAPBOX_API_KEY,
                    useValue: config.accessToken
                },
                {
                    provide: MAPBOX_GEOCODER_API_KEY,
                    useValue: config.geocoderAccessToken || config.accessToken
                }
            ],
        };
    }
}
NgxMapboxGLModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    MapComponent,
                    LayerComponent,
                    DraggableDirective,
                    ImageComponent,
                    VectorSourceComponent,
                    GeoJSONSourceComponent,
                    RasterSourceComponent,
                    ImageSourceComponent,
                    VideoSourceComponent,
                    CanvasSourceComponent,
                    FeatureComponent,
                    MarkerComponent,
                    PopupComponent,
                    ControlComponent,
                    FullscreenControlDirective,
                    NavigationControlDirective,
                    GeocoderControlDirective,
                    GeolocateControlDirective,
                    AttributionControlDirective,
                    ScaleControlDirective,
                    PointDirective,
                    ClusterPointDirective,
                    MarkersForClustersComponent
                ],
                exports: [
                    MapComponent,
                    LayerComponent,
                    DraggableDirective,
                    ImageComponent,
                    VectorSourceComponent,
                    GeoJSONSourceComponent,
                    RasterSourceComponent,
                    ImageSourceComponent,
                    VideoSourceComponent,
                    CanvasSourceComponent,
                    FeatureComponent,
                    MarkerComponent,
                    PopupComponent,
                    ControlComponent,
                    FullscreenControlDirective,
                    NavigationControlDirective,
                    GeocoderControlDirective,
                    GeolocateControlDirective,
                    AttributionControlDirective,
                    ScaleControlDirective,
                    PointDirective,
                    ClusterPointDirective,
                    MarkersForClustersComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hcGJveC1nbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWFwYm94LWdsLyIsInNvdXJjZXMiOlsibGliL25neC1tYXBib3gtZ2wubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGNBQWMsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzNJLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQXlEdkUsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFDNUIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUE2RDtRQUM3RSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsV0FBVztpQkFDN0I7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLHVCQUF1QjtvQkFDaEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxtQkFBbUIsSUFBSSxNQUFNLENBQUMsV0FBVztpQkFDM0Q7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUF0RUYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWixZQUFZO29CQUNaLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQixjQUFjO29CQUNkLHFCQUFxQjtvQkFDckIsc0JBQXNCO29CQUN0QixxQkFBcUI7b0JBQ3JCLG9CQUFvQjtvQkFDcEIsb0JBQW9CO29CQUNwQixxQkFBcUI7b0JBQ3JCLGdCQUFnQjtvQkFDaEIsZUFBZTtvQkFDZixjQUFjO29CQUNkLGdCQUFnQjtvQkFDaEIsMEJBQTBCO29CQUMxQiwwQkFBMEI7b0JBQzFCLHdCQUF3QjtvQkFDeEIseUJBQXlCO29CQUN6QiwyQkFBMkI7b0JBQzNCLHFCQUFxQjtvQkFDckIsY0FBYztvQkFDZCxxQkFBcUI7b0JBQ3JCLDJCQUEyQjtpQkFDNUI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxrQkFBa0I7b0JBQ2xCLGNBQWM7b0JBQ2QscUJBQXFCO29CQUNyQixzQkFBc0I7b0JBQ3RCLHFCQUFxQjtvQkFDckIsb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBQ3BCLHFCQUFxQjtvQkFDckIsZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLGNBQWM7b0JBQ2QsZ0JBQWdCO29CQUNoQiwwQkFBMEI7b0JBQzFCLDBCQUEwQjtvQkFDMUIsd0JBQXdCO29CQUN4Qix5QkFBeUI7b0JBQ3pCLDJCQUEyQjtvQkFDM0IscUJBQXFCO29CQUNyQixjQUFjO29CQUNkLHFCQUFxQjtvQkFDckIsMkJBQTJCO2lCQUM1QjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdHRyaWJ1dGlvbkNvbnRyb2xEaXJlY3RpdmUgfSBmcm9tICcuL2NvbnRyb2wvYXR0cmlidXRpb24tY29udHJvbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbC9jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGdWxsc2NyZWVuQ29udHJvbERpcmVjdGl2ZSB9IGZyb20gJy4vY29udHJvbC9mdWxsc2NyZWVuLWNvbnRyb2wuZGlyZWN0aXZlJztcbmltcG9ydCB7IEdlb2NvZGVyQ29udHJvbERpcmVjdGl2ZSwgTUFQQk9YX0dFT0NPREVSX0FQSV9LRVkgfSBmcm9tICcuL2NvbnRyb2wvZ2VvY29kZXItY29udHJvbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgR2VvbG9jYXRlQ29udHJvbERpcmVjdGl2ZSB9IGZyb20gJy4vY29udHJvbC9nZW9sb2NhdGUtY29udHJvbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkNvbnRyb2xEaXJlY3RpdmUgfSBmcm9tICcuL2NvbnRyb2wvbmF2aWdhdGlvbi1jb250cm9sLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTY2FsZUNvbnRyb2xEaXJlY3RpdmUgfSBmcm9tICcuL2NvbnRyb2wvc2NhbGUtY29udHJvbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRHJhZ2dhYmxlRGlyZWN0aXZlIH0gZnJvbSAnLi9kcmFnZ2FibGUvZHJhZ2dhYmxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4vaW1hZ2UvaW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllci9sYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAvbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNQVBCT1hfQVBJX0tFWSB9IGZyb20gJy4vbWFwL21hcC5zZXJ2aWNlJztcbmltcG9ydCB7IE1hcmtlckNvbXBvbmVudCB9IGZyb20gJy4vbWFya2VyL21hcmtlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2x1c3RlclBvaW50RGlyZWN0aXZlLCBQb2ludERpcmVjdGl2ZSwgTWFya2Vyc0ZvckNsdXN0ZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9tYXJrZXJzLWZvci1jbHVzdGVycy9tYXJrZXJzLWZvci1jbHVzdGVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUG9wdXBDb21wb25lbnQgfSBmcm9tICcuL3BvcHVwL3BvcHVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYW52YXNTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS9jYW52YXMtc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGZWF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UvZ2VvanNvbi9mZWF0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW9KU09OU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UvZ2VvanNvbi9nZW9qc29uLXNvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW1hZ2VTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS9pbWFnZS1zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IFJhc3RlclNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlL3Jhc3Rlci1zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IFZlY3RvclNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlL3ZlY3Rvci1zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IFZpZGVvU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UvdmlkZW8tc291cmNlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTWFwQ29tcG9uZW50LFxuICAgIExheWVyQ29tcG9uZW50LFxuICAgIERyYWdnYWJsZURpcmVjdGl2ZSxcbiAgICBJbWFnZUNvbXBvbmVudCxcbiAgICBWZWN0b3JTb3VyY2VDb21wb25lbnQsXG4gICAgR2VvSlNPTlNvdXJjZUNvbXBvbmVudCxcbiAgICBSYXN0ZXJTb3VyY2VDb21wb25lbnQsXG4gICAgSW1hZ2VTb3VyY2VDb21wb25lbnQsXG4gICAgVmlkZW9Tb3VyY2VDb21wb25lbnQsXG4gICAgQ2FudmFzU291cmNlQ29tcG9uZW50LFxuICAgIEZlYXR1cmVDb21wb25lbnQsXG4gICAgTWFya2VyQ29tcG9uZW50LFxuICAgIFBvcHVwQ29tcG9uZW50LFxuICAgIENvbnRyb2xDb21wb25lbnQsXG4gICAgRnVsbHNjcmVlbkNvbnRyb2xEaXJlY3RpdmUsXG4gICAgTmF2aWdhdGlvbkNvbnRyb2xEaXJlY3RpdmUsXG4gICAgR2VvY29kZXJDb250cm9sRGlyZWN0aXZlLFxuICAgIEdlb2xvY2F0ZUNvbnRyb2xEaXJlY3RpdmUsXG4gICAgQXR0cmlidXRpb25Db250cm9sRGlyZWN0aXZlLFxuICAgIFNjYWxlQ29udHJvbERpcmVjdGl2ZSxcbiAgICBQb2ludERpcmVjdGl2ZSxcbiAgICBDbHVzdGVyUG9pbnREaXJlY3RpdmUsXG4gICAgTWFya2Vyc0ZvckNsdXN0ZXJzQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBNYXBDb21wb25lbnQsXG4gICAgTGF5ZXJDb21wb25lbnQsXG4gICAgRHJhZ2dhYmxlRGlyZWN0aXZlLFxuICAgIEltYWdlQ29tcG9uZW50LFxuICAgIFZlY3RvclNvdXJjZUNvbXBvbmVudCxcbiAgICBHZW9KU09OU291cmNlQ29tcG9uZW50LFxuICAgIFJhc3RlclNvdXJjZUNvbXBvbmVudCxcbiAgICBJbWFnZVNvdXJjZUNvbXBvbmVudCxcbiAgICBWaWRlb1NvdXJjZUNvbXBvbmVudCxcbiAgICBDYW52YXNTb3VyY2VDb21wb25lbnQsXG4gICAgRmVhdHVyZUNvbXBvbmVudCxcbiAgICBNYXJrZXJDb21wb25lbnQsXG4gICAgUG9wdXBDb21wb25lbnQsXG4gICAgQ29udHJvbENvbXBvbmVudCxcbiAgICBGdWxsc2NyZWVuQ29udHJvbERpcmVjdGl2ZSxcbiAgICBOYXZpZ2F0aW9uQ29udHJvbERpcmVjdGl2ZSxcbiAgICBHZW9jb2RlckNvbnRyb2xEaXJlY3RpdmUsXG4gICAgR2VvbG9jYXRlQ29udHJvbERpcmVjdGl2ZSxcbiAgICBBdHRyaWJ1dGlvbkNvbnRyb2xEaXJlY3RpdmUsXG4gICAgU2NhbGVDb250cm9sRGlyZWN0aXZlLFxuICAgIFBvaW50RGlyZWN0aXZlLFxuICAgIENsdXN0ZXJQb2ludERpcmVjdGl2ZSxcbiAgICBNYXJrZXJzRm9yQ2x1c3RlcnNDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYXBib3hHTE1vZHVsZSB7XG4gIHN0YXRpYyB3aXRoQ29uZmlnKGNvbmZpZzogeyBhY2Nlc3NUb2tlbjogc3RyaW5nLCBnZW9jb2RlckFjY2Vzc1Rva2VuPzogc3RyaW5nIH0pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neE1hcGJveEdMTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBNQVBCT1hfQVBJX0tFWSxcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnLmFjY2Vzc1Rva2VuXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBNQVBCT1hfR0VPQ09ERVJfQVBJX0tFWSxcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnLmdlb2NvZGVyQWNjZXNzVG9rZW4gfHwgY29uZmlnLmFjY2Vzc1Rva2VuXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19