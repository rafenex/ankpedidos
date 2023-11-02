import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent {
  @Input()
  public images!: any[] | undefined;
  displayBasic: boolean = false;
  imagesHtml: string[] = [];

  ngOnInit() {
    this.images?.forEach((img) => {
      this.imagesHtml.push(img.imageData);
    });
  }
}
