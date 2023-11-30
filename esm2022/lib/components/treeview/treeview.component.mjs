import { Component, Input, Output, EventEmitter } from '@angular/core';
import { isNil, includes } from 'lodash';
import { TreeviewItem } from '../../models/treeview-item';
import { TreeviewHelper } from '../../helpers/treeview-helper';
import * as i0 from "@angular/core";
import * as i1 from "../../models/treeview-i18n";
import * as i2 from "../../models/treeview-config";
import * as i3 from "../../helpers/treeview-event-parser";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/common";
import * as i6 from "../treeview-item/treeview-item.component";
function TreeviewComponent_ng_template_0_i_1__svg_svg_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 15);
    i0.ɵɵelement(1, "path", 16);
    i0.ɵɵelementEnd();
} }
function TreeviewComponent_ng_template_0_i_1__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 17);
    i0.ɵɵelement(1, "path", 18);
    i0.ɵɵelementEnd();
} }
function TreeviewComponent_ng_template_0_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 12);
    i0.ɵɵlistener("click", function TreeviewComponent_ng_template_0_i_1_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r15); const onCollapseExpand_r8 = i0.ɵɵnextContext().onCollapseExpand; return i0.ɵɵresetView(onCollapseExpand_r8()); });
    i0.ɵɵtemplate(1, TreeviewComponent_ng_template_0_i_1__svg_svg_1_Template, 2, 0, "svg", 13);
    i0.ɵɵtemplate(2, TreeviewComponent_ng_template_0_i_1__svg_svg_2_Template, 2, 0, "svg", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = i0.ɵɵnextContext().item;
    i0.ɵɵproperty("ngSwitch", item_r7.collapsed);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", false);
} }
function TreeviewComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, TreeviewComponent_ng_template_0_i_1_Template, 3, 3, "i", 8);
    i0.ɵɵelementStart(2, "div", 9)(3, "input", 10);
    i0.ɵɵlistener("ngModelChange", function TreeviewComponent_ng_template_0_Template_input_ngModelChange_3_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r18); const item_r7 = restoredCtx.item; return i0.ɵɵresetView(item_r7.checked = $event); })("ngModelChange", function TreeviewComponent_ng_template_0_Template_input_ngModelChange_3_listener() { const restoredCtx = i0.ɵɵrestoreView(_r18); const onCheckedChange_r9 = restoredCtx.onCheckedChange; return i0.ɵɵresetView(onCheckedChange_r9()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "label", 11);
    i0.ɵɵlistener("click", function TreeviewComponent_ng_template_0_Template_label_click_4_listener() { const restoredCtx = i0.ɵɵrestoreView(_r18); const item_r7 = restoredCtx.item; const onCheckedChange_r9 = restoredCtx.onCheckedChange; item_r7.checked = !item_r7.checked; return i0.ɵɵresetView(onCheckedChange_r9()); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r7 = ctx.item;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r7.children);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", item_r7.checked)("disabled", item_r7.disabled)("indeterminate", item_r7.indeterminate);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r7.text, " ");
} }
function TreeviewComponent_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 22)(2, "input", 23);
    i0.ɵɵlistener("ngModelChange", function TreeviewComponent_ng_template_2_div_0_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r28.filterText = $event); })("ngModelChange", function TreeviewComponent_ng_template_2_div_0_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r29); const onFilterTextChange_r25 = i0.ɵɵnextContext().onFilterTextChange; return i0.ɵɵresetView(onFilterTextChange_r25($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("placeholder", ctx_r26.i18n.getFilterPlaceholder())("ngModel", ctx_r26.filterText);
} }
function TreeviewComponent_ng_template_2_div_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29)(1, "input", 30);
    i0.ɵɵlistener("ngModelChange", function TreeviewComponent_ng_template_2_div_1_div_1_div_2_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r38); const item_r22 = i0.ɵɵnextContext(3).item; return i0.ɵɵresetView(item_r22.checked = $event); })("ngModelChange", function TreeviewComponent_ng_template_2_div_1_div_1_div_2_Template_input_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r38); const onCheckedChange_r24 = i0.ɵɵnextContext(3).onCheckedChange; return i0.ɵɵresetView(onCheckedChange_r24()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "label", 11);
    i0.ɵɵlistener("click", function TreeviewComponent_ng_template_2_div_1_div_1_div_2_Template_label_click_2_listener() { i0.ɵɵrestoreView(_r38); const ctx_r42 = i0.ɵɵnextContext(3); const item_r22 = ctx_r42.item; const onCheckedChange_r24 = ctx_r42.onCheckedChange; item_r22.checked = !item_r22.checked; return i0.ɵɵresetView(onCheckedChange_r24()); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r22 = i0.ɵɵnextContext(3).item;
    const ctx_r34 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", item_r22.checked)("indeterminate", item_r22.indeterminate);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r34.i18n.getAllCheckboxText(), " ");
} }
function TreeviewComponent_ng_template_2_div_1_div_1_label_3__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 35);
    i0.ɵɵelement(1, "path", 36)(2, "path", 37)(3, "path", 38);
    i0.ɵɵelementEnd();
} }
function TreeviewComponent_ng_template_2_div_1_div_1_label_3__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 39);
    i0.ɵɵelement(1, "path", 40)(2, "path", 41)(3, "path", 42);
    i0.ɵɵelementEnd();
} }
function TreeviewComponent_ng_template_2_div_1_div_1_label_3_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 31);
    i0.ɵɵlistener("click", function TreeviewComponent_ng_template_2_div_1_div_1_label_3_Template_label_click_0_listener() { i0.ɵɵrestoreView(_r48); const onCollapseExpand_r23 = i0.ɵɵnextContext(3).onCollapseExpand; return i0.ɵɵresetView(onCollapseExpand_r23()); });
    i0.ɵɵelementStart(1, "i", 32);
    i0.ɵɵtemplate(2, TreeviewComponent_ng_template_2_div_1_div_1_label_3__svg_svg_2_Template, 4, 0, "svg", 33);
    i0.ɵɵtemplate(3, TreeviewComponent_ng_template_2_div_1_div_1_label_3__svg_svg_3_Template, 4, 0, "svg", 34);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r22 = i0.ɵɵnextContext(3).item;
    const ctx_r35 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("title", ctx_r35.i18n.getTooltipCollapseExpandText(item_r22.collapsed))("ngSwitch", item_r22.collapsed);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", false);
} }
function TreeviewComponent_ng_template_2_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26)(1, "div", 22);
    i0.ɵɵtemplate(2, TreeviewComponent_ng_template_2_div_1_div_1_div_2_Template, 4, 3, "div", 27);
    i0.ɵɵtemplate(3, TreeviewComponent_ng_template_2_div_1_div_1_label_3_Template, 4, 4, "label", 28);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const config_r21 = i0.ɵɵnextContext(2).config;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", config_r21.hasAllCheckBox);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", config_r21.hasCollapseExpand);
} }
function TreeviewComponent_ng_template_2_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 43);
} }
function TreeviewComponent_ng_template_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, TreeviewComponent_ng_template_2_div_1_div_1_Template, 4, 2, "div", 24);
    i0.ɵɵtemplate(2, TreeviewComponent_ng_template_2_div_1_div_2_Template, 1, 0, "div", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const config_r21 = i0.ɵɵnextContext().config;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", config_r21.hasAllCheckBox || config_r21.hasCollapseExpand);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", config_r21.hasDivider);
} }
function TreeviewComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TreeviewComponent_ng_template_2_div_0_Template, 3, 2, "div", 19);
    i0.ɵɵtemplate(1, TreeviewComponent_ng_template_2_div_1_Template, 3, 2, "div", 20);
} if (rf & 2) {
    const config_r21 = ctx.config;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", config_r21.hasFilter);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.hasFilterItems);
} }
function TreeviewComponent_ng_template_5_Template(rf, ctx) { }
function TreeviewComponent_div_7_ngx_treeview_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r55 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-treeview-item", 46);
    i0.ɵɵlistener("checkedChange", function TreeviewComponent_div_7_ngx_treeview_item_1_Template_ngx_treeview_item_checkedChange_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r55); const item_r53 = restoredCtx.$implicit; const ctx_r54 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r54.onItemCheckedChange(item_r53, $event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r53 = ctx.$implicit;
    const ctx_r52 = i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵproperty("config", ctx_r52.config)("item", item_r53)("template", ctx_r52.itemTemplate || _r0);
} }
function TreeviewComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵtemplate(1, TreeviewComponent_div_7_ngx_treeview_item_1_Template, 1, 3, "ngx-treeview-item", 45);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("max-height", ctx_r5.maxHeight, "px");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r5.filterItems);
} }
function TreeviewComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r6.i18n.getFilterNoItemsFoundText(), " ");
} }
class FilterTreeviewItem extends TreeviewItem {
    refItem;
    constructor(item) {
        super({
            text: item.text,
            value: item.value,
            disabled: item.disabled,
            checked: item.checked,
            collapsed: item.collapsed,
            children: item.children
        });
        this.refItem = item;
    }
    updateRefChecked() {
        this.children.forEach(child => {
            if (child instanceof FilterTreeviewItem) {
                child.updateRefChecked();
            }
        });
        let refChecked = this.checked;
        if (refChecked) {
            for (const refChild of this.refItem.children) {
                if (!refChild.checked) {
                    refChecked = false;
                    break;
                }
            }
        }
        this.refItem.checked = refChecked;
    }
}
export class TreeviewComponent {
    i18n;
    defaultConfig;
    eventParser;
    headerTemplate;
    itemTemplate;
    items;
    config;
    selectedChange = new EventEmitter();
    filterChange = new EventEmitter();
    headerTemplateContext;
    allItem;
    filterText = '';
    filterItems;
    selection;
    constructor(i18n, defaultConfig, eventParser) {
        this.i18n = i18n;
        this.defaultConfig = defaultConfig;
        this.eventParser = eventParser;
        this.config = this.defaultConfig;
        this.allItem = new TreeviewItem({ text: 'All', value: undefined });
    }
    get hasFilterItems() {
        return !isNil(this.filterItems) && this.filterItems.length > 0;
    }
    get maxHeight() {
        return `${this.config.maxHeight}`;
    }
    ngOnInit() {
        this.createHeaderTemplateContext();
        this.generateSelection();
    }
    ngOnChanges(changes) {
        const itemsSimpleChange = changes.items;
        if (!isNil(itemsSimpleChange) && !isNil(this.items)) {
            this.updateFilterItems();
            this.updateCollapsedOfAll();
            this.raiseSelectedChange();
        }
    }
    onAllCollapseExpand() {
        this.allItem.collapsed = !this.allItem.collapsed;
        this.filterItems.forEach(item => item.setCollapsedRecursive(this.allItem.collapsed));
    }
    onFilterTextChange(text) {
        this.filterText = text;
        this.filterChange.emit(text);
        this.updateFilterItems();
    }
    onAllCheckedChange() {
        const checked = this.allItem.checked;
        this.filterItems.forEach(item => {
            item.setCheckedRecursive(checked);
            if (item instanceof FilterTreeviewItem) {
                item.updateRefChecked();
            }
        });
        this.raiseSelectedChange();
    }
    onItemCheckedChange(item, checked) {
        if (item instanceof FilterTreeviewItem) {
            item.updateRefChecked();
        }
        this.updateCheckedOfAll();
        this.raiseSelectedChange();
    }
    raiseSelectedChange() {
        this.generateSelection();
        const values = this.eventParser.getSelectedChange(this);
        setTimeout(() => {
            this.selectedChange.emit(values);
        });
    }
    createHeaderTemplateContext() {
        this.headerTemplateContext = {
            config: this.config,
            item: this.allItem,
            onCheckedChange: () => this.onAllCheckedChange(),
            onCollapseExpand: () => this.onAllCollapseExpand(),
            onFilterTextChange: (text) => this.onFilterTextChange(text)
        };
    }
    generateSelection() {
        let checkedItems = [];
        let uncheckedItems = [];
        if (!isNil(this.items)) {
            const selection = TreeviewHelper.concatSelection(this.items, checkedItems, uncheckedItems);
            checkedItems = selection.checked;
            uncheckedItems = selection.unchecked;
        }
        this.selection = {
            checkedItems,
            uncheckedItems
        };
    }
    updateFilterItems() {
        if (this.filterText !== '') {
            const filterItems = [];
            const filterText = this.filterText.toLowerCase();
            this.items.forEach(item => {
                const newItem = this.filterItem(item, filterText);
                if (!isNil(newItem)) {
                    filterItems.push(newItem);
                }
            });
            this.filterItems = filterItems;
        }
        else {
            this.filterItems = this.items;
        }
        this.updateCheckedOfAll();
    }
    filterItem(item, filterText) {
        const isMatch = includes(item.text.toLowerCase(), filterText);
        if (isMatch) {
            return item;
        }
        else {
            if (!isNil(item.children)) {
                const children = [];
                item.children.forEach(child => {
                    const newChild = this.filterItem(child, filterText);
                    if (!isNil(newChild)) {
                        children.push(newChild);
                    }
                });
                if (children.length > 0) {
                    const newItem = new FilterTreeviewItem(item);
                    newItem.collapsed = false;
                    newItem.children = children;
                    return newItem;
                }
            }
        }
        return undefined;
    }
    updateCheckedOfAll() {
        let itemChecked = null;
        for (const filterItem of this.filterItems) {
            if (itemChecked === null) {
                itemChecked = filterItem.checked;
            }
            else if (itemChecked !== filterItem.checked) {
                itemChecked = undefined;
                break;
            }
        }
        if (itemChecked === null) {
            itemChecked = false;
        }
        this.allItem.checked = itemChecked;
    }
    updateCollapsedOfAll() {
        let hasItemExpanded = false;
        for (const filterItem of this.filterItems) {
            if (!filterItem.collapsed) {
                hasItemExpanded = true;
                break;
            }
        }
        this.allItem.collapsed = !hasItemExpanded;
    }
    static ɵfac = function TreeviewComponent_Factory(t) { return new (t || TreeviewComponent)(i0.ɵɵdirectiveInject(i1.TreeviewI18n), i0.ɵɵdirectiveInject(i2.TreeviewConfig), i0.ɵɵdirectiveInject(i3.TreeviewEventParser)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TreeviewComponent, selectors: [["ngx-treeview"]], inputs: { headerTemplate: "headerTemplate", itemTemplate: "itemTemplate", items: "items", config: "config" }, outputs: { selectedChange: "selectedChange", filterChange: "filterChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 9, vars: 5, consts: [["defaultItemTemplate", ""], ["defaultHeaderTemplate", ""], [1, "treeview-header"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], ["class", "treeview-container", 3, "max-height", 4, "ngSwitchCase"], ["class", "treeview-text", 4, "ngSwitchCase"], [1, "form-inline", "row-item"], ["aria-hidden", "true", 3, "ngSwitch", "click", 4, "ngIf"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "ngModel", "disabled", "indeterminate", "ngModelChange"], [1, "form-check-label", 3, "click"], ["aria-hidden", "true", 3, "ngSwitch", "click"], ["width", "0.8rem", "height", "0.8rem", "viewBox", "0 0 16 16", "class", "bi bi-caret-right-fill", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngSwitchCase"], ["width", "0.8rem", "height", "0.8rem", "viewBox", "0 0 16 16", "class", "bi bi-caret-down-fill", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngSwitchCase"], ["width", "0.8rem", "height", "0.8rem", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-caret-right-fill"], ["d", "M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"], ["width", "0.8rem", "height", "0.8rem", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-caret-down-fill"], ["d", "M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"], ["class", "row row-filter", 4, "ngIf"], [4, "ngIf"], [1, "row", "row-filter"], [1, "col-12"], ["type", "text", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["class", "row row-all", 4, "ngIf"], ["class", "dropdown-divider", 4, "ngIf"], [1, "row", "row-all"], ["class", "form-check form-check-inline", 4, "ngIf"], ["class", "float-right form-check-label", 3, "click", 4, "ngIf"], [1, "form-check", "form-check-inline"], ["type", "checkbox", 1, "form-check-input", 3, "ngModel", "indeterminate", "ngModelChange"], [1, "float-right", "form-check-label", 3, "click"], ["aria-hidden", "true", 3, "title", "ngSwitch"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "class", "bi bi-arrows-angle-expand", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngSwitchCase"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "class", "bi bi-arrows-angle-contract", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngSwitchCase"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-arrows-angle-expand"], ["fill-rule", "evenodd", "d", "M1.5 10.036a.5.5 0 0 1 .5.5v3.5h3.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5z"], ["fill-rule", "evenodd", "d", "M6.354 9.646a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0zm8.5-8.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0z"], ["fill-rule", "evenodd", "d", "M10.036 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 1 1-1 0V2h-3.5a.5.5 0 0 1-.5-.5z"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-arrows-angle-contract"], ["fill-rule", "evenodd", "d", "M9.5 2.036a.5.5 0 0 1 .5.5v3.5h3.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5z"], ["fill-rule", "evenodd", "d", "M14.354 1.646a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 1 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0zm-7.5 7.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0z"], ["fill-rule", "evenodd", "d", "M2.036 9.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V10h-3.5a.5.5 0 0 1-.5-.5z"], [1, "dropdown-divider"], [1, "treeview-container"], [3, "config", "item", "template", "checkedChange", 4, "ngFor", "ngForOf"], [3, "config", "item", "template", "checkedChange"], [1, "treeview-text"]], template: function TreeviewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TreeviewComponent_ng_template_0_Template, 6, 5, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(2, TreeviewComponent_ng_template_2_Template, 2, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(4, "div", 2);
            i0.ɵɵtemplate(5, TreeviewComponent_ng_template_5_Template, 0, 0, "ng-template", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 4);
            i0.ɵɵtemplate(7, TreeviewComponent_div_7_Template, 2, 3, "div", 5);
            i0.ɵɵtemplate(8, TreeviewComponent_div_8_Template, 2, 1, "div", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const _r2 = i0.ɵɵreference(3);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.headerTemplate || _r2)("ngTemplateOutletContext", ctx.headerTemplateContext);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitch", ctx.hasFilterItems);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", true);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", false);
        } }, dependencies: [i4.DefaultValueAccessor, i4.CheckboxControlValueAccessor, i4.NgControlStatus, i4.NgModel, i5.NgForOf, i5.NgIf, i5.NgTemplateOutlet, i5.NgSwitch, i5.NgSwitchCase, i6.TreeviewItemComponent], styles: ["[_nghost-%COMP%]   .treeview-header[_ngcontent-%COMP%]   .row-filter[_ngcontent-%COMP%]{margin-bottom:.5rem}[_nghost-%COMP%]   .treeview-header[_ngcontent-%COMP%]   .row-all[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .treeview-container[_ngcontent-%COMP%]   .row-item[_ngcontent-%COMP%]{margin-bottom:.3rem;flex-wrap:nowrap}[_nghost-%COMP%]   .treeview-container[_ngcontent-%COMP%]   .row-item[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%]{cursor:pointer;margin-right:.3rem}.treeview-container[_ngcontent-%COMP%]{overflow-y:auto;padding-right:.3rem}.treeview-text[_ngcontent-%COMP%]{padding:.3rem 0;white-space:nowrap}"] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeviewComponent, [{
        type: Component,
        args: [{ selector: 'ngx-treeview', template: "<ng-template #defaultItemTemplate let-item=\"item\" let-onCollapseExpand=\"onCollapseExpand\"\n  let-onCheckedChange=\"onCheckedChange\">\n  <div class=\"form-inline row-item\">\n    <i *ngIf=\"item.children\" (click)=\"onCollapseExpand()\" aria-hidden=\"true\" [ngSwitch]=\"item.collapsed\">\n      <svg *ngSwitchCase=\"true\" width=\"0.8rem\" height=\"0.8rem\" viewBox=\"0 0 16 16\" class=\"bi bi-caret-right-fill\"\n        fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path\n          d=\"M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z\" />\n      </svg>\n      <svg *ngSwitchCase=\"false\" width=\"0.8rem\" height=\"0.8rem\" viewBox=\"0 0 16 16\" class=\"bi bi-caret-down-fill\"\n        fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path\n          d=\"M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z\" />\n      </svg>\n    </i>\n    <div class=\"form-check\">\n      <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"item.checked\" (ngModelChange)=\"onCheckedChange()\"\n        [disabled]=\"item.disabled\" [indeterminate]=\"item.indeterminate\" />\n      <label class=\"form-check-label\" (click)=\"item.checked = !item.checked; onCheckedChange()\">\n        {{item.text}}\n      </label>\n    </div>\n  </div>\n</ng-template>\n<ng-template #defaultHeaderTemplate let-config=\"config\" let-item=\"item\" let-onCollapseExpand=\"onCollapseExpand\"\n  let-onCheckedChange=\"onCheckedChange\" let-onFilterTextChange=\"onFilterTextChange\">\n  <div *ngIf=\"config.hasFilter\" class=\"row row-filter\">\n    <div class=\"col-12\">\n      <input class=\"form-control\" type=\"text\" [placeholder]=\"i18n.getFilterPlaceholder()\" [(ngModel)]=\"filterText\"\n        (ngModelChange)=\"onFilterTextChange($event)\" />\n    </div>\n  </div>\n  <div *ngIf=\"hasFilterItems\">\n    <div *ngIf=\"config.hasAllCheckBox || config.hasCollapseExpand\" class=\"row row-all\">\n      <div class=\"col-12\">\n        <div class=\"form-check form-check-inline\" *ngIf=\"config.hasAllCheckBox\">\n          <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"item.checked\" (ngModelChange)=\"onCheckedChange()\"\n            [indeterminate]=\"item.indeterminate\" />\n          <label class=\"form-check-label\" (click)=\"item.checked = !item.checked; onCheckedChange()\">\n            {{i18n.getAllCheckboxText()}}\n          </label>\n        </div>\n        <label *ngIf=\"config.hasCollapseExpand\" class=\"float-right form-check-label\" (click)=\"onCollapseExpand()\">\n          <i [title]=\"i18n.getTooltipCollapseExpandText(item.collapsed)\" aria-hidden=\"true\" [ngSwitch]=\"item.collapsed\">\n            <svg *ngSwitchCase=\"true\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-arrows-angle-expand\"\n              fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path fill-rule=\"evenodd\"\n                d=\"M1.5 10.036a.5.5 0 0 1 .5.5v3.5h3.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5z\" />\n              <path fill-rule=\"evenodd\"\n                d=\"M6.354 9.646a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0zm8.5-8.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0z\" />\n              <path fill-rule=\"evenodd\"\n                d=\"M10.036 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 1 1-1 0V2h-3.5a.5.5 0 0 1-.5-.5z\" />\n            </svg>\n            <svg *ngSwitchCase=\"false\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-arrows-angle-contract\"\n              fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path fill-rule=\"evenodd\"\n                d=\"M9.5 2.036a.5.5 0 0 1 .5.5v3.5h3.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5z\" />\n              <path fill-rule=\"evenodd\"\n                d=\"M14.354 1.646a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 1 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0zm-7.5 7.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0z\" />\n              <path fill-rule=\"evenodd\"\n                d=\"M2.036 9.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V10h-3.5a.5.5 0 0 1-.5-.5z\" />\n            </svg>\n          </i>\n        </label>\n      </div>\n    </div>\n    <div *ngIf=\"config.hasDivider\" class=\"dropdown-divider\"></div>\n  </div>\n</ng-template>\n<div class=\"treeview-header\">\n  <ng-template [ngTemplateOutlet]=\"headerTemplate || defaultHeaderTemplate\"\n    [ngTemplateOutletContext]=\"headerTemplateContext\">\n  </ng-template>\n</div>\n<div [ngSwitch]=\"hasFilterItems\">\n  <div *ngSwitchCase=\"true\" class=\"treeview-container\" [style.max-height.px]=\"maxHeight\">\n    <ngx-treeview-item *ngFor=\"let item of filterItems\" [config]=\"config\" [item]=\"item\"\n      [template]=\"itemTemplate || defaultItemTemplate\" (checkedChange)=\"onItemCheckedChange(item, $event)\">\n    </ngx-treeview-item>\n  </div>\n  <div *ngSwitchCase=\"false\" class=\"treeview-text\">\n    {{i18n.getFilterNoItemsFoundText()}}\n  </div>\n</div>\n", styles: [":host .treeview-header .row-filter{margin-bottom:.5rem}:host .treeview-header .row-all .bi{cursor:pointer}:host .treeview-container .row-item{margin-bottom:.3rem;flex-wrap:nowrap}:host .treeview-container .row-item .bi{cursor:pointer;margin-right:.3rem}.treeview-container{overflow-y:auto;padding-right:.3rem}.treeview-text{padding:.3rem 0;white-space:nowrap}\n"] }]
    }], function () { return [{ type: i1.TreeviewI18n }, { type: i2.TreeviewConfig }, { type: i3.TreeviewEventParser }]; }, { headerTemplate: [{
            type: Input
        }], itemTemplate: [{
            type: Input
        }], items: [{
            type: Input
        }], config: [{
            type: Input
        }], selectedChange: [{
            type: Output
        }], filterChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRyZWV2aWV3L3NyYy9saWIvY29tcG9uZW50cy90cmVldmlldy90cmVldmlldy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdHJlZXZpZXcvc3JjL2xpYi9jb21wb25lbnRzL3RyZWV2aWV3L3RyZWV2aWV3LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWlELE1BQU0sZUFBZSxDQUFDO0FBQ3RILE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxZQUFZLEVBQXFCLE1BQU0sNEJBQTRCLENBQUM7QUFJN0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7Ozs7Ozs7SUNIekQsbUJBQ3lEO0lBRHpELCtCQUN5RDtJQUN2RCwyQkFDMEg7SUFDNUgsaUJBQU07OztJQUNOLG1CQUN5RDtJQUR6RCwrQkFDeUQ7SUFDdkQsMkJBQ3VIO0lBQ3pILGlCQUFNOzs7O0lBVlIsNkJBQXFHO0lBQTVFLG9NQUFTLGVBQUEscUJBQWtCLENBQUEsSUFBQztJQUNuRCwwRkFJTTtJQUNOLDBGQUlNO0lBQ1IsaUJBQUk7OztJQVhxRSw0Q0FBMkI7SUFDNUYsZUFBa0I7SUFBbEIsbUNBQWtCO0lBS2xCLGVBQW1CO0lBQW5CLG9DQUFtQjs7OztJQVA3Qiw4QkFBa0M7SUFDaEMsNEVBV0k7SUFDSiw4QkFBd0IsZ0JBQUE7SUFDMEIsK01BQWEsd0NBQW9CLElBQVAsa05BQWtCLGVBQUEsb0JBQWlCLENBQUEsSUFBbkM7SUFBMUUsaUJBQ29FO0lBQ3BFLGlDQUEwRjtJQUExRCxxUkFBdUMsZUFBQSxvQkFBaUIs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QU8sRUFBRTtnQkFDN0MsV0FBVyxHQUFHLFNBQVMsQ0FBQztnQkFDeEIsTUFBTTthQUNQO1NBQ0Y7UUFFRCxJQUFJLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDeEIsV0FBVyxHQUFHLEtBQUssQ0FBQztTQUNyQjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztJQUNyQyxDQUFDO0lBRU8sb0JBQW9CO1FBQzFCLElBQUksZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM1QixLQUFLLE1BQU0sVUFBVSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7Z0JBQ3pCLGVBQWUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLE1BQU07YUFDUDtTQUNGO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxlQUFlLENBQUM7SUFDNUMsQ0FBQzsyRUFwTFUsaUJBQWlCOzZEQUFqQixpQkFBaUI7WUNqRDlCLG1IQXVCYztZQUNkLG1IQTRDYztZQUNkLDhCQUE2QjtZQUMzQixrRkFFYztZQUNoQixpQkFBTTtZQUNOLDhCQUFpQztZQUMvQixrRUFJTTtZQUNOLGtFQUVNO1lBQ1IsaUJBQU07OztZQWJTLGVBQTREO1lBQTVELDREQUE0RCxzREFBQTtZQUl0RSxlQUEyQjtZQUEzQiw2Q0FBMkI7WUFDeEIsZUFBa0I7WUFBbEIsbUNBQWtCO1lBS2xCLGVBQW1CO1lBQW5CLG9DQUFtQjs7O3VGRC9CZCxpQkFBaUI7Y0FMN0IsU0FBUzsyQkFDRSxjQUFjOzhIQUtmLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0ksY0FBYztrQkFBdkIsTUFBTTtZQUNHLFlBQVk7a0JBQXJCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzLCBUZW1wbGF0ZVJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc05pbCwgaW5jbHVkZXMgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgVHJlZXZpZXdJMThuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RyZWV2aWV3LWkxOG4nO1xuaW1wb3J0IHsgVHJlZXZpZXdJdGVtLCBUcmVldmlld1NlbGVjdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy90cmVldmlldy1pdGVtJztcbmltcG9ydCB7IFRyZWV2aWV3Q29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RyZWV2aWV3LWNvbmZpZyc7XG5pbXBvcnQgeyBUcmVldmlld0hlYWRlclRlbXBsYXRlQ29udGV4dCB9IGZyb20gJy4uLy4uL21vZGVscy90cmVldmlldy1oZWFkZXItdGVtcGxhdGUtY29udGV4dCc7XG5pbXBvcnQgeyBUcmVldmlld0l0ZW1UZW1wbGF0ZUNvbnRleHQgfSBmcm9tICcuLi8uLi9tb2RlbHMvdHJlZXZpZXctaXRlbS10ZW1wbGF0ZS1jb250ZXh0JztcbmltcG9ydCB7IFRyZWV2aWV3SGVscGVyIH0gZnJvbSAnLi4vLi4vaGVscGVycy90cmVldmlldy1oZWxwZXInO1xuaW1wb3J0IHsgVHJlZXZpZXdFdmVudFBhcnNlciB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdHJlZXZpZXctZXZlbnQtcGFyc2VyJztcblxuY2xhc3MgRmlsdGVyVHJlZXZpZXdJdGVtIGV4dGVuZHMgVHJlZXZpZXdJdGVtIHtcbiAgcHJpdmF0ZSByZWFkb25seSByZWZJdGVtOiBUcmVldmlld0l0ZW07XG4gIGNvbnN0cnVjdG9yKGl0ZW06IFRyZWV2aWV3SXRlbSkge1xuICAgIHN1cGVyKHtcbiAgICAgIHRleHQ6IGl0ZW0udGV4dCxcbiAgICAgIHZhbHVlOiBpdGVtLnZhbHVlLFxuICAgICAgZGlzYWJsZWQ6IGl0ZW0uZGlzYWJsZWQsXG4gICAgICBjaGVja2VkOiBpdGVtLmNoZWNrZWQsXG4gICAgICBjb2xsYXBzZWQ6IGl0ZW0uY29sbGFwc2VkLFxuICAgICAgY2hpbGRyZW46IGl0ZW0uY2hpbGRyZW5cbiAgICB9KTtcbiAgICB0aGlzLnJlZkl0ZW0gPSBpdGVtO1xuICB9XG5cbiAgdXBkYXRlUmVmQ2hlY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgRmlsdGVyVHJlZXZpZXdJdGVtKSB7XG4gICAgICAgIGNoaWxkLnVwZGF0ZVJlZkNoZWNrZWQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCByZWZDaGVja2VkID0gdGhpcy5jaGVja2VkO1xuICAgIGlmIChyZWZDaGVja2VkKSB7XG4gICAgICBmb3IgKGNvbnN0IHJlZkNoaWxkIG9mIHRoaXMucmVmSXRlbS5jaGlsZHJlbikge1xuICAgICAgICBpZiAoIXJlZkNoaWxkLmNoZWNrZWQpIHtcbiAgICAgICAgICByZWZDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZWZJdGVtLmNoZWNrZWQgPSByZWZDaGVja2VkO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC10cmVldmlldycsXG4gIHRlbXBsYXRlVXJsOiAnLi90cmVldmlldy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RyZWV2aWV3LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVHJlZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxUcmVldmlld0hlYWRlclRlbXBsYXRlQ29udGV4dD47XG4gIEBJbnB1dCgpIGl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8VHJlZXZpZXdJdGVtVGVtcGxhdGVDb250ZXh0PjtcbiAgQElucHV0KCkgaXRlbXM6IFRyZWV2aWV3SXRlbVtdO1xuICBASW5wdXQoKSBjb25maWc6IFRyZWV2aWV3Q29uZmlnO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xuICBAT3V0cHV0KCkgZmlsdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIGhlYWRlclRlbXBsYXRlQ29udGV4dDogVHJlZXZpZXdIZWFkZXJUZW1wbGF0ZUNvbnRleHQ7XG4gIGFsbEl0ZW06IFRyZWV2aWV3SXRlbTtcbiAgZmlsdGVyVGV4dCA9ICcnO1xuICBmaWx0ZXJJdGVtczogVHJlZXZpZXdJdGVtW107XG4gIHNlbGVjdGlvbjogVHJlZXZpZXdTZWxlY3Rpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGkxOG46IFRyZWV2aWV3STE4bixcbiAgICBwcml2YXRlIGRlZmF1bHRDb25maWc6IFRyZWV2aWV3Q29uZmlnLFxuICAgIHByaXZhdGUgZXZlbnRQYXJzZXI6IFRyZWV2aWV3RXZlbnRQYXJzZXJcbiAgKSB7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmRlZmF1bHRDb25maWc7XG4gICAgdGhpcy5hbGxJdGVtID0gbmV3IFRyZWV2aWV3SXRlbSh7IHRleHQ6ICdBbGwnLCB2YWx1ZTogdW5kZWZpbmVkIH0pO1xuICB9XG5cbiAgZ2V0IGhhc0ZpbHRlckl0ZW1zKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhaXNOaWwodGhpcy5maWx0ZXJJdGVtcykgJiYgdGhpcy5maWx0ZXJJdGVtcy5sZW5ndGggPiAwO1xuICB9XG5cbiAgZ2V0IG1heEhlaWdodCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLmNvbmZpZy5tYXhIZWlnaHR9YDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlSGVhZGVyVGVtcGxhdGVDb250ZXh0KCk7XG4gICAgdGhpcy5nZW5lcmF0ZVNlbGVjdGlvbigpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IGl0ZW1zU2ltcGxlQ2hhbmdlID0gY2hhbmdlcy5pdGVtcztcbiAgICBpZiAoIWlzTmlsKGl0ZW1zU2ltcGxlQ2hhbmdlKSAmJiAhaXNOaWwodGhpcy5pdGVtcykpIHtcbiAgICAgIHRoaXMudXBkYXRlRmlsdGVySXRlbXMoKTtcbiAgICAgIHRoaXMudXBkYXRlQ29sbGFwc2VkT2ZBbGwoKTtcbiAgICAgIHRoaXMucmFpc2VTZWxlY3RlZENoYW5nZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQWxsQ29sbGFwc2VFeHBhbmQoKTogdm9pZCB7XG4gICAgdGhpcy5hbGxJdGVtLmNvbGxhcHNlZCA9ICF0aGlzLmFsbEl0ZW0uY29sbGFwc2VkO1xuICAgIHRoaXMuZmlsdGVySXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uc2V0Q29sbGFwc2VkUmVjdXJzaXZlKHRoaXMuYWxsSXRlbS5jb2xsYXBzZWQpKTtcbiAgfVxuXG4gIG9uRmlsdGVyVGV4dENoYW5nZSh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmZpbHRlclRleHQgPSB0ZXh0O1xuICAgIHRoaXMuZmlsdGVyQ2hhbmdlLmVtaXQodGV4dCk7XG4gICAgdGhpcy51cGRhdGVGaWx0ZXJJdGVtcygpO1xuICB9XG5cbiAgb25BbGxDaGVja2VkQ2hhbmdlKCk6IHZvaWQge1xuICAgIGNvbnN0IGNoZWNrZWQgPSB0aGlzLmFsbEl0ZW0uY2hlY2tlZDtcbiAgICB0aGlzLmZpbHRlckl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtLnNldENoZWNrZWRSZWN1cnNpdmUoY2hlY2tlZCk7XG4gICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIEZpbHRlclRyZWV2aWV3SXRlbSkge1xuICAgICAgICBpdGVtLnVwZGF0ZVJlZkNoZWNrZWQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMucmFpc2VTZWxlY3RlZENoYW5nZSgpO1xuICB9XG5cbiAgb25JdGVtQ2hlY2tlZENoYW5nZShpdGVtOiBUcmVldmlld0l0ZW0sIGNoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIEZpbHRlclRyZWV2aWV3SXRlbSkge1xuICAgICAgaXRlbS51cGRhdGVSZWZDaGVja2VkKCk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVDaGVja2VkT2ZBbGwoKTtcbiAgICB0aGlzLnJhaXNlU2VsZWN0ZWRDaGFuZ2UoKTtcbiAgfVxuXG4gIHJhaXNlU2VsZWN0ZWRDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5nZW5lcmF0ZVNlbGVjdGlvbigpO1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZXZlbnRQYXJzZXIuZ2V0U2VsZWN0ZWRDaGFuZ2UodGhpcyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQodmFsdWVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlSGVhZGVyVGVtcGxhdGVDb250ZXh0KCk6IHZvaWQge1xuICAgIHRoaXMuaGVhZGVyVGVtcGxhdGVDb250ZXh0ID0ge1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgIGl0ZW06IHRoaXMuYWxsSXRlbSxcbiAgICAgIG9uQ2hlY2tlZENoYW5nZTogKCkgPT4gdGhpcy5vbkFsbENoZWNrZWRDaGFuZ2UoKSxcbiAgICAgIG9uQ29sbGFwc2VFeHBhbmQ6ICgpID0+IHRoaXMub25BbGxDb2xsYXBzZUV4cGFuZCgpLFxuICAgICAgb25GaWx0ZXJUZXh0Q2hhbmdlOiAodGV4dCkgPT4gdGhpcy5vbkZpbHRlclRleHRDaGFuZ2UodGV4dClcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZVNlbGVjdGlvbigpOiB2b2lkIHtcbiAgICBsZXQgY2hlY2tlZEl0ZW1zOiBUcmVldmlld0l0ZW1bXSA9IFtdO1xuICAgIGxldCB1bmNoZWNrZWRJdGVtczogVHJlZXZpZXdJdGVtW10gPSBbXTtcbiAgICBpZiAoIWlzTmlsKHRoaXMuaXRlbXMpKSB7XG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSBUcmVldmlld0hlbHBlci5jb25jYXRTZWxlY3Rpb24odGhpcy5pdGVtcywgY2hlY2tlZEl0ZW1zLCB1bmNoZWNrZWRJdGVtcyk7XG4gICAgICBjaGVja2VkSXRlbXMgPSBzZWxlY3Rpb24uY2hlY2tlZDtcbiAgICAgIHVuY2hlY2tlZEl0ZW1zID0gc2VsZWN0aW9uLnVuY2hlY2tlZDtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdGlvbiA9IHtcbiAgICAgIGNoZWNrZWRJdGVtcyxcbiAgICAgIHVuY2hlY2tlZEl0ZW1zXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRmlsdGVySXRlbXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZmlsdGVyVGV4dCAhPT0gJycpIHtcbiAgICAgIGNvbnN0IGZpbHRlckl0ZW1zOiBUcmVldmlld0l0ZW1bXSA9IFtdO1xuICAgICAgY29uc3QgZmlsdGVyVGV4dCA9IHRoaXMuZmlsdGVyVGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBuZXdJdGVtID0gdGhpcy5maWx0ZXJJdGVtKGl0ZW0sIGZpbHRlclRleHQpO1xuICAgICAgICBpZiAoIWlzTmlsKG5ld0l0ZW0pKSB7XG4gICAgICAgICAgZmlsdGVySXRlbXMucHVzaChuZXdJdGVtKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmZpbHRlckl0ZW1zID0gZmlsdGVySXRlbXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlsdGVySXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlQ2hlY2tlZE9mQWxsKCk7XG4gIH1cblxuICBwcml2YXRlIGZpbHRlckl0ZW0oaXRlbTogVHJlZXZpZXdJdGVtLCBmaWx0ZXJUZXh0OiBzdHJpbmcpOiBUcmVldmlld0l0ZW0ge1xuICAgIGNvbnN0IGlzTWF0Y2ggPSBpbmNsdWRlcyhpdGVtLnRleHQudG9Mb3dlckNhc2UoKSwgZmlsdGVyVGV4dCk7XG4gICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWlzTmlsKGl0ZW0uY2hpbGRyZW4pKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuOiBUcmVldmlld0l0ZW1bXSA9IFtdO1xuICAgICAgICBpdGVtLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0NoaWxkID0gdGhpcy5maWx0ZXJJdGVtKGNoaWxkLCBmaWx0ZXJUZXh0KTtcbiAgICAgICAgICBpZiAoIWlzTmlsKG5ld0NoaWxkKSkge1xuICAgICAgICAgICAgY2hpbGRyZW4ucHVzaChuZXdDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBuZXdJdGVtID0gbmV3IEZpbHRlclRyZWV2aWV3SXRlbShpdGVtKTtcbiAgICAgICAgICBuZXdJdGVtLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgICAgIG5ld0l0ZW0uY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgICByZXR1cm4gbmV3SXRlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNoZWNrZWRPZkFsbCgpOiB2b2lkIHtcbiAgICBsZXQgaXRlbUNoZWNrZWQ6IGJvb2xlYW4gPSBudWxsO1xuICAgIGZvciAoY29uc3QgZmlsdGVySXRlbSBvZiB0aGlzLmZpbHRlckl0ZW1zKSB7XG4gICAgICBpZiAoaXRlbUNoZWNrZWQgPT09IG51bGwpIHtcbiAgICAgICAgaXRlbUNoZWNrZWQgPSBmaWx0ZXJJdGVtLmNoZWNrZWQ7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW1DaGVja2VkICE9PSBmaWx0ZXJJdGVtLmNoZWNrZWQpIHtcbiAgICAgICAgaXRlbUNoZWNrZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpdGVtQ2hlY2tlZCA9PT0gbnVsbCkge1xuICAgICAgaXRlbUNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmFsbEl0ZW0uY2hlY2tlZCA9IGl0ZW1DaGVja2VkO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDb2xsYXBzZWRPZkFsbCgpOiB2b2lkIHtcbiAgICBsZXQgaGFzSXRlbUV4cGFuZGVkID0gZmFsc2U7XG4gICAgZm9yIChjb25zdCBmaWx0ZXJJdGVtIG9mIHRoaXMuZmlsdGVySXRlbXMpIHtcbiAgICAgIGlmICghZmlsdGVySXRlbS5jb2xsYXBzZWQpIHtcbiAgICAgICAgaGFzSXRlbUV4cGFuZGVkID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hbGxJdGVtLmNvbGxhcHNlZCA9ICFoYXNJdGVtRXhwYW5kZWQ7XG4gIH1cbn1cbiIsIjxuZy10ZW1wbGF0ZSAjZGVmYXVsdEl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cIml0ZW1cIiBsZXQtb25Db2xsYXBzZUV4cGFuZD1cIm9uQ29sbGFwc2VFeHBhbmRcIlxuICBsZXQtb25DaGVja2VkQ2hhbmdlPVwib25DaGVja2VkQ2hhbmdlXCI+XG4gIDxkaXYgY2xhc3M9XCJmb3JtLWlubGluZSByb3ctaXRlbVwiPlxuICAgIDxpICpuZ0lmPVwiaXRlbS5jaGlsZHJlblwiIChjbGljayk9XCJvbkNvbGxhcHNlRXhwYW5kKClcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBbbmdTd2l0Y2hdPVwiaXRlbS5jb2xsYXBzZWRcIj5cbiAgICAgIDxzdmcgKm5nU3dpdGNoQ2FzZT1cInRydWVcIiB3aWR0aD1cIjAuOHJlbVwiIGhlaWdodD1cIjAuOHJlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBjbGFzcz1cImJpIGJpLWNhcmV0LXJpZ2h0LWZpbGxcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNMTIuMTQgOC43NTNsLTUuNDgyIDQuNzk2Yy0uNjQ2LjU2Ni0xLjY1OC4xMDYtMS42NTgtLjc1M1YzLjIwNGExIDEgMCAwIDEgMS42NTktLjc1M2w1LjQ4IDQuNzk2YTEgMSAwIDAgMSAwIDEuNTA2elwiIC8+XG4gICAgICA8L3N2Zz5cbiAgICAgIDxzdmcgKm5nU3dpdGNoQ2FzZT1cImZhbHNlXCIgd2lkdGg9XCIwLjhyZW1cIiBoZWlnaHQ9XCIwLjhyZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgY2xhc3M9XCJiaSBiaS1jYXJldC1kb3duLWZpbGxcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNNy4yNDcgMTEuMTRMMi40NTEgNS42NThDMS44ODUgNS4wMTMgMi4zNDUgNCAzLjIwNCA0aDkuNTkyYTEgMSAwIDAgMSAuNzUzIDEuNjU5bC00Ljc5NiA1LjQ4YTEgMSAwIDAgMS0xLjUwNiAwelwiIC8+XG4gICAgICA8L3N2Zz5cbiAgICA8L2k+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiBbKG5nTW9kZWwpXT1cIml0ZW0uY2hlY2tlZFwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uQ2hlY2tlZENoYW5nZSgpXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cIml0ZW0uZGlzYWJsZWRcIiBbaW5kZXRlcm1pbmF0ZV09XCJpdGVtLmluZGV0ZXJtaW5hdGVcIiAvPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIChjbGljayk9XCJpdGVtLmNoZWNrZWQgPSAhaXRlbS5jaGVja2VkOyBvbkNoZWNrZWRDaGFuZ2UoKVwiPlxuICAgICAgICB7e2l0ZW0udGV4dH19XG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG48bmctdGVtcGxhdGUgI2RlZmF1bHRIZWFkZXJUZW1wbGF0ZSBsZXQtY29uZmlnPVwiY29uZmlnXCIgbGV0LWl0ZW09XCJpdGVtXCIgbGV0LW9uQ29sbGFwc2VFeHBhbmQ9XCJvbkNvbGxhcHNlRXhwYW5kXCJcbiAgbGV0LW9uQ2hlY2tlZENoYW5nZT1cIm9uQ2hlY2tlZENoYW5nZVwiIGxldC1vbkZpbHRlclRleHRDaGFuZ2U9XCJvbkZpbHRlclRleHRDaGFuZ2VcIj5cbiAgPGRpdiAqbmdJZj1cImNvbmZpZy5oYXNGaWx0ZXJcIiBjbGFzcz1cInJvdyByb3ctZmlsdGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBbcGxhY2Vob2xkZXJdPVwiaTE4bi5nZXRGaWx0ZXJQbGFjZWhvbGRlcigpXCIgWyhuZ01vZGVsKV09XCJmaWx0ZXJUZXh0XCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25GaWx0ZXJUZXh0Q2hhbmdlKCRldmVudClcIiAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiAqbmdJZj1cImhhc0ZpbHRlckl0ZW1zXCI+XG4gICAgPGRpdiAqbmdJZj1cImNvbmZpZy5oYXNBbGxDaGVja0JveCB8fCBjb25maWcuaGFzQ29sbGFwc2VFeHBhbmRcIiBjbGFzcz1cInJvdyByb3ctYWxsXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCIgKm5nSWY9XCJjb25maWcuaGFzQWxsQ2hlY2tCb3hcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgWyhuZ01vZGVsKV09XCJpdGVtLmNoZWNrZWRcIiAobmdNb2RlbENoYW5nZSk9XCJvbkNoZWNrZWRDaGFuZ2UoKVwiXG4gICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJpdGVtLmluZGV0ZXJtaW5hdGVcIiAvPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiAoY2xpY2spPVwiaXRlbS5jaGVja2VkID0gIWl0ZW0uY2hlY2tlZDsgb25DaGVja2VkQ2hhbmdlKClcIj5cbiAgICAgICAgICAgIHt7aTE4bi5nZXRBbGxDaGVja2JveFRleHQoKX19XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbCAqbmdJZj1cImNvbmZpZy5oYXNDb2xsYXBzZUV4cGFuZFwiIGNsYXNzPVwiZmxvYXQtcmlnaHQgZm9ybS1jaGVjay1sYWJlbFwiIChjbGljayk9XCJvbkNvbGxhcHNlRXhwYW5kKClcIj5cbiAgICAgICAgICA8aSBbdGl0bGVdPVwiaTE4bi5nZXRUb29sdGlwQ29sbGFwc2VFeHBhbmRUZXh0KGl0ZW0uY29sbGFwc2VkKVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIFtuZ1N3aXRjaF09XCJpdGVtLmNvbGxhcHNlZFwiPlxuICAgICAgICAgICAgPHN2ZyAqbmdTd2l0Y2hDYXNlPVwidHJ1ZVwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGNsYXNzPVwiYmkgYmktYXJyb3dzLWFuZ2xlLWV4cGFuZFwiXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMS41IDEwLjAzNmEuNS41IDAgMCAxIC41LjV2My41aDMuNWEuNS41IDAgMCAxIDAgMWgtNGEuNS41IDAgMCAxLS41LS41di00YS41LjUgMCAwIDEgLjUtLjV6XCIgLz5cbiAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk02LjM1NCA5LjY0NmEuNS41IDAgMCAxIDAgLjcwOGwtNC41IDQuNWEuNS41IDAgMCAxLS43MDgtLjcwOGw0LjUtNC41YS41LjUgMCAwIDEgLjcwOCAwem04LjUtOC41YS41LjUgMCAwIDEgMCAuNzA4bC00LjUgNC41YS41LjUgMCAwIDEtLjcwOC0uNzA4bDQuNS00LjVhLjUuNSAwIDAgMSAuNzA4IDB6XCIgLz5cbiAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0xMC4wMzYgMS41YS41LjUgMCAwIDEgLjUtLjVoNGEuNS41IDAgMCAxIC41LjV2NGEuNS41IDAgMSAxLTEgMFYyaC0zLjVhLjUuNSAwIDAgMS0uNS0uNXpcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8c3ZnICpuZ1N3aXRjaENhc2U9XCJmYWxzZVwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGNsYXNzPVwiYmkgYmktYXJyb3dzLWFuZ2xlLWNvbnRyYWN0XCJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk05LjUgMi4wMzZhLjUuNSAwIDAgMSAuNS41djMuNWgzLjVhLjUuNSAwIDAgMSAwIDFoLTRhLjUuNSAwIDAgMS0uNS0uNXYtNGEuNS41IDAgMCAxIC41LS41elwiIC8+XG4gICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMTQuMzU0IDEuNjQ2YS41LjUgMCAwIDEgMCAuNzA4bC00LjUgNC41YS41LjUgMCAxIDEtLjcwOC0uNzA4bDQuNS00LjVhLjUuNSAwIDAgMSAuNzA4IDB6bS03LjUgNy41YS41LjUgMCAwIDEgMCAuNzA4bC00LjUgNC41YS41LjUgMCAwIDEtLjcwOC0uNzA4bDQuNS00LjVhLjUuNSAwIDAgMSAuNzA4IDB6XCIgLz5cbiAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0yLjAzNiA5LjVhLjUuNSAwIDAgMSAuNS0uNWg0YS41LjUgMCAwIDEgLjUuNXY0YS41LjUgMCAwIDEtMSAwVjEwaC0zLjVhLjUuNSAwIDAgMS0uNS0uNXpcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9pPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiAqbmdJZj1cImNvbmZpZy5oYXNEaXZpZGVyXCIgY2xhc3M9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbjxkaXYgY2xhc3M9XCJ0cmVldmlldy1oZWFkZXJcIj5cbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImhlYWRlclRlbXBsYXRlIHx8IGRlZmF1bHRIZWFkZXJUZW1wbGF0ZVwiXG4gICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cImhlYWRlclRlbXBsYXRlQ29udGV4dFwiPlxuICA8L25nLXRlbXBsYXRlPlxuPC9kaXY+XG48ZGl2IFtuZ1N3aXRjaF09XCJoYXNGaWx0ZXJJdGVtc1wiPlxuICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCJ0cnVlXCIgY2xhc3M9XCJ0cmVldmlldy1jb250YWluZXJcIiBbc3R5bGUubWF4LWhlaWdodC5weF09XCJtYXhIZWlnaHRcIj5cbiAgICA8bmd4LXRyZWV2aWV3LWl0ZW0gKm5nRm9yPVwibGV0IGl0ZW0gb2YgZmlsdGVySXRlbXNcIiBbY29uZmlnXT1cImNvbmZpZ1wiIFtpdGVtXT1cIml0ZW1cIlxuICAgICAgW3RlbXBsYXRlXT1cIml0ZW1UZW1wbGF0ZSB8fCBkZWZhdWx0SXRlbVRlbXBsYXRlXCIgKGNoZWNrZWRDaGFuZ2UpPVwib25JdGVtQ2hlY2tlZENoYW5nZShpdGVtLCAkZXZlbnQpXCI+XG4gICAgPC9uZ3gtdHJlZXZpZXctaXRlbT5cbiAgPC9kaXY+XG4gIDxkaXYgKm5nU3dpdGNoQ2FzZT1cImZhbHNlXCIgY2xhc3M9XCJ0cmVldmlldy10ZXh0XCI+XG4gICAge3tpMThuLmdldEZpbHRlck5vSXRlbXNGb3VuZFRleHQoKX19XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=