/**
 * @fileoverview added by tsickle
 * Generated from: lib/popup/popup.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { MapService } from '../map/map.service';
import { MarkerComponent } from '../marker/marker.component';
export class PopupComponent {
    /**
     * @param {?} MapService
     */
    constructor(MapService) {
        this.MapService = MapService;
        this.close = new EventEmitter();
        this.open = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.lngLat && this.marker || this.feature && this.lngLat || this.feature && this.marker) {
            throw new Error('marker, lngLat, feature input are mutually exclusive');
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.lngLat && !changes.lngLat.isFirstChange() ||
            changes.feature && !changes.feature.isFirstChange()) {
            /** @type {?} */
            const newlngLat = changes.lngLat ? (/** @type {?} */ (this.lngLat)) : (/** @type {?} */ ((/** @type {?} */ ((/** @type {?} */ ((/** @type {?} */ (this.feature)).geometry)).coordinates))));
            this.MapService.removePopupFromMap((/** @type {?} */ (this.popupInstance)), true);
            /** @type {?} */
            const popupInstanceTmp = this.createPopup();
            this.MapService.addPopupToMap(popupInstanceTmp, newlngLat, (/** @type {?} */ (this.popupInstance)).isOpen());
            this.popupInstance = popupInstanceTmp;
        }
        if (changes.marker && !changes.marker.isFirstChange()) {
            /** @type {?} */
            const previousMarker = changes.marker.previousValue;
            if (previousMarker.markerInstance) {
                this.MapService.removePopupFromMarker(previousMarker.markerInstance);
            }
            if (this.marker && this.marker.markerInstance && this.popupInstance) {
                this.MapService.addPopupToMarker(this.marker.markerInstance, this.popupInstance);
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.popupInstance = this.createPopup();
        this.addPopup(this.popupInstance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.popupInstance) {
            if (this.lngLat || this.feature) {
                this.MapService.removePopupFromMap(this.popupInstance);
            }
            else if (this.marker && this.marker.markerInstance) {
                this.MapService.removePopupFromMarker(this.marker.markerInstance);
            }
        }
        this.popupInstance = undefined;
    }
    /**
     * @private
     * @return {?}
     */
    createPopup() {
        return this.MapService.createPopup({
            popupOptions: {
                closeButton: this.closeButton,
                closeOnClick: this.closeOnClick,
                anchor: this.anchor,
                offset: this.offset,
                className: this.className,
                maxWidth: this.maxWidth
            },
            popupEvents: {
                open: this.open,
                close: this.close
            }
        }, this.content.nativeElement);
    }
    /**
     * @private
     * @param {?} popup
     * @return {?}
     */
    addPopup(popup) {
        this.MapService.mapCreated$.subscribe((/**
         * @return {?}
         */
        () => {
            if (this.lngLat || this.feature) {
                this.MapService.addPopupToMap(popup, this.lngLat ? this.lngLat : (/** @type {?} */ ((/** @type {?} */ ((/** @type {?} */ ((/** @type {?} */ (this.feature)).geometry)).coordinates)))));
            }
            else if (this.marker && this.marker.markerInstance) {
                this.MapService.addPopupToMarker(this.marker.markerInstance, popup);
            }
            else {
                throw new Error('mgl-popup need either lngLat/marker/feature to be set');
            }
        }));
    }
}
PopupComponent.decorators = [
    { type: Component, args: [{
                selector: 'mgl-popup',
                template: '<div #content><ng-content></ng-content></div>',
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
PopupComponent.ctorParameters = () => [
    { type: MapService }
];
PopupComponent.propDecorators = {
    closeButton: [{ type: Input }],
    closeOnClick: [{ type: Input }],
    anchor: [{ type: Input }],
    offset: [{ type: Input }],
    className: [{ type: Input }],
    maxWidth: [{ type: Input }],
    feature: [{ type: Input }],
    lngLat: [{ type: Input }],
    marker: [{ type: Input }],
    close: [{ type: Output }],
    open: [{ type: Output }],
    content: [{ type: ViewChild, args: ['content', { static: true },] }]
};
if (false) {
    /** @type {?} */
    PopupComponent.prototype.closeButton;
    /** @type {?} */
    PopupComponent.prototype.closeOnClick;
    /** @type {?} */
    PopupComponent.prototype.anchor;
    /** @type {?} */
    PopupComponent.prototype.offset;
    /** @type {?} */
    PopupComponent.prototype.className;
    /** @type {?} */
    PopupComponent.prototype.maxWidth;
    /** @type {?} */
    PopupComponent.prototype.feature;
    /** @type {?} */
    PopupComponent.prototype.lngLat;
    /** @type {?} */
    PopupComponent.prototype.marker;
    /** @type {?} */
    PopupComponent.prototype.close;
    /** @type {?} */
    PopupComponent.prototype.open;
    /** @type {?} */
    PopupComponent.prototype.content;
    /** @type {?} */
    PopupComponent.prototype.popupInstance;
    /**
     * @type {?}
     * @private
     */
    PopupComponent.prototype.MapService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hcGJveC1nbC8iLCJzb3VyY2VzIjpbImxpYi9wb3B1cC9wb3B1cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUtMLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFPN0QsTUFBTSxPQUFPLGNBQWM7Ozs7SUFxQnpCLFlBQ1UsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVJ0QixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNqQyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQVF0QyxDQUFDOzs7O0lBRUwsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDNUYsTUFBTSxJQUFJLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO1NBQ3pFO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFDRSxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUU7WUFDakQsT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEVBQ25EOztrQkFDTSxTQUFTLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsbUJBQUEs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M0MsOEJBQTBDOztJQUUxQyxpQ0FBNEQ7O0lBRTVELHVDQUFzQjs7Ozs7SUFHcEIsb0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb2ludExpa2UsIFBvcHVwLCBMbmdMYXRMaWtlIH0gZnJvbSAnbWFwYm94LWdsJztcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi9tYXAvbWFwLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFya2VyQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFya2VyL21hcmtlci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZ2wtcG9wdXAnLFxuICB0ZW1wbGF0ZTogJzxkaXYgI2NvbnRlbnQ+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFBvcHVwQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG4gIC8qIEluaXQgaW5wdXQgKi9cbiAgQElucHV0KCkgY2xvc2VCdXR0b24/OiBib29sZWFuO1xuICBASW5wdXQoKSBjbG9zZU9uQ2xpY2s/OiBib29sZWFuO1xuICBASW5wdXQoKSBhbmNob3I/OiAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB8ICd0b3AtbGVmdCcgfCAndG9wLXJpZ2h0JyB8ICdib3R0b20tbGVmdCc7XG4gIEBJbnB1dCgpIG9mZnNldD86IG51bWJlciB8IFBvaW50TGlrZSB8IHsgW2FuY2hvcjogc3RyaW5nXTogW251bWJlciwgbnVtYmVyXSB9O1xuICBASW5wdXQoKSBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1heFdpZHRoPzogc3RyaW5nO1xuXG4gIC8qIER5bmFtaWMgaW5wdXQgKi9cbiAgQElucHV0KCkgZmVhdHVyZT86IEdlb0pTT04uRmVhdHVyZTxHZW9KU09OLlBvaW50PjtcbiAgQElucHV0KCkgbG5nTGF0PzogTG5nTGF0TGlrZTtcbiAgQElucHV0KCkgbWFya2VyPzogTWFya2VyQ29tcG9uZW50O1xuXG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIG9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQFZpZXdDaGlsZCgnY29udGVudCcsIHsgc3RhdGljOiB0cnVlIH0pIGNvbnRlbnQ6IEVsZW1lbnRSZWY7XG5cbiAgcG9wdXBJbnN0YW5jZT86IFBvcHVwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgTWFwU2VydmljZTogTWFwU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmxuZ0xhdCAmJiB0aGlzLm1hcmtlciB8fCB0aGlzLmZlYXR1cmUgJiYgdGhpcy5sbmdMYXQgfHwgdGhpcy5mZWF0dXJlICYmIHRoaXMubWFya2VyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21hcmtlciwgbG5nTGF0LCBmZWF0dXJlIGlucHV0IGFyZSBtdXR1YWxseSBleGNsdXNpdmUnKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKFxuICAgICAgY2hhbmdlcy5sbmdMYXQgJiYgIWNoYW5nZXMubG5nTGF0LmlzRmlyc3RDaGFuZ2UoKSB8fFxuICAgICAgY2hhbmdlcy5mZWF0dXJlICYmICFjaGFuZ2VzLmZlYXR1cmUuaXNGaXJzdENoYW5nZSgpXG4gICAgKSB7XG4gICAgICBjb25zdCBuZXdsbmdMYXQgPSBjaGFuZ2VzLmxuZ0xhdCA/IHRoaXMubG5nTGF0ISA6IDxbbnVtYmVyLCBudW1iZXJdPnRoaXMuZmVhdHVyZSEuZ2VvbWV0cnkhLmNvb3JkaW5hdGVzITtcbiAgICAgIHRoaXMuTWFwU2VydmljZS5yZW1vdmVQb3B1cEZyb21NYXAodGhpcy5wb3B1cEluc3RhbmNlISwgdHJ1ZSk7XG4gICAgICBjb25zdCBwb3B1cEluc3RhbmNlVG1wID0gdGhpcy5jcmVhdGVQb3B1cCgpO1xuICAgICAgdGhpcy5NYXBTZXJ2aWNlLmFkZFBvcHVwVG9NYXAocG9wdXBJbnN0YW5jZVRtcCwgbmV3bG5nTGF0LCB0aGlzLnBvcHVwSW5zdGFuY2UhLmlzT3BlbigpKTtcbiAgICAgIHRoaXMucG9wdXBJbnN0YW5jZSA9IHBvcHVwSW5zdGFuY2VUbXA7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm1hcmtlciAmJiAhY2hhbmdlcy5tYXJrZXIuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICBjb25zdCBwcmV2aW91c01hcmtlcjogTWFya2VyQ29tcG9uZW50ID0gY2hhbmdlcy5tYXJrZXIucHJldmlvdXNWYWx1ZTtcbiAgICAgIGlmIChwcmV2aW91c01hcmtlci5tYXJrZXJJbnN0YW5jZSkge1xuICAgICAgICB0aGlzLk1hcFNlcnZpY2UucmVtb3ZlUG9wdXBGcm9tTWFya2VyKHByZXZpb3VzTWFya2VyLm1hcmtlckluc3RhbmNlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm1hcmtlciAmJiB0aGlzLm1hcmtlci5tYXJrZXJJbnN0YW5jZSAmJiB0aGlzLnBvcHVwSW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5NYXBTZXJ2aWNlLmFkZFBvcHVwVG9NYXJrZXIodGhpcy5tYXJrZXIubWFya2VySW5zdGFuY2UsIHRoaXMucG9wdXBJbnN0YW5jZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucG9wdXBJbnN0YW5jZSA9IHRoaXMuY3JlYXRlUG9wdXAoKTtcbiAgICB0aGlzLmFkZFBvcHVwKHRoaXMucG9wdXBJbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5wb3B1cEluc3RhbmNlKSB7XG4gICAgICBpZiAodGhpcy5sbmdMYXQgfHwgdGhpcy5mZWF0dXJlKSB7XG4gICAgICAgIHRoaXMuTWFwU2VydmljZS5yZW1vdmVQb3B1cEZyb21NYXAodGhpcy5wb3B1cEluc3RhbmNlKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXJrZXIgJiYgdGhpcy5tYXJrZXIubWFya2VySW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5NYXBTZXJ2aWNlLnJlbW92ZVBvcHVwRnJvbU1hcmtlcih0aGlzLm1hcmtlci5tYXJrZXJJbnN0YW5jZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucG9wdXBJbnN0YW5jZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUG9wdXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuTWFwU2VydmljZS5jcmVhdGVQb3B1cCh7XG4gICAgICBwb3B1cE9wdGlvbnM6IHtcbiAgICAgICAgY2xvc2VCdXR0b246IHRoaXMuY2xvc2VCdXR0b24sXG4gICAgICAgIGNsb3NlT25DbGljazogdGhpcy5jbG9zZU9uQ2xpY2ssXG4gICAgICAgIGFuY2hvcjogdGhpcy5hbmNob3IsXG4gICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICAgIGNsYXNzTmFtZTogdGhpcy5jbGFzc05hbWUsXG4gICAgICAgIG1heFdpZHRoOiB0aGlzLm1heFdpZHRoXG4gICAgICB9LFxuICAgICAgcG9wdXBFdmVudHM6IHtcbiAgICAgICAgb3BlbjogdGhpcy5vcGVuLFxuICAgICAgICBjbG9zZTogdGhpcy5jbG9zZVxuICAgICAgfVxuICAgIH0sIHRoaXMuY29udGVudC5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkUG9wdXAocG9wdXA6IFBvcHVwKSB7XG4gICAgdGhpcy5NYXBTZXJ2aWNlLm1hcENyZWF0ZWQkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5sbmdMYXQgfHwgdGhpcy5mZWF0dXJlKSB7XG4gICAgICAgIHRoaXMuTWFwU2VydmljZS5hZGRQb3B1cFRvTWFwKHBvcHVwLCB0aGlzLmxuZ0xhdCA/IHRoaXMubG5nTGF0IDogPFtudW1iZXIsIG51bWJlcl0+dGhpcy5mZWF0dXJlIS5nZW9tZXRyeSEuY29vcmRpbmF0ZXMhKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXJrZXIgJiYgdGhpcy5tYXJrZXIubWFya2VySW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5NYXBTZXJ2aWNlLmFkZFBvcHVwVG9NYXJrZXIodGhpcy5tYXJrZXIubWFya2VySW5zdGFuY2UsIHBvcHVwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbWdsLXBvcHVwIG5lZWQgZWl0aGVyIGxuZ0xhdC9tYXJrZXIvZmVhdHVyZSB0byBiZSBzZXQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19