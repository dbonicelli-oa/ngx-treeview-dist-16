import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./dropdown.directive";
export class DropdownToggleDirective {
    dropdown;
    constructor(dropdown, elementRef) {
        this.dropdown = dropdown;
        dropdown.toggleElement = elementRef.nativeElement;
    }
    static ɵfac = function DropdownToggleDirective_Factory(t) { return new (t || DropdownToggleDirective)(i0.ɵɵdirectiveInject(i1.DropdownDirective), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DropdownToggleDirective, selectors: [["", "ngxDropdownToggle", ""]], hostAttrs: ["aria-haspopup", "true", 1, "dropdown-toggle"], hostVars: 1, hostBindings: function DropdownToggleDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function DropdownToggleDirective_click_HostBindingHandler() { return ctx.dropdown.toggle(); });
        } if (rf & 2) {
            i0.ɵɵattribute("aria-expanded", ctx.dropdown.isOpen);
        } } });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownToggleDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDropdownToggle]',
                host: {
                    class: 'dropdown-toggle',
                    'aria-haspopup': 'true',
                    '[attr.aria-expanded]': 'dropdown.isOpen',
                    '(click)': 'dropdown.toggle()'
                }
            }]
    }], function () { return [{ type: i1.DropdownDirective }, { type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tdG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10cmVldmlldy9zcmMvbGliL2RpcmVjdGl2ZXMvZHJvcGRvd24tdG9nZ2xlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sZUFBZSxDQUFDOzs7QUFZdEQsTUFBTSxPQUFPLHVCQUF1QjtJQUV6QjtJQURULFlBQ1MsUUFBMkIsRUFDbEMsVUFBc0I7UUFEZixhQUFRLEdBQVIsUUFBUSxDQUFtQjtRQUdsQyxRQUFRLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDcEQsQ0FBQztpRkFOVSx1QkFBdUI7NkRBQXZCLHVCQUF1Qjt3R0FBdkIscUJBQWlCOzs7Ozt1RkFBakIsdUJBQXVCO2NBVG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLGlCQUFpQjtvQkFDeEIsZUFBZSxFQUFFLE1BQU07b0JBQ3ZCLHNCQUFzQixFQUFFLGlCQUFpQjtvQkFDekMsU0FBUyxFQUFFLG1CQUFtQjtpQkFDL0I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHJvcGRvd25EaXJlY3RpdmUgfSBmcm9tICcuL2Ryb3Bkb3duLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ3hEcm9wZG93blRvZ2dsZV0nLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdkcm9wZG93bi10b2dnbGUnLFxuICAgICdhcmlhLWhhc3BvcHVwJzogJ3RydWUnLFxuICAgICdbYXR0ci5hcmlhLWV4cGFuZGVkXSc6ICdkcm9wZG93bi5pc09wZW4nLFxuICAgICcoY2xpY2spJzogJ2Ryb3Bkb3duLnRvZ2dsZSgpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRyb3Bkb3duOiBEcm9wZG93bkRpcmVjdGl2ZSxcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICkge1xuICAgIGRyb3Bkb3duLnRvZ2dsZUVsZW1lbnQgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbiJdfQ==