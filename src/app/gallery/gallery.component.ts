import {
  Component,
  OnInit,
  ViewChildren,
  ElementRef,
  QueryList,
} from '@angular/core';
import { ImageService } from '../images.service';
import { Image } from '../models/images.module';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  images: Image[] = [];
  displayLimit = 3;
  allImagesLoaded = false;
  selectedImage: Image | null = null;
  private lastLoadedIndex = 3;

  @ViewChildren('imageContainer') imageContainers!: QueryList<ElementRef>;
  @ViewChildren('loadMoreButton') loadMoreButton!: QueryList<ElementRef>;

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageService.getImages().subscribe((data: Image[]) => {
      this.images = data;
      this.lastLoadedIndex = this.displayLimit;
      if (this.displayLimit >= this.images.length) {
        this.allImagesLoaded = true;
      }
    });
  }

  loadMore() {
    const increment = 1;
    if (this.lastLoadedIndex + increment >= this.images.length) {
      this.displayLimit = this.images.length;
      this.allImagesLoaded = true;
    } else {
      this.displayLimit += increment;
      this.lastLoadedIndex += increment;
    }

    setTimeout(() => {
      if (!this.allImagesLoaded) {
        const buttonArray = this.loadMoreButton.toArray();
        if (buttonArray.length > 0) {
          buttonArray[0].nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      } else {
        const imagesArray = this.imageContainers.toArray();
        if (imagesArray.length > 0) {
          imagesArray[imagesArray.length - 1].nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
          });
        }
      }
    }, 100);
  }

  openImage(image: Image) {
    this.selectedImage = image;
  }

  closeModal() {
    this.selectedImage = null;
  }
}
