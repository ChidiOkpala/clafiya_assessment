import { FC, useRef } from 'react'
import { SearchIcon } from '../atoms/svg'

interface SearchInputProps {
  onSubmit: (value: string) => void
}

export const SearchInput: FC<SearchInputProps> = ({ onSubmit }) => {
  const inputRef = useRef<HTMLInputElement>()

  const handleSubmit = (event) => {
    event.preventDefault()

    if (inputRef.current.value) {
      onSubmit(inputRef.current.value)
    }
  }

  return (
    <form
      className="search-form-wrapper"
      onSubmit={handleSubmit}
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

        @media screen and (max-width: 550px) {
          .search-input {
            width: 200px;
          }
        }

        @media screen and (max-width: 390px) {
          .search-input {
            width: 150px;
          }
        }
      `}</style>
    </form>
  )
}
