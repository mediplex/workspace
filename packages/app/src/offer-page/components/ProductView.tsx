import {
  Container,
  Grid,
  makeStyles,
  createStyles,
  Theme,
  Hidden,
} from '@material-ui/core';
import {
  Gallery,
  MobileGallery,
  ProductNameAndPrice,
  RatingAndReviewsSummary,
  BuyButton,
  ShortDescription,
  // VariantSelector,
  InventoryAlert,
} from './shared';
import { Announcement } from './Announcement';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
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
    [theme.breakpoints.up('md')]: {
      productDetail: {
        maxWidth: theme.spacing(48),
      },
    },
  })
);

const ProductView = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={6} justify="center">
        <Grid item xs={12} md>
          <Hidden mdUp>
            <Announcement />
            <ProductNameAndPrice />
            <RatingAndReviewsSummary />
            <InventoryAlert />
            <ShortDescription />
            <MobileGallery />
          </Hidden>
          <Hidden smDown>
            <Gallery />
          </Hidden>
        </Grid>

        <Grid item xs={12} className={classes.productDetail}>
          <Hidden smDown>
            <Announcement />
            <ProductNameAndPrice />
            <RatingAndReviewsSummary />
            <InventoryAlert />
            <ShortDescription />
          </Hidden>
          {/* <VariantSelector /> */}
          <BuyButton />
        </Grid>
      </Grid>
    </Container>
  );
};

export { ProductView };
