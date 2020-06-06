import {
  AppBar,
  Toolbar,
  makeStyles,
  createStyles,
  Typography,
  IconButton,
} from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { useContext } from 'react'
import { PageContext } from '../PageContext'

const useStyles = makeStyles(() =>
  createStyles({
    spacer: {
      flexGrow: 1,
    },
  })
)

const TopBar = () => {
  const {
    state: {
      topBar: { content, visible },
    },
    setTopBarVisibility,
  } = useContext(PageContext)
  const classes = useStyles()

  return visible ? (
    <AppBar color="secondary">
      <Toolbar variant="dense">
        <Typography className={classes.spacer} align="center">
          {content}
        </Typography>
        <IconButton color="inherit" onClick={setTopBarVisibility}>
          <Close />
        </IconButton>
      </Toolbar>
    </AppBar>
  ) : (
    <></>
  )
}

export { TopBar }
