import { Component, Inject, OnInit, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialEscolarModel } from 'src/app/models/material-escolar-model';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-novo-gen-modal',
  templateUrl: './novo-gen-modal.component.html',
  styleUrls: ['./novo-gen-modal.component.css']
})
export class NovoGenModalComponent implements OnInit {

  myControl = new FormControl();
  options: MaterialEscolarModel[] = [];
  filteredOptions: Observable<MaterialEscolarModel[]>;
  @Input() title;
  @Input() placeHolder;

  constructor(
    public dialogRef: MatDialogRef<NovoGenModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
