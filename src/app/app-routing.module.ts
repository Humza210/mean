import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostListComponent} from "./post/post-list/post-list.component";
import {CreatePostComponent} from "./post/create-post/create-post.component";
import {PostByIdComponent} from "./post/post-by-id/post-by-id.component";

const routes: Routes = [
  {path:'', component: PostListComponent},
  {path:'create', component: CreatePostComponent},
  {path:'edit/:postId', component: CreatePostComponent},
  { path: 'postById', component: PostByIdComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
