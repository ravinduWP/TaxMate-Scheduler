import { AppBar, Box,Button,Chip,FormControl,Grid,MenuItem,MenuList,TextField,Toolbar, Typography} from '@mui/material';
import React, { useState } from 'react';
import Footer from '../../common/Footer/Footer';
import { DateCalendar, LocalizationProvider} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Link } from 'react-router-dom';



const options = [
'Individual tax returns - 30 min',
'Individual tax returns + Rental property - 45 min',
'Trust/Partnership simple - 45 min',
'Company simple - 45 min',
'Business registration (Trust/Company/partnership) - 30 min',
'BAS/Bookkeeping - 30min',
'Other - 30 min',
];

const boxStyles = {
  width: 800,
  height: 'auto',
  mx: 'auto',
  mt: 1,
  p: 3,
  textAlign: 'center',
  borderRadius: 2,
  bgcolor: '#FFFFFF',
};

const time = "12.00";


const EventForm = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const handleMenuItemClick = ( index) => {
    setSelectedIndex(index);
  };
  const [selectedChip, setSelectedChip] = useState(null);

  const handleClick = (index) => {
    setSelectedChip(index);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };
  
  console.log(selectedIndex);
  return (
    <><form onSubmit={handleSubmit}>
    
   <div style={{ backgroundColor: '#FAF9F6'}}>
     <AppBar position="static" variant='elevation' style={{backgroundColor:'#FFFFFF'}}>
        <Toolbar>
          <Link to='/' style={{width:'260px', height:'130px', margin:'auto' }}>
          <img src='assets/img/logo/logo.png' alt='logo' />
          </Link>
        </Toolbar>
      </AppBar>
      
      <Box {...boxStyles}> 
      <Typography align='center' variant='h6'>Select Service</Typography>     
      <MenuList sx={{  p: 2,width:'500px',margin:'auto'}} >
      {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick( index)}
            sx={{p: 2}}
            
          >
            {option}
          </MenuItem>
        ))}
      </MenuList>
      </Box>
      <Box {...boxStyles}>
      <Typography align='center' variant='h6' mb={2}>Select Date and Time</Typography>
      <Grid container>
        <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar disablePast/>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={6}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {Array.from(Array(16)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Chip label={time} onClick={() => handleClick(index)}
                  sx={{width: '200px',
                    backgroundColor: selectedChip === index ? "#9AC5F4" : "default",
                    '&:hover': {
                      backgroundColor: selectedChip === index ? '#9AC5F4' : '#9AC5F4',
                      cursor: 'pointer',
                    },
                  }}/>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
      </Box>
      <Box {...boxStyles} mb={2}>
                  <Typography variant='h6'mb={1}>Add your details</Typography>
        <Grid container>
                    
          <Grid item xs={5}>
            
                <TextField
                  size='small'
                  required
                  type='text'
                  id="name"
                  label="Name"
                  sx={{mt:2}}
                  
                  />
                <TextField
                  size='small'
                  required
                  type='email'
                  id="mail"
                  label="Email"
                  sx={{mt:2}}
                  />
                <TextField
                  size='small'
                  required
                  type='text'
                  id="contact"
                  label="Contact"
                  sx={{mt:2}}
                  />
          </Grid>
          <Grid item xs={7} sx={{display:'flow'}}>
             
              <TextField
                id="outlined-multiline-static"
                label="Special Requests"
                multiline
                rows={3}
                sx={{mt:2,width: '350px'}}
                
              />
              <Button type='submit' size='medium' variant='contained' sx={{width:'150px',mt:'10px'}}>BOOK</Button>
          </Grid>
          
        </Grid>
        
      </Box>
      <Footer/>
   </div>
   </form></>
  );
};

export default EventForm;
