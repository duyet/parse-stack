/**
 * Copyright 2016 @duyetdev.
 *
 * @website //duyetdev.com
 */

import path from 'path';
import express from 'express';
import {Schema} from './schema/schema';
import Parse from 'parse/node';
import {ParseServer} from 'parse-server';
import ParseDashboard from 'parse-dashboard';
import c, { IS_DEVELOPMENT,  } from './config';

Parse.initialize(c.APP_ID);
Parse.serverURL = `http://localhost:${c.SERVER_PORT}/parse`;
Parse.masterKey = c.MASTER_KEY;
Parse.Cloud.useMasterKey();

const server = express();

server.use(
  '/parse',
  new ParseServer({
    databaseURI: c.DATABASE_URI,
    cloud: path.resolve(__dirname, 'cloud.js'),
    appId: c.APP_ID,
    masterKey: c.MASTER_KEY,
    fileKey: c.FILE_KEY,
    serverURL: `http://${SERVER_HOST}:${SERVER_PORT}/parse`,
  })
);

if (IS_DEVELOPMENT) {
  let users;
  if (c.DASHBOARD_AUTH) {
    var [user, pass] = c.DASHBOARD_AUTH.split(':');
    users = [{user, pass}, { user: 'admin', pass: 'admin' }];
    console.log(users);
  }

  server.use(
    '/dashboard',
    ParseDashboard({
      apps: [{
        serverURL: '/parse',
        appId: c.APP_ID,
        masterKey: c.MASTER_KEY,
        appName: 'Parse Server',
      }],
      users,
    }, IS_DEVELOPMENT)
  );
}

server.use('/', (req, res) => res.redirect('/parse'));

server.listen(SERVER_PORT, () => console.log(
  `Server is now running in ${process.env.NODE_ENV || 'development'} mode on http://localhost:${SERVER_PORT}`
));
