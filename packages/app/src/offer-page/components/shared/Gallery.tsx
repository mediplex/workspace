import {
  makeStyles,
  Theme,
  createStyles,
  GridList,
  GridListTile,
} from '@material-ui/core'
import { FC, useContext } from 'react'
import { PageContext } from '../..'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    thumbnail: {
      width: '100%',
      borderRadius: 6,
      // padding: theme.spacing(1),
    },
  })
)

export const Gallery: FC = () => {
  const classes = useStyles(0)
  const {
    state: {
      productView: { gallery },
    },
  } = useContext(PageContext)
  return (
    <GridList cellHeight={'auto'} cols={2} spacing={8}>
      {gallery.map(({ src, alt }, index) => (
        <GridListTile key={index}>
          <img className={classes.thumbnail} src={src} alt={alt} />
        </GridListTile>
      ))}
    </GridList>
  )
}
