const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const es6Renderer = require('express-es6-template-engine')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const models = require('./models')
const store = new SequelizeStore({db:models.sequelize})


const indexRouter = require('./routes/index');
const dashboardRouter = require('./routes/dashboard')
const checkAuth = require('./middleware/checkAuth');
const usersRouter = require('./routes/users');
const apiCustomersRouter = require('./routes/api/customers')
const billsRouter = require('./routes/bills')


const app = express();


app.engine('html', es6Renderer)
app.set('views', 'templates')
app.set('view engine', 'html')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieParser()); 
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'secret', // used to sign the cookie
    resave: false, // update session even w/ no changes
    saveUninitialized: true, // always create a session
    cookie: {
      secure: false, // true: only accept https req's
      maxAge: 2592000000, // time in milliseconds
      // 2,592,000,000 ms = 30 days
    },
    store: store
  })
  );
store.sync()

app.use('/', indexRouter);
app.use('/dashboard',checkAuth, dashboardRouter)
app.use('/users', usersRouter);
app.use('/api/v1/customers',apiCustomersRouter)
app.use('/bills', checkAuth, billsRouter)


module.exports = app;
