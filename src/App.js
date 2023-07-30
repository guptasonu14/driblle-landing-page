import React from 'react';

import HeroBanner from './component/HeroBanner'
import ContentSection from './component/ContentSection';
import Navbar from './component/Navbar'; 

const App = () => {
 

  return (
    
      <div>
        <Navbar />
        
        <HeroBanner />
        <ContentSection />
        
      </div>
   
  );
};

export default App;
