import { Typography, makeStyles, createStyles } from "@material-ui/core";
import React from "react";
import { PageContext } from "../PageContext";

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
  })
);
export const Price: React.FC<{ className: string }> = ({
  className,
}) => {
  const classes = useStyles();
  const {
    state: {
      price: { value },
    },
  } = React.useContext(PageContext);

  return (
    <div className={classes.root + (className ? " " + className : "")}>
      <Typography align="right">$ {value}</Typography>
    </div>
  );
};
