import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { PageContext } from '../..';

type Timer = {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    valueContainer: {
      border: '2px solid',
      borderColor: 'inherit',
      borderRadius: '50%',
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
    labelContainer: {
      width: theme.spacing(6),
    },
  })
);

const Template: React.FC<{ value: number; label: string }> = ({
  value,
  label,
}) => {
  const classes = useStyles();
  return (
    <Grid item container direction="column">
      <Grid
        className={classes.valueContainer}
        item
        container
        justify="center"
        alignItems="center"
      >
        <Typography variant="h4" align="center">
          {value.toString().padStart(2, '0')}
        </Typography>
      </Grid>
      <Grid
        className={classes.labelContainer}
        item
        container
        justify="center"
        alignItems="center"
      >
        <Typography variant="caption" align="center">
          {value > 1 ? `${label}s` : `${label}s`}
        </Typography>
      </Grid>
    </Grid>
  );
};

const getTimer = (ms: number): Timer => {
  const timer = {
    days: Math.floor(ms / (1000 * 60 * 60 * 24)),
    hours: Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((ms % (1000 * 60)) / 1000),
  };

  return timer;
};

const Countdown: React.FC = () => {
  const [timer, setTimer] = React.useState<Timer | undefined>();

  const {
    state: {
      announcement: {
        countdown: { initialDeadline },
      },
    },
  } = React.useContext(PageContext);

  React.useEffect(() => {
    let timeLeft = initialDeadline;
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft = timeLeft - 1000;
        setTimer(getTimer(timeLeft));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return timer ? (
    <Grid container justify="center" spacing={1}>
      <Grid item>
        <Template label="Day" value={timer.days} />
      </Grid>
      <Grid item>
        <Template label="Hour" value={timer.hours} />
      </Grid>
      <Grid item>
        <Template label="Minute" value={timer.minutes} />
      </Grid>
      <Grid item>
        <Template label="Second" value={timer.seconds} />
      </Grid>
    </Grid>
  ) : (
    <>countdown is loading...</>
  );
};

export { Countdown };
