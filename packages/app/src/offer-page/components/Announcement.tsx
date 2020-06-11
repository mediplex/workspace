import React, { useContext } from 'react'
import {
  Typography,
  makeStyles,
  Theme,
  createStyles,
  lighten,
  darken,
  Grid,
} from '@material-ui/core'
import { FlashOn } from '@material-ui/icons'
import { PageContext } from '../PageContext'
import { Countdown } from './shared'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      // border: 'solid',
      // borderRadius: theme.shape.borderRadius,
      // borderColor: theme.palette.primary.main,
      color: darken(theme.palette.primary.dark, 0.5),
      backgroundColor: lighten(theme.palette.primary.light, 0.9),
      // marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    icon: {
      color: theme.palette.primary.main,
      verticalAlign: 'middle',
    },
  })
)

const Announcement = () => {
  const classes = useStyles()

  const {
    state: { announcement },
  } = useContext(PageContext)

  const { title, content } = announcement

  return announcement ? (
    <div className={classes.root}>
      <Grid container direction="column" spacing={1} justify="center">
        <Grid item>
          <Typography align="center" gutterBottom>
            <FlashOn className={classes.icon} />
            <strong>{title}</strong>
            <FlashOn className={classes.icon} />
          </Typography>
        </Grid>
        <Grid item>
          <Countdown />
        </Grid>
        <Grid item>
          <Typography
            align="center"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Grid>
      </Grid>
    </div>
  ) : null
}

export { Announcement }
