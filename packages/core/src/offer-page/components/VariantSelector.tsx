import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Typography, makeStyles, Theme, createStyles } from '@material-ui/core';
import { PageContext } from '../PageContext';
import { Img } from './shared';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto 1fr',
      gridTemplateAreas: `
        "title"
        "img-links"
      `,
    },
    title: {
      gridArea: 'title',
    },
    imgLinks: {
      gridArea: 'img-links',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      '&:first-child': {
        marginLeft: 0,
      },
      '& > a': {
        marginLeft: 2,
        marginRight: 2,
        border: 'none',
        width: theme.spacing(8),

        borderRadius: theme.shape.borderRadius,
        '& > *': {
          borderRadius: theme.shape.borderRadius,
        },
      },
      '&:last-child': {
        marginRight: 0,
      },
    },
    link: {
      border: 'solid !important',
      borderWidth: theme.spacing(1 / 6),
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
  const [pageId] = (router.query.path as string).split('/');

  return (
    <div className={classes.root + (className ? ' ' + className : '')}>
      <Typography className={classes.title} variant="h4">
        Express your style
      </Typography>
      <div className={classes.imgLinks}>
        {variants.map(({ id, image: { lowSrc, srcSet, ratio, alt } }, index) => (
          <Link key={index} href={`/${id}`}>
            <a className={id === pageId ? classes.link : ''}>
              <Img lowSrc={lowSrc} srcSet={srcSet} ratio={ratio} alt={alt} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export { VariantSelector };
