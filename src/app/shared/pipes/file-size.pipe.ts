import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize'
})

export class FileSizePipe implements PipeTransform {
  // transform(value: any, ...args: any[]) {} // default
  transform(size: number, extension: string = 'MB'): string {
    return (size / (1024 * 1024)).toFixed(2) + extension; // extension is argument
  } // transform is the function to return the new format of data
}
