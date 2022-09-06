import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { rangeValidator } from 'src/app/directives/range.directive';
import { ApiService } from 'src/app/services/api.service';
import { Exercise } from 'src/app/services/models/exercise';
import { Joint } from 'src/app/services/models/joint';
import { Tool } from 'src/app/services/models/tool';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  exercise!: Exercise;
  exerciseForm!: FormGroup;
  joints!: Joint[];
  tools!: Tool[];
  routeId!: string;
  constructor(
    private _api: ApiService,
    private _router: Router,
    private _fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.exerciseForm = this._fb.group({
      name: new FormControl('',[Validators.maxLength(50), Validators.required]),
      joint: new FormControl('',[Validators.required]),
      tools: new FormControl([]),
      signal: new FormGroup({
        name: new FormControl('',[Validators.required]),
        min: new FormControl('',[Validators.required]),
        max: new FormControl('',[Validators.required]),
        rom: new FormControl('',[Validators.min(0)])
      },[rangeValidator()])
    });
   }

  async ngOnInit(): Promise<void> {
    this._api.getJoints().then(joints => this.joints = Object.values(joints));
    this._api.getTools().then(tools => this.tools = Object.values(tools));
    this.routeId = this._router.url.split('/')[2];
    this.exercise = await this._api.getExerciseById(this.routeId);
    console.log(this.exercise)

    this.exerciseForm.patchValue({...this.exercise});
    this.calculateRom()

  }

  calculateRom(): void{
    this.exerciseForm.get('signal.rom')?.setValue(parseInt(this.exerciseForm.get('signal.max')?.value) - parseInt(this.exerciseForm.get('signal.min')?.value));
  }

  test(): void{
    const res = this.exerciseForm.getRawValue();
    if(!this.exerciseForm.invalid){
      this._api.updateExecise(this.routeId, res).then(r => console.log(r))
    }else{
        this._snackBar.open('Formulario invalido', 'Cerrar');
    }
  }

}
