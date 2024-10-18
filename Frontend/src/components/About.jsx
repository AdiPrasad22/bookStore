import React from 'react';

const AboutUs = () => {
    
        const backgroundImageStyle = {
          backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/07/08/09/49/sky-2483934_960_720.jpg)',
          backgroundSize: 'cover',  // Ensures the image covers the whole div
          backgroundPosition: 'center',  // Centers the background image
          height: '100vh',  // Full viewport height
          width: '100%',
        };
  return (
    <div style={backgroundImageStyle} className="min-h-screen bg-white py-10 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-700 mb-6">About Us</h2>
        <p className="text-gray-600 text-lg mb-4">
          Welcome to <span className="font-semibold">Bookstore</span>, your number one destination for books of all genres and categories. We’re dedicated to giving you the best reading experience, with a focus on reliability, customer service, and a wide range of book collections.
        </p>
        <p className="text-gray-600 mb-4">
          Founded with a passion for literature, <span className="font-semibold">Bookstore</span> has come a long way from its beginnings as a small online store. We now serve readers all over the world, and are thrilled to turn our passion for books into a growing business.
        </p>
        <p className="text-gray-600 mb-6">
          We hope you enjoy our collections as much as we enjoy offering them to you. If you have any questions or comments, please don’t hesitate to contact us.
        </p>
        <h3 className="text-2xl font-semibold text-cyan-600 mb-4">Our Mission</h3>
        <p className="text-gray-600 mb-4">
          Our mission is to provide book lovers with easy access to a vast range of books, spanning different genres and categories, while ensuring top-notch customer service.
        </p>
        {/* <img
          src="https://cdn.pixabay.com/photo/2017/07/08/09/49/sky-2483934_960_720.jpg" 
          alt="Books" 
          className="w-full rounded-md mt-6"
        /> */}
      </div>
    </div>
  );
};

export default AboutUs;
