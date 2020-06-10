import {
  Grid,
  Typography,
  Divider,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core'
import { useContext, FC } from 'react'
import { Rating } from '@material-ui/lab'
import { PageContext } from '../../PageContext'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconFilled: {
      color: theme.palette.primary.main,
    },
  })
)

const RatingAndReviewsSummary: FC = () => {
  const classes = useStyles()
  const {
    state: {
      productView: { ratingSummary, reviewsSummary },
    },
  } = useContext(PageContext)
  return (
    <Grid item container>
      <Grid container spacing={1}>
        <Grid item>
          <Rating
            classes={{ iconFilled: classes.iconFilled }}
            value={ratingSummary}
            precision={0.5}
            readOnly
          />
        </Grid>
        <Grid item>{'|'}</Grid>
        <Grid item>
          <Typography>
            <strong>{reviewsSummary}</strong> customer reviews
          </Typography>
        </Grid>
      </Grid>
      <Divider />
    </Grid>
  )
}

export { RatingAndReviewsSummary }
