import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() navArr: NavElement[] = [];
  @Output() tabChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  changeTab(tabIndex: number, navbarEl: any): void {
    this.tabChange.emit(tabIndex);
    document.querySelectorAll('.nav-link').forEach(element => {
      element.classList.remove('active');
    });
    navbarEl.target.classList.add('active');
  }
}

export interface NavElement {
  tabIndex: number;
  content: string;
}
