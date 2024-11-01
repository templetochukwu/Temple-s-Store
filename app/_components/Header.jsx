"use client"
import { Button } from '@/components/ui/button';
import { CassetteTape, LayoutGrid, Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import GlobalApi from '../_utils/GlobalApi';


const Header = () => {

  const [categoryList,setCategoryList] = useState([]);

  useEffect(()=>{
    getCategoryList();
  },[])

  // Get Category List

  const getCategoryList=()=> {
    GlobalApi.getCategory().then(resp=>{
      setCategoryList(resp.data.data);
    })
  }

  return (

    <div className='p-5 shadow-md flex justify-between'>      
      <div className='flex items-center gap-8'>
          <Image src='/logo.png' alt='logo' width={150} height={150} sizes={150} />
            

            <DropdownMenu>
              <DropdownMenuTrigger asChild><h2 className='hidden md:flex gap-2 items-center
                border rounded-full p-2 px-10 bg-slate-200 cursor-pointer
                '>
                <LayoutGrid className='h-5 w-5' /> category </h2>
              </DropdownMenuTrigger>
              <DropdownMenuContent>


              

                <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
                <DropdownMenuSeparator />
                
                {categoryList.map((category,index)=>(

                   <DropdownMenuItem className="flex gap-4 items-center cursor-pointer">
                    <Image src={`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${category?.icon[0]?.url}`} unoptimized={true} width={27} height={27} alt='icon' />
                      <h2 className='text-lg'>{category?.name}</h2>
                   </DropdownMenuItem> 
                ))}


              </DropdownMenuContent>
            </DropdownMenu>


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