import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UploadEvent } from 'primeng/fileupload';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MasterService } from '../master.service';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-task-mangement',
  templateUrl: './task-mangement.component.html',
  styleUrls: ['./task-mangement.component.css'],
})
export class TaskMangementComponent {
  // Tabs for TabView
  tabs = [{ title: 'MOBILE' }, { title: 'WPF' }];
public uiState=1;
  cities = [
    { name: 'New York' },
    { name: 'Los Angeles' },
    { name: 'Chicago' }
  ];

  users = [
    { user: 'user1', id: 1 },
    { user: 'user2', id: 2 },
    { user: 'user3', id: 3 }
  ];

  public payload = {
    discussionDate: null,
    hostName: '',
    agenda: '',
    comments: '',
    file: [],
    transcript: '',
  };
public defaultPayload =JSON.parse(JSON.stringify(this.payload))
  tasks: any[] = [];

  public newTask: any = {
    taskDetails: '',
    deliveryDate: '',
    user: '',
    state: 1,
    comment: '',
  };

  public defaultTask: any = {
    taskDetails: '',
    deliveryDate: '',
    user: '',
    state: 1,
    comment: '',
  };

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    public ms: MasterService
  ) {}

  onBasicUploadAuto(event: UploadEvent) {
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded with Auto Mode',
    });
  }
  addTask() {
    if (
      this.newTask.taskDetails &&
      this.newTask.deliveryDate &&
      this.newTask.user
    ) {
      // Push a new task into the tasks array
      this.tasks.push({
        taskDetails: this.newTask.taskDetails,
        deliveryDate: this.newTask.deliveryDate,
        user: this.newTask.user,
        state: this.newTask.state,
        comment: this.newTask.comment,
      });
  
      // Reset newTask to default values using a deep copy to ensure it doesn't reference the original object
      this.newTask = JSON.parse(JSON.stringify(this.defaultTask));
    } else {
      alert('Please fill out all fields to add a task.');
    }
  }
  

  async submit() {
    this.uiState=4;
    let apiType = 'Post';
    let apiPath = 'insertTask';
    let payload = {
      hostName: this.payload.hostName,
      agenda: this.payload.agenda,
      transcript: this.payload.transcript,
      discussionDate: this.payload.discussionDate,
      comments: this.payload.comments,
      tasks: this.newTask.tasks,
    };

    try {
      let taskResponse = await this.ms.getData(apiType, apiPath, payload);
      this.uiState=1;
      if (taskResponse.status === 200) {
        this.tasks=[];
        this.payload=this.defaultPayload;
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
      } else {
        // alert('Unable to process! SERVER ERROR');/
        this.messageService.add({ severity: 'error', summary: 'ERROR', detail: 'Message Content' });

      }
    } catch (error) {
      // alert('An error occurred while submitting the data.');
      this.messageService.add({ severity: 'error', summary: 'ERROR', detail: 'Message Content' });

      console.error(error);
    }
  }

  sendToApi(url: string, data: any): Observable<any> {
    return this.http.post(url, data);
  }
}
