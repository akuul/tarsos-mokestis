import * as React from 'react';

import Inputs from '@/components/Inputs/Inputs';
import Results from '@/components/Results';
import Seo from '@/components/Seo';
import QuestionInfo from '@/components/Util/QuestionInfo';

export default function HomePage() {
  return (
    <>
      <div className='-z-10 absolute bg-gradient-to-tr from-[#f25b3e] h-screen inset-0 to-[#f24362]' />
      <h1 className='mt-40 text-3xl text-center text-gray-50'>
        Automobilio taršos mokesčio skaičiuoklė
      </h1>

      <Seo templateTitle='Automobilio taršos mokesčio skaičiuoklė' />

      <main className='bg-[#1a1a1a] mt-6 mx-auto px-8 py-10 relative rounded-xl shadow-[#f24362] shadow-lg w-1/4 z-10'>
        <QuestionInfo />
        <Inputs />
        <Results />
      </main>
    </>
  );
}
