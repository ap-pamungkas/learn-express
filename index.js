const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./Routes/web');

app.use(express.json()); // Tambahkan agar dapat membaca request body
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
