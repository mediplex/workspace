import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

type Timer = {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: `repeat(3,${theme.spacing(6)}px ${theme.spacing(1/2)}px) ${theme.spacing(6)}px`,
      gridTemplateRows: `${theme.spacing(6)}px auto`,
      gridColumnGap: theme.spacing(0.5),
      gridRowGap: theme.spacing(0.25),
      width: 'max-content',
    },
    value: {
      gridRow: '1/2',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: 'solid',
      borderWidth: theme.spacing(1 / 4),
      borderRadius: '50%',
      fontSize: theme.typography.h4.fontSize,
    },
    label: {
      gridRow: '2/3',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: theme.typography.caption.fontSize,
    },
    separator: {
      gridRow: '1/2',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    space: {
      gridRow: '2/3',
    },
  })
);

const getTimer = (ms: number): Timer => {
  const timer = {
    days: Math.floor(ms / (1000 * 60 * 60 * 24)),
    hours: Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((ms % (1000 * 60)) / 1000),
  };

  return timer;
};

const Countdown: React.FC<{ className?: string, deadline: number }> = ({ className, deadline }) => {
  const classes = useStyles();

  const [{ days, hours, minutes, seconds }, setTimer] = React.useState<Timer | undefined>(
    getTimer(deadline)
  );
  const [separator, setSeparator] = React.useState<boolean>(true);

  React.useEffect(() => {
    let timeLeft = deadline;
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft = timeLeft - 1000;
        setTimer(getTimer(timeLeft));
        setSeparator((prev) => !prev);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={classes.root + (className ? ' ' + className : '')}>
      <div className={classes.value}>{days.toString().padStart(2, '0')}</div>
      <div className={classes.separator}>{separator && ':'}</div>
      <div className={classes.value}>{hours.toString().padStart(2, '0')}</div>
      <div className={classes.separator}>{separator && ':'}</div>
      <div className={classes.value}>{minutes.toString().padStart(2, '0')}</div>
      <div className={classes.separator}>{separator && ':'}</div>
      <div className={classes.value}>{seconds.toString().padStart(2, '0')}</div>
      <div className={classes.label}>day{days > 1 ? `s` : ``}</div>
      <div className={classes.space} />
      <div className={classes.label}>hour{hours > 1 ? `s` : ``}</div>
      <div className={classes.space} />
      <div className={classes.label}>minute{minutes > 1 ? `s` : ``}</div>
      <div className={classes.space} />
      <div className={classes.label}>second{seconds > 1 ? `s` : ``}</div>
    </div>
  );
};

export { Countdown };
