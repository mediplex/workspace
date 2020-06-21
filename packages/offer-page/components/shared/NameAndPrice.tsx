import { Typography, makeStyles, createStyles } from '@material-ui/core';
import React from 'react';
import { PageContext } from '../../PageContext';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
    },
  })
);
export const NameAndPrice: React.FC<{ className: string }> = ({
  className,
}) => {
  const classes = useStyles();
  const {
    state: {
      name,
      category,
      price: { value, compareAt },
    },
  } = React.useContext(PageContext);

  return (
    <div className={classes.root + (className ? ' ' + className : '')}>
      <Typography variant="caption">{category}</Typography>
      <Typography variant="body2" color="textSecondary" align="right">
        <del>$ {compareAt}</del>
      </Typography>
      <Typography variant="h3">{name}</Typography>
      <Typography color="secondary" align="right">
        $ {value}
      </Typography>
    </div>
  );
};
