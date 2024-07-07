import { Routes } from '@angular/router';
import { TemplateComponent } from './Components/template/template.component';
import { UserFormComponent } from './Components/user-form/user-form.component';
import { CategoryFormComponent } from './Components/category-form/category-form.component';

export const routes: Routes = [
    {
        path:'atividades',
        component: TemplateComponent
    },
    {
        path:'usuarios',
        component: UserFormComponent
    },
    {
        path:'categorias',
        component: CategoryFormComponent
    }
];
