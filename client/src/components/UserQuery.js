import React, { useState, Fragment } from 'react'
import image from '../img/shmoogle_img.png'
import axios from 'axios'

const SearchQuery = () => {
    const [query, setQuery] = useState('')
    const [data, setData] = useState('')

    const searchQueryValue = (e) => {
        setQuery(e.target.value)
    }

    const fetchData = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.get(`/content-based/${query}`)
            console.log(response)
            setData(response.data)
        } catch (err) {
            setQuery('')
            setData('')
            console.log(err)
        }
    }
    const pageReload = () => {
        window.location.reload()
    }

    const handleEnterKey = (e) => {
        if (e.key === 'Enter') {
            fetchData(e)
        }
    }
    return (
        <Fragment>
            <form className='form-group'>
                <img className='mb-3' src={image} onClick={pageReload} />
                <input type='text' className='form-control' onChange={searchQueryValue} onKeyPress={handleEnterKey} />
                <button className='btn btn-primary p-2 mt-2' type='submit' onClick={(e) => fetchData(e)}> Shmoogle</button>
            </form>
            { data ? <table className='table'>      
                        <thead className='thead-light'>
                            <tr>
                                <th scope='col'>Link</th>
                                <th scope='col'>Content</th>
                            </tr>
                        </thead>
                        { data.map((item, i) => (
                        <tbody key={`${i}`}>
                            <tr>
                                <th>{item[0]}</th>
                                <td>{item[1]}</td>
                            </tr>
                        </tbody>
                        ))}
                    </table>
                        : null }
        </Fragment>
    )
}

export default SearchQuery