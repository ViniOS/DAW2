import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonModule, JsonPipe } from '@angular/common';
import { provideNativeDateAdapter } from '@angular/material/core';
import { UserService } from '../../service/user.service';
import { User } from '../../Interfaces/User.interface';
import { map, Observable } from 'rxjs';
import { CategoryService } from '../../service/category.service';
import { Category } from '../../Interfaces/Category.interface';
import { ActivityService } from '../../service/activity.service';

@Component({
  selector: 'app-activiy-modal',
  standalone: true,
  imports: [
    ButtonComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    JsonPipe,
    CommonModule
  ],
  providers:[provideNativeDateAdapter()],
  templateUrl: './activiy-modal.component.html',
  styleUrl: './activiy-modal.component.scss',
})
export class ActiviyModalComponent implements OnInit{
  ActivityForm!: FormGroup;
  userData = new Observable<User[]>()
  categoryData = new Observable<Category[]>()

  constructor(private userService: UserService,
    private categoryService: CategoryService,
    private activityService: ActivityService
  ) {
    this.ActivityForm = new FormGroup({
      descricao: new FormControl('', Validators.required),
      dt_inicial: new FormControl<Date | null>(null),
      dt_final: new FormControl<Date | null>(null),
      categoria: new FormControl('', Validators.required),
      usuario: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.categoryData = this.categoryService.getCategory()
    console.log(this.categoryData);
    
    this.userData = this.userService.getUser()
  }



  onSubmit() {
    if (this.ActivityForm.valid) {
      const descricao = this.ActivityForm.value.descricao;
      const dt_inicial = this.ActivityForm.value.dt_inicial?.toISOString();
      const dt_final = this.ActivityForm.value.dt_final?.toISOString();
      const categoria = this.ActivityForm.value.categoria;
      const usuario = this.ActivityForm.value.usuario;

      this.activityService.sendActivity(descricao, dt_inicial, dt_final, categoria, usuario)
        .subscribe({
          next: (data) => {
            console.log(data);
            this.ActivityForm.reset();
          },
          error: (error) => {
            console.error('Error:', error);
          }
        });
    }
  
  }
}
