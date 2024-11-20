import React from 'react';
import { FlipbookContainer } from './FlipbookContainer';
import { BrandGuidelinesFlipbook } from './BrandGuidelinesFlipbook';

function App() {
  return (
    <div>
      {/* Other components */}
      <FlipbookContainer>
        <BrandGuidelinesFlipbook />
      </FlipbookContainer>
      {/* Other components */}
    </div>
  );
}

export default App;