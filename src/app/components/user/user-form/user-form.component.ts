import { Component} from '@angular/core';
import { User } from './../../../shared/models/user.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user: User = new User();
  

}
