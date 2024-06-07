import axios from 'axios';
import { useEffect, useState } from 'react';

export const useStore = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(4);
  const [type, setType] = useState('gif');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const callApi = async () => {
    try {
      setLoading(true);

      const options = {
        method: 'GET',
        url: `https://any-anime.p.rapidapi.com/v1/anime/${type}/${page}`,
        headers: {
          'X-RapidAPI-Key': '6de3f32d6dmsh36760cb9edfe55ep181fcejsnede38b997927',
          'X-RapidAPI-Host': 'any-anime.p.rapidapi.com'
        }
      };

      const response = await axios.request(options);
      console.log(response.data); // Check the structure of response data

      // Assuming response.data.images is the correct property name
      // if(response)
       setData(response.data.images);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    callApi();
  },[data,page]); // Include type and page in the dependency array

  return { search, setSearch, page, setPage, data, type, setType, loading };
};
