import { Pipe } from '@angular/core';
import { isNil } from 'lodash';
import { TreeviewItem } from '../models/treeview-item';
import * as i0 from "@angular/core";
export class TreeviewPipe {
    transform(objects, textField) {
        if (isNil(objects)) {
            return undefined;
        }
        return objects.map(object => new TreeviewItem({ text: object[textField], value: object }));
    }
    static ɵfac = function TreeviewPipe_Factory(t) { return new (t || TreeviewPipe)(); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "ngxTreeview", type: TreeviewPipe, pure: true });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeviewPipe, [{
        type: Pipe,
        args: [{
                name: 'ngxTreeview'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXZpZXcucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10cmVldmlldy9zcmMvbGliL3BpcGVzL3RyZWV2aWV3LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBS3ZELE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLFNBQVMsQ0FBQyxPQUFjLEVBQUUsU0FBaUI7UUFDekMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbEIsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFFRCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO3NFQVBVLFlBQVk7OEVBQVosWUFBWTs7dUZBQVosWUFBWTtjQUh4QixJQUFJO2VBQUM7Z0JBQ0osSUFBSSxFQUFFLGFBQWE7YUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc05pbCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBUcmVldmlld0l0ZW0gfSBmcm9tICcuLi9tb2RlbHMvdHJlZXZpZXctaXRlbSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ25neFRyZWV2aWV3J1xufSlcbmV4cG9ydCBjbGFzcyBUcmVldmlld1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKG9iamVjdHM6IGFueVtdLCB0ZXh0RmllbGQ6IHN0cmluZyk6IFRyZWV2aWV3SXRlbVtdIHtcbiAgICBpZiAoaXNOaWwob2JqZWN0cykpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iamVjdHMubWFwKG9iamVjdCA9PiBuZXcgVHJlZXZpZXdJdGVtKHsgdGV4dDogb2JqZWN0W3RleHRGaWVsZF0sIHZhbHVlOiBvYmplY3QgfSkpO1xuICB9XG59XG4iXX0=