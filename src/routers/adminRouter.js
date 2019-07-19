const express = require('express');

const adminRouter = express.Router();

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

const admin = [
  {
    name: 'Akshay S Gudhate',
    company: 'IBM Pune',
    contact: 9561214185
  }];

function router(nav) {

  adminRouter.route('/admin')
    .get((req, res) => {

      res.render('adminView', {
        nav,
        title: 'Admin',
        admin: {
          name: 'Akshay S Gudhate',
          company: 'IBM Pune',
          contact: 9561214185
        }
      });
    });

  return adminRouter;
}

module.exports = router;
