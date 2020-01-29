/**
 * @fileoverview added by tsickle
 * Generated from: lib/control/control.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { MapService } from '../map/map.service';
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, } from '@angular/core';
export class CustomControl {
    /**
     * @param {?} container
     */
    constructor(container) {
        this.container = container;
    }
    /**
     * @return {?}
     */
    onAdd() {
        return this.container;
    }
    /**
     * @return {?}
     */
    onRemove() {
        return (/** @type {?} */ (this.container.parentNode)).removeChild(this.container);
    }
    /**
     * @return {?}
     */
    getDefaultPosition() {
        return 'top-right';
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomControl.prototype.container;
}
export class ControlComponent {
    /**
     * @param {?} MapService
     */
    constructor(MapService) {
        this.MapService = MapService;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.content.nativeElement.childNodes.length) {
            this.control = new CustomControl(this.content.nativeElement);
            this.MapService.mapCreated$.subscribe((/**
             * @return {?}
             */
            () => {
                this.MapService.addControl((/** @type {?} */ (this.control)), this.position);
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.control) {
            this.MapService.removeControl(this.control);
        }
    }
}
ControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'mgl-control',
                template: '<div class="mapboxgl-ctrl" #content><ng-content></ng-content></div>',
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ControlComponent.ctorParameters = () => [
    { type: MapService }
];
ControlComponent.propDecorators = {
    position: [{ type: Input }],
    content: [{ type: ViewChild, args: ['content', { static: true },] }]
};
if (false) {
    /** @type {?} */
    ControlComponent.prototype.position;
    /** @type {?} */
    ControlComponent.prototype.content;
    /** @type {?} */
    ControlComponent.prototype.control;
    /**
     * @type {?}
     * @private
     */
    ControlComponent.prototype.MapService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWFwYm94LWdsLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsTUFBTSxPQUFPLGFBQWE7Ozs7SUFDeEIsWUFDVSxTQUFzQjtRQUF0QixjQUFTLEdBQVQsU0FBUyxDQUFhO0lBRWhDLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sT0FBTyxtQkFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0NBQ0Y7Ozs7OztJQWZHLGtDQUE4Qjs7QUFzQmxDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFRM0IsWUFDVSxVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQzVCLENBQUM7Ozs7SUFFTCxrQkFBa0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQ2hELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM3RCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLG1CQUFBLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0QsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSxxRUFBcUU7Z0JBQy9FLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBbENRLFVBQVU7Ozt1QkFxQ2hCLEtBQUs7c0JBRUwsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7SUFGdEMsb0NBQThFOztJQUU5RSxtQ0FBNEQ7O0lBRTVELG1DQUE0Qjs7Ozs7SUFHMUIsc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJvbCwgSUNvbnRyb2wgfSBmcm9tICdtYXBib3gtZ2wnO1xuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL21hcC9tYXAuc2VydmljZSc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tQ29udHJvbCBpbXBsZW1lbnRzIElDb250cm9sIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxFbGVtZW50XG4gICkge1xuICB9XG5cbiAgb25BZGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICB9XG5cbiAgb25SZW1vdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGUhLnJlbW92ZUNoaWxkKHRoaXMuY29udGFpbmVyKTtcbiAgfVxuXG4gIGdldERlZmF1bHRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gJ3RvcC1yaWdodCc7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWdsLWNvbnRyb2wnLFxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJtYXBib3hnbC1jdHJsXCIgI2NvbnRlbnQ+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xuICAvKiBJbml0IGlucHV0cyAqL1xuICBASW5wdXQoKSBwb3NpdGlvbj86ICd0b3AtbGVmdCcgfCAndG9wLXJpZ2h0JyB8ICdib3R0b20tbGVmdCcgfCAnYm90dG9tLXJpZ2h0JztcblxuICBAVmlld0NoaWxkKCdjb250ZW50JywgeyBzdGF0aWM6IHRydWUgfSkgY29udGVudDogRWxlbWVudFJlZjtcblxuICBjb250cm9sOiBDb250cm9sIHwgSUNvbnRyb2w7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBNYXBTZXJ2aWNlOiBNYXBTZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICh0aGlzLmNvbnRlbnQubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5jb250cm9sID0gbmV3IEN1c3RvbUNvbnRyb2wodGhpcy5jb250ZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgdGhpcy5NYXBTZXJ2aWNlLm1hcENyZWF0ZWQkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuTWFwU2VydmljZS5hZGRDb250cm9sKHRoaXMuY29udHJvbCEsIHRoaXMucG9zaXRpb24pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuY29udHJvbCkge1xuICAgICAgdGhpcy5NYXBTZXJ2aWNlLnJlbW92ZUNvbnRyb2wodGhpcy5jb250cm9sKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==