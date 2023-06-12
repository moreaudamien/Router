import { Component } from '@angular/core';

export class User {
  name: string;
  firstName: string;
  age: number;
  quote: string;
  photo: string;
  isAgeHidden: boolean;

  constructor(
    name: string,
    firstName: string,
    age: number,
    quote: string,
    photo: string,
    isAgeHidden: boolean
  ) {
    this.name = name;
    this.firstName = firstName;
    this.age = age;
    this.quote = quote;
    this.photo = photo;
    this.isAgeHidden = isAgeHidden;
  }
}

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent {
  user: User;

  constructor() {
    this.user = new User(
      'Doe',
      'John',
      25,
      '',
      'https://randomuser.me/api/portraits/lego/2.jpg',
      true
    );
  }

  ageVisibility(): void {
    this.user.isAgeHidden = !this.user.isAgeHidden;
  }
}
