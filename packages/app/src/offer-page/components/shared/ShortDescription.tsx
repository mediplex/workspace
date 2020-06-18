import { Typography } from '@material-ui/core';
import { useContext, FC } from 'react';
import { PageContext } from '../../PageContext';

export const ShortDescription: React.FC<{ className: string }> = ({
  className,
}) => {
  const {
    state: { shortDescription },
  } = useContext(PageContext);
  return (
    <div className={className}>
      <Typography paragraph>{shortDescription}</Typography>
    </div>
  );
};
