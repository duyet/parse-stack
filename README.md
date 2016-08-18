# parse-stack

![](https://github.com/ParsePlatform/parse-server/raw/master/.github/parse-server-logo.png?raw=true)

Parse Server is [an open source version of the Parse backend](http://blog.parse.com/announcements/introducing-parse-server-and-the-database-migration-tool/) that can be deployed to any infrastructure that can run Node.js.

Parse Server works with the Express web application framework. It can be added to existing web applications, or run by itself.

Parse Stack = Parse server + Parse Dashboard

# Installation 

1. Clone and install the Parse Stack 

	```sh
	git clone https://github.com/duyetdev/parse-stack.git
	cd parse-stack
	npm install
	```

2. Install MongoDB or simply by

	```sh
	npm install -g mongodb-runner
	mongodb-runner start
	```

3. Start Parse Stack 

	```sh
	npm start
	```

# Using it

- Access to endpoint 
	* Parse API: [http://localhost:8080/parse](http://localhost:8080/parse)
	* Parse Dashboard: [http://localhost:8080/dashboard](http://localhost:8080/dashboard)

- Connect your app to Parse Server
	
	Parse provides SDKs for all the major platforms. Refer to the Parse Server guide to learn [how to connect your app to Parse Server](https://github.com/ParsePlatform/parse-server/wiki/Parse-Server-Guide#using-parse-sdks-with-parse-server).

- Read the full Parse Server guide here: [https://github.com/ParsePlatform/parse-server/wiki/Parse-Server-Guide](https://github.com/ParsePlatform/parse-server/wiki/Parse-Server-Guide)

# How to contribute

1. Fork the project on Github
2. Create a topic branch for your changes
3. Ensure that you provide documentation and test coverage for your changes (patches won’t be accepted without)
4. Create a pull request on Github (these are also a great place to start a conversation around a patch as early as possible)

# License

Copyright (c) 2016 Van-Duyet Le

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.