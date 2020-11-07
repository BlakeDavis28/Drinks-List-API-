import React from 'react'
import Beer from './Beer'

export default function BeerGrid({ items, isLoading }) {
    return isLoading ? <h1>Loading...</h1> : <section> 
        {items.map(item => (
            <Beer key={item.id} item={item}>{item.nameDisplay}</Beer>
        ))}
         </section>
}
