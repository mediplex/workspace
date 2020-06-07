import React, { useContext } from 'react'
import {
  Container,
  Typography,
  makeStyles,
  Theme,
  createStyles,
  lighten,
  darken,
} from '@material-ui/core'
import { FlashOn } from '@material-ui/icons'
import { PageContext } from '../PageContext'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      border: 'solid',
      borderRadius: theme.shape.borderRadius,
      borderColor: theme.palette.warning.main,
      color: darken(theme.palette.warning.dark, 0.5),
      backgroundColor: lighten(theme.palette.warning.light, 0.5),
    },
    container: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    icon: {
      color: theme.palette.warning.main,
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
    <Container maxWidth="xs" className={classes.container}>
      <div className={classes.root}>
        <Typography align="center" gutterBottom>
          <FlashOn className={classes.icon} />
          <strong>{title}</strong>
          <FlashOn className={classes.icon} />
        </Typography>
        <Typography align="center">{content}</Typography>
      </div>
    </Container>
  ) : null
}

export { Announcement }
