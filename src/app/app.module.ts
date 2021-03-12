import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { ROUTES } from 'app/app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EscortsComponent } from './escorts/escorts.component';
import { EscortComponent } from './escorts/escort/escort.component';
import { EscortsService } from './escorts/escorts.service';
import { FiltersComponent } from './escorts/filters/filters.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile/profile.service';
import { GalleryComponent } from './profile/gallery/gallery.component';
import { PhotoComponent } from './profile/photo/photo.component';
import { VideosComponent } from './profile/videos/videos.component';
import { ReviewsComponent } from './profile/reviews/reviews.component';
import { LoginComponent } from './security/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    EscortsComponent,
    EscortComponent,
    FiltersComponent,
    ProfileComponent,
    GalleryComponent,
    PhotoComponent,
    VideosComponent,
    ReviewsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    EscortsService
    , ProfileService
    , {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
