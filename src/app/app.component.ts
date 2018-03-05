import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

interface DataResponse {
  title: string;
  _id: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  appTitle = 'CRUD Application Seed';
  route: string = 'http://localhost:3000/crud/'
  params = new HttpParams();
  postResponse: string;

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {

  }

  post(title) {
		let httpParams = this.params.set('title', title);
    this.http.post<DataResponse>(this.route, httpParams).subscribe(data => 
    	this.postResponse = `GET req: '${data.title}, ${data['_id']}`);
  }

  get(id) {
    this.http.get<DataResponse>(`${this.route}${id}`).subscribe(data => 
    	console.log('GET req: ',data.title, data['_id']));	
  }

  delete(id) {
    this.http.delete(`${this.route}${id}`, { responseType: 'text'}).subscribe(data => 
    	console.log('DELETE req: ',data));	
  }

  put(id, title) {
		let httpParams = this.params.set('title', title);
    this.http.put(`${this.route}${id}`, httpParams, { responseType: 'text'}).subscribe(data => console.log('POST req: ',data));	
  }

}
