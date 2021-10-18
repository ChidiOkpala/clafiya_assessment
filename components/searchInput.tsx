import { FC, useRef } from 'react'
import { SearchIcon } from './svg'

interface SearchInputProps {
  onSubmit: (value: string) => void
}

export const SearchInput: FC<SearchInputProps> = ({ onSubmit }) => {
  const inputRef = useRef<HTMLInputElement>()

  return (
    <form
      className="search-form-wrapper"
      onSubmit={() => onSubmit(inputRef.current.value)}
    >
      <div className="search-icon-wrapper">
        <SearchIcon />
      </div>
      <input
        type="search"
        ref={inputRef}
        className="search-input"
        placeholder="Search"
      />

      <style jsx>{`
        .search-form-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-icon-wrapper {
          position: absolute;
          left: 16px;
          width: 15px;
          height: 15px;
          z-index: 2;
        }

        .search-input {
          width: 350px;
          max-width: 100%;
          height: 40px;
          border-radius: 100px;
          border: none;
          outline: none;
          padding-left: 42px;
          background-color: #ffffff;
        }
      `}</style>
    </form>
  )
}
