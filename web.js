var keystone = require('keystone');
keystone.init({
  
  'name': "Doctors Blog",
  
  'favicon': 'public/favicon.ico',
  'less': 'public',
  'static': ['public'],
  
  'views': 'templates/views',
  'view engine': 'jade',
  
  'auto update': true,
  'mongo': 'mongodb://mongodb:mongodb@ds025449.mlab.com:25449/doctorsblog',
  
  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': '(your secret here)'
  
});
 
require('./models');
 
keystone.set('routes', require('./routes'));
 
keystone.start();