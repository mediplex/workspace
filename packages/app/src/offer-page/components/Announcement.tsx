import React, { useContext } from 'react';
import {
  Typography,
  makeStyles,
  Theme,
  createStyles,
  lighten,
  darken,
} from '@material-ui/core';
import { FlashOn } from '@material-ui/icons';
import { PageContext } from '../PageContext';
import { Countdown } from './shared';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      justifyItems: 'center',
      gridRowGap: theme.spacing(1),
      padding: theme.spacing(2),
      borderRadius: theme.shape.borderRadius,
      color: darken(theme.palette.primary.dark, 0.5),
      backgroundColor: lighten(theme.palette.primary.light, 0.9),
    },
    icon: {
      color: theme.palette.primary.main,
      verticalAlign: 'middle',
    },
  })
);

const Announcement: React.FC<{ className: string }> = ({ className }) => {
  const classes = useStyles();

  const {
    state: { announcement },
  } = useContext(PageContext);

  const {
    title,
    content,
    countdown: { initialDeadline },
  } = announcement;

  return announcement ? (
    <div className={classes.root + (className ? ' ' + className : '')}>
      <Typography align="center" gutterBottom>
        <FlashOn className={classes.icon} />
        <strong>{title}</strong>
        <FlashOn className={classes.icon} />
      </Typography>
      <Countdown deadline={initialDeadline} />
      <Typography
        align="center"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  ) : null;
};

export { Announcement };
