import { Typography } from '@material-ui/core';
import { useContext, FC } from 'react';
import { PageContext } from '../../PageContext';




export const ShortDescription: FC = () => {
  const { state: { productView: { shortDescription }, }, } = useContext(PageContext);
  return <Typography paragraph>{shortDescription}</Typography>;
};
