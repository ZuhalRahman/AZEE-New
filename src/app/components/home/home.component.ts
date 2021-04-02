import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  event:any
  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('videoPlayer') videoplayer: ElementRef;

toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
}
}
