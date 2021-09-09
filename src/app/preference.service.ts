import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Preference } from './preference';
import { Celular } from './celular';

@Injectable({providedIn: 'root'})
export class PreferenceService {
    private apiServerUrl =  environment.apiBaseUrl;


    constructor (private http: HttpClient){}

    public getPreferencias(celular: Celular):Observable<Preference>{
        const headers = {'Content-Type': 'application/json'};
        return this.http.post<Preference>(`${this.apiServerUrl}/celular/buy`, celular, {headers});
    }
}