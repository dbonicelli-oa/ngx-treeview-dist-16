import { Component, EventEmitter, Input, Output } from '@angular/core';
import { isNil } from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "../../models/treeview-config";
import * as i2 from "@angular/common";
function TreeviewItemComponent_div_0_ng_template_1_Template(rf, ctx) { }
function TreeviewItemComponent_div_0_div_2_ngx_treeview_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-treeview-item", 5);
    i0.ɵɵlistener("checkedChange", function TreeviewItemComponent_div_0_div_2_ngx_treeview_item_1_Template_ngx_treeview_item_checkedChange_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r6); const child_r4 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r5.onChildCheckedChange(child_r4, $event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r4 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("config", ctx_r3.config)("item", child_r4)("template", ctx_r3.template);
} }
function TreeviewItemComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, TreeviewItemComponent_div_0_div_2_ngx_treeview_item_1_Template, 1, 3, "ngx-treeview-item", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.item.children);
} }
const _c0 = function (a0, a1, a2) { return { item: a0, onCollapseExpand: a1, onCheckedChange: a2 }; };
function TreeviewItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, TreeviewItemComponent_div_0_ng_template_1_Template, 0, 0, "ng-template", 2);
    i0.ɵɵtemplate(2, TreeviewItemComponent_div_0_div_2_Template, 2, 1, "div", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", i0.ɵɵpureFunction3(3, _c0, ctx_r0.item, ctx_r0.onCollapseExpand, ctx_r0.onCheckedChange));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.item.collapsed);
} }
export class TreeviewItemComponent {
    defaultConfig;
    config;
    template;
    item;
    checkedChange = new EventEmitter();
    constructor(defaultConfig) {
        this.defaultConfig = defaultConfig;
        this.config = this.defaultConfig;
    }
    onCollapseExpand = () => {
        this.item.collapsed = !this.item.collapsed;
    };
    onCheckedChange = () => {
        const checked = this.item.checked;
        if (!isNil(this.item.children) && !this.config.decoupleChildFromParent) {
            this.item.children.forEach(child => child.setCheckedRecursive(checked));
        }
        this.checkedChange.emit(checked);
    };
    onChildCheckedChange(child, checked) {
        if (!this.config.decoupleChildFromParent) {
            let itemChecked = null;
            for (const childItem of this.item.children) {
                if (itemChecked === null) {
                    itemChecked = childItem.checked;
                }
                else if (itemChecked !== childItem.checked) {
                    itemChecked = undefined;
                    break;
                }
            }
            if (itemChecked === null) {
                itemChecked = false;
            }
            if (this.item.checked !== itemChecked) {
                this.item.checked = itemChecked;
            }
        }
        this.checkedChange.emit(checked);
    }
    static ɵfac = function TreeviewItemComponent_Factory(t) { return new (t || TreeviewItemComponent)(i0.ɵɵdirectiveInject(i1.TreeviewConfig)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TreeviewItemComponent, selectors: [["ngx-treeview-item"]], inputs: { config: "config", template: "template", item: "item" }, outputs: { checkedChange: "checkedChange" }, decls: 1, vars: 1, consts: [["class", "treeview-item", 4, "ngIf"], [1, "treeview-item"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], [3, "config", "item", "template", "checkedChange", 4, "ngFor", "ngForOf"], [3, "config", "item", "template", "checkedChange"]], template: function TreeviewItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TreeviewItemComponent_div_0_Template, 3, 7, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.item);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, TreeviewItemComponent], styles: ["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .treeview-item[_ngcontent-%COMP%]{white-space:nowrap}[_nghost-%COMP%]   .treeview-item[_ngcontent-%COMP%]   .treeview-item[_ngcontent-%COMP%]{margin-left:2rem}"] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeviewItemComponent, [{
        type: Component,
        args: [{ selector: 'ngx-treeview-item', template: "<div *ngIf=\"item\" class=\"treeview-item\">\n  <ng-template [ngTemplateOutlet]=\"template\"\n    [ngTemplateOutletContext]=\"{item: item, onCollapseExpand: onCollapseExpand, onCheckedChange: onCheckedChange}\">\n  </ng-template>\n  <div *ngIf=\"!item.collapsed\">\n    <ngx-treeview-item [config]=\"config\" *ngFor=\"let child of item.children\" [item]=\"child\" [template]=\"template\"\n      (checkedChange)=\"onChildCheckedChange(child, $event)\">\n    </ngx-treeview-item>\n  </div>\n</div>\n", styles: [":host{display:block}:host .treeview-item{white-space:nowrap}:host .treeview-item .treeview-item{margin-left:2rem}\n"] }]
    }], function () { return [{ type: i1.TreeviewConfig }]; }, { config: [{
            type: Input
        }], template: [{
            type: Input
        }], item: [{
            type: Input
        }], checkedChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXZpZXctaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdHJlZXZpZXcvc3JjL2xpYi9jb21wb25lbnRzL3RyZWV2aWV3LWl0ZW0vdHJlZXZpZXctaXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdHJlZXZpZXcvc3JjL2xpYi9jb21wb25lbnRzL3RyZWV2aWV3LWl0ZW0vdHJlZXZpZXctaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7SUNJM0IsNENBQ3dEO0lBQXRELDBSQUFpQixlQUFBLDZDQUFtQyxDQUFBLElBQUM7SUFDdkQsaUJBQW9COzs7O0lBRkQsc0NBQWlCLGtCQUFBLDZCQUFBOzs7SUFEdEMsMkJBQTZCO0lBQzNCLDhHQUVvQjtJQUN0QixpQkFBTTs7O0lBSG1ELGVBQWdCO0lBQWhCLDhDQUFnQjs7OztJQUwzRSw4QkFBd0M7SUFDdEMsNEZBRWM7SUFDZCw0RUFJTTtJQUNSLGlCQUFNOzs7SUFSUyxlQUE2QjtJQUE3QixrREFBNkIscUhBQUE7SUFHcEMsZUFBcUI7SUFBckIsNkNBQXFCOztBRE83QixNQUFNLE9BQU8scUJBQXFCO0lBT3RCO0lBTkQsTUFBTSxDQUFpQjtJQUN2QixRQUFRLENBQTJDO0lBQ25ELElBQUksQ0FBZTtJQUNsQixhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUV0RCxZQUNVLGFBQTZCO1FBQTdCLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQUVyQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDbkMsQ0FBQztJQUVELGdCQUFnQixHQUFHLEdBQUcsRUFBRTtRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzdDLENBQUMsQ0FBQTtJQUVELGVBQWUsR0FBRyxHQUFHLEVBQUU7UUFDckIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsRUFBRTtZQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUN6RTtRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQTtJQUVELG9CQUFvQixDQUFDLEtBQW1CLEVBQUUsT0FBZ0I7UUFDeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLEVBQUU7WUFDeEMsSUFBSSxXQUFXLEdBQVksSUFBSSxDQUFDO1lBQ2hDLEtBQUssTUFBTSxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQzFDLElBQUksV0FBVyxLQUFLLElBQUksRUFBRTtvQkFDeEIsV0FBVyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUM7aUJBQ2pDO3FCQUFNLElBQUksV0FBVyxLQUFLLFNBQVMsQ0FBQyxPQUFPLEVBQUU7b0JBQzVDLFdBQVcsR0FBRyxTQUFTLENBQUM7b0JBQ3hCLE1BQU07aUJBQ1A7YUFDRjtZQUVELElBQUksV0FBVyxLQUFLLElBQUksRUFBRTtnQkFDeEIsV0FBVyxHQUFHLEtBQUssQ0FBQzthQUNyQjtZQUVELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssV0FBVyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7YUFDakM7U0FFRjtRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7K0VBL0NVLHFCQUFxQjs2REFBckIscUJBQXFCO1lDWGxDLHNFQVNNOztZQVRBLCtCQUFVO3NFRFdILHFCQUFxQjs7dUZBQXJCLHFCQUFxQjtjQUxqQyxTQUFTOzJCQUNFLG1CQUFtQjtpRUFLcEIsTUFBTTtrQkFBZCxLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNJLGFBQWE7a0JBQXRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzTmlsIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IFRyZWV2aWV3SXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy90cmVldmlldy1pdGVtJztcbmltcG9ydCB7IFRyZWV2aWV3Q29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RyZWV2aWV3LWNvbmZpZyc7XG5pbXBvcnQgeyBUcmVldmlld0l0ZW1UZW1wbGF0ZUNvbnRleHQgfSBmcm9tICcuLi8uLi9tb2RlbHMvdHJlZXZpZXctaXRlbS10ZW1wbGF0ZS1jb250ZXh0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXRyZWV2aWV3LWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vdHJlZXZpZXctaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RyZWV2aWV3LWl0ZW0uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUcmVldmlld0l0ZW1Db21wb25lbnQge1xuICBASW5wdXQoKSBjb25maWc6IFRyZWV2aWV3Q29uZmlnO1xuICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8VHJlZXZpZXdJdGVtVGVtcGxhdGVDb250ZXh0PjtcbiAgQElucHV0KCkgaXRlbTogVHJlZXZpZXdJdGVtO1xuICBAT3V0cHV0KCkgY2hlY2tlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRlZmF1bHRDb25maWc6IFRyZWV2aWV3Q29uZmlnXG4gICkge1xuICAgIHRoaXMuY29uZmlnID0gdGhpcy5kZWZhdWx0Q29uZmlnO1xuICB9XG5cbiAgb25Db2xsYXBzZUV4cGFuZCA9ICgpID0+IHtcbiAgICB0aGlzLml0ZW0uY29sbGFwc2VkID0gIXRoaXMuaXRlbS5jb2xsYXBzZWQ7XG4gIH1cblxuICBvbkNoZWNrZWRDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgY2hlY2tlZCA9IHRoaXMuaXRlbS5jaGVja2VkO1xuICAgIGlmICghaXNOaWwodGhpcy5pdGVtLmNoaWxkcmVuKSAmJiAhdGhpcy5jb25maWcuZGVjb3VwbGVDaGlsZEZyb21QYXJlbnQpIHtcbiAgICAgIHRoaXMuaXRlbS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnNldENoZWNrZWRSZWN1cnNpdmUoY2hlY2tlZCkpO1xuICAgIH1cbiAgICB0aGlzLmNoZWNrZWRDaGFuZ2UuZW1pdChjaGVja2VkKTtcbiAgfVxuXG4gIG9uQ2hpbGRDaGVja2VkQ2hhbmdlKGNoaWxkOiBUcmVldmlld0l0ZW0sIGNoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLmRlY291cGxlQ2hpbGRGcm9tUGFyZW50KSB7XG4gICAgICBsZXQgaXRlbUNoZWNrZWQ6IGJvb2xlYW4gPSBudWxsO1xuICAgICAgZm9yIChjb25zdCBjaGlsZEl0ZW0gb2YgdGhpcy5pdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgIGlmIChpdGVtQ2hlY2tlZCA9PT0gbnVsbCkge1xuICAgICAgICAgIGl0ZW1DaGVja2VkID0gY2hpbGRJdGVtLmNoZWNrZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbUNoZWNrZWQgIT09IGNoaWxkSXRlbS5jaGVja2VkKSB7XG4gICAgICAgICAgaXRlbUNoZWNrZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1DaGVja2VkID09PSBudWxsKSB7XG4gICAgICAgIGl0ZW1DaGVja2VkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLml0ZW0uY2hlY2tlZCAhPT0gaXRlbUNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5pdGVtLmNoZWNrZWQgPSBpdGVtQ2hlY2tlZDtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHRoaXMuY2hlY2tlZENoYW5nZS5lbWl0KGNoZWNrZWQpO1xuICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwiaXRlbVwiIGNsYXNzPVwidHJlZXZpZXctaXRlbVwiPlxuICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGVcIlxuICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7aXRlbTogaXRlbSwgb25Db2xsYXBzZUV4cGFuZDogb25Db2xsYXBzZUV4cGFuZCwgb25DaGVja2VkQ2hhbmdlOiBvbkNoZWNrZWRDaGFuZ2V9XCI+XG4gIDwvbmctdGVtcGxhdGU+XG4gIDxkaXYgKm5nSWY9XCIhaXRlbS5jb2xsYXBzZWRcIj5cbiAgICA8bmd4LXRyZWV2aWV3LWl0ZW0gW2NvbmZpZ109XCJjb25maWdcIiAqbmdGb3I9XCJsZXQgY2hpbGQgb2YgaXRlbS5jaGlsZHJlblwiIFtpdGVtXT1cImNoaWxkXCIgW3RlbXBsYXRlXT1cInRlbXBsYXRlXCJcbiAgICAgIChjaGVja2VkQ2hhbmdlKT1cIm9uQ2hpbGRDaGVja2VkQ2hhbmdlKGNoaWxkLCAkZXZlbnQpXCI+XG4gICAgPC9uZ3gtdHJlZXZpZXctaXRlbT5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==