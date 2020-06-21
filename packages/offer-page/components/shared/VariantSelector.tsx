import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { PageContext } from '../../PageContext';
import { Img } from './Img';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gridColumnGap: theme.spacing(1 / 2),
    },
    link: {
      border: 'solid',
      borderWidth: theme.spacing(1 / 4),
      borderColor: theme.palette.primary.light,
    },
  })
);

const VariantSelector: React.FC<{ className: string }> = ({ className }) => {
  const classes = useStyles();
  const {
    state: { variants },
  } = React.useContext(PageContext);

  const router = useRouter();
  const {
    id: { 0: slug },
  } = router.query;

  return (
    <div className={classes.root + (className ? ' ' + className : '')}>
      {variants.map(({ id, image: { lowSrc, srcSet, ratio, alt } }, index) => (
        <Link key={index} href="/offer/[...slug]" as={`/offer/${id}`}>
          <a className={id === slug ? classes.link : ''}>
            <Img lowSrc={lowSrc} srcSet={srcSet} ratio={ratio} alt={alt} />
          </a>
        </Link>
      ))}
    </div>
  );
};

export { VariantSelector };
