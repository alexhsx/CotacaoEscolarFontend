import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemModel } from 'src/app/models/item-model';

@Component({
  selector: 'novo-material-modal',
  templateUrl: './novo-material-modal.component.html',
  styleUrls: ['./novo-material-modal.component.css']
})
export class NovoMaterialModalComponent {
    constructor(
        public dialogRef: MatDialogRef<NovoMaterialModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ItemModel) {}
    
      onNoClick(): void {
        this.dialogRef.close();
      }
}
