import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import {environment } from '../../environments/environment';

@Injectable()
export class PropertiesService {

  constructor(private http: Http) { }

  // Incluimos nosso método de search
  searchProperties(params) {
    const parameters = new URLSearchParams();
    for (const f in params) {
      if (f) {
        { parameters.set(f, params[f]); }
      }
    }
    return this.http.get(`${environment.api_base_url}search.json`, { search: parameters })
    .map(res => res.json());
  }

  getProperties() {
    return this.http.get(`${environment.api_base_url}properties.json`)
      .map(res => res.json());
  }

  getProperty(id) {
    return this.http.get(`${environment.api_base_url}properties.json/${id}`)
      .map(res => res.json());
  }

  addProperty(property) {
    return this.http.post(`${environment.api_base_url}properties.json`, {'property': property})
      .map(res => res.json());
  }

  updateProperty(property) {
    return this.http.put(`${environment.api_base_url}properties.json/${property.id}`, {'property': property})
      .map(res => res.json());
  }

  deleteProperty(id) {
    return this.http.delete(`${environment.api_base_url}properties.json${id}`)
      .map(res => res.json());
  }
}
