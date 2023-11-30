import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./dropdown.directive";
export class DropdownMenuDirective {
    dropdown;
    constructor(dropdown) {
        this.dropdown = dropdown;
    }
    static ɵfac = function DropdownMenuDirective_Factory(t) { return new (t || DropdownMenuDirective)(i0.ɵɵdirectiveInject(i1.DropdownDirective)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DropdownMenuDirective, selectors: [["", "ngxDropdownMenu", ""]], hostVars: 4, hostBindings: function DropdownMenuDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("dropdown-menu", true)("show", ctx.dropdown.isOpen);
        } } });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownMenuDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDropdownMenu]',
                host: {
                    '[class.dropdown-menu]': 'true',
                    '[class.show]': 'dropdown.isOpen'
                }
            }]
    }], function () { return [{ type: i1.DropdownDirective }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdHJlZXZpZXcvc3JjL2xpYi9kaXJlY3RpdmVzL2Ryb3Bkb3duLW1lbnUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWUsTUFBTSxlQUFlLENBQUM7OztBQVV2RCxNQUFNLE9BQU8scUJBQXFCO0lBRXZCO0lBRFQsWUFDUyxRQUEyQjtRQUEzQixhQUFRLEdBQVIsUUFBUSxDQUFtQjtJQUNoQyxDQUFDOytFQUhNLHFCQUFxQjs2REFBckIscUJBQXFCOzs7O3VGQUFyQixxQkFBcUI7Y0FQakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLElBQUksRUFBRTtvQkFDSix1QkFBdUIsRUFBRSxNQUFNO29CQUMvQixjQUFjLEVBQUUsaUJBQWlCO2lCQUNsQzthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHJvcGRvd25EaXJlY3RpdmUgfSBmcm9tICcuL2Ryb3Bkb3duLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ3hEcm9wZG93bk1lbnVdJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZHJvcGRvd24tbWVudV0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5zaG93XSc6ICdkcm9wZG93bi5pc09wZW4nXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25NZW51RGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRyb3Bkb3duOiBEcm9wZG93bkRpcmVjdGl2ZVxuICApIHsgfVxufVxuIl19