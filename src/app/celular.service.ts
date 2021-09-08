import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Celular } from './celular';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class CelularService {
    private apiServerUrl =  environment.apiBaseUrl;


    constructor (private http: HttpClient){}

    public getCelulares():Observable<Celular[]>{
        return this.http.get<Celular[]>(`${this.apiServerUrl}/celulares`);
    }
}