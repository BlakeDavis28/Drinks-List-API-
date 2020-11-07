import React from 'react'

export default function Beer({ item }) {
    console.log(item)
    return (
        <div>
            <li><strong>Beer Name: {item.nameDisplay}</strong></li>
            
            <li>Description: {item.description }</li>
            
            <li>Organic? {item.isOrganic}</li>

            <li>Retired: {item.isRetired}</li>

            <li>Beer Name: {item.nameDisplay}</li>
        </div>
    )
}
