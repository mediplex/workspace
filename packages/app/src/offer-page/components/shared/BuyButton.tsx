import { Button, makeStyles, Theme, createStyles } from '@material-ui/core';
import { useContext, FC } from 'react';
import { PageContext } from '../../PageContext';
import { ShoppingCart } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      
    }
    ,button: {
      // marginTop: theme.spacing(3),
      // marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      borderRadius: 57000,
    },
  })
);

export const BuyButton: React.FC<{ className: string }> = ({ className }) => {
  const classes = useStyles();
  const {
    state: {
      buyButton: { content },
    },
  } = useContext(PageContext);
  return (
<div className={classes.root + (className ? ' ' + className : '')}>  
    <Button
        className={classes.button}
        fullWidth
        color="secondary"
        variant="contained"
        startIcon={<ShoppingCart />}
      >
        {content}
      </Button>
    </div>
  );
};
