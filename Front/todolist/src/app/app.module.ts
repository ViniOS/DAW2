import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoInputComponent
  ],
  exports:[],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
