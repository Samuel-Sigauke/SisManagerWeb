import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.css']
})
export class LeftnavComponent implements OnInit {
  @ViewChild('trigger') customTrigger : TemplateRef<void>;
  // openMap: { [name: string]: boolean } = {
  //   sub1: true,
  //   sub2: false,
  //   sub3: false
  // };
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  triggerTemplate = null;

  // changeTrigger(): void {
  //   this.triggerTemplate = this.customTrigger;
  // }

  constructor() { }

  ngOnInit() {
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  
  // openHandler(value: string): void {
  //   for (const key in this.openMap) {
  //     if (key !== value) {
  //       this.openMap[key] = false;
  //     }
  //   }
  // }

  // change(value: boolean): void {
  //   console.log(value);
  // }

}
