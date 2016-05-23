
/**
 * Module dependencies.
 */

const express = require('express'),
        path = require('path'),
    routes = require('./routes');

const app = express();

// Config
app.set('port',  process.env.PORT || 3000);
app.use('/public', express.static(path.join(process.cwd(), 'public')));
app.use('/views', express.static(path.join(process.cwd(), 'views')));

// Routes
routes(app);

app.listen(app.get('port'), function(){
  console.log("Express server listening on port %d", app.get('port'));
});
