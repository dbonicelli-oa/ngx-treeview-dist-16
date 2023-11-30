import { Directive, Input, Output, HostBinding, HostListener, EventEmitter } from '@angular/core';
import { isNil } from 'lodash';
import * as i0 from "@angular/core";
export class DropdownDirective {
    toggleElement;
    internalOpen = false;
    openChange = new EventEmitter();
    get isOpen() {
        return this.internalOpen;
    }
    onKeyupEsc() {
        this.close();
    }
    onDocumentClick(event) {
        if (event.button !== 2 && !this.isEventFromToggle(event)) {
            this.close();
        }
    }
    open() {
        if (!this.internalOpen) {
            this.internalOpen = true;
            this.openChange.emit(true);
        }
    }
    close() {
        if (this.internalOpen) {
            this.internalOpen = false;
            this.openChange.emit(false);
        }
    }
    toggle() {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    isEventFromToggle(event) {
        return !isNil(this.toggleElement) && this.toggleElement.contains(event.target);
    }
    static ɵfac = function DropdownDirective_Factory(t) { return new (t || DropdownDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DropdownDirective, selectors: [["", "ngxDropdown", ""]], hostVars: 2, hostBindings: function DropdownDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keyup.esc", function DropdownDirective_keyup_esc_HostBindingHandler() { return ctx.onKeyupEsc(); })("click", function DropdownDirective_click_HostBindingHandler($event) { return ctx.onDocumentClick($event); }, false, i0.ɵɵresolveDocument);
        } if (rf & 2) {
            i0.ɵɵclassProp("show", ctx.isOpen);
        } }, inputs: { internalOpen: ["open", "internalOpen"] }, outputs: { openChange: "openChange" }, exportAs: ["ngxDropdown"] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDropdown]',
                exportAs: 'ngxDropdown'
            }]
    }], null, { internalOpen: [{
            type: Input,
            args: ['open']
        }], openChange: [{
            type: Output
        }], isOpen: [{
            type: HostBinding,
            args: ['class.show']
        }], onKeyupEsc: [{
            type: HostListener,
            args: ['keyup.esc']
        }], onDocumentClick: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRyZWV2aWV3L3NyYy9saWIvZGlyZWN0aXZlcy9kcm9wZG93bi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7O0FBTS9CLE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsYUFBYSxDQUFNO0lBQ0osWUFBWSxHQUFHLEtBQUssQ0FBQztJQUMxQixVQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUVuRCxJQUErQixNQUFNO1FBQ25DLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBR0QsVUFBVTtRQUNSLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFHRCxlQUFlLENBQUMsS0FBaUI7UUFDL0IsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4RCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtJQUNILENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVPLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRixDQUFDOzJFQTdDVSxpQkFBaUI7NkRBQWpCLGlCQUFpQjswR0FBakIsZ0JBQVksbUZBQVosMkJBQ1Y7Ozs7O3VGQURVLGlCQUFpQjtjQUo3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSxhQUFhO2FBQ3hCO2dCQUdnQixZQUFZO2tCQUExQixLQUFLO21CQUFDLE1BQU07WUFDSCxVQUFVO2tCQUFuQixNQUFNO1lBRXdCLE1BQU07a0JBQXBDLFdBQVc7bUJBQUMsWUFBWTtZQUt6QixVQUFVO2tCQURULFlBQVk7bUJBQUMsV0FBVztZQU16QixlQUFlO2tCQURkLFlBQVk7bUJBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNOaWwgfSBmcm9tICdsb2Rhc2gnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd4RHJvcGRvd25dJyxcbiAgZXhwb3J0QXM6ICduZ3hEcm9wZG93bidcbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25EaXJlY3RpdmUge1xuICB0b2dnbGVFbGVtZW50OiBhbnk7XG4gIEBJbnB1dCgnb3BlbicpIGludGVybmFsT3BlbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgb3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNob3cnKSBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsT3BlbjtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwLmVzYycpXG4gIG9uS2V5dXBFc2MoKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxuICBvbkRvY3VtZW50Q2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQuYnV0dG9uICE9PSAyICYmICF0aGlzLmlzRXZlbnRGcm9tVG9nZ2xlKGV2ZW50KSkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmludGVybmFsT3Blbikge1xuICAgICAgdGhpcy5pbnRlcm5hbE9wZW4gPSB0cnVlO1xuICAgICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW50ZXJuYWxPcGVuKSB7XG4gICAgICB0aGlzLmludGVybmFsT3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0V2ZW50RnJvbVRvZ2dsZShldmVudDogTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhaXNOaWwodGhpcy50b2dnbGVFbGVtZW50KSAmJiB0aGlzLnRvZ2dsZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcbiAgfVxufVxuIl19