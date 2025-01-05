import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'scan-app';
  nav!: Navigator | any;
  ngOnInit(): void {
    this.nav = navigator;
    this.nav.usb.getDevices().then((d:any) => {
      console.log(d)
    });
  }
}
