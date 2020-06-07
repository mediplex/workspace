import React, { FunctionComponent, ReactElement, cloneElement } from 'react'
import {
  useScrollTrigger,
  makeStyles,
  AppBar,
  Toolbar,
  Avatar,
  Button,
  Chip,
  Hidden,
  Theme,
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
}))
const Nav: FunctionComponent<NavProps> = () => {
  const classes = useStyles()
  return (
    <ElevationScroll>
      <AppBar color="transparent" position="sticky">
        {/* <ScrollProgress /> */}
        <Toolbar>
          <Chip
            variant="outlined"
            avatar={
              <Avatar>
                <strong>1</strong>
              </Avatar>
            }
            label={<strong>Body Care</strong>}
          />

          <div className={classes.spacer} />

          <Hidden mdDown>
            <Button>Product</Button>
            <Button>Description</Button>
            <Button>Reviews</Button>
          </Hidden>

          <Button
            className={classes.buyButton}
            variant="contained"
            color="secondary"
          >
            Buy Now
          </Button>

          {/* <BuyButton /> */}
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}

export { Nav }
