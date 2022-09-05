import { Component, OnInit } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Exercise } from 'src/app/services/models/exercise';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  exercises: Exercise[] = [];
  allExercises: Exercise[] = [];
  searchTerm: string = '';
  constructor(
    private _api: ApiService,
    private _router: Router
    ) {
  }

  ngOnInit(): void {
    this._api.getExercises().then(exercises => {
      this.exercises = Object.values(exercises).sort((a,b)=>{
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      });
      this.allExercises = [...this.exercises];
    })

  }

  goToDetail(id: string): void{
    this._router.navigate(['/detail', id]);
  }

  search(): void{
    if(!this.searchTerm){
      this.exercises = this.allExercises;
      return;
    }
    this.exercises = this.allExercises.filter(exercise => exercise.name.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase()))

  }

}
