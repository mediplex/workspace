import React from 'react';
import { Alert } from '@material-ui/lab';

export const InventoryAlert: React.FC<{ className: string }> = ({ className }) => {


  return (
    <div className={className ? ' ' + className : ''}>
      <Alert severity="warning">
        Low inventory! Order soon.
      </Alert>
    </div>
  );
};
