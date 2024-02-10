import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TrucksComponent } from './trucks/trucks.component';
import { FooterComponent } from './footer/footer.component';

const appRoute: Routes = [
  { path: "", redirectTo: "Home", pathMatch: "full" },
  { path: "Home", component: HomeComponent },
  { path: "Trucks", component: TrucksComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrucksComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
