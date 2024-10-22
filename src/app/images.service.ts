import { Injectable } from '@angular/core';
import { Image } from './models/images.module';
import { delay, Observable, of } from 'rxjs';

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
      year: 2004,
      price: 2000,
    },
    {
      id: 2,
      src: 'image_2.jpg',
      name: 'Sea',
      loacation: 'Swiss',
      year: 2021,
      price: 1000,
    },
    {
      id: 3,
      src: 'image_3.jpg',
      name: 'Red Wood',
      loacation: 'Romania',
      year: 2022,
      price: 4000,
    },
    {
      id: 4,
      src: 'image_4.jpg',
      name: 'Turtle',
      loacation: 'Austria',
      year: 2001,
      price: 3400,
    },

    {
      id: 4,
      src: 'image_6.jpg',
      name: 'mountain see',
      loacation: 'Bosnia',
      year: 2011,
      price: 2000,
    },
    {
      id: 5,
      src: 'image_7.jpg',
      name: 'Vineyard',
      loacation: 'Hungery',
      year: 2003,
      price: 1000,
    },
    {
      id: 6,
      src: 'image_8.jpg',
      name: 'Zebras',
      loacation: 'Africa',
      year: 2024,
      price: 5000,
    },
    {
      id: 7,
      src: 'image_9.jpg',
      name: 'Giraffe',
      loacation: 'Africa',
      year: 1990,
      price: 12000,
    },
    {
      id: 8,
      src: 'image_10.jpg',
      name: 'Another Image',
      loacation: 'Africa',
      year: 2006,
      price: 2000,
    },
  ];

  getImages(): Observable<Image[]> {
    return of(this.images).pipe(delay(500));
  }
}
