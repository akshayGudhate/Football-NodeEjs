const express = require('express');

const server = express();
const chalk = require('chalk');
const path = require('path');

const port = process.env.PORT || 2222;

server.use(express.static(path.join(__dirname, '/public/')));
server.use('/css', express.static(path.join(__dirname, '\node_modules\bootstrap\dist\css')));
server.use('/js', express.static(path.join(__dirname, '\node_modules\bootstrap\dist\js')));
server.use('/js', express.static(path.join(__dirname, '\node_modules\jquery\dist')));
server.set('views', './src/views');
server.set('view engine', 'ejs');

const nav = [
  { link: '/admin', title: 'Admin' },
  { link: '/clubs', title: 'Club' },
  { link: '/players', title: 'Player' }
];

const clubRouter = require('./src/routers/clubRouter')(nav);
const adminRouter = require('./src/routers/adminRouter')(nav);

server.use('/', clubRouter);
server.use('/', adminRouter);

server.get('/', (req, res) => {
  res.render('index',
    {
      nav: [
        { link: '/admin', title: 'Admin' },
        { link: '/clubs', title: 'Clubs' },
        { link: '/players', title: 'Players' }
      ],
      title: 'Football Library'
    });
});

/* server.get('/', (req, res) => {
    res.sendFile(path.resolve('./view/index.html'));
    res.send('Name : "Akshay Gudhate", Age : "23", Location : "Pune"');
});

server.get('/about', (req, res) => {
    res.send('INFO :'+' Name : "Akshay Gudhate", Age : "23", Location : "Pune"');
});*/

server.listen(port, () => {
  console.log(`Hey... ${chalk.blue('Hello akki... Express Server is running ')} @ ${chalk.red('localhost:8888')}`);
});
