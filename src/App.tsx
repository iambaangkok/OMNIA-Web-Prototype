import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './App.css';

function App() {

  const [itemPictureURL, setItemPictureURL] = useState<string>()

  useEffect(() => {
    fetchItem();
  }, [])

  const fetchItem = async () => {
    const currentTimeSeconds = Date.now()/1000
    const resp = await axios.get(`https://picsum.photos/seed/omnia${currentTimeSeconds}/1920/1080`, { responseType: "blob" })
    //console.log(resp)
    const url = URL.createObjectURL(resp.data)

    setItemPictureURL(url)

  }
  return (
    <div>
      <div
      className='w-full h-full color-white bg-black'
      style={{
        padding:"5%",
        backgroundImage: `url(${itemPictureURL})`,
      }}>
      </div>
    </div>
  );
}

export default App;
