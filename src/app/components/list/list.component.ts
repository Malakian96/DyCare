import { Component, OnInit } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private _api: ApiService) { }

  ngOnInit(): void {

  }

}
