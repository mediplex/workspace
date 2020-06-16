import { Grid, Typography, makeStyles, createStyles } from '@material-ui/core'
import { useContext, FC } from 'react'
import { PageContext } from '../../PageContext'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      // marginBottom: theme.spacing(1),
    },
  })
)
export const ProductNameAndPrice: FC = () => {
  const classes = useStyles()
  const {
    state: { name, category, pricing },
  } = useContext(PageContext)
  return (
    <Grid className={classes.root} container>
      <Grid item xs>
        <Typography variant="caption">{category}</Typography>
        <Typography variant="h3" gutterBottom>
          {name}
        </Typography>
      </Grid>
      <Grid item>
        <Typography color="secondary" align="right">
          $ {pricing.price}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="right">
          <del>$ {pricing.comparePrice}</del>
        </Typography>
      </Grid>
    </Grid>
  )
}
