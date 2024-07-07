import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './Components/button/button.component';
import { TemplateComponent } from './Components/template/template.component';
import { UserFormComponent } from './Components/user-form/user-form.component';
import { CategoryFormComponent } from './Components/category-form/category-form.component';
import { NavbarComponent } from "./Components/navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        RouterOutlet,
        ButtonComponent,
        TemplateComponent,
        UserFormComponent,
        CategoryFormComponent,
        NavbarComponent
    ]
})
export class AppComponent {
  title = 'Front';
}
