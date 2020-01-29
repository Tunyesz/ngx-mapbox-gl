/**
 * @fileoverview added by tsickle
 * Generated from: lib/draggable/draggable.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, Host, Input, NgZone, Optional, Output } from '@angular/core';
import { fromEvent, ReplaySubject } from 'rxjs';
import { filter, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { LayerComponent } from '../layer/layer.component';
import { MapService } from '../map/map.service';
import { MarkerComponent } from '../marker/marker.component';
import { FeatureComponent } from '../source/geojson/feature.component';
export class DraggableDirective {
    /**
     * @param {?} MapService
     * @param {?} NgZone
     * @param {?=} FeatureComponent
     * @param {?=} MarkerComponent
     */
    constructor(MapService, NgZone, FeatureComponent, MarkerComponent) {
        this.MapService = MapService;
        this.NgZone = NgZone;
        this.FeatureComponent = FeatureComponent;
        this.MarkerComponent = MarkerComponent;
        this.dragStart = new EventEmitter();
        this.dragEnd = new EventEmitter();
        this.drag = new EventEmitter();
        this.destroyed$ = new ReplaySubject(1);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let enter$;
        /** @type {?} */
        let leave$;
        /** @type {?} */
        let updateCoords;
        if (this.MarkerComponent) {
            console.warn('[ngx-mapbox-gl] mglDraggable on Marker is deprecated, use draggable input instead');
            /** @type {?} */
            let markerElement = ((/** @type {?} */ (this.MarkerComponent.content.nativeElement)));
            if (markerElement.children.length === 1) {
                markerElement = markerElement.children[0];
            }
            enter$ = fromEvent(markerElement, 'mouseenter');
            leave$ = fromEvent(markerElement, 'mouseleave');
            updateCoords = this.MarkerComponent.updateCoordinates.bind(this.MarkerComponent);
        }
        else if (this.FeatureComponent && this.layer) {
            enter$ = this.layer.mouseEnter;
            leave$ = this.layer.mouseLeave;
            updateCoords = this.FeatureComponent.updateCoordinates.bind(this.FeatureComponent);
            if (this.FeatureComponent.geometry.type !== 'Point') {
                throw new Error('mglDraggable only support point feature');
            }
        }
        else {
            throw new Error('mglDraggable can only be used on Feature (with a layer as input) or Marker');
        }
        this.handleDraggable(enter$, leave$, updateCoords);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed$.next(undefined);
        this.destroyed$.complete();
    }
    /**
     * @private
     * @param {?} enter$
     * @param {?} leave$
     * @param {?} updateCoords
     * @return {?}
     */
    handleDraggable(enter$, leave$, updateCoords) {
        /** @type {?} */
        let moving = false;
        /** @type {?} */
        let inside = false;
        this.MapService.mapCreated$.subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const mouseUp$ = fromEvent((/** @type {?} */ (this.MapService.mapInstance)), 'mouseup');
            /** @type {?} */
            const dragStart$ = enter$.pipe(takeUntil(this.destroyed$), filter((/**
             * @return {?}
             */
            () => !moving)), filter((/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.filterFeature(evt))), tap((/**
             * @return {?}
             */
            () => {
                inside = true;
                this.MapService.changeCanvasCursor('move');
                this.MapService.updateDragPan(false);
            })), switchMap((/**
             * @return {?}
             */
            () => fromEvent((/** @type {?} */ (this.MapService.mapInstance)), 'mousedown')
                .pipe(takeUntil(leave$)))));
            /** @type {?} */
            const dragging$ = dragStart$.pipe(switchMap((/**
             * @return {?}
             */
            () => fromEvent((/** @type {?} */ (this.MapService.mapInstance)), 'mousemove')
                .pipe(takeUntil(mouseUp$)))));
            /** @type {?} */
            const dragEnd$ = dragStart$.pipe(switchMap((/**
             * @return {?}
             */
            () => mouseUp$.pipe(take(1)))));
            dragStart$.subscribe((/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => {
                moving = true;
                if (this.dragStart.observers.length) {
                    this.NgZone.run((/**
                     * @return {?}
                     */
                    () => this.dragStart.emit(evt)));
                }
            }));
            dragging$.subscribe((/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => {
                updateCoords([evt.lngLat.lng, evt.lngLat.lat]);
                if (this.drag.observers.length) {
                    this.NgZone.run((/**
                     * @return {?}
                     */
                    () => this.drag.emit(evt)));
                }
            }));
            dragEnd$.subscribe((/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => {
                moving = false;
                if (this.dragEnd.observers.length) {
                    this.NgZone.run((/**
                     * @return {?}
                     */
                    () => this.dragEnd.emit(evt)));
                }
                if (!inside) { // It's possible to dragEnd outside the target (small input lag)
                    this.MapService.changeCanvasCursor('');
                    this.MapService.updateDragPan(true);
                }
            }));
            leave$.pipe(takeUntil(this.destroyed$), tap((/**
             * @return {?}
             */
            () => inside = false)), filter((/**
             * @return {?}
             */
            () => !moving))).subscribe((/**
             * @return {?}
             */
            () => {
                this.MapService.changeCanvasCursor('');
                this.MapService.updateDragPan(true);
            }));
        }));
    }
    /**
     * @private
     * @param {?} evt
     * @return {?}
     */
    filterFeature(evt) {
        if (this.FeatureComponent && this.layer) {
            /** @type {?} */
            const feature = this.MapService.queryRenderedFeatures(evt.point, {
                layers: [this.layer.id],
                filter: [
                    'all',
                    ['==', '$type', 'Point'],
                    ['==', '$id', this.FeatureComponent.id]
                ]
            })[0];
            if (!feature) {
                return false;
            }
        }
        return true;
    }
}
DraggableDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mglDraggable]'
            },] }
];
/** @nocollapse */
DraggableDirective.ctorParameters = () => [
    { type: MapService },
    { type: NgZone },
    { type: FeatureComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: MarkerComponent, decorators: [{ type: Optional }, { type: Host }] }
];
DraggableDirective.propDecorators = {
    layer: [{ type: Input, args: ['mglDraggable',] }],
    dragStart: [{ type: Output }],
    dragEnd: [{ type: Output }],
    drag: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DraggableDirective.prototype.layer;
    /** @type {?} */
    DraggableDirective.prototype.dragStart;
    /** @type {?} */
    DraggableDirective.prototype.dragEnd;
    /** @type {?} */
    DraggableDirective.prototype.drag;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.MapService;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.NgZone;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.FeatureComponent;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.MarkerComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXBib3gtZ2wvIiwic291cmNlcyI6WyJsaWIvZHJhZ2dhYmxlL2RyYWdnYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLE1BQU0sRUFHTixRQUFRLEVBQ1IsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFLdkUsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7OztJQVU3QixZQUNVLFVBQXNCLEVBQ3RCLE1BQWMsRUFDTSxnQkFBbUMsRUFDbkMsZUFBaUM7UUFIckQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ00scUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtRQUNuQyxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFWckQsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQzlDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUM1QyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFFM0MsZUFBVSxHQUF3QixJQUFJLGFBQWEsQ0FB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QUMsVUFBVSxDQUFDLHFCQUFxQixDQUN6RSxHQUFHLENBQUMsS0FBSyxFQUNUO2dCQUNFLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUN2QixNQUFNLEVBQUU7b0JBQ04sS0FBSztvQkFDTCxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDO29CQUN4QixDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQztpQkFDeEM7YUFDRixDQUNGLENBQUMsQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDWixPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OztZQWxJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjthQUMzQjs7OztZQU5RLFVBQVU7WUFWakIsTUFBTTtZQVlDLGdCQUFnQix1QkFrQnBCLFFBQVEsWUFBSSxJQUFJO1lBbkJaLGVBQWUsdUJBb0JuQixRQUFRLFlBQUksSUFBSTs7O29CQVpsQixLQUFLLFNBQUMsY0FBYzt3QkFFcEIsTUFBTTtzQkFDTixNQUFNO21CQUNOLE1BQU07Ozs7SUFKUCxtQ0FBOEM7O0lBRTlDLHVDQUF3RDs7SUFDeEQscUNBQXNEOztJQUN0RCxrQ0FBbUQ7Ozs7O0lBRW5ELHdDQUErRDs7Ozs7SUFHN0Qsd0NBQThCOzs7OztJQUM5QixvQ0FBc0I7Ozs7O0lBQ3RCLDhDQUErRDs7Ozs7SUFDL0QsNkNBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFwTW91c2VFdmVudCB9IGZyb20gJ21hcGJveC1nbCc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgc3dpdGNoTWFwLCB0YWtlLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IExheWVyQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXIvbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi9tYXAvbWFwLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFya2VyQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFya2VyL21hcmtlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbXBvbmVudCB9IGZyb20gJy4uL3NvdXJjZS9nZW9qc29uL2ZlYXR1cmUuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21nbERyYWdnYWJsZV0nXG59KVxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ21nbERyYWdnYWJsZScpIGxheWVyPzogTGF5ZXJDb21wb25lbnQ7XG5cbiAgQE91dHB1dCgpIGRyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwTW91c2VFdmVudD4oKTtcbiAgQE91dHB1dCgpIGRyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcE1vdXNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBkcmFnID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBNb3VzZUV2ZW50PigpO1xuXG4gIHByaXZhdGUgZGVzdHJveWVkJDogUmVwbGF5U3ViamVjdDx2b2lkPiA9IG5ldyBSZXBsYXlTdWJqZWN0KDEpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgTWFwU2VydmljZTogTWFwU2VydmljZSxcbiAgICBwcml2YXRlIE5nWm9uZTogTmdab25lLFxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHJpdmF0ZSBGZWF0dXJlQ29tcG9uZW50PzogRmVhdHVyZUNvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIHByaXZhdGUgTWFya2VyQ29tcG9uZW50PzogTWFya2VyQ29tcG9uZW50XG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IGVudGVyJDtcbiAgICBsZXQgbGVhdmUkO1xuICAgIGxldCB1cGRhdGVDb29yZHM7XG4gICAgaWYgKHRoaXMuTWFya2VyQ29tcG9uZW50KSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tuZ3gtbWFwYm94LWdsXSBtZ2xEcmFnZ2FibGUgb24gTWFya2VyIGlzIGRlcHJlY2F0ZWQsIHVzZSBkcmFnZ2FibGUgaW5wdXQgaW5zdGVhZCcpO1xuICAgICAgbGV0IG1hcmtlckVsZW1lbnQgPSAoPEVsZW1lbnQ+dGhpcy5NYXJrZXJDb21wb25lbnQuY29udGVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIGlmIChtYXJrZXJFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBtYXJrZXJFbGVtZW50ID0gbWFya2VyRWxlbWVudC5jaGlsZHJlblswXTtcbiAgICAgIH1cbiAgICAgIGVudGVyJCA9IGZyb21FdmVudChtYXJrZXJFbGVtZW50LCAnbW91c2VlbnRlcicpO1xuICAgICAgbGVhdmUkID0gZnJvbUV2ZW50KG1hcmtlckVsZW1lbnQsICdtb3VzZWxlYXZlJyk7XG4gICAgICB1cGRhdGVDb29yZHMgPSB0aGlzLk1hcmtlckNvbXBvbmVudC51cGRhdGVDb29yZGluYXRlcy5iaW5kKHRoaXMuTWFya2VyQ29tcG9uZW50KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuRmVhdHVyZUNvbXBvbmVudCAmJiB0aGlzLmxheWVyKSB7XG4gICAgICBlbnRlciQgPSB0aGlzLmxheWVyLm1vdXNlRW50ZXI7XG4gICAgICBsZWF2ZSQgPSB0aGlzLmxheWVyLm1vdXNlTGVhdmU7XG4gICAgICB1cGRhdGVDb29yZHMgPSB0aGlzLkZlYXR1cmVDb21wb25lbnQudXBkYXRlQ29vcmRpbmF0ZXMuYmluZCh0aGlzLkZlYXR1cmVDb21wb25lbnQpO1xuICAgICAgaWYgKHRoaXMuRmVhdHVyZUNvbXBvbmVudC5nZW9tZXRyeS50eXBlICE9PSAnUG9pbnQnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbWdsRHJhZ2dhYmxlIG9ubHkgc3VwcG9ydCBwb2ludCBmZWF0dXJlJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWdsRHJhZ2dhYmxlIGNhbiBvbmx5IGJlIHVzZWQgb24gRmVhdHVyZSAod2l0aCBhIGxheWVyIGFzIGlucHV0KSBvciBNYXJrZXInKTtcbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZURyYWdnYWJsZShlbnRlciQsIGxlYXZlJCwgdXBkYXRlQ29vcmRzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KHVuZGVmaW5lZCk7XG4gICAgdGhpcy5kZXN0cm95ZWQkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZURyYWdnYWJsZShlbnRlciQ6IE9ic2VydmFibGU8YW55PiwgbGVhdmUkOiBPYnNlcnZhYmxlPGFueT4sIHVwZGF0ZUNvb3JkczogKGNvb3JkOiBudW1iZXJbXSkgPT4gdm9pZCkge1xuICAgIGxldCBtb3ZpbmcgPSBmYWxzZTtcbiAgICBsZXQgaW5zaWRlID0gZmFsc2U7XG4gICAgdGhpcy5NYXBTZXJ2aWNlLm1hcENyZWF0ZWQkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCBtb3VzZVVwJCA9IGZyb21FdmVudDxNYXBNb3VzZUV2ZW50Pig8YW55PnRoaXMuTWFwU2VydmljZS5tYXBJbnN0YW5jZSwgJ21vdXNldXAnKTtcbiAgICAgIGNvbnN0IGRyYWdTdGFydCQgPSBlbnRlciQucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCksXG4gICAgICAgIGZpbHRlcigoKSA9PiAhbW92aW5nKSxcbiAgICAgICAgZmlsdGVyKChldnQpID0+IHRoaXMuZmlsdGVyRmVhdHVyZShldnQpKSxcbiAgICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgICBpbnNpZGUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuTWFwU2VydmljZS5jaGFuZ2VDYW52YXNDdXJzb3IoJ21vdmUnKTtcbiAgICAgICAgICB0aGlzLk1hcFNlcnZpY2UudXBkYXRlRHJhZ1BhbihmYWxzZSk7XG4gICAgICAgIH0pLFxuICAgICAgICBzd2l0Y2hNYXAoKCkgPT5cbiAgICAgICAgICBmcm9tRXZlbnQ8TWFwTW91c2VFdmVudD4oPGFueT50aGlzLk1hcFNlcnZpY2UubWFwSW5zdGFuY2UsICdtb3VzZWRvd24nKVxuICAgICAgICAgICAgLnBpcGUodGFrZVVudGlsKGxlYXZlJCkpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICBjb25zdCBkcmFnZ2luZyQgPSBkcmFnU3RhcnQkLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiBmcm9tRXZlbnQ8TWFwTW91c2VFdmVudD4oPGFueT50aGlzLk1hcFNlcnZpY2UubWFwSW5zdGFuY2UsICdtb3VzZW1vdmUnKVxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbChtb3VzZVVwJCkpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICBjb25zdCBkcmFnRW5kJCA9IGRyYWdTdGFydCQucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKCgpID0+IG1vdXNlVXAkLnBpcGUodGFrZSgxKSkpXG4gICAgICApO1xuICAgICAgZHJhZ1N0YXJ0JC5zdWJzY3JpYmUoKGV2dCkgPT4ge1xuICAgICAgICBtb3ZpbmcgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5kcmFnU3RhcnQub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuTmdab25lLnJ1bigoKSA9PiB0aGlzLmRyYWdTdGFydC5lbWl0KGV2dCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGRyYWdnaW5nJC5zdWJzY3JpYmUoKGV2dCkgPT4ge1xuICAgICAgICB1cGRhdGVDb29yZHMoW2V2dC5sbmdMYXQubG5nLCBldnQubG5nTGF0LmxhdF0pO1xuICAgICAgICBpZiAodGhpcy5kcmFnLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLk5nWm9uZS5ydW4oKCkgPT4gdGhpcy5kcmFnLmVtaXQoZXZ0KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZHJhZ0VuZCQuc3Vic2NyaWJlKChldnQpID0+IHtcbiAgICAgICAgbW92aW5nID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmRyYWdFbmQub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuTmdab25lLnJ1bigoKSA9PiB0aGlzLmRyYWdFbmQuZW1pdChldnQpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWluc2lkZSkgeyAvLyBJdCdzIHBvc3NpYmxlIHRvIGRyYWdFbmQgb3V0c2lkZSB0aGUgdGFyZ2V0IChzbWFsbCBpbnB1dCBsYWcpXG4gICAgICAgICAgdGhpcy5NYXBTZXJ2aWNlLmNoYW5nZUNhbnZhc0N1cnNvcignJyk7XG4gICAgICAgICAgdGhpcy5NYXBTZXJ2aWNlLnVwZGF0ZURyYWdQYW4odHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgbGVhdmUkLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpLFxuICAgICAgICB0YXAoKCkgPT4gaW5zaWRlID0gZmFsc2UpLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gIW1vdmluZylcbiAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5NYXBTZXJ2aWNlLmNoYW5nZUNhbnZhc0N1cnNvcignJyk7XG4gICAgICAgIHRoaXMuTWFwU2VydmljZS51cGRhdGVEcmFnUGFuKHRydWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGZpbHRlckZlYXR1cmUoZXZ0OiBNYXBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKHRoaXMuRmVhdHVyZUNvbXBvbmVudCAmJiB0aGlzLmxheWVyKSB7XG4gICAgICBjb25zdCBmZWF0dXJlOiBHZW9KU09OLkZlYXR1cmU8YW55PiA9IHRoaXMuTWFwU2VydmljZS5xdWVyeVJlbmRlcmVkRmVhdHVyZXMoXG4gICAgICAgIGV2dC5wb2ludCxcbiAgICAgICAge1xuICAgICAgICAgIGxheWVyczogW3RoaXMubGF5ZXIuaWRdLFxuICAgICAgICAgIGZpbHRlcjogW1xuICAgICAgICAgICAgJ2FsbCcsXG4gICAgICAgICAgICBbJz09JywgJyR0eXBlJywgJ1BvaW50J10sXG4gICAgICAgICAgICBbJz09JywgJyRpZCcsIHRoaXMuRmVhdHVyZUNvbXBvbmVudC5pZF1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIClbMF07XG4gICAgICBpZiAoIWZlYXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5cbiJdfQ==