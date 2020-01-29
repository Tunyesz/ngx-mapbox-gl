/**
 * @fileoverview added by tsickle
 * Generated from: lib/markers-for-clusters/markers-for-clusters.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, Directive, Input, NgZone, TemplateRef } from '@angular/core';
import { fromEvent, merge, Subscription } from 'rxjs';
import { filter, startWith, switchMap, take } from 'rxjs/operators';
import { MapService } from '../map/map.service';
export class PointDirective {
}
PointDirective.decorators = [
    { type: Directive, args: [{ selector: 'ng-template[mglPoint]' },] }
];
export class ClusterPointDirective {
}
ClusterPointDirective.decorators = [
    { type: Directive, args: [{ selector: 'ng-template[mglClusterPoint]' },] }
];
/** @type {?} */
let uniqId = 0;
export class MarkersForClustersComponent {
    /**
     * @param {?} MapService
     * @param {?} ChangeDetectorRef
     * @param {?} zone
     */
    constructor(MapService, ChangeDetectorRef, zone) {
        this.MapService = MapService;
        this.ChangeDetectorRef = ChangeDetectorRef;
        this.zone = zone;
        // Incorrect typings
        this.layerId = `mgl-markers-for-clusters-${uniqId++}`;
        this.sub = new Subscription();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        /** @type {?} */
        const sub = this.MapService.mapCreated$.pipe(switchMap((/**
         * @return {?}
         */
        () => fromEvent((/** @type {?} */ (this.MapService.mapInstance)), 'data').pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        (e) => e.sourceId === this.source && e.isSourceLoaded && e.sourceDataType !== 'metadata')), take(1)))), switchMap((/**
         * @return {?}
         */
        () => merge(fromEvent((/** @type {?} */ (this.MapService.mapInstance)), 'move'), fromEvent((/** @type {?} */ (this.MapService.mapInstance)), 'moveend')).pipe(startWith(undefined))))).subscribe((/**
         * @return {?}
         */
        () => {
            this.zone.run((/**
             * @return {?}
             */
            () => {
                this.updateCluster();
            }));
        }));
        this.sub.add(sub);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    /**
     * @param {?} _index
     * @param {?} clusterPoint
     * @return {?}
     */
    trackByClusterPoint(_index, clusterPoint) {
        return clusterPoint.id;
    }
    /**
     * @private
     * @return {?}
     */
    updateCluster() {
        // Invalid queryRenderedFeatures typing
        /** @type {?} */
        const params = { layers: [this.layerId] };
        if (!this.pointTpl) {
            params.filter = ['==', 'cluster', true];
        }
        this.clusterPoints = this.MapService.mapInstance.queryRenderedFeatures(params);
        this.ChangeDetectorRef.markForCheck();
    }
}
MarkersForClustersComponent.decorators = [
    { type: Component, args: [{
                selector: 'mgl-markers-for-clusters',
                template: `
    <mgl-layer
      [id]="layerId"
      [source]="source"
      type="circle"
      [paint]="{'circle-radius': 0}"
    ></mgl-layer>
    <ng-container *ngFor="let feature of clusterPoints; trackBy: trackByClusterPoint">
      <ng-container *ngIf="feature.properties.cluster">
        <mgl-marker
          [feature]="feature"
        >
          <ng-container *ngTemplateOutlet="clusterPointTpl; context: { $implicit: feature }"></ng-container>
        </mgl-marker>
      </ng-container>
      <ng-container *ngIf="!feature.properties.cluster">
        <mgl-marker
          [feature]="feature"
        >
          <ng-container *ngTemplateOutlet="pointTpl; context: { $implicit: feature }"></ng-container>
        </mgl-marker>
      </ng-container>
    </ng-container>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
MarkersForClustersComponent.ctorParameters = () => [
    { type: MapService },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
MarkersForClustersComponent.propDecorators = {
    source: [{ type: Input }],
    pointTpl: [{ type: ContentChild, args: [PointDirective, { read: TemplateRef, static: false },] }],
    clusterPointTpl: [{ type: ContentChild, args: [ClusterPointDirective, { read: TemplateRef, static: false },] }]
};
if (false) {
    /** @type {?} */
    MarkersForClustersComponent.prototype.source;
    /** @type {?} */
    MarkersForClustersComponent.prototype.pointTpl;
    /** @type {?} */
    MarkersForClustersComponent.prototype.clusterPointTpl;
    /** @type {?} */
    MarkersForClustersComponent.prototype.clusterPoints;
    /** @type {?} */
    MarkersForClustersComponent.prototype.layerId;
    /**
     * @type {?}
     * @private
     */
    MarkersForClustersComponent.prototype.sub;
    /**
     * @type {?}
     * @private
     */
    MarkersForClustersComponent.prototype.MapService;
    /**
     * @type {?}
     * @private
     */
    MarkersForClustersComponent.prototype.ChangeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    MarkersForClustersComponent.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Vycy1mb3ItY2x1c3RlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hcGJveC1nbC8iLCJzb3VyY2VzIjpbImxpYi9tYXJrZXJzLWZvci1jbHVzdGVycy9tYXJrZXJzLWZvci1jbHVzdGVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUVOLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdoRCxNQUFNLE9BQU8sY0FBYzs7O1lBRDFCLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBRTs7QUFJaEQsTUFBTSxPQUFPLHFCQUFxQjs7O1lBRGpDLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSw4QkFBOEIsRUFBRTs7O0lBR25ELE1BQU0sR0FBRyxDQUFDO0FBK0JkLE1BQU0sT0FBTywyQkFBMkI7Ozs7OztJQVl0QyxZQUNVLFVBQXNCLEVBQ3RCLGlCQUFvQyxFQUNwQyxJQUFZO1FBRlosZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLFNBQUksR0FBSixJQUFJLENBQVE7O1FBUHRCLFlBQU8sR0FBRyw0QkFBNEIsTUFBTSxFQUFFLEVBQUUsQ0FBQztRQUV6QyxRQUFHLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU03QixDQUFDOzs7O0lBRUwsa0JBQWtCOztjQUNWLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQzFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBcUIsbUJBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUEsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQzFGLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDLGNBQWMsS0FBSyxVQUFVLEVBQUMsRUFDaEcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNSLEVBQUMsRUFDRixTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQ25CLFNBQVMsQ0FBQyxtQkFBSyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBQSxFQUFFLE1BQU0sQ0FBQyxFQUNuRCxTQUFTLENBQUMsbUJBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUEsRUFBRSxTQUFTLENBQUMsQ0FDdkQsQ0FBQyxJQUFJLENBQ0osU0FBUyxDQUFNLFNBQVMsQ0FBQyxDQUMxQixFQUFDLENBQ0gsQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDLEdBQUcsRUFBRTtnQkFDakIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDO1FBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVELG1CQUFtQixDQUFDLE1BQWMsRUFBRSxZQUE0QjtRQUM5RCxPQUFPLFlBQVksQ0FBQyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFTyxhQUFhOzs7Y0FFYixNQUFNLEdBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7WUFuRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1QlQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7Ozs7WUF0Q1EsVUFBVTtZQVpqQixpQkFBaUI7WUFLakIsTUFBTTs7O3FCQWdETCxLQUFLO3VCQUVMLFlBQVksU0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7OEJBQ2pFLFlBQVksU0FBQyxxQkFBcUIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7OztJQUh6RSw2Q0FBd0I7O0lBRXhCLCtDQUFnRzs7SUFDaEcsc0RBQTZHOztJQUU3RyxvREFBc0M7O0lBQ3RDLDhDQUFpRDs7Ozs7SUFFakQsMENBQWlDOzs7OztJQUcvQixpREFBOEI7Ozs7O0lBQzlCLHdEQUE0Qzs7Ozs7SUFDNUMsMkNBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFwYm94R2VvSlNPTkZlYXR1cmUsIE1hcFNvdXJjZURhdGFFdmVudCB9IGZyb20gJ21hcGJveC1nbCc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNYXBTZXJ2aWNlIH0gZnJvbSAnLi4vbWFwL21hcC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbbWdsUG9pbnRdJyB9KVxuZXhwb3J0IGNsYXNzIFBvaW50RGlyZWN0aXZlIHsgfVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVttZ2xDbHVzdGVyUG9pbnRdJyB9KVxuZXhwb3J0IGNsYXNzIENsdXN0ZXJQb2ludERpcmVjdGl2ZSB7IH1cblxubGV0IHVuaXFJZCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21nbC1tYXJrZXJzLWZvci1jbHVzdGVycycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG1nbC1sYXllclxuICAgICAgW2lkXT1cImxheWVySWRcIlxuICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIlxuICAgICAgdHlwZT1cImNpcmNsZVwiXG4gICAgICBbcGFpbnRdPVwieydjaXJjbGUtcmFkaXVzJzogMH1cIlxuICAgID48L21nbC1sYXllcj5cbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmZWF0dXJlIG9mIGNsdXN0ZXJQb2ludHM7IHRyYWNrQnk6IHRyYWNrQnlDbHVzdGVyUG9pbnRcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmZWF0dXJlLnByb3BlcnRpZXMuY2x1c3RlclwiPlxuICAgICAgICA8bWdsLW1hcmtlclxuICAgICAgICAgIFtmZWF0dXJlXT1cImZlYXR1cmVcIlxuICAgICAgICA+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNsdXN0ZXJQb2ludFRwbDsgY29udGV4dDogeyAkaW1wbGljaXQ6IGZlYXR1cmUgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L21nbC1tYXJrZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZmVhdHVyZS5wcm9wZXJ0aWVzLmNsdXN0ZXJcIj5cbiAgICAgICAgPG1nbC1tYXJrZXJcbiAgICAgICAgICBbZmVhdHVyZV09XCJmZWF0dXJlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJwb2ludFRwbDsgY29udGV4dDogeyAkaW1wbGljaXQ6IGZlYXR1cmUgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L21nbC1tYXJrZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIE1hcmtlcnNGb3JDbHVzdGVyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIC8qIEluaXQgaW5wdXQgKi9cbiAgQElucHV0KCkgc291cmNlOiBzdHJpbmc7XG5cbiAgQENvbnRlbnRDaGlsZChQb2ludERpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiBmYWxzZSB9KSBwb2ludFRwbD86IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoQ2x1c3RlclBvaW50RGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IGZhbHNlIH0pIGNsdXN0ZXJQb2ludFRwbDogVGVtcGxhdGVSZWY8YW55PjtcblxuICBjbHVzdGVyUG9pbnRzOiBNYXBib3hHZW9KU09ORmVhdHVyZVtdOyAvLyBJbmNvcnJlY3QgdHlwaW5nc1xuICBsYXllcklkID0gYG1nbC1tYXJrZXJzLWZvci1jbHVzdGVycy0ke3VuaXFJZCsrfWA7XG5cbiAgcHJpdmF0ZSBzdWIgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBNYXBTZXJ2aWNlOiBNYXBTZXJ2aWNlLFxuICAgIHByaXZhdGUgQ2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lXG4gICkgeyB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGNvbnN0IHN1YiA9IHRoaXMuTWFwU2VydmljZS5tYXBDcmVhdGVkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKCgpID0+IGZyb21FdmVudDxNYXBTb3VyY2VEYXRhRXZlbnQ+KDxhbnk+dGhpcy5NYXBTZXJ2aWNlLm1hcEluc3RhbmNlLCAnZGF0YScpLnBpcGUoXG4gICAgICAgIGZpbHRlcigoZSkgPT4gZS5zb3VyY2VJZCA9PT0gdGhpcy5zb3VyY2UgJiYgZS5pc1NvdXJjZUxvYWRlZCAmJiBlLnNvdXJjZURhdGFUeXBlICE9PSAnbWV0YWRhdGEnKSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKSksXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gbWVyZ2UoXG4gICAgICAgIGZyb21FdmVudCg8YW55PnRoaXMuTWFwU2VydmljZS5tYXBJbnN0YW5jZSwgJ21vdmUnKSxcbiAgICAgICAgZnJvbUV2ZW50KDxhbnk+dGhpcy5NYXBTZXJ2aWNlLm1hcEluc3RhbmNlLCAnbW92ZWVuZCcpXG4gICAgICApLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aDxhbnk+KHVuZGVmaW5lZClcbiAgICAgICkpXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlQ2x1c3RlcigpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5zdWIuYWRkKHN1Yik7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgdHJhY2tCeUNsdXN0ZXJQb2ludChfaW5kZXg6IG51bWJlciwgY2x1c3RlclBvaW50OiB7IGlkOiBudW1iZXIgfSkge1xuICAgIHJldHVybiBjbHVzdGVyUG9pbnQuaWQ7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNsdXN0ZXIoKSB7XG4gICAgLy8gSW52YWxpZCBxdWVyeVJlbmRlcmVkRmVhdHVyZXMgdHlwaW5nXG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7IGxheWVyczogW3RoaXMubGF5ZXJJZF0gfTtcbiAgICBpZiAoIXRoaXMucG9pbnRUcGwpIHtcbiAgICAgIHBhcmFtcy5maWx0ZXIgPSBbJz09JywgJ2NsdXN0ZXInLCB0cnVlXTtcbiAgICB9XG4gICAgdGhpcy5jbHVzdGVyUG9pbnRzID0gdGhpcy5NYXBTZXJ2aWNlLm1hcEluc3RhbmNlLnF1ZXJ5UmVuZGVyZWRGZWF0dXJlcyhwYXJhbXMpO1xuICAgIHRoaXMuQ2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiJdfQ==