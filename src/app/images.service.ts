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
      loacation: 'Alaska',
    },
    {
      id: 2,
      src: 'image_2.jpg',
      name: 'Sea',
      loacation: 'Swiss',
    },
    {
      id: 3,
      src: 'image_3.jpg',
      name: 'Red Wood',
      loacation: 'Romania',
    },
    {
      id: 4,
      src: 'image_4.jpg',
      name: 'Turtle',
      loacation: 'Austria',
    },

    {
      id: 4,
      src: 'image_6.jpg',
      name: 'mountain see',
      loacation: 'Bosnia',
    },
    {
      id: 5,
      src: 'image_7.jpg',
      name: 'Vineyard',
      loacation: 'Hungery',
    },
    {
      id: 6,
      src: 'image_8.jpg',
      name: 'Zebras',
      loacation: 'Africa',
    },
    {
      id: 7,
      src: 'image_9.jpg',
      name: 'Giraffe',
      loacation: 'Africa',
    },
    {
      id: 8,
      src: 'image_10.jpg',
      name: 'Another Image',
      loacation: 'Africa',
    },
  ];

  getImages(): Image[] {
    return this.images;
  }
}
