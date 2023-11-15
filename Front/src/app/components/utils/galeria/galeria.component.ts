import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent {
  @Input() public images!: any[] | undefined;
  @Output() onRemoveImage = new EventEmitter<any>();

  displayBasic: boolean = false;

  ngOnInit() {}
  removeImage(item: number) {
    this.onRemoveImage.emit(item);
  }
  addImage() {
    console.log('oi');
  }
}
