import { Typography, makeStyles, createStyles } from "@material-ui/core";
import React from "react";
import { PageContext } from "../PageContext";

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
  })
);
export const CompareAt: React.FC<{ className: string }> = ({
  className,
}) => {
  const classes = useStyles();
  const {
    state: {
      price: { compareAt },
    },
  } = React.useContext(PageContext);

  return (
    <div className={classes.root + (className ? " " + className : "")}>
      <Typography variant="body2" color="textSecondary" align="right">
        <del>$ {compareAt}</del>
      </Typography>
    </div>
  );
};
