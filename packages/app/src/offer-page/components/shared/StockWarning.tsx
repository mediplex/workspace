import {
  Typography,
  makeStyles,
  Theme,
  createStyles,
  darken,
  lighten,
} from '@material-ui/core'
import { useContext, FC } from 'react'
import { PageContext } from '../../PageContext'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      border: 'solid',
      borderRadius: theme.shape.borderRadius,
      borderColor: theme.palette.warning.main,
      color: darken(theme.palette.warning.dark, 0.5),
      backgroundColor: lighten(theme.palette.warning.light, 0.5),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    stockValue: {
      padding: theme.spacing(1),
      color: lighten(theme.palette.warning.dark, 0.5),
      backgroundColor: darken(theme.palette.warning.light, 0.5),
    },
  })
)

export const StockWarning: FC = () => {
  const classes = useStyles()
  const {
    state: {
      productView: { stock },
    },
  } = useContext(PageContext)
  return (
    <Typography display="inline" variant="body1" color="secondary">
      Hurry! Only&nbsp;
      <span className={classes.stockValue}>{stock.max}</span>
      &nbsp;left in stock - order soon
    </Typography>
  )
}
