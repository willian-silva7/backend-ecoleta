import express from 'express';
import knex from '../database/connection';

const router = express.Router();

router.get('/items', async (request, response) => {
  const items = await knex('items').select('*');

  const serializedItems = items.map(item => {
    return {
      title: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    };
  });

  return response.json(serializedItems);
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
