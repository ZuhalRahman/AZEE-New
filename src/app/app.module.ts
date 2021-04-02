import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WquranComponent } from './components/wquran/wquran.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactServices } from './components/contact/contact.service';



const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'wquran', component: WquranComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  declarations: [
    
    AppComponent,
    HomeComponent,
    WquranComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ContactServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
