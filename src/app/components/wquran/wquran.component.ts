
import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-wquran',
  templateUrl: './wquran.component.html',
  styleUrls: ['./wquran.component.css']
})
export class WquranComponent implements OnInit {

  event:any
  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('videoPlayer') videoplayer: ElementRef;

toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
}
}



