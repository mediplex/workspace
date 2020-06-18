import {} from '@material-ui/core';
import { useContext, FC } from 'react';
import { PageContext } from '../../PageContext';
import { Alert } from '@material-ui/lab';

export const InventoryAlert: React.FC<{ className: string }> = ({
  className,
}) => {
  const {
    state: {
      inventory: { lowInventoryAlert },
    },
  } = useContext(PageContext);

  return lowInventoryAlert ? (
    <div className={(className ? ' ' + className : '')}>
      <Alert severity="warning">Low inventory! Order soon.</Alert>
    </div>
  ) : null;
};
