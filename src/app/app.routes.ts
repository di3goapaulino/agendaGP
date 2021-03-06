import {Routes} from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { EscortsComponent } from "./escorts/escorts.component";
import { ProfileComponent } from "./profile/profile.component";
import { HomeComponent } from "./home/home.component";
import { ReviewsComponent } from "./profile/reviews/reviews.component";
import { PhotoComponent } from "./profile/photo/photo.component";
import { VideosComponent } from "./profile/videos/videos.component";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'escorts', component: EscortsComponent},
    {path: 'profiles/:id', component: ProfileComponent,
    children: [
      {path: '', redirectTo: 'profiles', pathMatch: 'full'},
      {path: 'photos', component: PhotoComponent},
      {path: 'videos', component: VideosComponent},
      {path: 'reviews', component: ReviewsComponent}
    ]}
]