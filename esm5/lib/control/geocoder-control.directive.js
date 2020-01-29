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
export var MAPBOX_GEOCODER_API_KEY = new InjectionToken('MapboxApiKey');
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
var GeocoderControlDirective = /** @class */ (function () {
    function GeocoderControlDirective(MapService, zone, ControlComponent, MAPBOX_GEOCODER_API_KEY) {
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
    GeocoderControlDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.MapService.mapCreated$.subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.ControlComponent.control) {
                throw new Error('Another control is already set for this control');
            }
            /** @type {?} */
            var options = {
                proximity: _this.proximity,
                countries: _this.countries,
                placeholder: _this.placeholder,
                zoom: _this.zoom,
                bbox: _this.bbox,
                types: _this.types,
                flyTo: _this.flyTo,
                minLength: _this.minLength,
                limit: _this.limit,
                language: _this.language,
                filter: _this.filter,
                localGeocoder: _this.localGeocoder,
                accessToken: _this.accessToken || _this.MAPBOX_GEOCODER_API_KEY
            };
            Object.keys(options).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                /** @type {?} */
                var tkey = (/** @type {?} */ (key));
                if (options[tkey] === undefined) {
                    delete options[tkey];
                }
            }));
            _this.geocoder = new MapboxGeocoder(options);
            _this.hookEvents(_this);
            _this.addControl();
        }));
        if (this.searchInput) {
            this.MapService.mapLoaded$.subscribe((/**
             * @return {?}
             */
            function () {
                _this.geocoder.query(_this.searchInput);
            }));
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    GeocoderControlDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this.geocoder) {
            return;
        }
        if (changes.proximity && !changes.proximity.isFirstChange()) {
            this.geocoder.setProximity(changes.proximity.currentValue);
        }
        if (changes.searchInput) {
            this.geocoder.query(this.searchInput);
        }
    };
    /**
     * @private
     * @return {?}
     */
    GeocoderControlDirective.prototype.addControl = /**
     * @private
     * @return {?}
     */
    function () {
        this.ControlComponent.control = this.geocoder;
        this.MapService.addControl(this.ControlComponent.control, this.ControlComponent.position);
    };
    /**
     * @private
     * @param {?} events
     * @return {?}
     */
    GeocoderControlDirective.prototype.hookEvents = /**
     * @private
     * @param {?} events
     * @return {?}
     */
    function (events) {
        var _this = this;
        if (events.results.observers.length) {
            this.geocoder.on('results', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.results.emit(evt); })); }));
        }
        if (events.result.observers.length) {
            this.geocoder.on('result', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) {
                // Workaroud issue https://github.com/mapbox/mapbox-gl-geocoder/issues/99
                if (_this.lastResultId !== evt.result.id) {
                    _this.lastResultId = evt.result.id;
                    _this.zone.run((/**
                     * @return {?}
                     */
                    function () { return events.result.emit(evt); }));
                }
            }));
        }
        if (events.error.observers.length) {
            this.geocoder.on('error', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.error.emit(evt); })); }));
        }
        if (events.loading.observers.length) {
            this.geocoder.on('loading', (/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.loading.emit(evt); })); }));
        }
        if (events.clear.observers.length) {
            this.geocoder.on('clear', (/**
             * @return {?}
             */
            function () { return _this.zone.run((/**
             * @return {?}
             */
            function () { return events.clear.emit(); })); }));
        }
    };
    GeocoderControlDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mglGeocoder]'
                },] }
    ];
    /** @nocollapse */
    GeocoderControlDirective.ctorParameters = function () { return [
        { type: MapService },
        { type: NgZone },
        { type: ControlComponent, decorators: [{ type: Host }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [MAPBOX_GEOCODER_API_KEY,] }] }
    ]; };
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
    return GeocoderControlDirective;
}());
export { GeocoderControlDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvY29kZXItY29udHJvbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWFwYm94LWdsLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvZ2VvY29kZXItY29udHJvbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFDWixJQUFJLEVBQ0osTUFBTSxFQUNOLGNBQWMsRUFDZCxLQUFLLEVBQ0wsTUFBTSxFQUVOLFFBQVEsRUFDUixNQUFNLEVBRVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUd2RCxPQUFPLEtBQUssY0FBYyxNQUFNLDRCQUE0QixDQUFDOztBQUU3RCxNQUFNLEtBQU8sdUJBQXVCLEdBQUcsSUFBSSxjQUFjLENBQUMsY0FBYyxDQUFDOzs7O0FBRXpFLG1DQUdDOzs7SUFGQyxpQ0FBaUI7O0lBQ2pCLGtDQUFrQjs7Ozs7QUFHcEIsNkJBR0M7OztJQUZDLDhCQUFvQjs7SUFDcEIsd0JBQWdCOzs7OztBQUdsQiw0QkFTQzs7O0lBUkMsc0JBQXVDOztJQUN2Qyx3QkFBaUI7O0lBQ2pCLDRCQUFtQjs7SUFDbkIsNEJBQXFCOztJQUNyQiwyQkFBa0I7O0lBQ2xCLHNCQUFhOztJQUNiLHlCQUFnQjs7SUFDaEIseUJBQWU7O0FBR2pCO0lBZ0NFLGtDQUNVLFVBQXNCLEVBQ3RCLElBQVksRUFDSixnQkFBa0MsRUFDWSx1QkFBK0I7UUFIckYsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ0oscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNZLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBUTtRQWRyRixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNqQyxZ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QU07d0JBQ04sTUFBTTs7SUErRlQsK0JBQUM7Q0FBQSxBQXpIRCxJQXlIQztTQXRIWSx3QkFBd0I7OztJQUVuQyw2Q0FBNEI7O0lBQzVCLCtDQUE4Qjs7SUFDOUIsd0NBQXVCOztJQUN2Qix3Q0FBaUQ7O0lBQ2pELHlDQUF3Qjs7SUFDeEIseUNBQXlCOztJQUN6Qiw2Q0FBNEI7O0lBQzVCLHlDQUF3Qjs7SUFDeEIsNENBQTJCOztJQUMzQiwrQ0FBOEI7O0lBQzlCLDBDQUErQzs7SUFDL0MsaURBQXFEOztJQUdyRCw2Q0FBbUM7O0lBQ25DLCtDQUE4Qjs7SUFFOUIseUNBQTJDOztJQUMzQywyQ0FBMEQ7O0lBQzFELDJDQUFnRDs7SUFDaEQsMENBQTBEOztJQUMxRCx5Q0FBMEM7O0lBRTFDLDRDQUFjOzs7OztJQUVkLGdEQUF1Qzs7Ozs7SUFHckMsOENBQThCOzs7OztJQUM5Qix3Q0FBb0I7Ozs7O0lBQ3BCLG9EQUFrRDs7Ozs7SUFDbEQsMkRBQTZGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIEluamVjdCxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi9tYXAvbWFwLnNlcnZpY2UnO1xuaW1wb3J0IHsgR2VvY29kZXJFdmVudCB9IGZyb20gJy4uL21hcC9tYXAudHlwZXMnO1xuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbC5jb21wb25lbnQnO1xuXG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgKiBhcyBNYXBib3hHZW9jb2RlciBmcm9tICdAbWFwYm94L21hcGJveC1nbC1nZW9jb2Rlcic7XG5cbmV4cG9ydCBjb25zdCBNQVBCT1hfR0VPQ09ERVJfQVBJX0tFWSA9IG5ldyBJbmplY3Rpb25Ub2tlbignTWFwYm94QXBpS2V5Jyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG5nTGF0TGl0ZXJhbCB7XG4gIGxhdGl0dWRlOiBudW1iZXI7XG4gIGxvbmdpdHVkZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3VsdHMgZXh0ZW5kcyBHZW9KU09OLkZlYXR1cmVDb2xsZWN0aW9uPEdlb0pTT04uUG9pbnQ+IHtcbiAgYXR0cmlidXRpb246IHN0cmluZztcbiAgcXVlcnk6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3VsdCBleHRlbmRzIEdlb0pTT04uRmVhdHVyZTxHZW9KU09OLlBvaW50PiB7XG4gIGJib3g6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuICBjZW50ZXI6IG51bWJlcltdO1xuICBwbGFjZV9uYW1lOiBzdHJpbmc7XG4gIHBsYWNlX3R5cGU6IHN0cmluZ1tdO1xuICByZWxldmFuY2U6IG51bWJlcjtcbiAgdGV4dDogc3RyaW5nO1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGNvbnRleHQ6IGFueVtdO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWdsR2VvY29kZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBHZW9jb2RlckNvbnRyb2xEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIEdlb2NvZGVyRXZlbnQge1xuICAvKiBJbml0IGlucHV0cyAqL1xuICBASW5wdXQoKSBjb3VudHJpZXM/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBASW5wdXQoKSB6b29tPzogbnVtYmVyO1xuICBASW5wdXQoKSBiYm94PzogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG4gIEBJbnB1dCgpIHR5cGVzPzogc3RyaW5nO1xuICBASW5wdXQoKSBmbHlUbz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1pbkxlbmd0aD86IG51bWJlcjtcbiAgQElucHV0KCkgbGltaXQ/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGxhbmd1YWdlPzogc3RyaW5nO1xuICBASW5wdXQoKSBhY2Nlc3NUb2tlbj86IHN0cmluZztcbiAgQElucHV0KCkgZmlsdGVyPzogKGZlYXR1cmU6IFJlc3VsdCkgPT4gYm9vbGVhbjtcbiAgQElucHV0KCkgbG9jYWxHZW9jb2Rlcj86IChxdWVyeTogc3RyaW5nKSA9PiBSZXN1bHRbXTtcblxuICAvKiBEeW5hbWljIGlucHV0cyAqL1xuICBASW5wdXQoKSBwcm94aW1pdHk/OiBMbmdMYXRMaXRlcmFsO1xuICBASW5wdXQoKSBzZWFyY2hJbnB1dD86IHN0cmluZztcblxuICBAT3V0cHV0KCkgY2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBsb2FkaW5nID0gbmV3IEV2ZW50RW1pdHRlcjx7IHF1ZXJ5OiBzdHJpbmcgfT4oKTtcbiAgQE91dHB1dCgpIHJlc3VsdHMgPSBuZXcgRXZlbnRFbWl0dGVyPFJlc3VsdHM+KCk7XG4gIEBPdXRwdXQoKSByZXN1bHQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgcmVzdWx0OiBSZXN1bHQgfT4oKTtcbiAgQE91dHB1dCgpIGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgZ2VvY29kZXI6IGFueTtcblxuICBwcml2YXRlIGxhc3RSZXN1bHRJZD86IHN0cmluZyB8IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIE1hcFNlcnZpY2U6IE1hcFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgQEhvc3QoKSBwcml2YXRlIENvbnRyb2xDb21wb25lbnQ6IENvbnRyb2xDb21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVBCT1hfR0VPQ09ERVJfQVBJX0tFWSkgcHJpdmF0ZSByZWFkb25seSBNQVBCT1hfR0VPQ09ERVJfQVBJX0tFWTogc3RyaW5nXG4gICkgeyB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuTWFwU2VydmljZS5tYXBDcmVhdGVkJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuQ29udHJvbENvbXBvbmVudC5jb250cm9sKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQW5vdGhlciBjb250cm9sIGlzIGFscmVhZHkgc2V0IGZvciB0aGlzIGNvbnRyb2wnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIHByb3hpbWl0eTogdGhpcy5wcm94aW1pdHksXG4gICAgICAgIGNvdW50cmllczogdGhpcy5jb3VudHJpZXMsXG4gICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyLFxuICAgICAgICB6b29tOiB0aGlzLnpvb20sXG4gICAgICAgIGJib3g6IHRoaXMuYmJveCxcbiAgICAgICAgdHlwZXM6IHRoaXMudHlwZXMsXG4gICAgICAgIGZseVRvOiB0aGlzLmZseVRvLFxuICAgICAgICBtaW5MZW5ndGg6IHRoaXMubWluTGVuZ3RoLFxuICAgICAgICBsaW1pdDogdGhpcy5saW1pdCxcbiAgICAgICAgbGFuZ3VhZ2U6IHRoaXMubGFuZ3VhZ2UsXG4gICAgICAgIGZpbHRlcjogdGhpcy5maWx0ZXIsXG4gICAgICAgIGxvY2FsR2VvY29kZXI6IHRoaXMubG9jYWxHZW9jb2RlcixcbiAgICAgICAgYWNjZXNzVG9rZW46IHRoaXMuYWNjZXNzVG9rZW4gfHwgdGhpcy5NQVBCT1hfR0VPQ09ERVJfQVBJX0tFWVxuICAgICAgfTtcblxuICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdGtleSA9IDxrZXlvZiB0eXBlb2Ygb3B0aW9ucz5rZXk7XG4gICAgICAgIGlmIChvcHRpb25zW3RrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBkZWxldGUgb3B0aW9uc1t0a2V5XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmdlb2NvZGVyID0gbmV3IE1hcGJveEdlb2NvZGVyKG9wdGlvbnMpO1xuICAgICAgdGhpcy5ob29rRXZlbnRzKHRoaXMpO1xuICAgICAgdGhpcy5hZGRDb250cm9sKCk7XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuc2VhcmNoSW5wdXQpIHtcbiAgICAgIHRoaXMuTWFwU2VydmljZS5tYXBMb2FkZWQkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuZ2VvY29kZXIucXVlcnkodGhpcy5zZWFyY2hJbnB1dCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCF0aGlzLmdlb2NvZGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnByb3hpbWl0eSAmJiAhY2hhbmdlcy5wcm94aW1pdHkuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLmdlb2NvZGVyLnNldFByb3hpbWl0eShjaGFuZ2VzLnByb3hpbWl0eS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5zZWFyY2hJbnB1dCkge1xuICAgICAgdGhpcy5nZW9jb2Rlci5xdWVyeSh0aGlzLnNlYXJjaElucHV0KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZENvbnRyb2woKSB7XG4gICAgdGhpcy5Db250cm9sQ29tcG9uZW50LmNvbnRyb2wgPSB0aGlzLmdlb2NvZGVyO1xuICAgIHRoaXMuTWFwU2VydmljZS5hZGRDb250cm9sKFxuICAgICAgdGhpcy5Db250cm9sQ29tcG9uZW50LmNvbnRyb2wsXG4gICAgICB0aGlzLkNvbnRyb2xDb21wb25lbnQucG9zaXRpb25cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBob29rRXZlbnRzKGV2ZW50czogR2VvY29kZXJFdmVudCkge1xuICAgIGlmIChldmVudHMucmVzdWx0cy5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmdlb2NvZGVyLm9uKCdyZXN1bHRzJywgKGV2dDogUmVzdWx0cykgPT4gdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMucmVzdWx0cy5lbWl0KGV2dCkpKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5yZXN1bHQub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5nZW9jb2Rlci5vbigncmVzdWx0JywgKGV2dDogeyByZXN1bHQ6IFJlc3VsdCB9KSA9PiB7XG4gICAgICAgIC8vIFdvcmthcm91ZCBpc3N1ZSBodHRwczovL2dpdGh1Yi5jb20vbWFwYm94L21hcGJveC1nbC1nZW9jb2Rlci9pc3N1ZXMvOTlcbiAgICAgICAgaWYgKHRoaXMubGFzdFJlc3VsdElkICE9PSBldnQucmVzdWx0LmlkKSB7XG4gICAgICAgICAgdGhpcy5sYXN0UmVzdWx0SWQgPSBldnQucmVzdWx0LmlkO1xuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLnJlc3VsdC5lbWl0KGV2dCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cy5lcnJvci5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmdlb2NvZGVyLm9uKCdlcnJvcicsIChldnQ6IGFueSkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiBldmVudHMuZXJyb3IuZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMubG9hZGluZy5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmdlb2NvZGVyLm9uKCdsb2FkaW5nJywgKGV2dDogeyBxdWVyeTogc3RyaW5nIH0pID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZXZlbnRzLmxvYWRpbmcuZW1pdChldnQpKSk7XG4gICAgfVxuICAgIGlmIChldmVudHMuY2xlYXIub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5nZW9jb2Rlci5vbignY2xlYXInLCAoKSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IGV2ZW50cy5jbGVhci5lbWl0KCkpKTtcbiAgICB9XG5cbiAgfVxufVxuIl19