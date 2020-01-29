/**
 * @fileoverview added by tsickle
 * Generated from: lib/markers-for-clusters/markers-for-clusters.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, Directive, Input, NgZone, TemplateRef } from '@angular/core';
import { fromEvent, merge, Subscription } from 'rxjs';
import { filter, startWith, switchMap, take } from 'rxjs/operators';
import { MapService } from '../map/map.service';
var PointDirective = /** @class */ (function () {
    function PointDirective() {
    }
    PointDirective.decorators = [
        { type: Directive, args: [{ selector: 'ng-template[mglPoint]' },] }
    ];
    return PointDirective;
}());
export { PointDirective };
var ClusterPointDirective = /** @class */ (function () {
    function ClusterPointDirective() {
    }
    ClusterPointDirective.decorators = [
        { type: Directive, args: [{ selector: 'ng-template[mglClusterPoint]' },] }
    ];
    return ClusterPointDirective;
}());
export { ClusterPointDirective };
/** @type {?} */
var uniqId = 0;
var MarkersForClustersComponent = /** @class */ (function () {
    function MarkersForClustersComponent(MapService, ChangeDetectorRef, zone) {
        this.MapService = MapService;
        this.ChangeDetectorRef = ChangeDetectorRef;
        this.zone = zone;
        // Incorrect typings
        this.layerId = "mgl-markers-for-clusters-" + uniqId++;
        this.sub = new Subscription();
    }
    /**
     * @return {?}
     */
    MarkersForClustersComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var sub = this.MapService.mapCreated$.pipe(switchMap((/**
         * @return {?}
         */
        function () { return fromEvent((/** @type {?} */ (_this.MapService.mapInstance)), 'data').pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.sourceId === _this.source && e.isSourceLoaded && e.sourceDataType !== 'metadata'; })), take(1)); })), switchMap((/**
         * @return {?}
         */
        function () { return merge(fromEvent((/** @type {?} */ (_this.MapService.mapInstance)), 'move'), fromEvent((/** @type {?} */ (_this.MapService.mapInstance)), 'moveend')).pipe(startWith(undefined)); }))).subscribe((/**
         * @return {?}
         */
        function () {
            _this.zone.run((/**
             * @return {?}
             */
            function () {
                _this.updateCluster();
            }));
        }));
        this.sub.add(sub);
    };
    /**
     * @return {?}
     */
    MarkersForClustersComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.sub.unsubscribe();
    };
    /**
     * @param {?} _index
     * @param {?} clusterPoint
     * @return {?}
     */
    MarkersForClustersComponent.prototype.trackByClusterPoint = /**
     * @param {?} _index
     * @param {?} clusterPoint
     * @return {?}
     */
    function (_index, clusterPoint) {
        return clusterPoint.id;
    };
    /**
     * @private
     * @return {?}
     */
    MarkersForClustersComponent.prototype.updateCluster = /**
     * @private
     * @return {?}
     */
    function () {
        // Invalid queryRenderedFeatures typing
        /** @type {?} */
        var params = { layers: [this.layerId] };
        if (!this.pointTpl) {
            params.filter = ['==', 'cluster', true];
        }
        this.clusterPoints = this.MapService.mapInstance.queryRenderedFeatures(params);
        this.ChangeDetectorRef.markForCheck();
    };
    MarkersForClustersComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mgl-markers-for-clusters',
                    template: "\n    <mgl-layer\n      [id]=\"layerId\"\n      [source]=\"source\"\n      type=\"circle\"\n      [paint]=\"{'circle-radius': 0}\"\n    ></mgl-layer>\n    <ng-container *ngFor=\"let feature of clusterPoints; trackBy: trackByClusterPoint\">\n      <ng-container *ngIf=\"feature.properties.cluster\">\n        <mgl-marker\n          [feature]=\"feature\"\n        >\n          <ng-container *ngTemplateOutlet=\"clusterPointTpl; context: { $implicit: feature }\"></ng-container>\n        </mgl-marker>\n      </ng-container>\n      <ng-container *ngIf=\"!feature.properties.cluster\">\n        <mgl-marker\n          [feature]=\"feature\"\n        >\n          <ng-container *ngTemplateOutlet=\"pointTpl; context: { $implicit: feature }\"></ng-container>\n        </mgl-marker>\n      </ng-container>\n    </ng-container>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    MarkersForClustersComponent.ctorParameters = function () { return [
        { type: MapService },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    MarkersForClustersComponent.propDecorators = {
        source: [{ type: Input }],
        pointTpl: [{ type: ContentChild, args: [PointDirective, { read: TemplateRef, static: false },] }],
        clusterPointTpl: [{ type: ContentChild, args: [ClusterPointDirective, { read: TemplateRef, static: false },] }]
    };
    return MarkersForClustersComponent;
}());
export { MarkersForClustersComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Vycy1mb3ItY2x1c3RlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hcGJveC1nbC8iLCJzb3VyY2VzIjpbImxpYi9tYXJrZXJzLWZvci1jbHVzdGVycy9tYXJrZXJzLWZvci1jbHVzdGVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUVOLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRDtJQUFBO0lBQzhCLENBQUM7O2dCQUQ5QixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUU7O0lBQ2xCLHFCQUFDO0NBQUEsQUFEL0IsSUFDK0I7U0FBbEIsY0FBYztBQUUzQjtJQUFBO0lBQ3FDLENBQUM7O2dCQURyQyxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsOEJBQThCLEVBQUU7O0lBQ2xCLDRCQUFDO0NBQUEsQUFEdEMsSUFDc0M7U0FBekIscUJBQXFCOztJQUU5QixNQUFNLEdBQUcsQ0FBQztBQUVkO0lBeUNFLHFDQUNVLFVBQXNCLEVBQ3RCLGlCQUFvQyxFQUNwQyxJQUFZO1FBRlosZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLFNBQUksR0FBSixJQUFJLENBQVE7O1FBUHRCLFlBQU8sR0FBRyw4QkFBNEIsTUFBTSxFQUFJLENBQUM7UUFFekMs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Qjs7Ozs7SUFDOUIsd0RBQTRDOzs7OztJQUM1QywyQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBib3hHZW9KU09ORmVhdHVyZSwgTWFwU291cmNlRGF0YUV2ZW50IH0gZnJvbSAnbWFwYm94LWdsJztcbmltcG9ydCB7IGZyb21FdmVudCwgbWVyZ2UsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBzdGFydFdpdGgsIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi9tYXAvbWFwLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVttZ2xQb2ludF0nIH0pXG5leHBvcnQgY2xhc3MgUG9pbnREaXJlY3RpdmUgeyB9XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW21nbENsdXN0ZXJQb2ludF0nIH0pXG5leHBvcnQgY2xhc3MgQ2x1c3RlclBvaW50RGlyZWN0aXZlIHsgfVxuXG5sZXQgdW5pcUlkID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWdsLW1hcmtlcnMtZm9yLWNsdXN0ZXJzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bWdsLWxheWVyXG4gICAgICBbaWRdPVwibGF5ZXJJZFwiXG4gICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICB0eXBlPVwiY2lyY2xlXCJcbiAgICAgIFtwYWludF09XCJ7J2NpcmNsZS1yYWRpdXMnOiAwfVwiXG4gICAgPjwvbWdsLWxheWVyPlxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZlYXR1cmUgb2YgY2x1c3RlclBvaW50czsgdHJhY2tCeTogdHJhY2tCeUNsdXN0ZXJQb2ludFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZlYXR1cmUucHJvcGVydGllcy5jbHVzdGVyXCI+XG4gICAgICAgIDxtZ2wtbWFya2VyXG4gICAgICAgICAgW2ZlYXR1cmVdPVwiZmVhdHVyZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY2x1c3RlclBvaW50VHBsOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogZmVhdHVyZSB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbWdsLW1hcmtlcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFmZWF0dXJlLnByb3BlcnRpZXMuY2x1c3RlclwiPlxuICAgICAgICA8bWdsLW1hcmtlclxuICAgICAgICAgIFtmZWF0dXJlXT1cImZlYXR1cmVcIlxuICAgICAgICA+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInBvaW50VHBsOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogZmVhdHVyZSB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbWdsLW1hcmtlcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgTWFya2Vyc0ZvckNsdXN0ZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgLyogSW5pdCBpbnB1dCAqL1xuICBASW5wdXQoKSBzb3VyY2U6IHN0cmluZztcblxuICBAQ29udGVudENoaWxkKFBvaW50RGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IGZhbHNlIH0pIHBvaW50VHBsPzogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChDbHVzdGVyUG9pbnREaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogZmFsc2UgfSkgY2x1c3RlclBvaW50VHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGNsdXN0ZXJQb2ludHM6IE1hcGJveEdlb0pTT05GZWF0dXJlW107IC8vIEluY29ycmVjdCB0eXBpbmdzXG4gIGxheWVySWQgPSBgbWdsLW1hcmtlcnMtZm9yLWNsdXN0ZXJzLSR7dW5pcUlkKyt9YDtcblxuICBwcml2YXRlIHN1YiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIE1hcFNlcnZpY2U6IE1hcFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBDaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmVcbiAgKSB7IH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgY29uc3Qgc3ViID0gdGhpcy5NYXBTZXJ2aWNlLm1hcENyZWF0ZWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gZnJvbUV2ZW50PE1hcFNvdXJjZURhdGFFdmVudD4oPGFueT50aGlzLk1hcFNlcnZpY2UubWFwSW5zdGFuY2UsICdkYXRhJykucGlwZShcbiAgICAgICAgZmlsdGVyKChlKSA9PiBlLnNvdXJjZUlkID09PSB0aGlzLnNvdXJjZSAmJiBlLmlzU291cmNlTG9hZGVkICYmIGUuc291cmNlRGF0YVR5cGUgIT09ICdtZXRhZGF0YScpLFxuICAgICAgICB0YWtlKDEpXG4gICAgICApKSxcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiBtZXJnZShcbiAgICAgICAgZnJvbUV2ZW50KDxhbnk+dGhpcy5NYXBTZXJ2aWNlLm1hcEluc3RhbmNlLCAnbW92ZScpLFxuICAgICAgICBmcm9tRXZlbnQoPGFueT50aGlzLk1hcFNlcnZpY2UubWFwSW5zdGFuY2UsICdtb3ZlZW5kJylcbiAgICAgICkucGlwZShcbiAgICAgICAgc3RhcnRXaXRoPGFueT4odW5kZWZpbmVkKVxuICAgICAgKSlcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVDbHVzdGVyKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnN1Yi5hZGQoc3ViKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICB0cmFja0J5Q2x1c3RlclBvaW50KF9pbmRleDogbnVtYmVyLCBjbHVzdGVyUG9pbnQ6IHsgaWQ6IG51bWJlciB9KSB7XG4gICAgcmV0dXJuIGNsdXN0ZXJQb2ludC5pZDtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ2x1c3RlcigpIHtcbiAgICAvLyBJbnZhbGlkIHF1ZXJ5UmVuZGVyZWRGZWF0dXJlcyB0eXBpbmdcbiAgICBjb25zdCBwYXJhbXM6IGFueSA9IHsgbGF5ZXJzOiBbdGhpcy5sYXllcklkXSB9O1xuICAgIGlmICghdGhpcy5wb2ludFRwbCkge1xuICAgICAgcGFyYW1zLmZpbHRlciA9IFsnPT0nLCAnY2x1c3RlcicsIHRydWVdO1xuICAgIH1cbiAgICB0aGlzLmNsdXN0ZXJQb2ludHMgPSB0aGlzLk1hcFNlcnZpY2UubWFwSW5zdGFuY2UucXVlcnlSZW5kZXJlZEZlYXR1cmVzKHBhcmFtcyk7XG4gICAgdGhpcy5DaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19