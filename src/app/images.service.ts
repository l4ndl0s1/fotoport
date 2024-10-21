import { Injectable } from '@angular/core';
import { Image } from './models/images.module';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private images: Image[] = [
    {
      id: 1,
      src: 'image_1.webp',
      name: 'Bear',
      width: 1980,
      height: 1512,
      class: 'landscape',
    },
    {
      id: 2,
      src: 'image_2.jpg',
      name: 'Sea',
      width: 1980,
      height: 1512,
      class: 'landscape',
    },
    {
      id: 3,
      src: 'image_3.jpg',
      name: 'Red Wood',
      width: 1980,
      height: 1512,
      class: 'landscape',
    },
    {
      id: 4,
      src: 'image_4.jpg',
      name: 'Turtle',
      width: 1980,
      height: 1512,
      class: 'landscape',
    },

    {
      id: 4,
      src: 'image_6.jpg',
      name: 'mountain see',
      width: 1980,
      height: 1512,
      class: 'landscape',
    },
    {
      id: 5,
      src: 'image_7.jpg',
      name: 'Vineyard',
      width: 1980,
      height: 1512,
      class: 'landscape',
    },
    {
      id: 6,
      src: 'image_8.jpg',
      name: 'Zebras',
      width: 1980,
      height: 1512,
      class: 'landscape',
    },
    {
      id: 7,
      src: 'image_9.jpg',
      name: 'Giraffe',
      width: 1980,
      height: 1512,
      class: 'landscape',
    },
    {
      id: 8,
      src: 'image_10.jpg',
      name: 'Another Image',
      width: 1980,
      height: 1512,
      class: 'landscape',
    },
  ];

  getImages(): Image[] {
    return this.images;
  }
}
