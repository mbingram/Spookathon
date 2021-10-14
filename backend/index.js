const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 666;

const app = express();
app.use(
  cors({
    origin: '*'
  })
);
app.use(express.json());

app.listen(PORT, () => {
  console.log(
    `Listening on port ${PORT}. Hold on to your pants, its going to be a spoopy ride!~~~`
  );
});
