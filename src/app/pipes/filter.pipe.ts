import { Pipe, PipeTransform } from '@angular/core';
import {IBoard} from "../models/iboard";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();

    return items.filter((it: IBoard) => {
      return it.name.toLowerCase().includes(searchText);
    });
  }

}
