import React from "react";
import { Button, makeStyles, Theme, createStyles } from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import { PageContext } from "../PageContext";
import { ShoppingCart } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    button: {
      // marginTop: theme.spacing(3),
      // marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      borderRadius: 57000,
    },
  })
);

const Content: React.FC = () => (
  <FormattedMessage
    id="buyButton.content"
    description="Buy button content"
    defaultMessage="Buy Now"
  />
);

export const BuyButton: React.FC<{ className: string }> = ({ className }) => {
  const classes = useStyles();

  return (
    <div className={classes.root + (className ? " " + className : "")}>
      <Button
        className={classes.button}
        fullWidth
        color="secondary"
        variant="contained"
        startIcon={<ShoppingCart />}
      >
        <Content />
      </Button>
    </div>
  );
};
