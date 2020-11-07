import { getSuggestedQuery } from '@testing-library/react'
import React, {useState} from 'react'

export default function Search({ getQuery }) {
    const [text, setText] = useState('')

    const onChange = (value) => {
        setText(value)
        getQuery(value)
    }

    return (
        <div>
            <form>
                <input 
                type="text" 
                placeholder="what's your flavour?" 
                value={text}
                onChange={(event) => onChange(event.target.value)}
                />
            </form>
        </div>
    )
}
