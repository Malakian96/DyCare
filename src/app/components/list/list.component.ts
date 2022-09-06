import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, RouteReuseStrategy } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Exercise } from 'src/app/services/models/exercise';
import { Joint } from 'src/app/services/models/joint';
import { Tool } from 'src/app/services/models/tool';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  exercises: Exercise[] = [];
  allExercises: Exercise[] = [];
  joints!: Joint[];
  tools!: Tool[];
  searchTerm: string = '';
  jointTerm!: Joint[];
  toolTerm!: Tool[];

  constructor(
    private _api: ApiService,
    private _router: Router,
    ) {}

  ngOnInit(): void {
    this._api.getExercises().then(exercises => {
      this.exercises = Object.values(exercises).sort((a,b)=>{
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      });
      this.allExercises = [...this.exercises];
    });
    this._api.getJoints().then(joints => this.joints = Object.values(joints));
    this._api.getTools().then(tools => this.tools = Object.values(tools));
  }

  /**
   * This method uses the parameters of Joint, Tool and Search Term for filtering the allExercise Array
   *
   * The joint search for any exercise that includes any selected joint from the joint Term.
   *
   * The tool search filter works as a 'possible to do exercise filter'.
   * If you have a stick you can do all the exercises that requires an stick and those that doesn't need one.
   *
   * The search term compares every filtered exercise and filters is again by name.
   */
  search(): void{
    const jointIds = this.jointTerm?.map(joint => joint.id);
    this.exercises = [...this.allExercises];

    if(jointIds?.length > 0)
      this.exercises = this.allExercises.filter(exercise => jointIds.includes(exercise.joint));

    const toolIds = this.toolTerm?.map(tool => tool.id);
    if(toolIds?.length > 0)
      this.exercises = this.exercises.filter(e => e.tools.every((element)=> toolIds.includes(element)));

    this.exercises = this.exercises?.filter(exercise => exercise.name.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase()));
  }

  goToDetail(id: string): void{
    this._router.navigate(['/detail', id]);
  }
}
