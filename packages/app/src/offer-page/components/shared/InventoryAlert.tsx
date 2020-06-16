import {} from '@material-ui/core'
import { useContext, FC } from 'react'
import { PageContext } from '../../PageContext'
import { Alert } from '@material-ui/lab'

export const InventoryAlert: FC = () => {
  const {
    state: {
      inventory: { lowInventoryAlert },
    },
  } = useContext(PageContext)

  return lowInventoryAlert ? (
    <Alert severity="warning">Low inventory! Order soon.</Alert>
  ) : null
}
