"use client"
import React, { useEffect, useState } from 'react'

export const Movie = () => {

const [data, setData] = useState(null);
const [loading, setLoading] = useState(false)
const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '6de3f32d6dmsh36760cb9edfe55ep181fcejsnede38b997927',
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

    useEffect(()=>{

    (async()=> {
		setLoading(true);
		const response = await fetch(url, options);
		const result = await response.json();
		setLoading(false);
		setData(result);
        })()

    },[])


  return ({data, setData,loading} )
}
