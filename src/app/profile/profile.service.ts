import { Injectable } from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'

import { Profile } from "./profile.model";

import { URL_SERVER } from 'app/app.api'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { ApplicationErrorHandler } from '../app.error-handler'

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) {

  }

  profileById(id: string): Observable<Profile> {
    return this.http.get<Profile>(`${URL_SERVER}/profiles/${id}`)
      
  }

  reviewsOfProfile(id: string): Observable<any>{
    return this.http.get(`${URL_SERVER}/profiles/${id}/reviews`)
  }

}