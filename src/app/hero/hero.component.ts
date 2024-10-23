import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  @ViewChild('hoverSound') hoverSound!: ElementRef<HTMLAudioElement>;

  playSound(): void {
    this.hoverSound.nativeElement.play();
  }

  stopSound(): void {
    const audio = this.hoverSound.nativeElement;
    audio.pause();
  }
}
