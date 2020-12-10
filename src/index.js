const express = require('express');
require('./db/mongoose');
const userRouter = require('./routes/user');
const taskRouter = require('./routes/task');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

const router = new express.Router();
app.use(router);

app.listen(port, () => {
    console.log('app is listening on port '+ port);
});