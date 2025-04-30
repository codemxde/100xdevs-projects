import express from 'express';

import signupRouter from './routes/signup.routes';
import chatRouter from './routes/chatroom.routes';

const app = express();

app.use('/user', signupRouter);
app.use('/chat', chatRouter);

app.listen(3001);
