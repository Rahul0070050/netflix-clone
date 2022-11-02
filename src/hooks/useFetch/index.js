import React, { useState } from 'react'

import dotenv from 'dotenv'
import axios from 'axios'

function useFetch() {
    dotenv.config()
    console.log(process.env.HI);
    // axios.create({
    //     baseURL: ''
    // })
    const [data, setData] = useState({})
    // axios.get
}

export default useFetch