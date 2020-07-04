import React, { FunctionComponent, ReactElement, cloneElement, useState } from 'react';
import {
  useScrollTrigger,
  makeStyles,
  AppBar,
  Toolbar,
  Button,
  Theme,
  Typography,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { LocationOn, Help } from '@material-ui/icons';

const ElevationScroll = ({ children }: { children: ReactElement }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backdropFilter: 'blur(.75rem)',
  },
  logo: {
    backgroundColor: theme.palette.getContrastText(theme.palette.primary.main),
    color: theme.palette.primary.main,
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  toolbar: {
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    // justifySelf: "stretch",
    justifyItems: 'center',
    '& > *:first-child': {
      justifySelf: 'start',
    },
    '& > *:last-child': {
      justifySelf: 'end',
    },
  },
}));
const Nav: FunctionComponent<{ className?: string }> = ({ className }) => {
  const classes = useStyles();

  return (
    <ElevationScroll>
      <AppBar
        className={'root ' + classes.root + (className ? ' ' + className : '')}
        position="sticky"
        color="transparent"
      >
        <Toolbar className={classes.toolbar}>
          <div>
            <Typography color="inherit">
              <span>⚪⚪⚪</span>
            </Typography>
          </div>

          <div>
            <HelpMe />
            <LanguageSwitcher />
          </div>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

const LanguageSwitcher: React.FC = () => {
  return (
    <>
      <Button startIcon={<LocationOn />} color="inherit">
        United States
      </Button>
    </>
  );
};

const HelpMe: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button startIcon={<Help />} color="inherit" onClick={handleClick}>
        Help
      </Button>

      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem>Order Status</MenuItem>
        <MenuItem>Shipping and Delivery</MenuItem>
        <MenuItem>Returns</MenuItem>
        <MenuItem>Contact us</MenuItem>
        <MenuItem>Privacy Policy</MenuItem>
        <MenuItem>Terms of use</MenuItem>
        <MenuItem>Send us a Feedback</MenuItem>
      </Menu>
    </>
  );
};

export { Nav };
