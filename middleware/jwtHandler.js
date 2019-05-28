var jwt = require('jwt-simple');

var authentication = require(global.base+'/config/auth.json');

exports.express = function(req, res, next) {
  var error, decoded, token

  if(req && req.headers.cookie) {
    var cookies = req.headers.cookie.split(';')
    if(cookies[0]) {
      for(var a in cookies) {
        var cookie = cookies[a].split('=');
        if(cookie[0] == 'JWT' || cookie[0] == ' JWT') {
          token = cookie[1]
        }
      }
    }
  }

  if(!token && req.body.token) token = req.body.token //checks both cookies and body for JWT
  
  handler(token, function(error, decoded) {

    if(!decoded) res.locals.authenticated = false
    else decoded.authenticated = true, res.locals = decoded

    next()
  })
}

function handler(token, cb) {
  var error, decoded, authenticated
  
  if(!token || token.length == 0 || token == 'undefined') error = 'no token provided';
  else {
    try {
      decoded = jwt.decode(token, authentication.secretJWTKey); //this is what would trigger catch
      
      if(!decoded.admin) {
        if(global.serverSessionId != decoded.serverSessionId || decoded.exp <= Date.now()) error = 'session expired';
      }
    }
    catch(err) { error = 'invalid token' }
  }
  
  cb(error, decoded)
}