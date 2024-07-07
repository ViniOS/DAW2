import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { MatTableModule } from '@angular/material/table';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActiviyModalComponent } from '../activiy-modal/activiy-modal.component';
import { MatDialog } from '@angular/material/dialog';

export interface Atividade {
  Nome: String;
  Categoria: String;
  DataI: String;
  DataF: String;
}

const DataTest: Atividade[] = [
  {
    Nome: 'Academia',
    Categoria: 'Ativa',
    DataI: '01/07/2024',
    DataF: '07/07/2024',
  },
];

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [
    ButtonComponent,
    MatTableModule,
    NavbarComponent,
    ActiviyModalComponent
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss',
})
export class TemplateComponent {

  constructor(private dialong: MatDialog){

  }

  DisplayColumns: String[] = ['Nome', 'Categoria', 'DataI', 'DataF'];
  dataSource = DataTest;

  openDialog(){
    this.dialong.open(ActiviyModalComponent)
  }

}
