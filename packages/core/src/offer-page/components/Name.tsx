import { Typography, makeStyles, createStyles } from "@material-ui/core";
import React from "react";
import { PageContext } from "../PageContext";

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
  })
);
export const Name: React.FC<{ className: string }> = ({
  className,
}) => {
  const classes = useStyles();
  const {
    state: { name },
  } = React.useContext(PageContext);

  return (
    <div className={classes.root + (className ? " " + className : "")}>
      <Typography variant="h3">{name}</Typography>
    </div>
  );
};
