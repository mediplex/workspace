import {
  AppBar,
  Toolbar,
  makeStyles,
  createStyles,
  Theme,
  Typography,
  IconButton,
  Grow,
} from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { useContext, useState } from 'react'
import { PageContext } from '../PageContext'

const useStyles = makeStyles(() =>
  createStyles({
    spacer: {
      flexGrow: 1,
    },
  })
)

const TopBarAnnouncement = () => {
  const { topBarAnnouncement } = useContext(PageContext)
  const classes = useStyles()

  const [visible, setVisible] = useState<boolean>(true)
  const handleVisible = () => setVisible(!visible)

  return visible ? (
    <AppBar color="secondary">
      <Toolbar variant="dense">
        <Typography className={classes.spacer} align="center">
          {topBarAnnouncement}
        </Typography>
        <IconButton color="inherit" onClick={handleVisible}>
          <Close />
        </IconButton>
      </Toolbar>
    </AppBar>
  ) : (
    <></>
  )
}

export { TopBarAnnouncement }
