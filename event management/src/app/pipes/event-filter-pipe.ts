import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventFilter',
})
export class EventFilterPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
