import {
  Grid,
  Typography,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core'
import { useContext, FC } from 'react'
import { PageContext } from '../../PageContext'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // marginBottom: theme.spacing(1),
    },
  })
)
export const ProductNameAndPrice: FC = () => {
  const classes = useStyles()
  const {
    state: {
      productView: { headline, subheadline, pricing },
    },
  } = useContext(PageContext)
  return (
    <Grid className={classes.root} container>
      <Grid item xs>
        <Typography variant="caption">{subheadline}</Typography>
        <Typography variant="h3" gutterBottom>
          {headline}
        </Typography>
      </Grid>
      <Grid item>
        <Typography color="secondary" align="right">
          $ {pricing.discountedPrice}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="right">
          <del>$ {pricing.originalPrice}</del>
        </Typography>
      </Grid>
    </Grid>
  )
}
