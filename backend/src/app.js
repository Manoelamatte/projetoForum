const express         = require('express');
const cors            = require('cors');
const app             = express();
require('dotenv').config();
const userRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter');
const postRouter = require('./routes/postsRouter');
const commentRouter   = require('./routes/commentsRouter');
const reactionRouter = require('./routes/reactionsRouter');

app.use(cors());
app.use(express.json());
app.set('port', process.env.PORT);
app.use('/api', userRouter);
app.use('/api', loginRouter);
app.use('/api', postRouter);
app.use('/api', commentRouter);
app.use('/api', reactionRouter);

module.exports = app;