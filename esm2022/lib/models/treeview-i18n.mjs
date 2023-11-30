import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class TreeviewI18n {
    static ɵfac = function TreeviewI18n_Factory(t) { return new (t || TreeviewI18n)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TreeviewI18n, factory: TreeviewI18n.ɵfac });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeviewI18n, [{
        type: Injectable
    }], null, null); })();
export class DefaultTreeviewI18n extends TreeviewI18n {
    getText(selection) {
        if (selection.uncheckedItems.length === 0) {
            if (selection.checkedItems.length > 0) {
                return this.getAllCheckboxText();
            }
            else {
                return '';
            }
        }
        switch (selection.checkedItems.length) {
            case 0:
                return 'Select options';
            case 1:
                return selection.checkedItems[0].text;
            default:
                return `${selection.checkedItems.length} options selected`;
        }
    }
    getAllCheckboxText() {
        return 'All';
    }
    getFilterPlaceholder() {
        return 'Filter';
    }
    getFilterNoItemsFoundText() {
        return 'No items found';
    }
    getTooltipCollapseExpandText(isCollapse) {
        return isCollapse ? 'Expand' : 'Collapse';
    }
    static ɵfac = /*@__PURE__*/ function () { let ɵDefaultTreeviewI18n_BaseFactory; return function DefaultTreeviewI18n_Factory(t) { return (ɵDefaultTreeviewI18n_BaseFactory || (ɵDefaultTreeviewI18n_BaseFactory = i0.ɵɵgetInheritedFactory(DefaultTreeviewI18n)))(t || DefaultTreeviewI18n); }; }();
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DefaultTreeviewI18n, factory: DefaultTreeviewI18n.ɵfac });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DefaultTreeviewI18n, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXZpZXctaTE4bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10cmVldmlldy9zcmMvbGliL21vZGVscy90cmVldmlldy1pMThuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSTNDLE1BQU0sT0FBZ0IsWUFBWTtzRUFBWixZQUFZO2dFQUFaLFlBQVksV0FBWixZQUFZOzt1RkFBWixZQUFZO2NBRGpDLFVBQVU7O0FBVVgsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFlBQVk7SUFDbkQsT0FBTyxDQUFDLFNBQTRCO1FBQ2xDLElBQUksU0FBUyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3pDLElBQUksU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNyQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2FBQ2xDO2lCQUFNO2dCQUNMLE9BQU8sRUFBRSxDQUFDO2FBQ1g7U0FDRjtRQUVELFFBQVEsU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7WUFDckMsS0FBSyxDQUFDO2dCQUNKLE9BQU8sZ0JBQWdCLENBQUM7WUFDMUIsS0FBSyxDQUFDO2dCQUNKLE9BQU8sU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDeEM7Z0JBQ0UsT0FBTyxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxtQkFBbUIsQ0FBQztTQUM5RDtJQUNILENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCx5QkFBeUI7UUFDdkIsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDO0lBRUQsNEJBQTRCLENBQUMsVUFBbUI7UUFDOUMsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQzVDLENBQUM7OE9BbENVLG1CQUFtQixTQUFuQixtQkFBbUI7Z0VBQW5CLG1CQUFtQixXQUFuQixtQkFBbUI7O3VGQUFuQixtQkFBbUI7Y0FEL0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyZWV2aWV3U2VsZWN0aW9uIH0gZnJvbSAnLi90cmVldmlldy1pdGVtJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRyZWV2aWV3STE4biB7XG4gIGFic3RyYWN0IGdldFRleHQoc2VsZWN0aW9uOiBUcmVldmlld1NlbGVjdGlvbik6IHN0cmluZztcbiAgYWJzdHJhY3QgZ2V0QWxsQ2hlY2tib3hUZXh0KCk6IHN0cmluZztcbiAgYWJzdHJhY3QgZ2V0RmlsdGVyUGxhY2Vob2xkZXIoKTogc3RyaW5nO1xuICBhYnN0cmFjdCBnZXRGaWx0ZXJOb0l0ZW1zRm91bmRUZXh0KCk6IHN0cmluZztcbiAgYWJzdHJhY3QgZ2V0VG9vbHRpcENvbGxhcHNlRXhwYW5kVGV4dChpc0NvbGxhcHNlOiBib29sZWFuKTogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGVmYXVsdFRyZWV2aWV3STE4biBleHRlbmRzIFRyZWV2aWV3STE4biB7XG4gIGdldFRleHQoc2VsZWN0aW9uOiBUcmVldmlld1NlbGVjdGlvbik6IHN0cmluZyB7XG4gICAgaWYgKHNlbGVjdGlvbi51bmNoZWNrZWRJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmIChzZWxlY3Rpb24uY2hlY2tlZEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QWxsQ2hlY2tib3hUZXh0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3dpdGNoIChzZWxlY3Rpb24uY2hlY2tlZEl0ZW1zLmxlbmd0aCkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gJ1NlbGVjdCBvcHRpb25zJztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIHNlbGVjdGlvbi5jaGVja2VkSXRlbXNbMF0udGV4dDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBgJHtzZWxlY3Rpb24uY2hlY2tlZEl0ZW1zLmxlbmd0aH0gb3B0aW9ucyBzZWxlY3RlZGA7XG4gICAgfVxuICB9XG5cbiAgZ2V0QWxsQ2hlY2tib3hUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdBbGwnO1xuICB9XG5cbiAgZ2V0RmlsdGVyUGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0ZpbHRlcic7XG4gIH1cblxuICBnZXRGaWx0ZXJOb0l0ZW1zRm91bmRUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdObyBpdGVtcyBmb3VuZCc7XG4gIH1cblxuICBnZXRUb29sdGlwQ29sbGFwc2VFeHBhbmRUZXh0KGlzQ29sbGFwc2U6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIHJldHVybiBpc0NvbGxhcHNlID8gJ0V4cGFuZCcgOiAnQ29sbGFwc2UnO1xuICB9XG59XG4iXX0=