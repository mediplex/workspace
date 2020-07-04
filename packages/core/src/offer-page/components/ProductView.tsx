import {
  Container,
  makeStyles,
  createStyles,
  Theme,
  useMediaQuery,
} from "@material-ui/core";
import {
  MobileGallery,
  BuyButton,
  ShortDescription,
  InventoryAlert,
  Gallery,
  VariantSelector,
  Reviews,
} from ".";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      display: "grid",
    },

    [theme.breakpoints.up("md")]: {
      root: {
        gridTemplateColumns: `1fr ${theme.spacing(48)}px`,
        gridColumnGap: theme.spacing(6),
        gridRowGap: theme.spacing(3),
        alignItems: "start",
      },
      gallery: {
        gridColumn: "1/2",
        gridRow: "1/9",
      },
      announcement: {
        gridColumn: "2/3",
        gridRow: "1/2",
      },
      nameAndPrice: {
        gridColumn: "2/3",
        gridRow: "2/3",
      },
      variantSelector: {
        gridColumn: "2/3",
        gridRow: "5/6",
      },
      ratingAndReviewsSummary: {
        gridColumn: "2/3",
        gridRow: "3/4",
      },
      inventory: {
        gridColumn: "2/3",
        gridRow: "4/5",
      },
      shortDescription: {
        gridColumn: "2/3",
        gridRow: "6/7",
      },
      buyButton: {
        gridColumn: "2/3",
        gridRow: "7/8",
      },
    },
    [theme.breakpoints.down("sm")]: {
      root: {
        gridTemplateColumns: "1fr",
        gridRowGap: theme.spacing(3),
      },
      announcement: {
        gridRow: "1/2",
      },
      productNameAndPrice: {
        gridRow: "2/3",
      },

      ratingAndReviewsSummary: {
        gridRow: "3/4",
      },
      inventory: {
        gridRow: "4/5",
      },
      gallery: {
        gridRow: "5/6",
      },
      variantSelector: {
        gridRow: "6/7",
      },
      shortDescription: {
        gridRow: "7/8",
      },
      buyButton: {
        gridRow: "8/9",
      },
    },
  })
);

const ProductView = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Container className={classes.root}>
      {isSmallScreen ? (
        <MobileGallery className={classes.gallery} />
      ) : (
        <Gallery className={classes.gallery} />
      )}
      <VariantSelector className={classes.variantSelector} />
      <div className={classes.announcement} />
      <div className={classes.productNameAndPrice} />
      <div className={classes.ratingAndReviewsSummary} />
      <InventoryAlert className={classes.inventory} />
      <ShortDescription className={classes.shortDescription} />
      <BuyButton className={classes.buyButton} />
      <Reviews className={classes.Reviews} />
    </Container>
  );
};

export { ProductView };
