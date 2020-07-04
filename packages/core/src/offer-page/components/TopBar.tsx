import {
  AppBar,
  Toolbar,
  makeStyles,
  createStyles,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useContext } from "react";
import { PageContext } from "../PageContext";

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
    content: {
      flexGrow: 1,
    },
    icon: {
      position: "absolute",
      right: 0,
    },
  })
);

const TopBar: React.FC<{ className: string }> = ({ className }) => {
  const {
    state: { topBar },
    setTopBarVisibility,
  } = useContext(PageContext);
  const classes = useStyles();

  return topBar?.visible ? (
    <AppBar
      className={classes.root + (className ? " " + className : "")}
      elevation={0}
      position="relative"
      color="primary"
    >
      <Toolbar variant="dense">
        <Typography className={classes.content} align="center">
          {topBar?.content}
        </Typography>
        <IconButton
          className={classes.icon}
          color="inherit"
          onClick={setTopBarVisibility}
        >
          <Close fontSize="small" />
        </IconButton>
      </Toolbar>
    </AppBar>
  ) : null;
};

export { TopBar };
