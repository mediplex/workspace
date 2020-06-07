import React, { useContext } from 'react'
import {
  Container,
  Typography,
  Grid,
  makeStyles,
  Theme,
  createStyles,
  Box,
} from '@material-ui/core'
import { PageContext } from '../PageContext'
import { Info } from '@material-ui/icons'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    box: {
      border: 'dashed',
      borderWidth: 'thick',
      borderRadius: theme.shape.borderRadius,
      borderColor: theme.palette.secondary.main,
      padding: theme.spacing(2),
      backgroundColor: theme.palette.background.paper,
    },
    icon: {
      display: 'flex',
      fontSize: theme.spacing(6),
    },
  })
)

const Announcement = () => {
  const classes = useStyles()

  const {
    state: { announcement },
  } = useContext(PageContext)
  return (
    <Box className={classes.root}>
      <Container maxWidth="md">
        <Box className={classes.box}>
          <Grid container>
            <Grid container item xs={2} justify="center" alignItems="center">
              <Grid item>
                <Info className={classes.icon} color="secondary" />
              </Grid>
            </Grid>
            <Grid item xs={10}>
              <Typography>{announcement}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export { Announcement }
