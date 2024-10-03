import { Component, forwardRef } from '@angular/core';
import { MasterService } from '../master.service';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  public tasks: any = [];
 public uiState=1;
  public payload: any = {
    taskName: '',
    hostName: '',
    taskDetails: '',
    devStatus: '',
    _id: '',
    expDate: '',
    comment: '',
  };

  public task: any[] = [];

  constructor(public _ms: MasterService) {}

  ngOnInit() {
    this.get();
  }
  async get() {
    this.uiState=4
    
    this.task = [];
    try {
      let apiType = 'Get';
      let apiPath = 'getAllTasks-list';
      let payload = {
        taskName: this.payload.taskName,
        hostName: this.payload.hostName,
        taskDetails: this.payload.taskDetails,
        transcript: this.payload.transcript,
        discussionDate: this.payload.discussionDate,
        subject: this.payload.subject,
        comment: this.payload.comments,
      };

      let taskResponse = await this._ms.getData(apiType, apiPath, payload);
      if (taskResponse.status == 200) {
        if (taskResponse.data.length > 0) {
          this.uiState=2
          this.task = taskResponse.data || [];
        } else {
          this.uiState=3;
         
        }
      } else {
        this.uiState=3;
        alert('unable to process ! SERVER ERROR');
      }
      
    } catch (error) {
      console.error('An error occurred:', error);
    } finally {
      return false;
    }
  }
}
