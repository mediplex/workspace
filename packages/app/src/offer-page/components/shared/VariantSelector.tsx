import { FC, useContext } from 'react'
import {
  Typography,
  Grid,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core'
import { PageContext } from '../../PageContext'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    variant: {
      borderColor: theme.palette.grey[200],
      border: '2px solid',
      height: theme.spacing(10),
      width: theme.spacing(10),
      borderRadius: theme.shape.borderRadius,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  })
)

const VariantSelector: FC = () => {
  const classes = useStyles()
  const {
    state: { variants },
  } = useContext(PageContext)

  return (
    <>
      {variants.map(({ name, options }, index) => (
        <div key={index}>
          <Typography variant="h4" color="textSecondary" gutterBottom>
            {name}
          </Typography>
          <Grid container spacing={1}>
            {options.map((option, index) => (
              <Grid item key={index}>
                <img
                  className={classes.variant}
                  src={option.imageSrc}
                  alt={option.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </>
  )
}

export { VariantSelector }
