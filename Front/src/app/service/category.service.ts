import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from '../Interfaces/Category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private URL = 'http://localhost:3000/category';

  constructor(private http: HttpClient) {}

  sendCategory(description: string) {
    const data = { description };

    return this.http.post<Category>(this.URL, data);
  }

  getCategory(): Observable<Category[]> {
    return this.http.get<any[]>(this.URL).pipe(
      map(data => {
        return data.map(category => ({
          id: category.Id, 
          description: category.description, 
          created_dt: new Date(category.created_dt), 
          updated_dt: new Date(category.updated_dt) 
        }));
      })
    );
  }
}
