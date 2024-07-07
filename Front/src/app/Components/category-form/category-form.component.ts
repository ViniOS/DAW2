import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'category-form',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.scss',
})
export class CategoryFormComponent {
  CategoryForm!: FormGroup;

  constructor(private categoryService: CategoryService) {
    this.CategoryForm = new FormGroup({
      descricao: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.CategoryForm.valid) {
      this.categoryService
        .sendCategory(this.CategoryForm.value.descricao)
        .subscribe({
          next: (data) => {
            console.log(data);
            this.CategoryForm.reset();
          },
        });
    } else {
      window.alert('dados invalidos');
    }
  }
}
