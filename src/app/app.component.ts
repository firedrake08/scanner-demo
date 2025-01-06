import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ws!:WebSocket;
  imgSrc:string= "https://lh6.googleusercontent.com/proxy/2ED4oOCWyMqtoafYCIDVXJVrpt8slFG_bBC03YxaZQfa6I-XxyEjuY68hUM7KkGAhHaXhnHrJ5P0MDVlZx8iEoYjDmi-TXIMG16UaJc";

  ngOnInit(): void {
    this.initWebSocket();
  }

  initWebSocket(){
    this.ws = new WebSocket('ws://localhost:8181/');
    this.ws.onmessage = (e)=> {
      if (e.data instanceof Blob) {
        let imgBlob = e.data;
        this.imgSrc = URL.createObjectURL(imgBlob);
      }
      else{
        console.log("Invalid format");
      }
    }
  }

  openScanApp(){
    this.ws.send("1100");
  }
}
