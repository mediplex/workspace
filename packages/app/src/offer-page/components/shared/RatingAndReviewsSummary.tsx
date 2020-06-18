import React from 'react';
import { Typography, makeStyles, Theme, createStyles } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { PageContext } from '../../PageContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gridColumnGap: theme.spacing(1 / 2),
    },
    iconFilled: {
      color: theme.palette.primary.main,
    },
  })
);

const RatingAndReviewsSummary: React.FC<{ className: string }> = ({
  className,
}) => {
  const classes = useStyles();
  const {
    state: { ratingSummary, reviewsSummary },
  } = React.useContext(PageContext);
  return (
    <div className={classes.root + (className ? ' ' + className : '')}>
      <Rating
        classes={{ iconFilled: classes.iconFilled }}
        value={ratingSummary}
        precision={0.5}
        readOnly
      />
      <Typography>
        <strong>{reviewsSummary}</strong> customer reviews
      </Typography>
    </div>
  );
};

export { RatingAndReviewsSummary };
