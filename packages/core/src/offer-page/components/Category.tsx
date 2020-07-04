import { Typography, makeStyles, createStyles } from "@material-ui/core";
import React from "react";
import { PageContext } from "../PageContext";

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
  })
);
export const Category: React.FC<{ className: string }> = ({
  className,
}) => {
  const classes = useStyles();
  const {
    state: { category },
  } = React.useContext(PageContext);

  return (
    <div className={classes.root + (className ? " " + className : "")}>
      <Typography>{category}</Typography>
    </div>
  );
};
