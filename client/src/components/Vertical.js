import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import ORG from '../assets/orga.png'
import Box from '@mui/material/Box';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
  } from "@material-tailwind/react";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const VerticalTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleShowAll = () => {
    setValue(0); // Set the tab index to 0 to show the first tab (All Products)
  };
  return (
    <div className="flex flex-col md:flex-row md:justify-between">
      
      <div className='sm:hidden'>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        sx={{ maxWidth: { xs: 340, sm: 500 }, bgcolor: 'background.paper' }}
        
      >
          <Button
        variant="contained"
        color="primary"
        onClick={handleShowAll}
        style={{ margin: '16px' }}
      >
        All
      </Button>
        <Tab label="Organizers" />
        <Tab label="Dinner Sets" />
        <Tab label="Cooking Pots" />
        <Tab label="Tea Sets" />
        <Tab label="Dish Racks" />
        <Tab label="Home Decor" />
        <Tab label="Beddings" />
      </Tabs>
      </div>
      

      <div className="hidden md:flex md:w-64 md:bg-background-default md:p-2 justify-start">
          <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 2, borderColor: 'divider' }}
      > 
       <Button
        variant="contained"
        color="primary"
        onClick={handleShowAll}
        style={{ margin: '16px' }}
      >
        All
      </Button>

        <Tab label="Organizers" {...a11yProps(1)} />
        <Tab label="Dinner Sets" {...a11yProps(2)} />
        <Tab label="Cooking Pots" {...a11yProps(3)} />
        <Tab label="Tea Sets" {...a11yProps(4)} />
        <Tab label="Dish Racks" {...a11yProps(5)} />
        <Tab label="Home Decor" {...a11yProps(6)} />
        <Tab label="Beddings" {...a11yProps(7)} />
      </Tabs>
          </div>

          <div className="flex-1 overflow-auto p-2 w-full">
      <TabPanel value={value} index={1} >      
        <Card className="w-64 h-[100%]">
      <CardHeader shadow={false} floated={false} className="h-48 mt-4 border border-[#131921]">
        <img
          src={ORG}
          alt="product"
          className="h-full w-full object-fit"
        />
      </CardHeader>
      <CardBody className='mt-2'>
        <div className="grid gap-3">
          <Typography className="text-sm font-bold">
            Clothes Organizers
          </Typography>
          <Typography color="blue-gray" className="text-sm font-medium">
            Kshs.1500
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-[#232f3e] text-white hover:bg-[#febd69] hover:text-[#232f3e] shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
    
      </TabPanel>
      <TabPanel value={value} index={2}>
      \ <Card className="w-64 h-[100%]">
      <CardHeader shadow={false} floated={false} className="h-48 mt-4 border border-[#131921]">
        <img
          src={ORG}
          alt="product"
          className="h-full w-full object-fit"
        />
      </CardHeader>
      <CardBody className='mt-2'>
        <div className="grid gap-3">
          <Typography className="text-sm font-bold">
            Clothes Organizers
          </Typography>
          <Typography color="blue-gray" className="text-sm font-medium">
            Kshs.1600
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-[#232f3e] text-white hover:bg-[#febd69] hover:text-[#232f3e] shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Card className="w-64 h-[100%]">
      <CardHeader shadow={false} floated={false} className="h-48 mt-4 border border-[#131921]">
        <img
          src={ORG}
          alt="product"
          className="h-full w-full object-fit"
        />
      </CardHeader>
      <CardBody className='mt-2'>
        <div className="grid gap-3">
          <Typography className="text-sm font-bold">
            Clothes Organizers
          </Typography>
          <Typography color="blue-gray" className="text-sm font-medium">
            Kshs.1700
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-[#232f3e] text-white hover:bg-[#febd69] hover:text-[#232f3e] shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Card className="w-64 h-[100%]">
      <CardHeader shadow={false} floated={false} className="h-48 mt-4 border border-[#131921]">
        <img
          src={ORG}
          alt="product"
          className="h-full w-full object-fit"
        />
      </CardHeader>
      <CardBody className='mt-2'>
        <div className="grid gap-3">
          <Typography className="text-sm font-bold">
            Clothes Organizers
          </Typography>
          <Typography color="blue-gray" className="text-sm font-medium">
            Kshs.1800
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-[#232f3e] text-white hover:bg-[#febd69] hover:text-[#232f3e] shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Card className="w-64 h-[100%]">
      <CardHeader shadow={false} floated={false} className="h-48 mt-4 border border-[#131921]">
        <img
          src={ORG}
          alt="product"
          className="h-full w-full object-fit"
        />
      </CardHeader>
      <CardBody className='mt-2'>
        <div className="grid gap-3">
          <Typography className="text-sm font-bold">
            Clothes Organizers
          </Typography>
          <Typography color="blue-gray" className="text-sm font-medium">
            Kshs.1900
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-[#232f3e] text-white hover:bg-[#febd69] hover:text-[#232f3e] shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <Card className="w-64 h-[100%]">
      <CardHeader shadow={false} floated={false} className="h-48 mt-4 border border-[#131921]">
        <img
          src={ORG}
          alt="product"
          className="h-full w-full object-fit"
        />
      </CardHeader>
      <CardBody className='mt-2'>
        <div className="grid gap-3">
          <Typography className="text-sm font-bold">
            Clothes Organizers
          </Typography>
          <Typography color="blue-gray" className="text-sm font-medium">
            Kshs.2000
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-[#232f3e] text-white hover:bg-[#febd69] hover:text-[#232f3e] shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <div className='flex flex-row flex-wrap items-center gap-5'>
      <Card className="w-64 h-[100%]">
      <CardHeader shadow={false} floated={false} className="h-48 mt-4 border border-[#131921]">
        <img
          src={ORG}
          alt="product"
          className="h-full w-full object-fit"
        />
      </CardHeader>
      <CardBody className='mt-2'>
        <div className="grid gap-3">
          <Typography className="text-sm font-bold">
            Clothes Organizers
          </Typography>
          <Typography color="blue-gray" className="text-sm font-medium">
            Kshs.2100
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-[#232f3e] text-white hover:bg-[#febd69] hover:text-[#232f3e] shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
    <Card className="w-64 h-[100%]">
      <CardHeader shadow={false} floated={false} className="h-48 mt-4 border border-[#131921]">
        <img
          src={ORG}
          alt="product"
          className="h-full w-full object-fit"
        />
      </CardHeader>
      <CardBody className='mt-2'>
        <div className="grid gap-3">
          <Typography className="text-sm font-bold">
            Clothes Organizers
          </Typography>
          <Typography color="blue-gray" className="text-sm font-medium">
            Kshs.1500
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-[#232f3e] text-white hover:bg-[#febd69] hover:text-[#232f3e] shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
    <Card className="w-64 h-[100%]">
      <CardHeader shadow={false} floated={false} className="h-48 mt-4 border border-[#131921]">
        <img
          src={ORG}
          alt="product"
          className="h-full w-full object-fit"
        />
      </CardHeader>
      <CardBody className='mt-2'>
        <div className="grid gap-3">
          <Typography className="text-sm font-bold">
            Clothes Organizers
          </Typography>
          <Typography color="blue-gray" className="text-sm font-medium">
            Kshs.1500
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-[#232f3e] text-white hover:bg-[#febd69] hover:text-[#232f3e] shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
    <Card className="w-64 h-[100%]">
      <CardHeader shadow={false} floated={false} className="h-48 mt-4 border border-[#131921]">
        <img
          src={ORG}
          alt="product"
          className="h-full w-full object-fit"
        />
      </CardHeader>
      <CardBody className='mt-2'>
        <div className="grid gap-3">
          <Typography className="text-sm font-bold">
            Clothes Organizers
          </Typography>
          <Typography color="blue-gray" className="text-sm font-medium">
            Kshs.1500
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-[#232f3e] text-white hover:bg-[#febd69] hover:text-[#232f3e] shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
    <Card className="w-64 h-[100%]">
      <CardHeader shadow={false} floated={false} className="h-48 mt-4 border border-[#131921]">
        <img
          src={ORG}
          alt="product"
          className="h-full w-full object-fit"
        />
      </CardHeader>
      <CardBody className='mt-2'>
        <div className="grid gap-3">
          <Typography className="text-sm font-bold">
            Clothes Organizers
          </Typography>
          <Typography color="blue-gray" className="text-sm font-medium">
            Kshs.1500
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-[#232f3e] text-white hover:bg-[#febd69] hover:text-[#232f3e] shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
    </div>
      </TabPanel>
      </div>
    </div>
  );
}

export default VerticalTabs;
