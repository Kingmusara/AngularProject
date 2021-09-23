import { Pipe, PipeTransform } from '@angular/core';
import { Todos } from '../models/todos';

@Pipe({
  name: 'filterPipe'
})

//Fıltreleme komutları 
export class FilterPipePipe implements PipeTransform {

  transform(value: Todos[], filterText: string): Todos[] {
      filterText= filterText?filterText.toLocaleLowerCase():""
      return filterText?value
      .filter((p:Todos)=>p.title.toLocaleLowerCase().indexOf(filterText)!==-1):value
  }

}
