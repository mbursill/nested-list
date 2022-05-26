import {
  Component,
  ComponentRef,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'nested-list',
  templateUrl: './nested-list.component.html',
})
export class NestedListComponent {
  @Input() items: NestedListItem[];

  constructor(private viewContainerRef: ViewContainerRef) {
    
  }

  // public getComponentRef(content: any): ComponentRef<any> | void {
  //   if (!content) {
  //     return;
  //   } else if (content instanceof TemplateRef) {
  //     return this.createFromTemplateRef(content);
  //   } else if (typeof content == 'string') {
  //     return this.createFromString(content);
  //   } else {
  //     return this.createFromComponent(content);
  //   }
  // }

  // private createFromTemplateRef(content: TemplateRef<any>): ComponentRef<any> {
  //   const viewRef = content.createEmbeddedView(content);

  // }

  // private createFromString(content: string): ComponentRef<any> {
  //   const component = document.createTextNode(`${content}`);
  //   //return new ContentRef([[component]]);
  //   return this.viewContainerRef.createComponent(component);
  // }

  // private createFromComponent(content: any): ComponentRef<any> {
  //   const componentRef = this.viewContainerRef.createComponent(content);
  //   //const componentNativeEl = componentRef.location.nativeElement;
  //   return componentRef;
  // }
}

// export class ContentRef {
//   constructor(
//     public nodes: any[],
//     public componentRef?: ComponentRef<any>
//   ) {}
// }

export class NestedListItem {
  content?: any;

  children?: NestedListItem[];
}
