import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import { Escort } from "./escort/esport.model";

import {URL_SERVER} from 'app/app.api'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { ProfileComponent } from '../profile/profile.component';

import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class EscortsService{

    constructor(private http: Http){

    }

    escorts(): Observable<Escort[]>{
        return this.http.get(`${URL_SERVER}/escorts`)
        .map(response => response.json())
    }

    profileById(id: string): Observable<ProfileComponent>{
        return this.http.get(`${URL_SERVER}/profiles/${id}`)
          .map(response => response.json())
          .catch(ErrorHandler.handleError)
      }

}