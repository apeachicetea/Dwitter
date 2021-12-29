import express from 'express';
import 'express-async-errors';
import * as tweetRepository from '../data/tweet.js';
//모든 함수들을 tweetRepository의 이름으로 불러온다.
const router = express.Router();



// GET /tweets
// GET /tweets?username=:username
router.get('/', (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? tweetRepository.getAllByUsername(username);
    : tweetRepository.getAll();
  res.status(200).json(data);
});

// GET /tweets/:id
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const tweet = tweetRepository.getAllById(id);
  if(tweet) {
    res.status(200).json(tweet);
  }
  else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
});

// POST /tweeets
router.post('/', (req, res, next) => {
  const { text, username, name } = req.body;
  const tweet = tweetRepository.create(text, username, name);
  res.status(201).json(tweet);
});

// PUT /tweets/:id
router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweetRepository.update(id, text);
  if(tweet) {
    res.status(200).json(tweet);
  }
  else {
    res.status(404).json({ message: `Tweet id(${id}) not found` })
  }
});

// DELETE /tweets/:id
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  tweetRepository.remove(id);
  res.sendStatus(204);
});

export default router;
