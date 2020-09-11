import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json('Hello World Caralho');
});

app.listen(3333, () => {
  console.log('Server start on port 3333! 🚀');
});
