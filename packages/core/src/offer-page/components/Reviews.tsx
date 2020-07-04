import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";

import { ExpandMore } from "@material-ui/icons";
import { ReviewsSummary } from "./ReviewsSummary";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,
    },
  })
);
export const Reviews: React.FC<{ className?: string }> = ({ className }) => {
  const classes = useStyles();

  return (
    <ExpansionPanel
      className={classes.root + (className ? " " + className : "")}
      elevation={0}
    >
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <ReviewsSummary />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          quia, accusamus provident voluptatem corporis quibusdam sit! Illum
          placeat, reiciendis quisquam quas fuga quod libero vitae alias
          assumenda cupiditate, beatae necessitatibus. Eum doloribus tempore
          inventore rerum, enim error in, iure ab temporibus, sapiente vitae
          repellendus omnis quas! Molestias quia eius minus exercitationem
          pariatur facilis, vero porro! Delectus dolores tempora velit
          repellendus. Minus quasi aliquid commodi, necessitatibus veritatis
          eius laudantium doloremque fugiat dolore ex animi veniam expedita
          eveniet architecto dolores nemo asperiores libero. Nostrum, optio sint
          sequi expedita inventore reiciendis. Sequi, maiores?
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
