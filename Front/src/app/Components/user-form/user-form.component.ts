import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'user-form',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule],
  providers: [UserService],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {
  UserForms!: FormGroup;

  constructor(private userService: UserService) {
    this.UserForms = new FormGroup({
      nome: new FormControl('', Validators.required),
      sobrenome: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.UserForms.valid) {
      this.userService
        .sendUser(
          this.UserForms.value.nome,
          this.UserForms.value.sobrenome,
          this.UserForms.value.senha
        )
        .subscribe({
          next: (data) => {
            console.log(data);
            this.UserForms.reset();
          },
        });
    } else {
      window.alert('dados invalidos');
    }
  }
}
