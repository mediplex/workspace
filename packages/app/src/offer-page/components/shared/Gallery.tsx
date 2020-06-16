import {
  makeStyles,
  createStyles,
  GridList,
  GridListTile,
} from '@material-ui/core';
import { FC, useContext } from 'react';
import { PageContext } from '../..';
import { Img } from './Img';

export const useStyles = makeStyles(() =>
  createStyles({
    thumbnail: {
      width: '100%',
      borderRadius: 6,
    },
  })
);

export const Gallery: FC = () => {
  const {
    state: { images },
  } = useContext(PageContext);

  return (
    <GridList cellHeight={'auto'} cols={2} spacing={8}>
      {images.map(({ lowSrc, srcSet, ratio, alt }, index) => (
        <GridListTile key={index}>
          <Img lowSrc={lowSrc} srcSet={srcSet} ratio={ratio} alt={alt} />
        </GridListTile>
      ))}
    </GridList>
  );
};
