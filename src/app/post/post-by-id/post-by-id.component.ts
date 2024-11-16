import { Component } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-by-id',
  templateUrl: './post-by-id.component.html',
  styleUrls: ['./post-by-id.component.css']
})
export class PostByIdComponent {
  postId: string = '';  // Store the inputted Post ID
  post: any = null;      // Store the fetched Post
  error: string = '';    // Store any error messages

  constructor(private postService: PostService) {}

  // Method to handle the form submission and fetch the post by ID
  onSubmit(): void {
    if (this.postId) {
      this.fetchPostById(this.postId);  // Fetch the post using the entered ID
    } else {
      this.error = 'Please enter a valid Post ID';  // Show error if ID is empty
    }
  }

  // Fetch the post by its ID
  fetchPostById(id: string): void {
    this.postService.getPostById(id).subscribe(
      (data) => {
        if (data) {
          this.post = data;  // If post found, display the data
          this.error = '';    // Clear error if post is found
        } else {
          this.error = 'Post not found';  // Handle case where post is not found
        }
      },
      (error) => {
        this.error = 'Error fetching post';  // Handle errors like network issues
      }
    );
  }
}
