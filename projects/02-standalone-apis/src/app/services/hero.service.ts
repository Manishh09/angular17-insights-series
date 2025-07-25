import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HeroService {

  name = 'Hero Service';

  #apiUrl = 'https://jsonplaceholder.typicode.com/users/1'; // Example API

  #http = inject(HttpClient);

  getUser(): Observable<any> {
    return this.#http.get(this.#apiUrl);
  }
}
