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
      src: 'funny-1.jpg',
      name: 'Baba',
      loacation: 'Alaska',
      year: 2004,
      price: 1000,
    },
    {
      id: 2,
      src: 'funny-5.jpg',
      name: 'Doggy',
      loacation: 'Living Room',
      year: 2014,
      price: 2000,
    },
    {
      id: 3,
      src: '02_img.jpg',
      name: 'Sea',
      loacation: 'Swiss',
      year: 2021,
      price: 1000,
    },
    {
      id: 4,
      src: 'funny-3.jpg',
      name: 'Bear',
      loacation: 'Alaska',
      year: 2004,
      price: 2000,
    },
    
   
    {
      id: 5,
      src: 'funny-4.jpg',
      name: 'Bear',
      loacation: 'Alaska',
      year: 2004,
      price: 2000,
    },

    {
      id: 6,
      src: '05_img.jpg',
      name: 'mountain see',
      loacation: 'Bosnia',
      year: 2011,
      price: 2000,
    },
    {
      id: 7,
      src: 'funny-5.jpg',
      name: 'Bear',
      loacation: 'Alaska',
      year: 2004,
      price: 2000,
    },
   
    {
      id: 8,
      src: 'funny-6.jpg',
      name: 'Bear',
      loacation: 'Alaska',
      year: 2004,
      price: 2000,
    },
  
    
   
    
    {
      id: 9,
      src: '12img.jpg',
      name: 'Another Image',
      loacation: 'Africa',
      year: 2006,
      price: 2000,
    },
    
    
    
   
    
    {
      id: 10,
      src: '18_img.jpg',
      name: 'Another Image',
      loacation: 'Africa',
      year: 2006,
      price: 2000,
    },
    {
      id: 11,
      src: '19_img.jpg',
      name: 'Another Image',
      loacation: 'Africa',
      year: 2006,
      price: 2000,
    },
    
   
    {
      id: 12,
      src: '25_img.jpg',
      name: 'Another Image',
      loacation: 'Africa',
      year: 2006,
      price: 2000,
    },
    {
      id: 13,
      src: 'funny-1.jpg',
      name: 'Another Image',
      loacation: 'Africa',
      year: 2006,
      price: 2000,
    },
    {
      id: 14,
      src: 'funny-2.webp',
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
