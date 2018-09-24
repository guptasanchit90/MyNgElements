import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class AboutMeComponent implements OnInit {
  _data: any;

  @Input()
  set data(data: any) {
    this._data = JSON.parse(data);
  }
  get data(): any { return this._data; }

  @Output()
  eventOut = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
