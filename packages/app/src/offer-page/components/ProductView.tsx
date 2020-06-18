import {
  Container,
  makeStyles,
  createStyles,
  Theme,
  useMediaQuery,
} from '@material-ui/core';
import {
  MobileGallery,
  ProductNameAndPrice,
  RatingAndReviewsSummary,
  BuyButton,
  ShortDescription,
  InventoryAlert,
  Gallery,
} from './shared';
import { Announcement } from './Announcement';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      display: 'grid',
    },

    [theme.breakpoints.up('md')]: {
      root: {
        gridTemplateColumns: `1fr ${theme.spacing(48)}px`,
        gridColumnGap: theme.spacing(4),
        gridRowGap: theme.spacing(2),
        alignItems: 'start',
      },
      gallery: {
        gridColumn: '1/2',
        gridRow: '1/8',
      },
      announcement: {
        gridColumn: '2/3',
      },
      productNameAndPrice: {
        gridColumn: '2/3',
      },
      ratingAndReviewsSummary: {
        gridColumn: '2/3',
      },
      inventory: {
        gridColumn: '2/3',
      },
      shortDescription: {
        gridColumn: '2/3',
      },
      buyButton: {
        gridColumn: '2/3',
      },
    },
    [theme.breakpoints.down('sm')]: {
      root: {
        gridTemplateColumns: '1fr',
        gridRowGap: theme.spacing(2),
      },
      announcement: {
        gridRow: '1/2',
      },
      productNameAndPrice: {
        gridRow: '2/3',
      },
      ratingAndReviewsSummary: {
        gridRow: '3/4',
      },
      inventory: {
        gridRow: '4/5',
      },
      gallery: {
        gridRow: '5/6',
      },
      shortDescription: {
        gridRow: '6/7',
      },
      buyButton: {
        gridRow: '7/8',
      },
    },
  })
);

const ProductView = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );

  return (
    <Container className={classes.root}>
      {isSmallScreen ? (
        <MobileGallery className={classes.gallery} />
      ) : (
        <Gallery className={classes.gallery} />
      )}
      <Announcement className={classes.announcement} />
      <ProductNameAndPrice className={classes.productNameAndPrice} />
      <RatingAndReviewsSummary className={classes.ratingAndReviewsSummary} />
      <InventoryAlert className={classes.inventory} />
      <ShortDescription className={classes.shortDescription} />
      <BuyButton className={classes.buyButton} />
    </Container>
  );
};

export { ProductView };
