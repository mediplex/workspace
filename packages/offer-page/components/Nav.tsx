import React, { FunctionComponent, ReactElement, cloneElement } from 'react'
import {
  useScrollTrigger,
  makeStyles,
  AppBar,
  Toolbar,
  Button,
  Hidden,
  Theme,
  Typography,
} from '@material-ui/core'

// import { ScrollProgress } from '../../features';

type NavProps = {}
const ElevationScroll = ({ children }: { children: ReactElement }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })
  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}
const useStyles = makeStyles((theme: Theme) => ({
  spacer: {
    flexGrow: 1,
  },
  buyButton: {
    '&:last-child': {
      marginLeft: theme.spacing(2),
    },
  },
  logo: {
    backgroundColor: theme.palette.getContrastText(theme.palette.primary.main),
    color: theme.palette.primary.main,
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}))
const Nav: FunctionComponent<NavProps> = () => {
  const classes = useStyles()
  return (
    <ElevationScroll>
      <AppBar position="sticky" color="primary">
        {/* <ScrollProgress /> */}
        <Toolbar>
          <Typography color="inherit">
            <span>⚪⚪⚪</span>
          </Typography>

          <div className={classes.spacer} />

          <Hidden smDown>
            <Button color="inherit">Product</Button>
            <Button color="inherit">Description</Button>
            <Button color="inherit">Reviews</Button>
          </Hidden>

          <Button
            className={classes.buyButton}
            variant="contained"
            color="secondary"
          >
            Buy Now
          </Button>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}

export { Nav }
