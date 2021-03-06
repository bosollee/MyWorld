import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write); // 로그인 확인시 작업 가능.

const post = new Router(); // /api/posts/:id
post.get('/', postsCtrl.read);
post.delete('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove); // 로그인, 본인 글 확인시 작업 가능.
post.patch('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update); // 로그인, 본인 글 확인시 작업 가능.

posts.use('/:id', postsCtrl.getPostById, post.routes());

export default posts;
