import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpClient = inject(HttpClient);
  constructor() { }

  url = 'http://localhost:3000/tasks';
  addTask(task:string){
    return this.httpClient.post(this.url,{
      title:task
    })
  }
  getAllTasks(){
     return this.httpClient.get(this.url);
  }
  updateTask(task:any){
    return this.httpClient.put(`${this.url}/${task.id}`,task)
  }

  deleteTask(id: any){
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
