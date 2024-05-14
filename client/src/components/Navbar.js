import React, { useState, useEffect } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Badge from '@mui/material/Badge';
import {
  Collapse,
  Typography,
  Button,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";



function Nav () {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-white">
       
      <Typography
        as="li"
        variant="h6"
        className="flex items-center gap-x-2 p-1 font-bold"
      >
        <Badge badgeContent={4} color="error">
     <FaShoppingBag/>
     </Badge>
 
        <Link to="/cart" className="flex items-center font-bold">
          Cart
        </Link>
      </Typography>
     
      <Typography
        as="li"
        variant="h6"
        className="flex items-center gap-x-2 p-1 font-bold"
      >
     <MdAccountCircle />
 
        <Link to="/contacts" className="flex items-center font-bold">
          My Account
        </Link>
      </Typography>

    </ul>
  );
 
  return (
    <div  className="mx-auto w-[100%] px-4 py-2 lg:px-8 lg:py-4 bg-[#232f3e]">
      <div className="container mx-auto flex flex-wrap items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-bold text-white"
        >
          Blessed Homes <br/> Accessories
        </Typography>
        <div className="hidden items-center gap-x-2 lg:flex">
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              placeholder="Search"
              containerProps={{
                className: "min-w-[288px]",
              }}
              className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300 w-full"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div className="!absolute left-3 top-[13px] text-white">
            <FaSearch />
            </div>
          </div>
          <Button size="md" className="rounded-lg bg-[#131921]">
            Search
          </Button>
        </div>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-6 lg:hidden">
        <IconButton className="lg:hidden h-7 w-7 text-white bg-inherit"      
          ripple={false}
          onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
               <FaSearch className="text-xl"/>
          ) : (
            <FaSearch className="text-xl"/>
          )}
         </IconButton>
        <IconButton className="lg:hidden h-7 w-7 text-white bg-inherit"> <Badge badgeContent={4} color="error"><FaShoppingBag className="text-xl"/></Badge></IconButton>
        <IconButton className="lg:hidden h-7 w-7 text-white bg-inherit"><MdAccountCircle className="text-xl"/></IconButton>
     </div>
        
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          <div className="flex flex-col gap-x-2 sm:flex-row sm:items-center">
            <div className="relative w-full gap-2 md:w-max">
              <Input
                type="search"
                placeholder="Search"
                containerProps={{
                  className: "min-w-[288px]",
                }}
                className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <div className="!absolute left-3 top-[13px]">
                <FaSearch/>
              </div>
            </div>
            <Button size="md" className="mt-1 rounded-lg sm:mt-0 bg-[#131921]">
              Search
            </Button>
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default Nav