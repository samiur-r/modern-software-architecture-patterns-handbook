// model/Post.ts

export interface Post {
  id: number;
  title: string;
  content: string;
}

let posts: Post[] = [];

export const getAllPosts = (): Post[] => posts;

export const createPost = (title: string, content: string): Post => {
  const newPost = { id: posts.length + 1, title, content };
  posts.push(newPost);
  return newPost;
};

// controller/postController.ts

import { Request, Response } from "express";
import { getAllPosts, createPost } from "model/Post";

export const listPosts = (req: Request, res: Response) => {
  const posts = getAllPosts();
  res.render("posts", { posts }); // View
};

export const addPost = (req: Request, res: Response) => {
  const { title, content } = req.body;
  const post = createPost(title, content);
  res.redirect("/posts");
};

// view/posts.ejs

<h1>Blog Posts</h1>
<ul>
  <% posts.forEach(post => { %>
    <li><strong><%= post.title %></strong>: <%= post.content %></li>
  <% }) %>
</ul>

// routes/postRoutes.ts

import express from 'express';
import { listPosts, addPost } from '../controller/postController';

const router = express.Router();

router.get('/posts', listPosts);
router.post('/posts', addPost);

export default router;

// app.ts

import express from 'express';
import bodyParser from 'body-parser';
import postRoutes from 'routes/postRoutes';
import path from 'path';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(postRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

