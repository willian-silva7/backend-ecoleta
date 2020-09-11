import express from 'express';

const router = express.Router();

router.get('/users', (request, response) => {
  return response.json('Hello World Caralho');
});

router.post('/users', (request, response) => {
  const { name, email } = request.body;

  const user = {
    name,
    email,
  };

  return response.json(user);
});

export default router;
