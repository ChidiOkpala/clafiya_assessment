import { FC } from 'react'
import Image from 'next/image'

export type CellData =
  string | { name: string, image: string }

interface TableCellDataProps {
  cellData: CellData
}

export const TableCell: FC<TableCellDataProps> = ({
  cellData
}) => (
  <>
    {typeof cellData === 'object'
      ? <div className="name-cell-wrapper">
        <Image
          src={cellData['image']}
          width={32}
          height={32}
          layout="fixed"
        />
        <div>{cellData['name']}</div>
      </div>
      : cellData
    }

    <style jsx>{`
      .name-cell-wrapper {
        display: flex;
        align-items: center;
      }

      .name-cell-wrapper div {
        margin-left: 12px;
      }
    `}</style>
  </>
)
