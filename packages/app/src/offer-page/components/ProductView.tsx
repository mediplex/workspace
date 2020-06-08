import {
  Container,
  Grid,
  Typography,
  makeStyles,
  createStyles,
  Theme,
  Button,
} from '@material-ui/core'
import { useContext, FC, useState } from 'react'
import { Rating } from '@material-ui/lab'
import { PageContext } from '../PageContext'
import { BuyButton as BuyButtonProps, Image } from '../State'
import { Countdown } from './Countdown'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
    },
    leftColumn: {
      position: 'sticky',
    },
    buyButton: {},
    selecteImage: {
      maxWidth: '100%',
      borderRadius: theme.shape.borderRadius,
    },
    thumbnail: {
      width: '64px',
      hight: '64px',
      borderRadius: theme.shape.borderRadius,
    },
    selectedThumbnail: {
      border: 'solid',
      borderSize: theme.spacing(1),
      borderColor: theme.palette.primary.light,
    },
  })
)

const BuyButton: FC<BuyButtonProps> = ({ content }) => {
  const classes = useStyles()
  return (
    <Button
      className={classes.buyButton}
      size="large"
      color="secondary"
      variant="contained"
    >
      {content}
    </Button>
  )
}

const Gallery: FC<{ images: Image[] }> = ({ images }) => {
  const classes = useStyles(0)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <img
          className={classes.selecteImage}
          src={images[selectedIndex].src}
          alt={images[selectedIndex].alt}
        />
      </Grid>
      <Grid item container spacing={1}>
        {images.map(({ src, alt }, index) => (
          <Grid item key={index}>
            <img
              className={
                classes.thumbnail +
                (selectedIndex === index ? ' ' + classes.selectedThumbnail : '')
              }
              src={src}
              alt={alt}
              onClick={() => setSelectedIndex(index)}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

const ProductView = () => {
  const classes = useStyles()
  const {
    state: { productView },
  } = useContext(PageContext)

  const {
    buyButton,
    gallery,
    headline,
    subheadline,
    pricing,
    ratingSummary,
    realTimevisitorRange,
    reviewsSummary,
    shortDescription,
    stock,
    variants,
  } = productView

  return productView ? (
    <Container className={classes.root}>
      <Grid container spacing={4}>
        <Grid className={classes.leftColumn} item xs={12} md={6}>
          <Gallery images={gallery} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h1">
            <strong>{headline}</strong>
          </Typography>
          <Typography variant="h3" gutterBottom>
            {subheadline}
          </Typography>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <Rating value={ratingSummary} precision={0.5} readOnly />
            </Grid>
            <Grid item>{'|'}</Grid>
            <Grid item>
              <Typography>
                <strong>{reviewsSummary}</strong> customer reviews
              </Typography>
            </Grid>
          </Grid>
          <Typography>
            List Price: <del>${pricing.originalPrice}</del>
          </Typography>
          <Typography>
            Your Price: <strong>${pricing.discountedPrice}</strong>{' '}
            {pricing.discount}
          </Typography>
          <Typography paragraph color="secondary">
            <strong>Only {stock.max} left in stock - order soon</strong>
          </Typography>
          <Typography paragraph>{shortDescription}</Typography>
          <BuyButton content={buyButton.content} />
        </Grid>
      </Grid>
    </Container>
  ) : null
}

export { ProductView }
