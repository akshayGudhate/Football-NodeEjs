const express = require('express');

const clubRouter = express.Router();

const clubs = [
  {
    name: 'Liverpool',
    manager: 'Jurgen Klopp',
    country: 'England',
    stadium: 'Anfield'
  },
  {
    name: 'Real Madrid',
    manager: 'Santiago Solari',
    country: 'Spain',
    stadium: 'Santiago Bernabeu'
  },
  {
    name: 'Dortmond',
    manager: 'Lucian Favre',
    country: 'Germany',
    stadium: 'Signal Iduna Park'
  },
  {
    name: 'Manchester City',
    manager: 'Pep Guardiola',
    country: 'England',
    stadium: 'Etihad'
  },
  {
    name: 'Barcelona',
    manager: 'Earnesto valverde',
    country: 'Spain',
    stadium: 'Camp Nou'
  },
  {
    name: 'Baryern Munich',
    manager: 'Nico Kovac',
    country: 'Germany',
    stadium: 'Alianz Arena'
  }
];

function router(nav) {

  clubRouter.route('/clubs')
    .get((req, res) => {
      res.render('clubListView',
        {
          nav,
          title: 'Clubs',
          clubs
        });
    });

  clubRouter.route('/clubs/:id')
    .get((req, res) => {
      const { id } = req.params;
      res.render('clubView',
        {
          nav,
          title: 'Club',
          club: clubs[id]
        });
    });

  return clubRouter;
}

module.exports = router;
