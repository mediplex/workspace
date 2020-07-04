import React from 'react';
import {
  makeStyles,
  createStyles,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Theme,
  Typography,
} from '@material-ui/core';
import { PageContext } from '../PageContext';
import { ExpandMore } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,
    },
  })
);

const Description: React.FC<{ className: string }> = ({ className }) => {
  const classes = useStyles();
  const {
    state: { description },
  } = React.useContext(PageContext);

  return (
    <ExpansionPanel className={classes.root + (className ? ' ' + className : '')} elevation={0}>
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <Typography variant="h4">Description</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export { Description };
