import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostListComponent} from "./post/post-list/post-list.component";
import {CreatePostComponent} from "./post/create-post/create-post.component";
import {LoginComponent} from "./auth/login/login.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {authGuard} from "./auth/auth.guard";
import {JokeComponent} from "./joke/joke.component";
import {PostByIdComponent} from "./post/post-by-id/post-by-id.component";

const routes: Routes = [
  {path:'', component: PostListComponent},
  {path:'create', component: CreatePostComponent, canActivate: [authGuard]},
  {path:'edit/:postId', component: CreatePostComponent, canActivate: [authGuard]},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'joke', component: JokeComponent},
  // { path: 'postById', component: PostByIdComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
