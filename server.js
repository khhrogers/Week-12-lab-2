import express from 'express';

const app = express();

app.get('/greeting/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Wow! Hello there, ${name}`);
});

app.listen(3000, () => {
  console.log('Express server initialized but the route is not ');
});

