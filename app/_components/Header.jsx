
import { Button } from '@/components/ui/button';
import { LayoutGrid, Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image';
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 shadow-md flex justify-between'>
      
      <div className='flex items-center gap-8'>
          <Image src='/logo.png' alt='logo' width={150} height={100} />
        <div>
          <h2 className='hidden md:flex gap-2 items-center
           border rounded-full p-2 px-10 bg-slate-200
          '>
            <LayoutGrid className='h-5 w-5' /> category
          </h2>
          
        </div>

        <div className='md:flex gap-3 items-center border rounded-full p-2 px-5 hidden'>
          <Search />
          <input type='text' placeholder='Search' className='outline-none' />
        </div>

      </div>

      <div className='flex gap-5 items-center'>
        <h2 className='flex gap-2 items-center text-lg'> <ShoppingBag/> 0</h2>
        <Button>Login</Button>
      </div>

    </div>
  );
};
export default Header