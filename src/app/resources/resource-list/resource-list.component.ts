import { Component, OnInit } from '@angular/core';
import { Resource } from '../../shared/resource';
import { ResourceService } from '../../services/resource.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {

  private data:Observable<Resource[]>;
  resources:Resource[];
  constructor(private resourceService:ResourceService) { 
    this.resources=[];
  }

  ngOnInit() {
    this.resourceService.getResources().subscribe(data=>{this.resources=data});
  }
}
