/**
 * Copyright 2016 @duyetdev.
 *
 * @website //duyetdev.com
 */

import path from 'path';
import express from 'express';
import Parse from 'parse/node';
import { ParseServer } from 'parse-server';
import ParseDashboard from 'parse-dashboard';
import env from './env';

Parse.initialize(env.APP_ID);
Parse.serverURL = env.SERVER_URL;
Parse.masterKey = env.MASTER_KEY;
Parse.Cloud.useMasterKey();

const server = express();

server.use(
  '/parse',
  new ParseServer({
    databaseURI: env.DATABASE_URI,
    cloud: path.resolve(__dirname, 'cloud.js'),
    appId: env.APP_ID,
    masterKey: env.MASTER_KEY,
    fileKey: env.FILE_KEY,
    serverURL: env.SERVER_URL,
  })
);

if (env.IS_DEVELOPMENT) {
  let users;
  if (env.DASHBOARD_AUTH) {
    var [user, pass] = env.DASHBOARD_AUTH.split(':');
    users = [{user, pass}, { user: 'admin', pass: 'admin' }];
    console.log(users);
  }

  server.use(
    '/dashboard',
    ParseDashboard({
      apps: [{
        serverURL: '/parse',
        appId: env.APP_ID,
        masterKey: env.MASTER_KEY,
        appName: 'Parse Server',
      }],
      users,
    }, env.IS_DEVELOPMENT)
  );
}

server.use('/', (req, res) => res.redirect('/parse'));

server.listen(env.SERVER_PORT, () => console.log(
  `Server is now running in ${process.env.NODE_ENV || 'development'} mode on http://localhost:${env.SERVER_PORT}`
));
