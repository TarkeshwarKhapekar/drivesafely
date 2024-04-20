import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'vimeoUrl',
})
export class VimeoUrlPipe implements PipeTransform {
  constructor(protected _sanitizer: DomSanitizer) {}

  transform(value: any, args?: any): any {
    let url;
    if (value.includes('vimeo.com')) {
      url = value.replace('vimeo.com/', 'player.vimeo.com/video/');
    }
    if (value.includes('youtu.be/')) {
      url = value.replace('youtu.be/', 'youtube.com/embed/');
    }
    if (value.includes('youtube.com/watch?v=')) {
      url = value.replace('youtube.com/watch?v=', 'youtube.com/embed/');
    }

    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
