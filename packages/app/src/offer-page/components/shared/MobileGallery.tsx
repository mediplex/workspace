import { Grid, makeStyles, Theme, createStyles } from '@material-ui/core'
import { FC, useState, useContext } from 'react'
import { PageContext } from '../..'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selectedImage: {
      borderRadius: theme.shape.borderRadius,
      width: '100%',
      background: theme.palette.grey[200],
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

const MobileGallery: FC = () => {
  const classes = useStyles(0)
  const {
    state: {
      productView: { gallery },
    },
  } = useContext(PageContext)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item container>
        <img
          className={classes.selectedImage}
          src={gallery[selectedIndex].src}
          alt={gallery[selectedIndex].alt}
        />
      </Grid>
      <Grid item container spacing={1}>
        {gallery.map(({ src, alt }, index) => (
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

export { MobileGallery }
