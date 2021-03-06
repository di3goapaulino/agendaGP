import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import { Restaurant } from "./restaurant/restaurant.model";

import {URL_SERVER} from 'app/app.api'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class RestaurantsService{

    constructor(private http: Http){

    }

    restaurants(): Observable<Restaurant[]>{
        return this.http.get(`${URL_SERVER}/restaurants`)
        .map(response => response.json())
    }

}