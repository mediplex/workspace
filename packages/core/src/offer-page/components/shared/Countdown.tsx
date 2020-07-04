import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { FormattedMessage, FormattedPlural } from "react-intl";

type Timer = {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "grid",
      gridTemplateColumns: `repeat(3,${theme.spacing(6)}px ${theme.spacing(
        1 / 2
      )}px) ${theme.spacing(6)}px`,
      gridTemplateRows: `${theme.spacing(6)}px auto`,
      gridColumnGap: theme.spacing(0.5),
      gridRowGap: theme.spacing(0.25),
      width: "max-content",
    },
    value: {
      gridRow: "1/2",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "solid",
      borderWidth: theme.spacing(1 / 4),
      borderRadius: "50%",
      fontSize: theme.typography.h4.fontSize,
    },
    label: {
      gridRow: "2/3",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: theme.typography.caption.fontSize,
    },
    separator: {
      gridRow: "1/2",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    space: {
      gridRow: "2/3",
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

const Seconds: React.FC<{ value: number }> = ({ value }) => (
  <FormattedPlural
    value={value}
    zero={
      <FormattedMessage
        id="second"
        description="second"
        defaultMessage="second"
      />
    }
    one={
      <FormattedMessage
        id="second"
        description="second"
        defaultMessage="second"
      />
    }
    other={
      <FormattedMessage
        id="seconds"
        description="seconds"
        defaultMessage="seconds"
      />
    }
  />
);


const Minutes: React.FC<{ value: number }> = ({ value }) => (
  <FormattedPlural
    value={value}
    one={
      <FormattedMessage
        id="minute"
        description="minute"
        defaultMessage="minute"
      />
    }
    other={
      <FormattedMessage
        id="minutes"
        description="minutes"
        defaultMessage="minutes"
      />
    }
  />
);


const Hours: React.FC<{ value: number }> = ({ value }) => (
  <FormattedPlural
    value={value}
    one={
      <FormattedMessage id="hour" description="hour" defaultMessage="hour" />
    }
    other={
      <FormattedMessage id="hours" description="hours" defaultMessage="hours" />
    }
  />
);


const Days: React.FC<{ value: number }> = ({ value }) => (
  <FormattedPlural
    value={0}
    one={<FormattedMessage id="day" description="day" defaultMessage="day" />}
    other={
      <FormattedMessage id="days" description="days" defaultMessage="days" />
    }
  />
);

const Countdown: React.FC<{ className?: string; deadline: number }> = ({
  className,
  deadline,
}) => {
  const classes = useStyles();

  const [{ days, hours, minutes, seconds }, setTimer] = React.useState<
    Timer | undefined
  >(getTimer(deadline));
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
    <div className={classes.root + (className ? " " + className : "")}>
      <div className={classes.value}>{days.toString().padStart(2, "0")}</div>

      <div className={classes.separator}>{separator && ":"}</div>

      <div className={classes.value}>{hours.toString().padStart(2, "0")}</div>

      <div className={classes.separator}>{separator && ":"}</div>

      <div className={classes.value}>{minutes.toString().padStart(2, "0")}</div>

      <div className={classes.separator}>{separator && ":"}</div>

      <div className={classes.value}>{seconds.toString().padStart(2, "0")}</div>

      <div className={classes.label}>
        <Days value={days} />
      </div>

      <div className={classes.space} />

      <div className={classes.label}>
        <Hours value={hours} />
      </div>

      <div className={classes.space} />

      <div className={classes.label}>
        <Minutes value={minutes} />
      </div>

      <div className={classes.space} />

      <div className={classes.label}>
        <Seconds value={seconds} />
      </div>
    </div>
  );
};

export { Countdown };
