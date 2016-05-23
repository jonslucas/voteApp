module.exports = (app)=>{
  const base = require('./base/base'),
       admin = require('./admin/admin'),
       polls = require('./polls/polls'),
         api = require('./api/api');

    base(app);
    admin(app);
    polls(app);
    api(app);
};