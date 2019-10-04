import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemModel } from 'src/app/models/item-model';
import { MaterialEscolarModel } from 'src/app/models/material-escolar-model';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MaterialApiService } from 'src/app/services/api/material-api.service';

@Component({
  selector: 'novo-material-modal',
  templateUrl: './novo-material-modal.component.html',
  styleUrls: ['./novo-material-modal.component.css']
})
export class NovoMaterialModalComponent implements OnInit {

  myControl = new FormControl();
  options: MaterialEscolarModel[] = [];
  filteredOptions: Observable<MaterialEscolarModel[]>;

  constructor(
    public dialogRef: MatDialogRef<NovoMaterialModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ItemModel,
    private materialApiService: MaterialApiService) { }

  ngOnInit() {
    this.materialApiService.getAllMateriais()
      .subscribe(result => {
        this.options = result;

        this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(value => typeof value === 'string' ? value : value.descricao),
            map(descricao => descricao ? this._filter(descricao) : this.options.slice())
          );

      });
  }

  displayFn(user?: MaterialEscolarModel): string | undefined {
    return user ? user.descricao : undefined;
  }

  private _filter(descricao: string): MaterialEscolarModel[] {
    this.data.materialEscolar.descricao = descricao;
    const filterValue = descricao.toLowerCase();
    return this.options.filter(option => option.descricao.toLowerCase().indexOf(filterValue) === 0);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
