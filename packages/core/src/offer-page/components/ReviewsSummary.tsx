import React from "react";
import { Typography, makeStyles, Theme, createStyles } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { PageContext } from "../PageContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gridColumnGap: theme.spacing(1 / 2),
      marginTop: 10,
      marginBottom: 10,
      flexGrow: 1,
      alignItems: "center",
      "& > *:first-child": {
        justifySelf: "start",
      },
      "& > *:last-child": {
        justifySelf: "end",
      },
    },
    iconFilled: {
      color: theme.palette.primary.main,
    },
  })
);

export const ReviewsSummary: React.FC<{ className?: string }> = ({
  className,
}) => {
  const classes = useStyles();
  const {
    state: { ratingSummary, reviewsSummary },
  } = React.useContext(PageContext);
  return (
    <div className={classes.root + (className ? " " + className : "")}>
      <Typography variant='h4' >Reviews ({reviewsSummary})</Typography>
      <Rating
        size="small"
        classes={{ iconFilled: classes.iconFilled }}
        value={ratingSummary}
        precision={0.5}
        readOnly
      />
    </div>
  );
};
