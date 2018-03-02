# GitHubFetcher for AgileAngine

Cosy app that helps you find all OctoCats.

### Dependencies

npm + node + webpack (global)

### Getting start

Clone the repo:
```
git clone <link>
```

Open terminal and hit commands:
```
npm install
```

Start server:
```
node server.js
```

Normally, server uses 3333 port. But you can configure it yourself in
./server.js
```
...
const PORT = process.env.PORT || 3333; (line 4)
...
```

Start webpack:
 ```
webpack -w
```
 
You will get compiled bundle.js in /public
 
Go to UTR:
 ```
http://localhost:3333/
 ```

### Important!

If you get restrictions from GitHub (401 in console). 
Feel free to edit app/config/config.jsx and put there your access token.

Peace :)