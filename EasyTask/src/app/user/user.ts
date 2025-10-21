import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy_users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  users = DUMMY_USERS
  count = 0;

  onSelectUser (u:any)
  {
    console.log("Clicked on user!");
    console.log("\n User ID: " + u.id);
    console.log(this.count++);
    
    
    
  }
}
