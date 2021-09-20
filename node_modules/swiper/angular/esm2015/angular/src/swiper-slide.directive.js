import { Directive, Input } from '@angular/core';
import { coerceBooleanProperty } from './utils/utils';
import * as i0 from "@angular/core";
export class SwiperSlideDirective {
    constructor(template) {
        this.template = template;
        this.class = '';
        this.slideData = {
            isActive: false,
            isPrev: false,
            isNext: false,
            isVisible: false,
            isDuplicate: false,
        };
    }
    set zoom(val) {
        this._zoom = coerceBooleanProperty(val);
    }
    get zoom() {
        return this._zoom;
    }
    get classNames() {
        return this._classNames;
    }
    set classNames(val) {
        if (this._classNames === val) {
            return;
        }
        this._classNames = val;
        this.slideData = {
            isActive: this._hasClass(['swiper-slide-active', 'swiper-slide-duplicate-active']),
            isVisible: this._hasClass(['swiper-slide-visible']),
            isDuplicate: this._hasClass(['swiper-slide-duplicate']),
            isPrev: this._hasClass(['swiper-slide-prev', 'swiper-slide-duplicate-prev']),
            isNext: this._hasClass(['swiper-slide-next', 'swiper-slide-duplicate-next']),
        };
    }
    _hasClass(classNames) {
        return classNames.some((className) => this._classNames.indexOf(className) >= 0);
    }
}
SwiperSlideDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.2", ngImport: i0, type: SwiperSlideDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
SwiperSlideDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.2", type: SwiperSlideDirective, selector: "ng-template[swiperSlide]", inputs: { virtualIndex: "virtualIndex", class: "class", zoom: "zoom" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.2", ngImport: i0, type: SwiperSlideDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ng-template[swiperSlide]',
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }]; }, propDecorators: { virtualIndex: [{
                type: Input
            }], class: [{
                type: Input
            }], zoom: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLXNsaWRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbmd1bGFyL3NyYy9zd2lwZXItc2xpZGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFJdEQsTUFBTSxPQUFPLG9CQUFvQjtJQXlDL0IsWUFBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUF2Q3BDLFVBQUssR0FBVyxFQUFFLENBQUM7UUE4QjVCLGNBQVMsR0FBRztZQUNWLFFBQVEsRUFBRSxLQUFLO1lBQ2YsTUFBTSxFQUFFLEtBQUs7WUFDYixNQUFNLEVBQUUsS0FBSztZQUNiLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUM7SUFHOEMsQ0FBQztJQXRDakQsSUFDSSxJQUFJLENBQUMsR0FBWTtRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUdELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxVQUFVLENBQUMsR0FBRztRQUNoQixJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssR0FBRyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLHFCQUFxQixFQUFFLCtCQUErQixDQUFDLENBQUM7WUFDbEYsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ25ELFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUN2RCxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLDZCQUE2QixDQUFDLENBQUM7WUFDNUUsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO1NBQzdFLENBQUM7SUFDSixDQUFDO0lBRU8sU0FBUyxDQUFDLFVBQW9CO1FBQ3BDLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQzs7aUhBL0JVLG9CQUFvQjtxR0FBcEIsb0JBQW9COzJGQUFwQixvQkFBb0I7a0JBSGhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtpQkFDckM7a0dBRVUsWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBRUYsSUFBSTtzQkFEUCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJy4vdXRpbHMvdXRpbHMnO1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbc3dpcGVyU2xpZGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgU3dpcGVyU2xpZGVEaXJlY3RpdmUge1xuICBASW5wdXQoKSB2aXJ0dWFsSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKVxuICBzZXQgem9vbSh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl96b29tID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbCk7XG4gIH1cbiAgZ2V0IHpvb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3pvb207XG4gIH1cbiAgcHJpdmF0ZSBfem9vbTogYm9vbGVhbjtcbiAgc2xpZGVJbmRleDogbnVtYmVyO1xuICBnZXQgY2xhc3NOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xhc3NOYW1lcztcbiAgfVxuICBzZXQgY2xhc3NOYW1lcyh2YWwpIHtcbiAgICBpZiAodGhpcy5fY2xhc3NOYW1lcyA9PT0gdmFsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2NsYXNzTmFtZXMgPSB2YWw7XG4gICAgdGhpcy5zbGlkZURhdGEgPSB7XG4gICAgICBpc0FjdGl2ZTogdGhpcy5faGFzQ2xhc3MoWydzd2lwZXItc2xpZGUtYWN0aXZlJywgJ3N3aXBlci1zbGlkZS1kdXBsaWNhdGUtYWN0aXZlJ10pLFxuICAgICAgaXNWaXNpYmxlOiB0aGlzLl9oYXNDbGFzcyhbJ3N3aXBlci1zbGlkZS12aXNpYmxlJ10pLFxuICAgICAgaXNEdXBsaWNhdGU6IHRoaXMuX2hhc0NsYXNzKFsnc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZSddKSxcbiAgICAgIGlzUHJldjogdGhpcy5faGFzQ2xhc3MoWydzd2lwZXItc2xpZGUtcHJldicsICdzd2lwZXItc2xpZGUtZHVwbGljYXRlLXByZXYnXSksXG4gICAgICBpc05leHQ6IHRoaXMuX2hhc0NsYXNzKFsnc3dpcGVyLXNsaWRlLW5leHQnLCAnc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZS1uZXh0J10pLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9oYXNDbGFzcyhjbGFzc05hbWVzOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiBjbGFzc05hbWVzLnNvbWUoKGNsYXNzTmFtZSkgPT4gdGhpcy5fY2xhc3NOYW1lcy5pbmRleE9mKGNsYXNzTmFtZSkgPj0gMCk7XG4gIH1cbiAgc2xpZGVEYXRhID0ge1xuICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICBpc1ByZXY6IGZhbHNlLFxuICAgIGlzTmV4dDogZmFsc2UsXG4gICAgaXNWaXNpYmxlOiBmYWxzZSxcbiAgICBpc0R1cGxpY2F0ZTogZmFsc2UsXG4gIH07XG5cbiAgcHJpdmF0ZSBfY2xhc3NOYW1lczogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHt9XG59XG4iXX0=