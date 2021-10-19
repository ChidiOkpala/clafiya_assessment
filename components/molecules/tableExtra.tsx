import { FC } from 'react'

import { DeleteIcon } from '../atoms/svg/deleteIcon'
import { EditIcon } from '../atoms/svg/editIcon'

export const TableExtra: FC = () => (
  <>
    <div className="edit-wrapper">
      <EditIcon />
    </div>
    <div className="delete-wrapper">
      <DeleteIcon />
    </div>

    <style>{`
      .edit-wrapper,
      .delete-wrapper {
        cursor: pointer;
      }

      .edit-wrapper {
        margin-right: 16.79px;
      }
    `}</style>
  </>
)