import * as React from 'react';

import Inputs from '@/components/Inputs/Inputs';
import Results from '@/components/Results';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <div className='bg-gray-50 h-screen'>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <Inputs />
      <Results />
    </div>
  );
}
