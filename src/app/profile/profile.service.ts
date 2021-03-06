import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { Profile } from "./profile.model";

import { URL_SERVER } from 'app/app.api'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { ErrorHandler } from '../app.error-handler'

@Injectable()
export class ProfileService {

  constructor(private http: Http) {

  }

  profiles(): Observable<Profile[]> {
    return this.http.get(`${URL_SERVER}/profiles`)
      .map(response => response.json())
  }

  profileById(id: string): Observable<Profile> {
    return this.http.get(`${URL_SERVER}/profiles/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  reviewsOfProfile(id: string): Observable<any>{
    return this.http.get(`${URL_SERVER}/profiles/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

}