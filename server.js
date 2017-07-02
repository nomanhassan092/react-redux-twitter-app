const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const io=require('socket.io');
const credentials=require('./credentials.js');
const twitter=require('ntwitter');
const app = express();


const t = new twitter({
  consumer_key: credentials.consumer_key,
  consumer_secret: credentials.consumer_sercret,
  access_token_key: credentials.access_token_key,
  access_token_secret: credentials.access_token_secret
});
 
const compiler = webpack(webpackConfig);

 
app.use(express.static(__dirname + '/www'));
 
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));
 
const server = app.listen(4001, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s',host,port);
});

let socket=io.listen(server);
socket.on('connection',function(client){
  client.on('disconnect',function(){console.log('client disconnected');});
  console.log('connection with client established');
  client.on('key',function(data){
   console.log(data);
    /* socket.emit('retdata',data);
    */
    t.stream(
      'statuses/filter',
      {track: data},
      function(stream){
        stream.on('data',function(twt){
          console.log(twt.text);
          socket.emit('retdata',twt.text);
        });

        stream.on('destroy',function(response){
          socket.emit('retdata',response);
        });

        stream.on('end',function(response){
          socket.emit('retdata',response);
        });
      }
    )
  });
});
