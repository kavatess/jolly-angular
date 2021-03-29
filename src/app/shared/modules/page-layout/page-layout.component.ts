import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent implements OnInit {
  @Input() hasHeader = true;
  @Input() hasFooter = true;
  @Input() isOverflow = true;
  constructor() { }

  ngOnInit(): void {
  }

}
