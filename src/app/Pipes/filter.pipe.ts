import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../models/Client';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(clients: Client[], filterString: string) {
    if (!clients || !filterString) {
      return clients;
    }

    return clients.filter((client) =>
      client.name.toLowerCase().includes(filterString.toLowerCase())
    );
  }
}
