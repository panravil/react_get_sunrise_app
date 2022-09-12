import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import sunrise from '../assets/sunrise.svg';
import sunset from '../assets/sunset.svg';

const useStyles = makeStyles(() => ({
  unit__icon: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginRight: 4,
    marginLeft: 20,
  },
  unit__icon1: {
    width: 22,
    height: 22,
    alignSelf: 'center',
    fontSize: '15',
  },
  weather__icon: {
    width: 90,
    height: 90,
    Top: 0,
  },
  main: {
    overflow: 'auto',
    padding: 5,
  },
  text__left: {
    float: 'left',
  },
  text__right: {
    float: 'right',
  },
  span: {
    fontWeight: 'bold',
  },

}));

function ShowTime({ sunriseTime, sunsetTime }) {
  const classes = useStyles();
  return (
    <CardContent>
      <div className={classes.main}>
        <div>
          <Typography variant="h3" gutterBottom>
            <img src={sunrise} alt="Logo" className={classes.unit__icon} />
          </Typography>
          <Typography variant="h6" gutterBottom>
            {sunriseTime}
          </Typography>
        </div>
        <div>
          <Typography variant="h3" gutterBottom>
            <img src={sunset} alt="Logo" className={classes.unit__icon} />
          </Typography>
          <Typography variant="h6" gutterBottom>
            {sunsetTime}
          </Typography>
        </div>
      </div>
    </CardContent>
  );
}

export default ShowTime;
