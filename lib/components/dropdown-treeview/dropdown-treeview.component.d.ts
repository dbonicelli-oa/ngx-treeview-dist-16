import { EventEmitter, TemplateRef } from '@angular/core';
import { TreeviewI18n } from '../../models/treeview-i18n';
import { TreeviewItem } from '../../models/treeview-item';
import { TreeviewConfig } from '../../models/treeview-config';
import { TreeviewComponent } from '../treeview/treeview.component';
import { TreeviewHeaderTemplateContext } from '../../models/treeview-header-template-context';
import { TreeviewItemTemplateContext } from '../../models/treeview-item-template-context';
import * as i0 from "@angular/core";
export declare class DropdownTreeviewComponent {
    i18n: TreeviewI18n;
    private defaultConfig;
    buttonClass: string;
    headerTemplate: TemplateRef<TreeviewHeaderTemplateContext>;
    itemTemplate: TemplateRef<TreeviewItemTemplateContext>;
    items: TreeviewItem[];
    config: TreeviewConfig;
    selectedChange: EventEmitter<any[]>;
    filterChange: EventEmitter<string>;
    treeviewComponent: TreeviewComponent;
    buttonLabel: string;
    constructor(i18n: TreeviewI18n, defaultConfig: TreeviewConfig);
    onSelectedChange(values: any[]): void;
    onFilterChange(text: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownTreeviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DropdownTreeviewComponent, "ngx-dropdown-treeview", never, { "buttonClass": { "alias": "buttonClass"; "required": false; }; "headerTemplate": { "alias": "headerTemplate"; "required": false; }; "itemTemplate": { "alias": "itemTemplate"; "required": false; }; "items": { "alias": "items"; "required": false; }; "config": { "alias": "config"; "required": false; }; }, { "selectedChange": "selectedChange"; "filterChange": "filterChange"; }, never, never, false, never>;
}
