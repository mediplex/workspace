import { Grid, makeStyles, Theme, createStyles } from '@material-ui/core';
import { FC, useState, useContext } from 'react';
import { PageContext } from '../..';
import { Img } from './Img';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    thumbnail: {
      width: theme.spacing(10),
    },
    selectedImage: {
      borderRadius: theme.shape.borderRadius,
      width: '100%',
      background: theme.palette.grey[200],
    },

    selectedThumbnail: {
      border: 'solid',
      borderSize: theme.spacing(1),
      borderColor: theme.palette.primary.light,
    },
  })
);

const MobileGallery: FC = () => {
  const classes = useStyles(0);
  const {
    state: { images },
  } = useContext(PageContext);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  console.log('currentIndex', selectedIndex)

  return (
    <Grid container direction="column" spacing={1}>
      <Grid item container>
        <Img
          lowSrc={images[selectedIndex].lowSrc}
          srcSet={images[selectedIndex].srcSet}
          ratio={images[selectedIndex].ratio}
          alt={images[selectedIndex].alt}
        />
      </Grid>
      <Grid item container spacing={1}>
        {images.map(({ lowSrc, srcSet, ratio, alt }, index) => (
          <Grid
            className={
              classes.thumbnail +
              (selectedIndex === index ? ' ' + classes.selectedThumbnail : '')
            }
            item
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              console.log('index', index);
              console.log('selectedIndex', selectedIndex);
            }}
          >
            <Img lowSrc={lowSrc} srcSet={srcSet} ratio={ratio} alt={alt} />

            {/* <img
              className={
                classes.thumbnail +
                (selectedIndex === index ? ' ' + classes.selectedThumbnail : '')
              }
              src={src}
              alt={alt}
              onClick={() => setSelectedIndex(index)}
            /> */}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export { MobileGallery };
