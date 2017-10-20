const AuthController = require('./controllers/AuthController');
const AuthControllerPolicy = require('./policies/AuthControllerPolicy');
const isAuth = require('./policies/isAuth')

const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')
const HistoriesController = require('./controllers/HistoriesController')

module.exports = (app) => {
  // Auth Routes
  app.post('/register', AuthControllerPolicy.register, AuthController.register);
  app.post('/login', AuthController.login);

  // Song Routes
  app.get('/songs', SongsController.index);
  app.get('/songs/:songId', SongsController.show);
  app.put('/songs/:songId', SongsController.put);
  app.post('/songs', SongsController.post);
  app.delete('/songs/:songId', isAuth, SongsController.remove);

  // Bookmark Routes
  app.get('/bookmarks', isAuth, BookmarksController.index);
  app.post('/bookmarks', isAuth, BookmarksController.post);
  app.delete('/bookmarks/:bookmarkId', isAuth, BookmarksController.remove);

  // History Routes
  app.get('/histories', isAuth, HistoriesController.index);
  app.post('/histories', isAuth, HistoriesController.post);
};