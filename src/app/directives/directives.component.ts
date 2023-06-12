import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  isAdmin: boolean = false;
  changeAdmin(): void {
    this.isAdmin = !this.isAdmin;
  }
}
