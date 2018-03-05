import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'CRUD Application Seed';
  route: string = 'http://localhost:3000/crud'
  params = new HttpParams();

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {

  }

  post(title) {
		let httpParams = this.params.set('title', title);
    this.http.post(this.route, httpParams).subscribe(data => console.log('POST req: ',data));	
  }

  get(id) {
    this.http.get(`http://localhost:3000/crud/${id}`).subscribe(data => console.log('GET req: ',data));	
  }

  delete(id) {
    this.http.delete(`http://localhost:3000/crud/${id}`, { responseType: 'text'}).subscribe(data => console.log('DELETE req: ',data));	
  }

}
