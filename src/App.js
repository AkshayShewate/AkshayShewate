import React, { useState, useEffect } from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

function getRandomImage() {
  const imageUrl = [
    'https://res-4.cloudinary.com/demo/image/upload/sample.jpg',
    // Add more image URLs here
  ];
  const randomIndex = Math.floor(Math.random() * imageUrl.length);
  return imageUrl[randomIndex];
}

function App() {
  const [image, setImage] = useState('');

  useEffect(() => {
    const randomImage = getRandomImage();
    setImage(randomImage);
  }, []);
  

  return (
    <>
    <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>HQ Image Application</h1>
        {image && <img src={image} alt="Random" style={{ maxWidth: '100%', height: 'auto' }} />}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <FacebookShareButton url={image} style={{ backgroundColor: 'blue', padding:'10px', margin:'10px' }} >
              Share on Facebook
            </FacebookShareButton>
            <TwitterShareButton url={image}  style={{ backgroundColor: 'red', padding:'10px', margin:'10px' }} >
              Share on Twitter
            </TwitterShareButton>
            <WhatsappShareButton url={image}  style={{ backgroundColor: 'green', padding:'10px', margin:'10px' }}>
              Share on WhatsApp
            </WhatsappShareButton>
          </div>
        
      </div>
    </div>
    </>
  );
}

export default App;
