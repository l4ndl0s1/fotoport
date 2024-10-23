import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent {
  @ViewChild('hoverSound') hoverSound!: ElementRef<HTMLAudioElement>;

  playSound(): void {
    this.hoverSound.nativeElement.play();
  }
}
