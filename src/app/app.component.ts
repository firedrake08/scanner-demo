import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ws!:WebSocket;
  imgSrc:string= "";

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
