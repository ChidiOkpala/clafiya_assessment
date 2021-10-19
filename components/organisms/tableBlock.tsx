import { FC } from 'react'

import { tableData } from '../../helpers/constant'
import { TableCard } from '../molecules/tableCard'

export const TableBlock: FC = () => (
  <div className="table-wrapper">
    <TableCard {...tableData} />

    <style jsx>{`
      .table-wrapper {
        margin-bottom: 60px;
      }
    `}</style>
  </div>
)
