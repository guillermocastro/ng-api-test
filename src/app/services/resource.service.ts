import { Injectable } from '@angular/core';
import { Resource } from '../shared/resource';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ResourceService {

  baseUrl:string='http://app06.valkian.com/odata/Resources';

  constructor(private http:HttpClient) { }

  getResources(){
    return this.http.get<Resource[]>(this.baseUrl);
  }
}
