import { FC } from 'react'

import { CellData, TableCell } from '../atoms/tableCell'
import { TableExtra } from './tableExtra'

export interface TableProps {
  theadData: string[]
  tbodyData: {
    [key: string]: CellData
  }[]
}

export const Table: FC<TableProps> = ({
  theadData,
  tbodyData
}) => (
  <div style={{ overflowX: 'scroll' }}>
    <table>
      <tbody>
        <tr className="thead-row">
          {theadData.map(headData => (<th key={headData}>{headData}</th>))}
        </tr>
        {tbodyData.map((rowData, index) => (
          <tr key={index}>
            {Object.keys(rowData).map((cellData, index) => (
              <td key={index}>
                <TableCell cellData={rowData[cellData]} />
              </td>
            ))}
            <td className="extra">
              <TableExtra />
            </td>
          </tr>
        ))}
      </tbody>

      <style jsx>{`
        table, tbody {
          width: 100%;
        }

        table tr {
          display: flex;
          align-items: center;
          height: 56px;
          width: 100%;
          background: rgba(232, 232, 232, 0.2);
          padding: 18px 24px;
          border-bottom: 1px solid #dbdde0;
          min-width: 1000px;
        }

        table tr:not(.thead-row) {
          background-color: #ffffff;
          border-bottom: 1px solid #e8e8e8;
        }

        table tr:last-of-type {
          border-bottom: none;
        }

        table th {
          font-family: 'Lato', sans-serif;
          font-weight: bold;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.1px;
          color: #25282B;
        }

        table th:last-of-type {
          width: 50px;
          min-width: 50px;
        }

        th, td {
          text-align: left;
          width: 16.67%;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .extra {
          display: flex;
          justify-content: flex-end;
          width: 50px;
        }

        td {
          font-family: 'Lato', sans-serif;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.1px;
          color: #52575C;
        }
      `}</style>
    </table>
  </div>
)
