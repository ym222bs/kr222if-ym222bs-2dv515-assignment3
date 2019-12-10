import React, { useState, Fragment } from 'react'
import image from '../img/shmoogle_img.png'
import axios from 'axios'

const SearchQuery = () => {
    const [query, setQuery] = useState('')
    const [data, setData] = useState('')

    const chosenClusterCount = (e) => {
        setQuery(e.target.value)
    }

    const fetchData = async (e) => {
        e.preventDefault()
        try {
            // let query = 'hej'
            const response = await axios.get(`/content-based/${query}`)
            console.log(response)
            // setData(response.data)
        } catch (err) {
            console.log(err)
        }
    }
    const pageReload = () => {
        window.location.reload()
    }

    const handleEnterKey = (e) => {
        if (e.key === 'Enter') {
            fetchData()
        }
    }
    return (
        <Fragment>
            <form className='form-group'>
                <img className='mb-3' src={image} onClick={pageReload} />
                <input type='text' className='form-control' onKeyPress={handleEnterKey} />
                <button className='btn btn-primary p-2 mt-2' type='submit' onClick={chosenClusterCount}> Shmoogle</button>
            </form>
            <h2>Basic Table</h2>
            <p>Bla</p>            
                    { data && 
                        data.map(e => {
                                e.map((item, i) => {
                            // <table className='table'>
                            //     <thead>
                            //     <tr>
                            //         <th>Link</th>
                            //         <th>Score</th>
                            //         <th>Content</th>
                            //     </tr>
                            //     </thead>
                            //     <tbody key={`${item} ${i}`}>
                            //     <tr>
                            //         <td>{item}</td>
                            //     </tr>
                            //     </tbody>
                            // </table>
                            })
                        })
                    }
        </Fragment>
    )
}

export default SearchQuery