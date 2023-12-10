import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent {
  [x: string]: any;
  @Input() public images!: any[] | undefined;
  @Output() onRemoveImage = new EventEmitter<any>();
  @Output() onAddImage = new EventEmitter<any>();

  displayBasic: boolean = false;

  fileToUpload: any;

  ngOnInit() {}
  removeImage(item: number) {
    this.onRemoveImage.emit(item);
  }
  addImage(event: any) {
    this.fileToUpload = event.target.files[0];
    let formParams = new FormData();
    formParams.append('file', this.fileToUpload);
    console.log(formParams);
    this.onAddImage.emit(formParams);
  }
}
