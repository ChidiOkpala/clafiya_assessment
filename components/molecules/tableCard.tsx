import { FC } from 'react'

import { Card } from '../atoms/card'
import { Table, TableProps } from './table'

export interface TableCardProps {
  title: string
  table: TableProps
}

export const TableCard: FC<TableCardProps> = ({
  title,
  table
}) => {
  return (
    <Card noPadding>
      <div className="table-card-wrapper">
        <div className="title">{title}</div>
        <Table {...table} />
      </div>

      <style jsx>{`
        .table-card-wrapper {
          width: 100%;
        }

        .table-card-wrapper .title {
          font-family: 'Lato', sans-serif;
          font-weight: bold;
          font-size: 20px;
          line-height: 26px;
          letter-spacing: 0.2px;
          color: #25282B;
          padding: 24px 24px 18px;
        }
      `}</style>
    </Card>
  )
}