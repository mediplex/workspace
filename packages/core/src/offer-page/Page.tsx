import { Container, Theme, makeStyles, createStyles, useMediaQuery } from '@material-ui/core';
import { State } from './State';
import { PageContextProvider } from './PageContext';
import { IntlProvider } from 'react-intl';
import {
  TopBar,
  Nav,
  Announcement,
  MobileGallery,
  Gallery,
  VariantSelector,
  Name,
  Category,
  Price,
  CompareAt,
  InventoryAlert,
  ShortDescription,
  BuyButton,
  Reviews,
  Description,
} from './components';

type PageProps = {
  data: State;
  intl: {
    locale: string;
    messages: Record<string, string>;
  };
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: `1fr ${theme.spacing(40)}px`,
      gridColumnGap: theme.spacing(10),
      gridRowGap: theme.spacing(4),
      alignItems: 'start',
      gridTemplateAreas: `
          "gallery   announcement"
          "gallery   category-name-price-compareAt"
          "gallery   variantSelector"
          "gallery   inventoryAlert"
          "gallery   shortDescription"
          "gallery   buyButton"
          "gallery   reviews"
          "gallery   description"
          "gallery   ."
        `,
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    topBar: {
      // gridArea: 'topBar',
    },
    nav: {
      // gridArea: 'nav',
    },
    announcement: {
      gridArea: 'announcement',
    },
    gallery: {
      gridArea: 'gallery',
      position: 'sticky',
      top: theme.spacing(8),
    },
    categoryNamePriceCompareAt: {
      gridArea: 'category-name-price-compareAt',
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gridTemplateRows: 'auto auto',
      gridTemplateAreas: `
      "category  compareAt"
      "name      price"
      `,
      gridColumnGap: theme.spacing(3),
      gridRowGap: theme.spacing(1 / 2),
    },
    category: {
      gridArea: 'category',
    },
    name: {
      gridArea: 'name',
    },
    price: {
      gridArea: 'price',
    },

    compareAt: {
      gridArea: 'compareAt',
    },
    inventoryAlert: {
      gridArea: 'inventoryAlert',
    },
    variantSelector: {
      gridArea: 'variantSelector',
    },
    buyButton: {
      gridArea: 'buyButton',
    },
    shortDescription: {
      gridArea: 'shortDescription',
    },
    reviews: {
      gridArea: 'reviews',
    },
    description: {
      gridArea: 'description',
    },
  })
);

const ResponsiveGallery = ({ className }) => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  return isSmallScreen ? <MobileGallery className={className} /> : <Gallery className={className} />;
};

const CategoryNamePriceCompareAt = ({ className }) => {
  const classes = useStyles();
  return (
    <div className={className}>
      <Name className={classes.name} />
      <Category className={classes.category} />
      <Price className={classes.price} />
      <CompareAt className={classes.compareAt} />
    </div>
  );
};

const Page: React.FC<PageProps> = ({ data, intl }) => {
  const classes = useStyles();
  return (
    <IntlProvider locale={intl.locale} messages={intl.messages}>
      <PageContextProvider data={data}>
        <TopBar className={classes.topBar} />
        <Nav className={classes.nav} />
        <Container className={classes.root}>
          <Announcement className={classes.announcement} />
          <ResponsiveGallery className={classes.gallery} />
          <VariantSelector className={classes.variantSelector} />
          <CategoryNamePriceCompareAt className={classes.categoryNamePriceCompareAt} />
          <InventoryAlert className={classes.inventoryAlert} />
          <BuyButton className={classes.buyButton} />
          <ShortDescription className={classes.shortDescription} />
          <Reviews className={classes.reviews} />
          <Description className={classes.description}></Description>
        </Container>
      </PageContextProvider>
    </IntlProvider>
  );
};
export { Page };
