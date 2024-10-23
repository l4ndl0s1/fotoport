import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ImageService } from '../images.service';
import { Image } from '../models/images.module';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  images: Image[] = [];
  displayLimit: number = 6;
  selectedImage: Image | null = null;
  @ViewChild('hoverSound') hoverSound!: ElementRef<HTMLAudioElement>;
  @ViewChild('hoverSound1') hoverSound1!: ElementRef<HTMLAudioElement>;
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageService.getImages().subscribe((data: Image[]) => {
      this.images = data;
    });
  }

  loadMore(): void {
    this.displayLimit = Math.min(this.displayLimit + 1, this.images.length);
    this.hoverSound1.nativeElement.play();
  }

  get allImagesLoaded(): boolean {
    return this.displayLimit >= this.images.length;
  }

  openImage(image: Image): void {
    this.selectedImage = image;
    this.hoverSound.nativeElement.play();
  }

  closeModal(): void {
    this.selectedImage = null;
  }
  playSound(): void {
    this.hoverSound.nativeElement.play();
  }

  stopSound(): void {
    const audio = this.hoverSound.nativeElement;
    audio.pause();
  }

  playSound1(): void {
    this.hoverSound1.nativeElement.play();
  }

  stopSound1(): void {
    const audio = this.hoverSound1.nativeElement;
    audio.pause();
  }
}
