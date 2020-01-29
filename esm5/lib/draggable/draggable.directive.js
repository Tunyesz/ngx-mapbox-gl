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
var DraggableDirective = /** @class */ (function () {
    function DraggableDirective(MapService, NgZone, FeatureComponent, MarkerComponent) {
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
    DraggableDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var enter$;
        /** @type {?} */
        var leave$;
        /** @type {?} */
        var updateCoords;
        if (this.MarkerComponent) {
            console.warn('[ngx-mapbox-gl] mglDraggable on Marker is deprecated, use draggable input instead');
            /** @type {?} */
            var markerElement = ((/** @type {?} */ (this.MarkerComponent.content.nativeElement)));
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
    };
    /**
     * @return {?}
     */
    DraggableDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed$.next(undefined);
        this.destroyed$.complete();
    };
    /**
     * @private
     * @param {?} enter$
     * @param {?} leave$
     * @param {?} updateCoords
     * @return {?}
     */
    DraggableDirective.prototype.handleDraggable = /**
     * @private
     * @param {?} enter$
     * @param {?} leave$
     * @param {?} updateCoords
     * @return {?}
     */
    function (enter$, leave$, updateCoords) {
        var _this = this;
        /** @type {?} */
        var moving = false;
        /** @type {?} */
        var inside = false;
        this.MapService.mapCreated$.subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var mouseUp$ = fromEvent((/** @type {?} */ (_this.MapService.mapInstance)), 'mouseup');
            /** @type {?} */
            var dragStart$ = enter$.pipe(takeUntil(_this.destroyed$), filter((/**
             * @return {?}
             */
            function () { return !moving; })), filter((/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.filterFeature(evt); })), tap((/**
             * @return {?}
             */
            function () {
                inside = true;
                _this.MapService.changeCanvasCursor('move');
                _this.MapService.updateDragPan(false);
            })), switchMap((/**
             * @return {?}
             */
            function () {
                return fromEvent((/** @type {?} */ (_this.MapService.mapInstance)), 'mousedown')
                    .pipe(takeUntil(leave$));
            })));
            /** @type {?} */
            var dragging$ = dragStart$.pipe(switchMap((/**
             * @return {?}
             */
            function () { return fromEvent((/** @type {?} */ (_this.MapService.mapInstance)), 'mousemove')
                .pipe(takeUntil(mouseUp$)); })));
            /** @type {?} */
            var dragEnd$ = dragStart$.pipe(switchMap((/**
             * @return {?}
             */
            function () { return mouseUp$.pipe(take(1)); })));
            dragStart$.subscribe((/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) {
                moving = true;
                if (_this.dragStart.observers.length) {
                    _this.NgZone.run((/**
                     * @return {?}
                     */
                    function () { return _this.dragStart.emit(evt); }));
                }
            }));
            dragging$.subscribe((/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) {
                updateCoords([evt.lngLat.lng, evt.lngLat.lat]);
                if (_this.drag.observers.length) {
                    _this.NgZone.run((/**
                     * @return {?}
                     */
                    function () { return _this.drag.emit(evt); }));
                }
            }));
            dragEnd$.subscribe((/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) {
                moving = false;
                if (_this.dragEnd.observers.length) {
                    _this.NgZone.run((/**
                     * @return {?}
                     */
                    function () { return _this.dragEnd.emit(evt); }));
                }
                if (!inside) { // It's possible to dragEnd outside the target (small input lag)
                    _this.MapService.changeCanvasCursor('');
                    _this.MapService.updateDragPan(true);
                }
            }));
            leave$.pipe(takeUntil(_this.destroyed$), tap((/**
             * @return {?}
             */
            function () { return inside = false; })), filter((/**
             * @return {?}
             */
            function () { return !moving; }))).subscribe((/**
             * @return {?}
             */
            function () {
                _this.MapService.changeCanvasCursor('');
                _this.MapService.updateDragPan(true);
            }));
        }));
    };
    /**
     * @private
     * @param {?} evt
     * @return {?}
     */
    DraggableDirective.prototype.filterFeature = /**
     * @private
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        if (this.FeatureComponent && this.layer) {
            /** @type {?} */
            var feature = this.MapService.queryRenderedFeatures(evt.point, {
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
    };
    DraggableDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mglDraggable]'
                },] }
    ];
    /** @nocollapse */
    DraggableDirective.ctorParameters = function () { return [
        { type: MapService },
        { type: NgZone },
        { type: FeatureComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: MarkerComponent, decorators: [{ type: Optional }, { type: Host }] }
    ]; };
    DraggableDirective.propDecorators = {
        layer: [{ type: Input, args: ['mglDraggable',] }],
        dragStart: [{ type: Output }],
        dragEnd: [{ type: Output }],
        drag: [{ type: Output }]
    };
    return DraggableDirective;
}());
export { DraggableDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXBib3gtZ2wvIiwic291cmNlcyI6WyJsaWIvZHJhZ2dhYmxlL2RyYWdnYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLE1BQU0sRUFHTixRQUFRLEVBQ1IsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFdkU7SUFhRSw0QkFDVSxVQUFzQixFQUN0QixNQUFjLEVBQ00sZ0JBQW1DLEVBQ25DLGVBQWlDO1FBSHJELGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNNLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBbUI7UUFDbkMsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBVnJELGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUM5QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFDNUMsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBRTNDLGVBQVUsR0FBd0IsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFPM0Qs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QUFLLEVBQUU7O2dCQUNqQyxPQUFPLEdBQXlCLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQ3pFLEdBQUcsQ0FBQyxLQUFLLEVBQ1Q7Z0JBQ0UsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQ3ZCLE1BQU0sRUFBRTtvQkFDTixLQUFLO29CQUNMLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7b0JBQ3hCLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDO2lCQUN4QzthQUNGLENBQ0YsQ0FBQyxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNaLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBbElGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7OztnQkFOUSxVQUFVO2dCQVZqQixNQUFNO2dCQVlDLGdCQUFnQix1QkFrQnBCLFFBQVEsWUFBSSxJQUFJO2dCQW5CWixlQUFlLHVCQW9CbkIsUUFBUSxZQUFJLElBQUk7Ozt3QkFabEIsS0FBSyxTQUFDLGNBQWM7NEJBRXBCLE1BQU07MEJBQ04sTUFBTTt1QkFDTixNQUFNOztJQTBIVCx5QkFBQztDQUFBLEFBbklELElBbUlDO1NBaElZLGtCQUFrQjs7O0lBRTdCLG1DQUE4Qzs7SUFFOUMsdUNBQXdEOztJQUN4RCxxQ0FBc0Q7O0lBQ3RELGtDQUFtRDs7Ozs7SUFFbkQsd0NBQStEOzs7OztJQUc3RCx3Q0FBOEI7Ozs7O0lBQzlCLG9DQUFzQjs7Ozs7SUFDdEIsOENBQStEOzs7OztJQUMvRCw2Q0FBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBNb3VzZUV2ZW50IH0gZnJvbSAnbWFwYm94LWdsJztcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBzd2l0Y2hNYXAsIHRha2UsIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTGF5ZXJDb21wb25lbnQgfSBmcm9tICcuLi9sYXllci9sYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL21hcC9tYXAuc2VydmljZSc7XG5pbXBvcnQgeyBNYXJrZXJDb21wb25lbnQgfSBmcm9tICcuLi9tYXJrZXIvbWFya2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGZWF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vc291cmNlL2dlb2pzb24vZmVhdHVyZS5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWdsRHJhZ2dhYmxlXSdcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnbWdsRHJhZ2dhYmxlJykgbGF5ZXI/OiBMYXllckNvbXBvbmVudDtcblxuICBAT3V0cHV0KCkgZHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgZHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwTW91c2VFdmVudD4oKTtcbiAgQE91dHB1dCgpIGRyYWcgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcE1vdXNlRXZlbnQ+KCk7XG5cbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBSZXBsYXlTdWJqZWN0PHZvaWQ+ID0gbmV3IFJlcGxheVN1YmplY3QoMSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBNYXBTZXJ2aWNlOiBNYXBTZXJ2aWNlLFxuICAgIHByaXZhdGUgTmdab25lOiBOZ1pvbmUsXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBwcml2YXRlIEZlYXR1cmVDb21wb25lbnQ/OiBGZWF0dXJlQ29tcG9uZW50LFxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHJpdmF0ZSBNYXJrZXJDb21wb25lbnQ/OiBNYXJrZXJDb21wb25lbnRcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgZW50ZXIkO1xuICAgIGxldCBsZWF2ZSQ7XG4gICAgbGV0IHVwZGF0ZUNvb3JkcztcbiAgICBpZiAodGhpcy5NYXJrZXJDb21wb25lbnQpIHtcbiAgICAgIGNvbnNvbGUud2FybignW25neC1tYXBib3gtZ2xdIG1nbERyYWdnYWJsZSBvbiBNYXJrZXIgaXMgZGVwcmVjYXRlZCwgdXNlIGRyYWdnYWJsZSBpbnB1dCBpbnN0ZWFkJyk7XG4gICAgICBsZXQgbWFya2VyRWxlbWVudCA9ICg8RWxlbWVudD50aGlzLk1hcmtlckNvbXBvbmVudC5jb250ZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgaWYgKG1hcmtlckVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIG1hcmtlckVsZW1lbnQgPSBtYXJrZXJFbGVtZW50LmNoaWxkcmVuWzBdO1xuICAgICAgfVxuICAgICAgZW50ZXIkID0gZnJvbUV2ZW50KG1hcmtlckVsZW1lbnQsICdtb3VzZWVudGVyJyk7XG4gICAgICBsZWF2ZSQgPSBmcm9tRXZlbnQobWFya2VyRWxlbWVudCwgJ21vdXNlbGVhdmUnKTtcbiAgICAgIHVwZGF0ZUNvb3JkcyA9IHRoaXMuTWFya2VyQ29tcG9uZW50LnVwZGF0ZUNvb3JkaW5hdGVzLmJpbmQodGhpcy5NYXJrZXJDb21wb25lbnQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5GZWF0dXJlQ29tcG9uZW50ICYmIHRoaXMubGF5ZXIpIHtcbiAgICAgIGVudGVyJCA9IHRoaXMubGF5ZXIubW91c2VFbnRlcjtcbiAgICAgIGxlYXZlJCA9IHRoaXMubGF5ZXIubW91c2VMZWF2ZTtcbiAgICAgIHVwZGF0ZUNvb3JkcyA9IHRoaXMuRmVhdHVyZUNvbXBvbmVudC51cGRhdGVDb29yZGluYXRlcy5iaW5kKHRoaXMuRmVhdHVyZUNvbXBvbmVudCk7XG4gICAgICBpZiAodGhpcy5GZWF0dXJlQ29tcG9uZW50Lmdlb21ldHJ5LnR5cGUgIT09ICdQb2ludCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtZ2xEcmFnZ2FibGUgb25seSBzdXBwb3J0IHBvaW50IGZlYXR1cmUnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtZ2xEcmFnZ2FibGUgY2FuIG9ubHkgYmUgdXNlZCBvbiBGZWF0dXJlICh3aXRoIGEgbGF5ZXIgYXMgaW5wdXQpIG9yIE1hcmtlcicpO1xuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlRHJhZ2dhYmxlKGVudGVyJCwgbGVhdmUkLCB1cGRhdGVDb29yZHMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95ZWQkLm5leHQodW5kZWZpbmVkKTtcbiAgICB0aGlzLmRlc3Ryb3llZCQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRHJhZ2dhYmxlKGVudGVyJDogT2JzZXJ2YWJsZTxhbnk+LCBsZWF2ZSQ6IE9ic2VydmFibGU8YW55PiwgdXBkYXRlQ29vcmRzOiAoY29vcmQ6IG51bWJlcltdKSA9PiB2b2lkKSB7XG4gICAgbGV0IG1vdmluZyA9IGZhbHNlO1xuICAgIGxldCBpbnNpZGUgPSBmYWxzZTtcbiAgICB0aGlzLk1hcFNlcnZpY2UubWFwQ3JlYXRlZCQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IG1vdXNlVXAkID0gZnJvbUV2ZW50PE1hcE1vdXNlRXZlbnQ+KDxhbnk+dGhpcy5NYXBTZXJ2aWNlLm1hcEluc3RhbmNlLCAnbW91c2V1cCcpO1xuICAgICAgY29uc3QgZHJhZ1N0YXJ0JCA9IGVudGVyJC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSxcbiAgICAgICAgZmlsdGVyKCgpID0+ICFtb3ZpbmcpLFxuICAgICAgICBmaWx0ZXIoKGV2dCkgPT4gdGhpcy5maWx0ZXJGZWF0dXJlKGV2dCkpLFxuICAgICAgICB0YXAoKCkgPT4ge1xuICAgICAgICAgIGluc2lkZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5NYXBTZXJ2aWNlLmNoYW5nZUNhbnZhc0N1cnNvcignbW92ZScpO1xuICAgICAgICAgIHRoaXMuTWFwU2VydmljZS51cGRhdGVEcmFnUGFuKGZhbHNlKTtcbiAgICAgICAgfSksXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PlxuICAgICAgICAgIGZyb21FdmVudDxNYXBNb3VzZUV2ZW50Pig8YW55PnRoaXMuTWFwU2VydmljZS5tYXBJbnN0YW5jZSwgJ21vdXNlZG93bicpXG4gICAgICAgICAgICAucGlwZSh0YWtlVW50aWwobGVhdmUkKSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRyYWdnaW5nJCA9IGRyYWdTdGFydCQucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKCgpID0+IGZyb21FdmVudDxNYXBNb3VzZUV2ZW50Pig8YW55PnRoaXMuTWFwU2VydmljZS5tYXBJbnN0YW5jZSwgJ21vdXNlbW92ZScpXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKG1vdXNlVXAkKSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRyYWdFbmQkID0gZHJhZ1N0YXJ0JC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gbW91c2VVcCQucGlwZSh0YWtlKDEpKSlcbiAgICAgICk7XG4gICAgICBkcmFnU3RhcnQkLnN1YnNjcmliZSgoZXZ0KSA9PiB7XG4gICAgICAgIG1vdmluZyA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmRyYWdTdGFydC5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5OZ1pvbmUucnVuKCgpID0+IHRoaXMuZHJhZ1N0YXJ0LmVtaXQoZXZ0KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZHJhZ2dpbmckLnN1YnNjcmliZSgoZXZ0KSA9PiB7XG4gICAgICAgIHVwZGF0ZUNvb3JkcyhbZXZ0LmxuZ0xhdC5sbmcsIGV2dC5sbmdMYXQubGF0XSk7XG4gICAgICAgIGlmICh0aGlzLmRyYWcub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuTmdab25lLnJ1bigoKSA9PiB0aGlzLmRyYWcuZW1pdChldnQpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkcmFnRW5kJC5zdWJzY3JpYmUoKGV2dCkgPT4ge1xuICAgICAgICBtb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuZHJhZ0VuZC5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5OZ1pvbmUucnVuKCgpID0+IHRoaXMuZHJhZ0VuZC5lbWl0KGV2dCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaW5zaWRlKSB7IC8vIEl0J3MgcG9zc2libGUgdG8gZHJhZ0VuZCBvdXRzaWRlIHRoZSB0YXJnZXQgKHNtYWxsIGlucHV0IGxhZylcbiAgICAgICAgICB0aGlzLk1hcFNlcnZpY2UuY2hhbmdlQ2FudmFzQ3Vyc29yKCcnKTtcbiAgICAgICAgICB0aGlzLk1hcFNlcnZpY2UudXBkYXRlRHJhZ1Bhbih0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBsZWF2ZSQucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCksXG4gICAgICAgIHRhcCgoKSA9PiBpbnNpZGUgPSBmYWxzZSksXG4gICAgICAgIGZpbHRlcigoKSA9PiAhbW92aW5nKVxuICAgICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLk1hcFNlcnZpY2UuY2hhbmdlQ2FudmFzQ3Vyc29yKCcnKTtcbiAgICAgICAgdGhpcy5NYXBTZXJ2aWNlLnVwZGF0ZURyYWdQYW4odHJ1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyRmVhdHVyZShldnQ6IE1hcE1vdXNlRXZlbnQpIHtcbiAgICBpZiAodGhpcy5GZWF0dXJlQ29tcG9uZW50ICYmIHRoaXMubGF5ZXIpIHtcbiAgICAgIGNvbnN0IGZlYXR1cmU6IEdlb0pTT04uRmVhdHVyZTxhbnk+ID0gdGhpcy5NYXBTZXJ2aWNlLnF1ZXJ5UmVuZGVyZWRGZWF0dXJlcyhcbiAgICAgICAgZXZ0LnBvaW50LFxuICAgICAgICB7XG4gICAgICAgICAgbGF5ZXJzOiBbdGhpcy5sYXllci5pZF0sXG4gICAgICAgICAgZmlsdGVyOiBbXG4gICAgICAgICAgICAnYWxsJyxcbiAgICAgICAgICAgIFsnPT0nLCAnJHR5cGUnLCAnUG9pbnQnXSxcbiAgICAgICAgICAgIFsnPT0nLCAnJGlkJywgdGhpcy5GZWF0dXJlQ29tcG9uZW50LmlkXVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgKVswXTtcbiAgICAgIGlmICghZmVhdHVyZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cblxuIl19