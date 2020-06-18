import { makeStyles, createStyles, Theme } from '@material-ui/core';
import React from 'react';
import { PageContext } from '../..';
import { Img } from './Img';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridGap: theme.spacing(1),
      '&>*': {
        borderRadius: theme.shape.borderRadius,
      },
    },
  })
);

export const Gallery: React.FC<{ className: string }> = ({ className }) => {
  const classes = useStyles();

  const {
    state: { images },
  } = React.useContext(PageContext);

  return (
    <div className={classes.root + (className ? ' ' + className : '')}>
      {images.map(({ lowSrc, srcSet, ratio, alt }, index) => (
        <Img
          key={index}
          lowSrc={lowSrc}
          srcSet={srcSet}
          ratio={ratio}
          alt={alt}
        />
      ))}
    </div>
  );
};
