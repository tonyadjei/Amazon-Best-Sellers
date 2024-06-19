import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { books } from './books'
import Book from './Book'

const BookList = () => {
  return (
    <React.Fragment>
      <h1>amazon best sellers</h1>
      <section className='booklist'>
        {books.map((book, index) => {
          return <Book key={book.id} {...book} index={index} />
        })}
      </section>
    </React.Fragment>
  )
}

// get the root element
const rootElement = document.getElementById('root')

// create the react root instance (which is connected to the root element)
const root = createRoot(rootElement)

// render the root component
root.render(<BookList />)
