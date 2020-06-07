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
    content: {
      flexGrow: 1,
    },
    icon: {
      position: 'absolute',
      right: 0,
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
    <>
      <AppBar color="primary">
        <Toolbar variant="dense">
          <Typography className={classes.content} align="center">
            {content}
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
      <Toolbar variant="dense" />
    </>
  ) : null
}

export { TopBar }
