import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-forms';
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User ('Reda', 'ss@fd.com',123456,'Avnguler', '5 pm',true);
}
