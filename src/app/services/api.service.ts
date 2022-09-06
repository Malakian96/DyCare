import { Injectable } from "@angular/core";
import { Exercise } from "./models/exercise";
import { Joint } from "./models/joint";
import { Signal } from "./models/signal";
import { Tool } from "./models/tool";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiRoot:string = 'https://mjx457fvd7.execute-api.eu-west-1.amazonaws.com/Prod';
  constructor() {

  }

  getTools(): Promise<Tool>{
    return fetch(`${this.apiRoot}/tools`).then(response => response.json());
  }
  getJoints(): Promise<Joint>{
    return fetch(`${this.apiRoot}/joints`).then(response => response.json());
  }
  getSignals(): Promise<Signal>{
    return fetch(`${this.apiRoot}/signals`).then(response => response.json());
  }
  getExercises(): Promise<Exercise[]>{
    return fetch(`${this.apiRoot}/exercises`).then(response => response.json());
  }
  getExerciseById(id: string): Promise<Exercise>{
    return fetch(`${this.apiRoot}/exercises/${id}`).then(response => response.json());
  }
  updateExecise(id: string, body: any): Promise<Exercise> {
      return fetch(`${this.apiRoot}/exercises/${id}`,
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
      }
      ).then();
  }
}
