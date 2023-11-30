import { isBoolean, isNil, isString } from 'lodash';
import { TreeviewHelper } from '../helpers/treeview-helper';
export class TreeviewItem {
    internalDisabled = false;
    internalChecked = true;
    internalCollapsed = false;
    internalHidden = false;
    internalChildren;
    text;
    value;
    constructor(item, autoCorrectChecked = false) {
        if (isNil(item)) {
            throw new Error('Item must be defined');
        }
        if (isString(item.text)) {
            this.text = item.text;
        }
        else {
            throw new Error('A text of item must be string object');
        }
        this.value = item.value;
        if (isBoolean(item.checked)) {
            this.checked = item.checked;
        }
        if (isBoolean(item.collapsed)) {
            this.collapsed = item.collapsed;
        }
        if (isBoolean(item.disabled)) {
            this.disabled = item.disabled;
        }
        if (isBoolean(item.hidden)) {
            this.hidden = item.hidden;
        }
        if (!isNil(item.children) && item.children.length > 0) {
            this.children = item.children.map(child => {
                if (this.disabled === true) {
                    child.disabled = true;
                }
                return new TreeviewItem(child);
            });
        }
        if (autoCorrectChecked) {
            this.correctChecked();
        }
    }
    get checked() {
        return this.internalChecked;
    }
    set checked(value) {
        if (!this.internalDisabled) {
            if (this.internalChecked !== value) {
                this.internalChecked = value;
            }
        }
    }
    get hidden() {
        return this.internalHidden;
    }
    set hidden(value) {
        if (!this.internalHidden) {
            if (this.internalHidden !== value) {
                this.internalHidden = value;
            }
        }
    }
    get indeterminate() {
        return this.checked === undefined;
    }
    setCheckedRecursive(value) {
        if (!this.internalDisabled) {
            this.internalChecked = value;
            if (!isNil(this.internalChildren)) {
                this.internalChildren.forEach(child => child.setCheckedRecursive(value));
            }
        }
    }
    get disabled() {
        return this.internalDisabled;
    }
    set disabled(value) {
        if (this.internalDisabled !== value) {
            this.internalDisabled = value;
            if (!isNil(this.internalChildren)) {
                this.internalChildren.forEach(child => child.disabled = value);
            }
        }
    }
    get collapsed() {
        return this.internalCollapsed;
    }
    set collapsed(value) {
        if (this.internalCollapsed !== value) {
            this.internalCollapsed = value;
        }
    }
    setCollapsedRecursive(value) {
        this.internalCollapsed = value;
        if (!isNil(this.internalChildren)) {
            this.internalChildren.forEach(child => child.setCollapsedRecursive(value));
        }
    }
    get children() {
        return this.internalChildren;
    }
    set children(value) {
        if (this.internalChildren !== value) {
            if (!isNil(value) && value.length === 0) {
                throw new Error('Children must be not an empty array');
            }
            this.internalChildren = value;
            if (!isNil(this.internalChildren)) {
                let checked = null;
                this.internalChildren.forEach(child => {
                    if (checked === null) {
                        checked = child.checked;
                    }
                    else {
                        if (child.checked !== checked) {
                            checked = undefined;
                            return;
                        }
                    }
                });
                this.internalChecked = checked;
            }
        }
    }
    getSelection() {
        let checkedItems = [];
        let uncheckedItems = [];
        if (isNil(this.internalChildren)) {
            if (this.internalChecked) {
                checkedItems.push(this);
            }
            else {
                uncheckedItems.push(this);
            }
        }
        else {
            const selection = TreeviewHelper.concatSelection(this.internalChildren, checkedItems, uncheckedItems);
            checkedItems = selection.checked;
            uncheckedItems = selection.unchecked;
        }
        return {
            checkedItems,
            uncheckedItems
        };
    }
    correctChecked() {
        this.internalChecked = this.getCorrectChecked();
    }
    getCorrectChecked() {
        let checked = null;
        if (!isNil(this.internalChildren)) {
            for (const child of this.internalChildren) {
                child.internalChecked = child.getCorrectChecked();
                if (checked === null) {
                    checked = child.internalChecked;
                }
                else if (checked !== child.internalChecked) {
                    checked = undefined;
                    break;
                }
            }
        }
        else {
            checked = this.checked;
        }
        return checked;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXZpZXctaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10cmVldmlldy9zcmMvbGliL21vZGVscy90cmVldmlldy1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFpQjVELE1BQU0sT0FBTyxZQUFZO0lBQ2YsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDdkIsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQzFCLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDdkIsZ0JBQWdCLENBQWlCO0lBQ3pDLElBQUksQ0FBUztJQUNiLEtBQUssQ0FBTTtJQUVYLFlBQVksSUFBYyxFQUFFLGtCQUFrQixHQUFHLEtBQUs7UUFDcEQsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7U0FDekQ7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUM3QjtRQUNELElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFB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b0JBQ3BCLE9BQU8sR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDO2lCQUNqQztxQkFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLENBQUMsZUFBZSxFQUFFO29CQUM1QyxPQUFPLEdBQUcsU0FBUyxDQUFDO29CQUNwQixNQUFNO2lCQUNQO2FBQ0Y7U0FDRjthQUFNO1lBQ0wsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDeEI7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0Jvb2xlYW4sIGlzTmlsLCBpc1N0cmluZyB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBUcmVldmlld0hlbHBlciB9IGZyb20gJy4uL2hlbHBlcnMvdHJlZXZpZXctaGVscGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBUcmVldmlld1NlbGVjdGlvbiB7XG4gIGNoZWNrZWRJdGVtczogVHJlZXZpZXdJdGVtW107XG4gIHVuY2hlY2tlZEl0ZW1zOiBUcmVldmlld0l0ZW1bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmVlSXRlbSB7XG4gIHRleHQ6IHN0cmluZztcbiAgdmFsdWU6IGFueTtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBoaWRkZW4/OiBib29sZWFuO1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgY29sbGFwc2VkPzogYm9vbGVhbjtcbiAgY2hpbGRyZW4/OiBUcmVlSXRlbVtdO1xufVxuXG5leHBvcnQgY2xhc3MgVHJlZXZpZXdJdGVtIHtcbiAgcHJpdmF0ZSBpbnRlcm5hbERpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgaW50ZXJuYWxDaGVja2VkID0gdHJ1ZTtcbiAgcHJpdmF0ZSBpbnRlcm5hbENvbGxhcHNlZCA9IGZhbHNlO1xuICBwcml2YXRlIGludGVybmFsSGlkZGVuID0gZmFsc2U7XG4gIHByaXZhdGUgaW50ZXJuYWxDaGlsZHJlbjogVHJlZXZpZXdJdGVtW107XG4gIHRleHQ6IHN0cmluZztcbiAgdmFsdWU6IGFueTtcblxuICBjb25zdHJ1Y3RvcihpdGVtOiBUcmVlSXRlbSwgYXV0b0NvcnJlY3RDaGVja2VkID0gZmFsc2UpIHtcbiAgICBpZiAoaXNOaWwoaXRlbSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSXRlbSBtdXN0IGJlIGRlZmluZWQnKTtcbiAgICB9XG4gICAgaWYgKGlzU3RyaW5nKGl0ZW0udGV4dCkpIHtcbiAgICAgIHRoaXMudGV4dCA9IGl0ZW0udGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIHRleHQgb2YgaXRlbSBtdXN0IGJlIHN0cmluZyBvYmplY3QnKTtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IGl0ZW0udmFsdWU7XG4gICAgaWYgKGlzQm9vbGVhbihpdGVtLmNoZWNrZWQpKSB7XG4gICAgICB0aGlzLmNoZWNrZWQgPSBpdGVtLmNoZWNrZWQ7XG4gICAgfVxuICAgIGlmIChpc0Jvb2xlYW4oaXRlbS5jb2xsYXBzZWQpKSB7XG4gICAgICB0aGlzLmNvbGxhcHNlZCA9IGl0ZW0uY29sbGFwc2VkO1xuICAgIH1cbiAgICBpZiAoaXNCb29sZWFuKGl0ZW0uZGlzYWJsZWQpKSB7XG4gICAgICB0aGlzLmRpc2FibGVkID0gaXRlbS5kaXNhYmxlZDtcbiAgICB9XG4gICAgaWYgKGlzQm9vbGVhbihpdGVtLmhpZGRlbikpIHtcbiAgICAgIHRoaXMuaGlkZGVuID0gaXRlbS5oaWRkZW47XG4gICAgfVxuICAgIGlmICghaXNOaWwoaXRlbS5jaGlsZHJlbikgJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuID0gaXRlbS5jaGlsZHJlbi5tYXAoY2hpbGQgPT4ge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNoaWxkLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgVHJlZXZpZXdJdGVtKGNoaWxkKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhdXRvQ29ycmVjdENoZWNrZWQpIHtcbiAgICAgIHRoaXMuY29ycmVjdENoZWNrZWQoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgY2hlY2tlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbENoZWNrZWQ7XG4gIH1cblxuICBzZXQgY2hlY2tlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICghdGhpcy5pbnRlcm5hbERpc2FibGVkKSB7XG4gICAgICBpZiAodGhpcy5pbnRlcm5hbENoZWNrZWQgIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxDaGVja2VkID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IGhpZGRlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbEhpZGRlbjtcbiAgfVxuXG4gIHNldCBoaWRkZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAoIXRoaXMuaW50ZXJuYWxIaWRkZW4pIHtcbiAgICAgIGlmICh0aGlzLmludGVybmFsSGlkZGVuICE9PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLmludGVybmFsSGlkZGVuID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IGluZGV0ZXJtaW5hdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tlZCA9PT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgc2V0Q2hlY2tlZFJlY3Vyc2l2ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5pbnRlcm5hbERpc2FibGVkKSB7XG4gICAgICB0aGlzLmludGVybmFsQ2hlY2tlZCA9IHZhbHVlO1xuICAgICAgaWYgKCFpc05pbCh0aGlzLmludGVybmFsQ2hpbGRyZW4pKSB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxDaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnNldENoZWNrZWRSZWN1cnNpdmUodmFsdWUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxEaXNhYmxlZDtcbiAgfVxuXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLmludGVybmFsRGlzYWJsZWQgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLmludGVybmFsRGlzYWJsZWQgPSB2YWx1ZTtcbiAgICAgIGlmICghaXNOaWwodGhpcy5pbnRlcm5hbENoaWxkcmVuKSkge1xuICAgICAgICB0aGlzLmludGVybmFsQ2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5kaXNhYmxlZCA9IHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXQgY29sbGFwc2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsQ29sbGFwc2VkO1xuICB9XG5cbiAgc2V0IGNvbGxhcHNlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLmludGVybmFsQ29sbGFwc2VkICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5pbnRlcm5hbENvbGxhcHNlZCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHNldENvbGxhcHNlZFJlY3Vyc2l2ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaW50ZXJuYWxDb2xsYXBzZWQgPSB2YWx1ZTtcbiAgICBpZiAoIWlzTmlsKHRoaXMuaW50ZXJuYWxDaGlsZHJlbikpIHtcbiAgICAgIHRoaXMuaW50ZXJuYWxDaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnNldENvbGxhcHNlZFJlY3Vyc2l2ZSh2YWx1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjaGlsZHJlbigpOiBUcmVldmlld0l0ZW1bXSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxDaGlsZHJlbjtcbiAgfVxuXG4gIHNldCBjaGlsZHJlbih2YWx1ZTogVHJlZXZpZXdJdGVtW10pIHtcbiAgICBpZiAodGhpcy5pbnRlcm5hbENoaWxkcmVuICE9PSB2YWx1ZSkge1xuICAgICAgaWYgKCFpc05pbCh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2hpbGRyZW4gbXVzdCBiZSBub3QgYW4gZW1wdHkgYXJyYXknKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW50ZXJuYWxDaGlsZHJlbiA9IHZhbHVlO1xuICAgICAgaWYgKCFpc05pbCh0aGlzLmludGVybmFsQ2hpbGRyZW4pKSB7XG4gICAgICAgIGxldCBjaGVja2VkID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbnRlcm5hbENoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgIGlmIChjaGVja2VkID09PSBudWxsKSB7XG4gICAgICAgICAgICBjaGVja2VkID0gY2hpbGQuY2hlY2tlZDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNoaWxkLmNoZWNrZWQgIT09IGNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgY2hlY2tlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxDaGVja2VkID0gY2hlY2tlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRTZWxlY3Rpb24oKTogVHJlZXZpZXdTZWxlY3Rpb24ge1xuICAgIGxldCBjaGVja2VkSXRlbXM6IFRyZWV2aWV3SXRlbVtdID0gW107XG4gICAgbGV0IHVuY2hlY2tlZEl0ZW1zOiBUcmVldmlld0l0ZW1bXSA9IFtdO1xuICAgIGlmIChpc05pbCh0aGlzLmludGVybmFsQ2hpbGRyZW4pKSB7XG4gICAgICBpZiAodGhpcy5pbnRlcm5hbENoZWNrZWQpIHtcbiAgICAgICAgY2hlY2tlZEl0ZW1zLnB1c2godGhpcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1bmNoZWNrZWRJdGVtcy5wdXNoKHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSBUcmVldmlld0hlbHBlci5jb25jYXRTZWxlY3Rpb24odGhpcy5pbnRlcm5hbENoaWxkcmVuLCBjaGVja2VkSXRlbXMsIHVuY2hlY2tlZEl0ZW1zKTtcbiAgICAgIGNoZWNrZWRJdGVtcyA9IHNlbGVjdGlvbi5jaGVja2VkO1xuICAgICAgdW5jaGVja2VkSXRlbXMgPSBzZWxlY3Rpb24udW5jaGVja2VkO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjaGVja2VkSXRlbXMsXG4gICAgICB1bmNoZWNrZWRJdGVtc1xuICAgIH07XG4gIH1cblxuICBjb3JyZWN0Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmludGVybmFsQ2hlY2tlZCA9IHRoaXMuZ2V0Q29ycmVjdENoZWNrZWQoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29ycmVjdENoZWNrZWQoKTogYm9vbGVhbiB7XG4gICAgbGV0IGNoZWNrZWQ6IGJvb2xlYW4gPSBudWxsO1xuICAgIGlmICghaXNOaWwodGhpcy5pbnRlcm5hbENoaWxkcmVuKSkge1xuICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmludGVybmFsQ2hpbGRyZW4pIHtcbiAgICAgICAgY2hpbGQuaW50ZXJuYWxDaGVja2VkID0gY2hpbGQuZ2V0Q29ycmVjdENoZWNrZWQoKTtcbiAgICAgICAgaWYgKGNoZWNrZWQgPT09IG51bGwpIHtcbiAgICAgICAgICBjaGVja2VkID0gY2hpbGQuaW50ZXJuYWxDaGVja2VkO1xuICAgICAgICB9IGVsc2UgaWYgKGNoZWNrZWQgIT09IGNoaWxkLmludGVybmFsQ2hlY2tlZCkge1xuICAgICAgICAgIGNoZWNrZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2hlY2tlZCA9IHRoaXMuY2hlY2tlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2tlZDtcbiAgfVxufVxuIl19