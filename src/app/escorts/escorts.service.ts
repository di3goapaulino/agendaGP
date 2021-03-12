import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'

import { Escort } from "./escort/esport.model";

import { URL_SERVER } from 'app/app.api'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { ProfileComponent } from '../profile/profile.component';

import { ApplicationErrorHandler } from '../app.error-handler'

@Injectable()
export class EscortsService {

    constructor(private http: HttpClient) {

    }

    escorts(search?: string): Observable<Escort[]> {
        let params: HttpParams = undefined
        if (search) {
            params = new HttpParams().append('q', search)
        }
        return this.http.get<Escort[]>(`${URL_SERVER}/escorts`, { params: params })

    }
}