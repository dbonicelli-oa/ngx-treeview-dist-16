import { Injectable } from '@angular/core';
import { isNil } from 'lodash';
import * as i0 from "@angular/core";
export class TreeviewEventParser {
    static ɵfac = function TreeviewEventParser_Factory(t) { return new (t || TreeviewEventParser)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TreeviewEventParser, factory: TreeviewEventParser.ɵfac });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeviewEventParser, [{
        type: Injectable
    }], null, null); })();
export class DefaultTreeviewEventParser extends TreeviewEventParser {
    getSelectedChange(component) {
        const checkedItems = component.selection.checkedItems;
        if (!isNil(checkedItems)) {
            return checkedItems.map(item => item.value);
        }
        return [];
    }
    static ɵfac = /*@__PURE__*/ function () { let ɵDefaultTreeviewEventParser_BaseFactory; return function DefaultTreeviewEventParser_Factory(t) { return (ɵDefaultTreeviewEventParser_BaseFactory || (ɵDefaultTreeviewEventParser_BaseFactory = i0.ɵɵgetInheritedFactory(DefaultTreeviewEventParser)))(t || DefaultTreeviewEventParser); }; }();
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DefaultTreeviewEventParser, factory: DefaultTreeviewEventParser.ɵfac });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DefaultTreeviewEventParser, [{
        type: Injectable
    }], null, null); })();
export class DownlineTreeviewEventParser extends TreeviewEventParser {
    getSelectedChange(component) {
        const items = component.items;
        if (!isNil(items)) {
            let result = [];
            items.forEach(item => {
                const links = this.getLinks(item, null);
                if (!isNil(links)) {
                    result = result.concat(links);
                }
            });
            return result;
        }
        return [];
    }
    getLinks(item, parent) {
        if (!isNil(item.children)) {
            const link = {
                item,
                parent
            };
            let result = [];
            item.children.forEach(child => {
                const links = this.getLinks(child, link);
                if (!isNil(links)) {
                    result = result.concat(links);
                }
            });
            return result;
        }
        if (item.checked) {
            return [{
                    item,
                    parent
                }];
        }
        return null;
    }
    static ɵfac = /*@__PURE__*/ function () { let ɵDownlineTreeviewEventParser_BaseFactory; return function DownlineTreeviewEventParser_Factory(t) { return (ɵDownlineTreeviewEventParser_BaseFactory || (ɵDownlineTreeviewEventParser_BaseFactory = i0.ɵɵgetInheritedFactory(DownlineTreeviewEventParser)))(t || DownlineTreeviewEventParser); }; }();
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DownlineTreeviewEventParser, factory: DownlineTreeviewEventParser.ɵfac });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DownlineTreeviewEventParser, [{
        type: Injectable
    }], null, null); })();
export class OrderDownlineTreeviewEventParser extends TreeviewEventParser {
    currentDownlines = [];
    parser = new DownlineTreeviewEventParser();
    getSelectedChange(component) {
        const newDownlines = this.parser.getSelectedChange(component);
        if (this.currentDownlines.length === 0) {
            this.currentDownlines = newDownlines;
        }
        else {
            const intersectDownlines = [];
            this.currentDownlines.forEach(downline => {
                let foundIndex = -1;
                const length = newDownlines.length;
                for (let i = 0; i < length; i++) {
                    if (downline.item.value === newDownlines[i].item.value) {
                        foundIndex = i;
                        break;
                    }
                }
                if (foundIndex !== -1) {
                    intersectDownlines.push(newDownlines[foundIndex]);
                    newDownlines.splice(foundIndex, 1);
                }
            });
            this.currentDownlines = intersectDownlines.concat(newDownlines);
        }
        return this.currentDownlines;
    }
    static ɵfac = /*@__PURE__*/ function () { let ɵOrderDownlineTreeviewEventParser_BaseFactory; return function OrderDownlineTreeviewEventParser_Factory(t) { return (ɵOrderDownlineTreeviewEventParser_BaseFactory || (ɵOrderDownlineTreeviewEventParser_BaseFactory = i0.ɵɵgetInheritedFactory(OrderDownlineTreeviewEventParser)))(t || OrderDownlineTreeviewEventParser); }; }();
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OrderDownlineTreeviewEventParser, factory: OrderDownlineTreeviewEventParser.ɵfac });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OrderDownlineTreeviewEventParser, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXZpZXctZXZlbnQtcGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRyZWV2aWV3L3NyYy9saWIvaGVscGVycy90cmVldmlldy1ldmVudC1wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDOztBQUsvQixNQUFNLE9BQWdCLG1CQUFtQjs2RUFBbkIsbUJBQW1CO2dFQUFuQixtQkFBbUIsV0FBbkIsbUJBQW1COzt1RkFBbkIsbUJBQW1CO2NBRHhDLFVBQVU7O0FBTVgsTUFBTSxPQUFPLDBCQUEyQixTQUFRLG1CQUFtQjtJQUNqRSxpQkFBaUIsQ0FBQyxTQUE0QjtRQUM1QyxNQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztRQUN0RCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QztRQUVELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzswUUFSVSwwQkFBMEIsU0FBMUIsMEJBQTBCO2dFQUExQiwwQkFBMEIsV0FBMUIsMEJBQTBCOzt1RkFBMUIsMEJBQTBCO2NBRHRDLFVBQVU7O0FBa0JYLE1BQU0sT0FBTywyQkFBNEIsU0FBUSxtQkFBbUI7SUFDbEUsaUJBQWlCLENBQUMsU0FBNEI7UUFDNUMsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLElBQUksTUFBTSxHQUEyQixFQUFFLENBQUM7WUFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENB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RCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO2tTQTlCVSxnQ0FBZ0MsU0FBaEMsZ0NBQWdDO2dFQUFoQyxnQ0FBZ0MsV0FBaEMsZ0NBQWdDOzt1RkFBaEMsZ0NBQWdDO2NBRDVDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc05pbCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBUcmVldmlld0l0ZW0gfSBmcm9tICcuLi9tb2RlbHMvdHJlZXZpZXctaXRlbSc7XG5pbXBvcnQgeyBUcmVldmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdHJlZXZpZXcvdHJlZXZpZXcuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRyZWV2aWV3RXZlbnRQYXJzZXIge1xuICBhYnN0cmFjdCBnZXRTZWxlY3RlZENoYW5nZShjb21wb25lbnQ6IFRyZWV2aWV3Q29tcG9uZW50KTogYW55W107XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEZWZhdWx0VHJlZXZpZXdFdmVudFBhcnNlciBleHRlbmRzIFRyZWV2aWV3RXZlbnRQYXJzZXIge1xuICBnZXRTZWxlY3RlZENoYW5nZShjb21wb25lbnQ6IFRyZWV2aWV3Q29tcG9uZW50KTogYW55W10ge1xuICAgIGNvbnN0IGNoZWNrZWRJdGVtcyA9IGNvbXBvbmVudC5zZWxlY3Rpb24uY2hlY2tlZEl0ZW1zO1xuICAgIGlmICghaXNOaWwoY2hlY2tlZEl0ZW1zKSkge1xuICAgICAgcmV0dXJuIGNoZWNrZWRJdGVtcy5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEb3dubGluZVRyZWV2aWV3SXRlbSB7XG4gIGl0ZW06IFRyZWV2aWV3SXRlbTtcbiAgcGFyZW50OiBEb3dubGluZVRyZWV2aWV3SXRlbTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvd25saW5lVHJlZXZpZXdFdmVudFBhcnNlciBleHRlbmRzIFRyZWV2aWV3RXZlbnRQYXJzZXIge1xuICBnZXRTZWxlY3RlZENoYW5nZShjb21wb25lbnQ6IFRyZWV2aWV3Q29tcG9uZW50KTogYW55W10ge1xuICAgIGNvbnN0IGl0ZW1zID0gY29tcG9uZW50Lml0ZW1zO1xuICAgIGlmICghaXNOaWwoaXRlbXMpKSB7XG4gICAgICBsZXQgcmVzdWx0OiBEb3dubGluZVRyZWV2aWV3SXRlbVtdID0gW107XG4gICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBsaW5rcyA9IHRoaXMuZ2V0TGlua3MoaXRlbSwgbnVsbCk7XG4gICAgICAgIGlmICghaXNOaWwobGlua3MpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChsaW5rcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TGlua3MoaXRlbTogVHJlZXZpZXdJdGVtLCBwYXJlbnQ6IERvd25saW5lVHJlZXZpZXdJdGVtKTogRG93bmxpbmVUcmVldmlld0l0ZW1bXSB7XG4gICAgaWYgKCFpc05pbChpdGVtLmNoaWxkcmVuKSkge1xuICAgICAgY29uc3QgbGluayA9IHtcbiAgICAgICAgaXRlbSxcbiAgICAgICAgcGFyZW50XG4gICAgICB9O1xuICAgICAgbGV0IHJlc3VsdDogRG93bmxpbmVUcmVldmlld0l0ZW1bXSA9IFtdO1xuICAgICAgaXRlbS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgY29uc3QgbGlua3MgPSB0aGlzLmdldExpbmtzKGNoaWxkLCBsaW5rKTtcbiAgICAgICAgaWYgKCFpc05pbChsaW5rcykpIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGxpbmtzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgaWYgKGl0ZW0uY2hlY2tlZCkge1xuICAgICAgcmV0dXJuIFt7XG4gICAgICAgIGl0ZW0sXG4gICAgICAgIHBhcmVudFxuICAgICAgfV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9yZGVyRG93bmxpbmVUcmVldmlld0V2ZW50UGFyc2VyIGV4dGVuZHMgVHJlZXZpZXdFdmVudFBhcnNlciB7XG4gIHByaXZhdGUgY3VycmVudERvd25saW5lczogRG93bmxpbmVUcmVldmlld0l0ZW1bXSA9IFtdO1xuICBwcml2YXRlIHBhcnNlciA9IG5ldyBEb3dubGluZVRyZWV2aWV3RXZlbnRQYXJzZXIoKTtcblxuICBnZXRTZWxlY3RlZENoYW5nZShjb21wb25lbnQ6IFRyZWV2aWV3Q29tcG9uZW50KTogYW55W10ge1xuICAgIGNvbnN0IG5ld0Rvd25saW5lczogRG93bmxpbmVUcmVldmlld0l0ZW1bXSA9IHRoaXMucGFyc2VyLmdldFNlbGVjdGVkQ2hhbmdlKGNvbXBvbmVudCk7XG4gICAgaWYgKHRoaXMuY3VycmVudERvd25saW5lcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuY3VycmVudERvd25saW5lcyA9IG5ld0Rvd25saW5lcztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW50ZXJzZWN0RG93bmxpbmVzOiBEb3dubGluZVRyZWV2aWV3SXRlbVtdID0gW107XG4gICAgICB0aGlzLmN1cnJlbnREb3dubGluZXMuZm9yRWFjaChkb3dubGluZSA9PiB7XG4gICAgICAgIGxldCBmb3VuZEluZGV4ID0gLTE7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IG5ld0Rvd25saW5lcy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZG93bmxpbmUuaXRlbS52YWx1ZSA9PT0gbmV3RG93bmxpbmVzW2ldLml0ZW0udmFsdWUpIHtcbiAgICAgICAgICAgIGZvdW5kSW5kZXggPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvdW5kSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgaW50ZXJzZWN0RG93bmxpbmVzLnB1c2gobmV3RG93bmxpbmVzW2ZvdW5kSW5kZXhdKTtcbiAgICAgICAgICBuZXdEb3dubGluZXMuc3BsaWNlKGZvdW5kSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jdXJyZW50RG93bmxpbmVzID0gaW50ZXJzZWN0RG93bmxpbmVzLmNvbmNhdChuZXdEb3dubGluZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmN1cnJlbnREb3dubGluZXM7XG4gIH1cbn1cbiJdfQ==