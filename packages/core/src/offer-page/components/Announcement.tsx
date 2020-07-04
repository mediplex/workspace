import React, { useContext } from 'react';
import { Typography, makeStyles, Theme, createStyles } from '@material-ui/core';
import { FlashOn } from '@material-ui/icons';
import { PageContext } from '../PageContext';
import { Countdown } from './shared';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      justifyItems: 'center',
      gridRowGap: theme.spacing(1),
      paddingTop: theme.spacing(1),
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      color: theme.palette.primary.main,
      backgroundColor: grey[200],
    },
    icon: {
      color: theme.palette.warning.main,
      verticalAlign: 'middle',
    },
  })
);

const Announcement: React.FC<{ className?: string }> = ({ className }) => {
  const classes = useStyles();

  const {
    state: { announcement },
  } = useContext(PageContext);

  const {
    title,
    content,
    countdown: { initialDeadline },
  } = announcement;

  return (
    <div className={classes.root + (className ? ' ' + className : '')}>
      <Typography align="center" gutterBottom>
        <FlashOn className={classes.icon} />
        <strong>{title}</strong>
        <FlashOn className={classes.icon} />
      </Typography>
      <Countdown deadline={initialDeadline} />
      <Typography align="center" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export { Announcement };
