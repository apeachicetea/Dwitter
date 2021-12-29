import express from 'express';
import 'express-async-errors';
import * as tweetController from '../controller/tweet.js';
//모든 함수들을 tweetRepository의 이름으로 불러온다.
const router = express.Router();



// GET /tweets
// GET /tweets?username=:username
router.get('/', tweetController.getTweets);

// GET /tweets/:id
router.get('/:id', tweetController.getTweet);

// POST /tweeets
router.post('/', tweetController.createTweet);

// PUT /tweets/:id
router.put('/:id', tweetController.updateTweet);

// DELETE /tweets/:id
router.delete('/:id', tweetController.deleteTweet);

export default router;
