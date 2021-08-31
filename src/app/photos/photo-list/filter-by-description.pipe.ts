import { Pipe, PipeTransform } from '@angular/core';
import {PhotoDTO} from "../../dto/photo.dto";

@Pipe({ name: 'filterByDescription'})
export class FilterByDescription implements PipeTransform {

  transform(photos: PhotoDTO[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery
      .trim()
      .toLowerCase();

    if(descriptionQuery) {
      return photos.filter(photo =>
        photo.description.toLowerCase().includes(descriptionQuery)
      );
    } else {
      return photos;
    }
  }
}
