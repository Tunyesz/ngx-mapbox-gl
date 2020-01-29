/**
 * @fileoverview added by tsickle
 * Generated from: lib/image/image.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter, startWith, switchMap } from 'rxjs/operators';
import { MapService } from '../map/map.service';
var ImageComponent = /** @class */ (function () {
    function ImageComponent(MapService, zone) {
        this.MapService = MapService;
        this.zone = zone;
        this.error = new EventEmitter();
        this.loaded = new EventEmitter();
        this.isAdded = false;
        this.isAdding = false;
    }
    /**
     * @return {?}
     */
    ImageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sub = this.MapService.mapLoaded$.pipe(switchMap((/**
         * @return {?}
         */
        function () { return fromEvent((/** @type {?} */ (_this.MapService.mapInstance)), 'styledata').pipe(startWith(undefined), filter((/**
         * @return {?}
         */
        function () { return !_this.isAdding && !_this.MapService.mapInstance.hasImage(_this.id); }))); }))).subscribe((/**
         * @return {?}
         */
        function () { return _this.init(); }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ImageComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.data && !changes.data.isFirstChange() ||
            changes.options && !changes.options.isFirstChange() ||
            changes.url && !changes.url.isFirstChange()) {
            this.ngOnDestroy();
            this.ngOnInit();
        }
    };
    /**
     * @return {?}
     */
    ImageComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.isAdded) {
            this.MapService.removeImage(this.id);
        }
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageComponent.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_1;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isAdding = true;
                        if (!this.data) return [3 /*break*/, 1];
                        this.MapService.addImage(this.id, this.data, this.options);
                        this.isAdded = true;
                        this.isAdding = false;
                        return [3 /*break*/, 5];
                    case 1:
                        if (!this.url) return [3 /*break*/, 5];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.MapService.loadAndAddImage(this.id, this.url, this.options)];
                    case 3:
                        _a.sent();
                        this.isAdded = true;
                        this.isAdding = false;
                        this.zone.run((/**
                         * @return {?}
                         */
                        function () {
                            _this.loaded.emit();
                        }));
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        this.zone.run((/**
                         * @return {?}
                         */
                        function () {
                            _this.error.emit(error_1);
                        }));
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ImageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mgl-image',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    ImageComponent.ctorParameters = function () { return [
        { type: MapService },
        { type: NgZone }
    ]; };
    ImageComponent.propDecorators = {
        id: [{ type: Input }],
        data: [{ type: Input }],
        options: [{ type: Input }],
        url: [{ type: Input }],
        error: [{ type: Output }],
        loaded: [{ type: Output }]
    };
    return ImageComponent;
}());
export { ImageComponent };
if (false) {
    /** @type {?} */
    ImageComponent.prototype.id;
    /** @type {?} */
    ImageComponent.prototype.data;
    /** @type {?} */
    ImageComponent.prototype.options;
    /** @type {?} */
    ImageComponent.prototype.url;
    /** @type {?} */
    ImageComponent.prototype.error;
    /** @type {?} */
    ImageComponent.prototype.loaded;
    /**
     * @type {?}
     * @private
     */
    ImageComponent.prototype.isAdded;
    /**
     * @type {?}
     * @private
     */
    ImageComponent.prototype.isAdding;
    /**
     * @type {?}
     * @private
     */
    ImageComponent.prototype.sub;
    /**
     * @type {?}
     * @private
     */
    ImageComponent.prototype.MapService;
    /**
     * @type {?}
     * @private
     */
    ImageComponent.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hcGJveC1nbC8iLCJzb3VyY2VzIjpbImxpYi9pbWFnZS9pbWFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFJTixNQUFNLEVBRVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR2hEO0lBb0JFLHdCQUNVLFVBQXNCLEVBQ3RCLElBQVk7UUFEWixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFNBQUksR0FBSixJQUFJLENBQVE7UUFUWixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQXNCLENBQUM7UUFDL0MsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFcEMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBTXJCLENBQUM7Ozs7SUFFTCxpQ0FBUTs7O0lBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUN4QyxTQUFTOzs7UUFBQyxjQUFNLE9BQUEsU0FBUyxDQUFDLG1CQUFLLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFBLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUMzRSxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQ3BCLE1BQU07OztRQUFDLGNBQU0sT0FBQSxDQUFDLEtBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FB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XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBzdGFydFdpdGgsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi9tYXAvbWFwLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFwSW1hZ2VEYXRhLCBNYXBJbWFnZU9wdGlvbnMgfSBmcm9tICcuLi9tYXAvbWFwLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWdsLWltYWdlJyxcbiAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIC8qIEluaXQgaW5wdXRzICovXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG5cbiAgLyogRHluYW1pYyBpbnB1dHMgKi9cbiAgQElucHV0KCkgZGF0YT86IE1hcEltYWdlRGF0YTtcbiAgQElucHV0KCkgb3B0aW9ucz86IE1hcEltYWdlT3B0aW9ucztcbiAgQElucHV0KCkgdXJsPzogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8eyBzdGF0dXM6IG51bWJlciB9PigpO1xuICBAT3V0cHV0KCkgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIHByaXZhdGUgaXNBZGRlZCA9IGZhbHNlO1xuICBwcml2YXRlIGlzQWRkaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBNYXBTZXJ2aWNlOiBNYXBTZXJ2aWNlLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWIgPSB0aGlzLk1hcFNlcnZpY2UubWFwTG9hZGVkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKCgpID0+IGZyb21FdmVudCg8YW55PnRoaXMuTWFwU2VydmljZS5tYXBJbnN0YW5jZSwgJ3N0eWxlZGF0YScpLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aCh1bmRlZmluZWQpLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gIXRoaXMuaXNBZGRpbmcgJiYgIXRoaXMuTWFwU2VydmljZS5tYXBJbnN0YW5jZS5oYXNJbWFnZSh0aGlzLmlkKSlcbiAgICAgICkpLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHRoaXMuaW5pdCgpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoXG4gICAgICBjaGFuZ2VzLmRhdGEgJiYgIWNoYW5nZXMuZGF0YS5pc0ZpcnN0Q2hhbmdlKCkgfHxcbiAgICAgIGNoYW5nZXMub3B0aW9ucyAmJiAhY2hhbmdlcy5vcHRpb25zLmlzRmlyc3RDaGFuZ2UoKSB8fFxuICAgICAgY2hhbmdlcy51cmwgJiYgIWNoYW5nZXMudXJsLmlzRmlyc3RDaGFuZ2UoKVxuICAgICkge1xuICAgICAgdGhpcy5uZ09uRGVzdHJveSgpO1xuICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmlzQWRkZWQpIHtcbiAgICAgIHRoaXMuTWFwU2VydmljZS5yZW1vdmVJbWFnZSh0aGlzLmlkKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3ViKSB7XG4gICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaW5pdCgpIHtcbiAgICB0aGlzLmlzQWRkaW5nID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICB0aGlzLk1hcFNlcnZpY2UuYWRkSW1hZ2UoXG4gICAgICAgIHRoaXMuaWQsXG4gICAgICAgIHRoaXMuZGF0YSxcbiAgICAgICAgdGhpcy5vcHRpb25zXG4gICAgICApO1xuICAgICAgdGhpcy5pc0FkZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNBZGRpbmcgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudXJsKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLk1hcFNlcnZpY2UubG9hZEFuZEFkZEltYWdlKFxuICAgICAgICAgIHRoaXMuaWQsXG4gICAgICAgICAgdGhpcy51cmwsXG4gICAgICAgICAgdGhpcy5vcHRpb25zXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuaXNBZGRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNBZGRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkZWQuZW1pdCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZXJyb3IuZW1pdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19