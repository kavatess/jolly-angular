import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  tabIndex = 0;
  @Input() navArr: NavElement[] = [];
  @Output() tabChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  changeTab(tabIndex: number, navbarEl: any): void {
    if (this.tabIndex != tabIndex) {
      this.tabIndex = tabIndex;
      this.tabChange.emit(tabIndex);
      document.querySelectorAll('.nav-link').forEach(element => {
        element.classList.remove('active');
      });
      navbarEl.target.classList.add('active');
    }
  }
}

export class NavElement {
  tabIndex: number;
  content: string;
  constructor(tabIndex: number, content: string) {
    this.tabIndex = Number(tabIndex);
    this.content = content;
  }
}
