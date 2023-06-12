import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu.component';

import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { BlockComponent } from './block/block.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { DirectivesComponent } from './directives/directives.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, BlockComponent, UserProfilComponent, DirectivesComponent, CatalogComponent, SignUpComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
