import React, { useState, Fragment } from 'react'
import image from '../img/shmoogle_img.png'
import axios from 'axios'

const SearchQuery = () => {
    const [data, setData] = useState(null)
    const [clusters, setClusters] = useState('')

    const chosenClusterCount = (e) => {
        setClusters(e.target.value)
    }

    const fetchData = async (e) => {
        e.preventDefault()
        try {
            let query = 'hej'
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
        <div className="form-group">
            <img src={image} onClick={pageReload} />
            <input type="text" className="form-control" id="usr" />


        {/* { data && 
            data.map(e => {
                
            })
        } */}
        </div>

    )
}

export default SearchQuery