import  { useReducer, useEffect } from 'react'
// individual KEY : b4fc0639b9093553c11a95a7d0641dbf
// development URL: https://sandbox-api.brewerydb.com/v2/'

// http://api.brewerydb.com/v2/beers/?key=b4fc0639b9093553c11a95a7d0641dbf <- breweries only 
// http://api.brewerydb.com/v2/data/?key=b4fc0639b9093553c11a95a7d0641dbf <- data only 

import axios from 'axios'

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error',
}
// way around CORS issue - https://cors-anywhere.herokuapp.com/ 
const BASE_URL = 'https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beers/?key=b4fc0639b9093553c11a95a7d0641dbf'

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, results: []}
        case ACTIONS.GET_DATA: 
            return { ...state, loading: false, results: action.payload.results }
        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error, results: [] }
        default: 
        return state
    }
}
export default function useFetchBeerData(params, page) {
    const [state, dispatch] = useReducer(reducer, { results: [], loading: true })

    useEffect(() => {
        const cancelToken = axios.CancelToken.source()
        dispatch({ type: ACTIONS.MAKE_REQUEST })
        axios.get(BASE_URL, {
            cancelToken: cancelToken.token,
            params: { page: page, ...params}
        }).then(res => {
            dispatch({ type: ACTIONS.GET_DATA, payload: { results: res.data }})
        }).catch(e => {
            if (axios.isCancel(e)) return
            dispatch({ type: ACTIONS.GET_ERROR, payload: { error: e }})
        })
        return () => {
            cancelToken.cancel()
        }
    }, [params, page])

    return state 
}
