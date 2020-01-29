/**
 * @fileoverview added by tsickle
 * Generated from: lib/control/geocoder-control.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, Host, Inject, InjectionToken, Input, NgZone, Optional, Output } from '@angular/core';
import { MapService } from '../map/map.service';
import { ControlComponent } from './control.component';
// @ts-ignore
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
/** @type {?} */
export const MAPBOX_GEOCODER_API_KEY = new InjectionToken('MapboxApiKey');
/**
 * @record
 */
export function LngLatLiteral() { }
if (false) {
    /** @type {?} */
    LngLatLiteral.prototype.latitude;
    /** @type {?} */
    LngLatLiteral.prototype.longitude;
}
/**
 * @record
 */
export function Results() { }
if (false) {
    /** @type {?} */
    Results.prototype.attribution;
    /** @type {?} */
    Results.prototype.query;
}
/**
 * @record
 */
export function Result() { }
if (false) {
    /** @type {?} */
    Result.prototype.bbox;
    /** @type {?} */
    Result.prototype.center;
    /** @type {?} */
    Result.prototype.place_name;
    /** @type {?} */
    Result.prototype.place_type;
    /** @type {?} */
    Result.prototype.relevance;
    /** @type {?} */
    Result.prototype.text;
    /** @type {?} */
    Result.prototype.address;
    /** @type {?} */
    Result.prototype.context;
}
export class GeocoderControlDirective {
    /**
     * @param {?} MapService
     * @param {?} zone
     * @param {?} ControlComponent
     * @param {?} MAPBOX_GEOCODER_API_KEY
     */
    constructor(MapService, zone, ControlComponent, MAPBOX_GEOCODER_API_KEY) {
        this.MapService = MapService;
        this.zone = zone;
        this.ControlComponent = ControlComponent;
        this.MAPBOX_GEOCODER_API_KEY = MAPBOX_GEOCODER_API_KEY;
        this.clear = new EventEmitter();
        this.loading = new EventEmitter();
        this.results = new EventEmitter();
        this.result = new EventEmitter();
        this.error = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.MapService.mapCreated$.subscribe((/**
         * @return {?}
         */
        () => {
            if (this.ControlComponent.control) {
                throw new Error('Another control is already set for this control');
            }
            /** @type {?} */
            const options = {
                proximity: this.proximity,
                countries: this.countries,
                placeholder: this.placeholder,
                zoom: this.zoom,
                bbox: this.bbox,
                types: this.types,
                flyTo: this.flyTo,
                minLength: this.minLength,
                limit: this.limit,
                language: this.language,
                filter: this.filter,
                localGeocoder: this.localGeocoder,
                accessToken: this.accessToken || this.MAPBOX_GEOCODER_API_KEY
            };
            Object.keys(options).forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => {
                /** @type {?} */
                const tkey = (/** @type {?} */ (key));
                if (options[tkey] === undefined) {
                    delete options[tkey];
                }
            }));
            this.geocoder = new MapboxGeocoder(options);
            this.hookEvents(this);
            this.addControl();
        }));
        if (this.searchInput) {
            this.MapService.mapLoaded$.subscribe((/**
             * @return {?}
             */
            () => {
                this.geocoder.query(this.searchInput);
            }));
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this.geocoder) {
            return;
        }
        if (changes.proximity && !changes.proximity.isFirstChange()) {
            this.geocoder.setProximity(changes.proximity.currentValue);
        }
        if (changes.searchInput) {
            this.geocoder.query(this.searchInput);
        }
    }
    /**
     * @private
     * @return {?}
     */
    addControl() {
        this.ControlComponent.control = this.geocoder;
        this.MapService.addControl(this.ControlComponent.control, this.ControlComponent.position);
    }
    /**
     * @private
     * @param {?} events
     * @return {?}
     */
    hookEvents(events) {
        if (events.results.observers.length) {
            this.geocoder.on('results', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.results.emit(evt)))));
        }
        if (events.result.observers.length) {
            this.geocoder.on('result', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => {
                // Workaroud issue https://github.com/mapbox/mapbox-gl-geocoder/issues/99
                if (this.lastResultId !== evt.result.id) {
                    this.lastResultId = evt.result.id;
                    this.zone.run((/**
                     * @return {?}
                     */
                    () => events.result.emit(evt)));
                }
            }));
        }
        if (events.error.observers.length) {
            this.geocoder.on('error', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.error.emit(evt)))));
        }
        if (events.loading.observers.length) {
            this.geocoder.on('loading', (/**
             * @param {?} evt
             * @return {?}
             */
            (evt) => this.zone.run((/**
             * @return {?}
             */
            () => events.loading.emit(evt)))));
        }
        if (events.clear.observers.length) {
            this.geocoder.on('clear', (/**
             * @return {?}
             */
            () => this.zone.run((/**
             * @return {?}
             */
            () => events.clear.emit()))));
        }
    }
}
GeocoderControlDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mglGeocoder]'
            },] }
];
/** @nocollapse */
GeocoderControlDirective.ctorParameters = () => [
    { type: MapService },
    { type: NgZone },
    { type: ControlComponent, decorators: [{ type: Host }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [MAPBOX_GEOCODER_API_KEY,] }] }
];
GeocoderControlDirective.propDecorators = {
    countries: [{ type: Input }],
    placeholder: [{ type: Input }],
    zoom: [{ type: Input }],
    bbox: [{ type: Input }],
    types: [{ type: Input }],
    flyTo: [{ type: Input }],
    minLength: [{ type: Input }],
    limit: [{ type: Input }],
    language: [{ type: Input }],
    accessToken: [{ type: Input }],
    filter: [{ type: Input }],
    localGeocoder: [{ type: Input }],
    proximity: [{ type: Input }],
    searchInput: [{ type: Input }],
    clear: [{ type: Output }],
    loading: [{ type: Output }],
    results: [{ type: Output }],
    result: [{ type: Output }],
    error: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    GeocoderControlDirective.prototype.countries;
    /** @type {?} */
    GeocoderControlDirective.prototype.placeholder;
    /** @type {?} */
    GeocoderControlDirective.prototype.zoom;
    /** @type {?} */
    GeocoderControlDirective.prototype.bbox;
    /** @type {?} */
    GeocoderControlDirective.prototype.types;
    /** @type {?} */
    GeocoderControlDirective.prototype.flyTo;
    /** @type {?} */
    GeocoderControlDirective.prototype.minLength;
    /** @type {?} */
    GeocoderControlDirective.prototype.limit;
    /** @type {?} */
    GeocoderControlDirective.prototype.language;
    /** @type {?} */
    GeocoderControlDirective.prototype.accessToken;
    /** @type {?} */
    GeocoderControlDirective.prototype.filter;
    /** @type {?} */
    GeocoderControlDirective.prototype.localGeocoder;
    /** @type {?} */
    GeocoderControlDirective.prototype.proximity;
    /** @type {?} */
    GeocoderControlDirective.prototype.searchInput;
    /** @type {?} */
    GeocoderControlDirective.prototype.clear;
    /** @type {?} */
    GeocoderControlDirective.prototype.loading;
    /** @type {?} */
    GeocoderControlDirective.prototype.results;
    /** @type {?} */
    GeocoderControlDirective.prototype.result;
    /** @type {?} */
    GeocoderControlDirective.prototype.error;
    /** @type {?} */
    GeocoderControlDirective.prototype.geocoder;
    /**
     * @type {?}
     * @private
     */
    GeocoderControlDirective.prototype.lastResultId;
    /**
     * @type {?}
     * @private
     */
    GeocoderControlDirective.prototype.MapService;
    /**
     * @type {?}
     * @private
     */
    GeocoderControlDirective.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    GeocoderControlDirective.prototype.ControlComponent;
    /**
     * @type {?}
     * @private
     */
    GeocoderControlDirective.prototype.MAPBOX_GEOCODER_API_KEY;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvY29kZXItY29udHJvbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWFwYm94LWdsLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvZ2VvY29kZXItY29udHJvbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFDWixJQUFJLEVBQ0osTUFBTSxFQUNOLGNBQWMsRUFDZCxLQUFLLEVBQ0wsTUFBTSxFQUVOLFFBQVEsRUFDUixNQUFNLEVBRVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUd2RCxPQUFPLEtBQUssY0FBYyxNQUFNLDRCQUE0QixDQUFDOztBQUU3RCxNQUFNLE9BQU8sdUJBQXVCLEdBQUcsSUFBSSxjQUFjLENBQUMsY0FBYyxDQUFDOzs7O0FBRXpFLG1DQUdDOzs7SUFGQyxpQ0FBaUI7O0lBQ2pCLGtDQUFrQjs7Ozs7QUFHcEIsNkJBR0M7OztJQUZDLDhCQUFvQjs7SUFDcEIsd0JBQWdCOzs7OztBQUdsQiw0QkFTQzs7O0lBUkMsc0JBQXVDOztJQUN2Qyx3QkFBaUI7O0lBQ2pCLDRCQUFtQjs7SUFDbkIsNEJBQXFCOztJQUNyQiwyQkFBa0I7O0lBQ2xCLHNCQUFhOztJQUNiLHlCQUFnQjs7SUFDaEIseUJBQWU7O0FBTWpCLE1BQU0sT0FBTyx3QkFBd0I7Ozs7Ozs7SUE2Qm5DLFlBQ1UsVUFBc0IsRUFDdEIsSUFBWSxFQUNKLGdCQUFrQyxFQUNZLHVCQUErQjtRQUhyRixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDSixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ1ksNEJBQXVCLEdBQXZCLHVCQUF1QixDQUFRO1FBZHJGLFVBQUssR0FBRyxJQUFJ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QUFpRDs7SUFDakQseUNBQXdCOztJQUN4Qix5Q0FBeUI7O0lBQ3pCLDZDQUE0Qjs7SUFDNUIseUNBQXdCOztJQUN4Qiw0Q0FBMkI7O0lBQzNCLCtDQUE4Qjs7SUFDOUIsMENBQStDOztJQUMvQyxpREFBcUQ7O0lBR3JELDZDQUFtQzs7SUFDbkMsK0NBQThCOztJQUU5Qix5Q0FBMkM7O0lBQzNDLDJDQUEwRDs7SUFDMUQsMkNBQWdEOztJQUNoRCwwQ0FBMEQ7O0lBQzFELHlDQUEwQzs7SUFFMUMsNENBQWM7Ozs7O0lBRWQsZ0RBQXVDOzs7OztJQUdyQyw4Q0FBOEI7Ozs7O0lBQzlCLHdDQUFvQjs7Ozs7SUFDcEIsb0RBQWtEOzs7OztJQUNsRCwyREFBNkYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSW5qZWN0LFxuICBJbmplY3Rpb25Ub2tlbixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL21hcC9tYXAuc2VydmljZSc7XG5pbXBvcnQgeyBHZW9jb2RlckV2ZW50IH0gZnJvbSAnLi4vbWFwL21hcC50eXBlcyc7XG5pbXBvcnQgeyBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9sLmNvbXBvbmVudCc7XG5cbi8vIEB0cy1pZ25vcmVcbmltcG9ydCAqIGFzIE1hcGJveEdlb2NvZGVyIGZyb20gJ0BtYXBib3gvbWFwYm94LWdsLWdlb2NvZGVyJztcblxuZXhwb3J0IGNvbnN0IE1BUEJPWF9HRU9DT0RFUl9BUElfS0VZID0gbmV3IEluamVjdGlvblRva2VuKCdNYXBib3hBcGlLZXknKTtcblxuZXhwb3J0IGludGVyZmFjZSBMbmdMYXRMaXRlcmFsIHtcbiAgbGF0aXR1ZGU6IG51bWJlcjtcbiAgbG9uZ2l0dWRlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzdWx0cyBleHRlbmRzIEdlb0pTT04uRmVhdHVyZUNvbGxlY3Rpb248R2VvSlNPTi5Qb2ludD4ge1xuICBhdHRyaWJ1dGlvbjogc3RyaW5nO1xuICBxdWVyeTogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzdWx0IGV4dGVuZHMgR2VvSlNPTi5GZWF0dXJlPEdlb0pTT04uUG9pbnQ+IHtcbiAgYmJveDogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG4gIGNlbnRlcjogbnVtYmVyW107XG4gIHBsYWNlX25hbWU6IHN0cmluZztcbiAgcGxhY2VfdHlwZTogc3RyaW5nW107XG4gIHJlbGV2YW5jZTogbnVtYmVyO1xuICB0ZXh0OiBzdHJpbmc7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgY29udGV4dDogYW55W107XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZ2xHZW9jb2Rlcl0nXG59KVxuZXhwb3J0IGNsYXNzIEdlb2NvZGVyQ29udHJvbERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgR2VvY29kZXJFdmVudCB7XG4gIC8qIEluaXQgaW5wdXRzICovXG4gIEBJbnB1dCgpIGNvdW50cmllcz86IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHpvb20/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGJib3g/OiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbiAgQElucHV0KCkgdHlwZXM/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZseVRvPzogYm9vbGVhbjtcbiAgQElucHV0KCkgbWluTGVuZ3RoPzogbnVtYmVyO1xuICBASW5wdXQoKSBsaW1pdD86IG51bWJlcjtcbiAgQElucHV0KCkgbGFuZ3VhZ2U/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFjY2Vzc1Rva2VuPzogc3RyaW5nO1xuICBASW5wdXQoKSBmaWx0ZXI/OiAoZmVhdHVyZTogUmVzdWx0KSA9PiBib29sZWFuO1xuICBASW5wdXQoKSBsb2NhbEdlb2NvZGVyPzogKHF1ZXJ5OiBzdHJpbmcpID0+IFJlc3VsdFtdO1xuXG4gIC8qIER5bmFtaWMgaW5wdXRzICovXG4gIEBJbnB1dCgpIHByb3hpbWl0eT86IExuZ0xhdExpdGVyYWw7XG4gIEBJbnB1dCgpIHNlYXJjaElucHV0Pzogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBjbGVhciA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIGxvYWRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPHsgcXVlcnk6IHN0cmluZyB9PigpO1xuICBAT3V0cHV0KCkgcmVzdWx0cyA9IG5ldyBFdmVudEVtaXR0ZXI8UmVzdWx0cz4oKTtcbiAgQE91dHB1dCgpIHJlc3VsdCA9IG5ldyBFdmVudEVtaXR0ZXI8eyByZXN1bHQ6IFJlc3VsdCB9PigpO1xuICBAT3V0cHV0KCkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBnZW9jb2RlcjogYW55O1xuXG4gIHByaXZhdGUgbGFzdFJlc3VsdElkPzogc3RyaW5nIHwgbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgTWFwU2VydmljZTogTWFwU2VydmljZSxcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBASG9zdCgpIHByaXZhdGUgQ29udHJvbENvbXBvbmVudDogQ29udHJvbENvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1BUEJPWF9HRU9DT0RFUl9BUElfS0VZKSBwcml2YXRlIHJlYWRvbmx5IE1BUEJPWF9HRU9DT0RFUl9BUElfS0VZOiBzdHJpbmdcbiAgKSB7IH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5NYXBTZXJ2aWNlLm1hcENyZWF0ZWQkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5Db250cm9sQ29tcG9uZW50LmNvbnRyb2wpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBbm90aGVyIGNvbnRyb2wgaXMgYWxyZWFkeSBzZXQgZm9yIHRoaXMgY29udHJvbCcpO1xuICAgICAgfVxuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgcHJveGltaXR5OiB0aGlzLnByb3hpbWl0eSxcbiAgICAgICAgY291bnRyaWVzOiB0aGlzLmNvdW50cmllcyxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIsXG4gICAgICAgIHpvb206IHRoaXMuem9vbSxcbiAgICAgICAgYmJveDogdGhpcy5iYm94LFxuICAgICAgICB0eXBlczogdGhpcy50eXBlcyxcbiAgICAgICAgZmx5VG86IHRoaXMuZmx5VG8sXG4gICAgICAgIG1pbkxlbmd0aDogdGhpcy5taW5MZW5ndGgsXG4gICAgICAgIGxpbWl0OiB0aGlzLmxpbWl0LFxuICAgICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZSxcbiAgICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlcixcbiAgICAgICAgbG9jYWxHZW9jb2RlcjogdGhpcy5sb2NhbEdlb2NvZGVyLFxuICAgICAgICBhY2Nlc3NUb2tlbjogdGhpcy5hY2Nlc3NUb2tlbiB8fCB0aGlzLk1BUEJPWF9HRU9DT0RFUl9BUElfS0VZXG4gICAgICB9O1xuXG4gICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB0a2V5ID0gPGtleW9mIHR5cGVvZiBvcHRpb25zPmtleTtcbiAgICAgICAgaWYgKG9wdGlvbnNbdGtleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zW3RrZXldO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZ2VvY29kZXIgPSBuZXcgTWFwYm94R2VvY29kZXIob3B0aW9ucyk7XG4gICAgICB0aGlzLmhvb2tFdmVudHModGhpcyk7XG4gICAgICB0aGlzLmFkZENvbnRyb2woKTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5zZWFyY2hJbnB1dCkge1xuICAgICAgdGhpcy5NYXBTZXJ2aWNlLm1hcExvYWRlZCQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5nZW9jb2Rlci5xdWVyeSh0aGlzLnNlYXJjaElucHV0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoIXRoaXMuZ2VvY29kZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMucHJveGltaXR5ICYmICFjaGFuZ2VzLnByb3hpbWl0eS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuZ2VvY29kZXIuc2V0UHJveGltaXR5KGNoYW5nZXMucHJveGltaXR5LmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnNlYXJjaElucHV0KSB7XG4gICAgICB0aGlzLmdlb2NvZGVyLnF1ZXJ5KHRoaXMuc2VhcmNoSW5wdXQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkQ29udHJvbCgpIHtcbiAgICB0aGlzLkNvbnRyb2xDb21wb25lbnQuY29udHJvbCA9IHRoaXMuZ2VvY29kZXI7XG4gICAgdGhpcy5NYXBTZXJ2aWNlLmFkZENvbnRyb2woXG4gICAgICB0aGlzLkNvbnRyb2xDb21wb25lbnQuY29udHJvbCxcbiAgICAgIHRoaXMuQ29udHJvbENvbXBvbmVudC5wb3NpdGlvblxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhvb2tFdmVudHMoZXZlbnRzOiBHZW9jb2RlckV2ZW50KSB7XG4gICAgaWYgKGV2ZW50cy5yZXN1bHRzLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZ2VvY29kZXIub24oJ3Jlc3VsdHMnLCAoZXZ0OiBSZXN1bHRzKSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5yZXN1bHRzLmVtaXQoZXZ0KSkpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLnJlc3VsdC5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmdlb2NvZGVyLm9uKCdyZXN1bHQnLCAoZXZ0OiB7IHJlc3VsdDogUmVzdWx0IH0pID0+IHtcbiAgICAgICAgLy8gV29ya2Fyb3VkIGlzc3VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXBib3gvbWFwYm94LWdsLWdlb2NvZGVyL2lzc3Vlcy85OVxuICAgICAgICBpZiAodGhpcy5sYXN0UmVzdWx0SWQgIT09IGV2dC5yZXN1bHQuaWQpIHtcbiAgICAgICAgICB0aGlzLmxhc3RSZXN1bHRJZCA9IGV2dC5yZXN1bHQuaWQ7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMucmVzdWx0LmVtaXQoZXZ0KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzLmVycm9yLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZ2VvY29kZXIub24oJ2Vycm9yJywgKGV2dDogYW55KSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5lcnJvci5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5sb2FkaW5nLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZ2VvY29kZXIub24oJ2xvYWRpbmcnLCAoZXZ0OiB7IHF1ZXJ5OiBzdHJpbmcgfSkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMubG9hZGluZy5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5jbGVhci5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmdlb2NvZGVyLm9uKCdjbGVhcicsICgpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLmNsZWFyLmVtaXQoKSkpO1xuICAgIH1cblxuICB9XG59XG4iXX0=