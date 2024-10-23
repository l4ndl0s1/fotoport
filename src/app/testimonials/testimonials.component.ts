import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent implements AfterViewInit {
  @ViewChild('clickSound') clickSound!: ElementRef<HTMLAudioElement>;

  ngAfterViewInit() {
    if (!this.clickSound) {
      console.error('whre is audio');
    }
  }

  playSound(): void {
    const audio = this.clickSound.nativeElement;
    audio.currentTime = 0;
    audio.play();
  }
}
