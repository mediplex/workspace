import React from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
  IconButton,
} from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import SwipeableViews from 'react-swipeable-views';
import { PageContext } from '../../PageContext';
import { Img } from './Img';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr auto',
      gridRowGap: theme.spacing(1),
    },
    swipeableViews: {
      gridRow: '1/2',
      gridColumn: '1/2',
      borderRadius: theme.shape.borderRadius,
    },
    controls: {
      gridColumn: '1/2',
      gridRow: '1/2',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    control: {
      margin: theme.spacing(1),
      // backgroundColor: theme.palette.grey[400],
      // color: theme.palette.getContrastText(theme.palette.grey[400]),
    },
    stepper: {
      gridRow: '2/3',
      display: 'flex',
      justifyContent: 'center',
      // padding: theme.spacing(1),
    },
    dot: {
      padding: theme.spacing(0.5),
      margin: theme.spacing(0.25),
      backgroundColor: theme.palette.grey[400],
      borderRadius: '50%',
    },
    selectedDot: {
      backgroundColor: theme.palette.primary.light,
    },
  })
);

const MobileGallery: React.FC<{ className: string }> = ({ className }) => {
  const classes = useStyles();

  const {
    state: { images },
  } = React.useContext(PageContext);

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length - 1;
  const canStepNext = activeStep < maxSteps;
  const canStepBack = activeStep > 0;

  const handleNext = () => {
    if (canStepNext) setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (canStepBack) setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root + (className ? ' ' + className : '')}>
      <SwipeableViews
        className={classes.swipeableViews}
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map(({ lowSrc, srcSet, ratio, alt }, index) => (
          <div key={index}>
            <Img lowSrc={lowSrc} srcSet={srcSet} ratio={ratio} alt={alt} />
          </div>
        ))}
      </SwipeableViews>

      <div className={classes.controls}>
        <IconButton
          color="default"
          className={classes.control}
          onClick={handleBack}
          size="small"
          disabled={!canStepBack}
        >
          <ChevronLeft />
        </IconButton>
        <IconButton
          className={classes.control}
          onClick={handleNext}
          size="small"
          disabled={!canStepNext}
        >
          <ChevronRight />
        </IconButton>
      </div>

      <div className={classes.stepper}>
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => handleStepChange(index)}
            className={
              classes.dot +
              ' ' +
              (index === activeStep ? classes.selectedDot : '')
            }
          />
        ))}
      </div>
    </div>
  );
};

export { MobileGallery };
