import {
  Container,
  Grid,
  makeStyles,
  createStyles,
  Theme,
  Divider,
  Hidden,
} from '@material-ui/core'
import {
  Gallery,
  MobileGallery,
  ProductNameAndPrice,
  RatingAndReviewsSummary,
  StockWarning,
  BuyButton,
  ShortDescription,
} from './shared'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
    },
    buyButton: {},
    selecteImage: {
      maxWidth: '100%',
      borderRadius: theme.shape.borderRadius,
    },
    stockRoot: {},
    stockValue: {
      padding: theme.spacing(1),
    },
  })
)

const ProductView = () => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Grid container spacing={4} justify="center">
        <Grid item xs={12} md={8}>
          <Hidden mdUp>
            <ProductNameAndPrice />
            <RatingAndReviewsSummary />
            <StockWarning />
            <ShortDescription />
            <MobileGallery />
          </Hidden>
          <Hidden smDown>
            <Gallery />
          </Hidden>
        </Grid>

        <Grid item xs={12} md={4}>
          <Hidden smDown>
            <ProductNameAndPrice />
            <RatingAndReviewsSummary />
            <ShortDescription />
            <Divider variant="fullWidth" />
          </Hidden>
          <BuyButton />
        </Grid>
      </Grid>
    </Container>
  )
}

export { ProductView }
