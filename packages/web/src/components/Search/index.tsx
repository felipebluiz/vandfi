import React from 'react'
import { useForm } from 'react-hook-form'
import { FaSearch, FaTimes } from 'react-icons/fa'

import { Container } from './styles'

interface FormValues {
  searchValue: string
}

const Search: React.FC = () => {
  const { register, watch, resetField, handleSubmit } = useForm()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const clearSearchInput = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()

    resetField('searchValue')
  }

  return (
    <Container className="search-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <FaSearch className="fa fa-search" />
          <input
            {...register('searchValue')}
            type="text"
            placeholder="Search items, collections or creators"
          />
          {watch('searchValue') && (
            <button type="button" onClick={clearSearchInput}>
              <FaTimes className="fa fa-times" />
            </button>
          )}
        </label>
      </form>
    </Container>
  )
}

export { Search }
