import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activity } from '../Interfaces/Activity.interface';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {



  private URL = 'http://localhost:3000/activity';

  constructor(private http: HttpClient) {}

  sendActivity(
    description: string,
    dt_inicial: string,
    dt_final: string,
    category_id: number,
    user_id: number
  ) {

    const headers = new HttpHeaders ({
      'Content-Type': 'aplication/json'
    })

    const data = {
      description,
      dt_inicial,
      dt_final,
      category_id,
      user_id
    };

    console.log(data);
    

    return this.http.post<Activity>(this.URL, data).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }

  getActivity() {
    return this.http.get<Activity[]>(this.URL);
  }
}
