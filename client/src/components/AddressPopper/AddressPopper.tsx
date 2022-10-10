import React, { MouseEvent, useState } from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { ShippingAddress } from '../../types';

type Props ={
shippingAddress: ShippingAddress
}

const AddressPopper: React.FC<Props> = ({shippingAddress: {name, addressLine1, addressLine2, city, postalCode, country}}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <p aria-describedby={id} onClick={handleClick} className="address-name">
        {name}
      </p>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{border: '1px solid rgb(225, 225, 225)', p: 1, bgcolor: 'background.paper', fontSize: 12 }} className="address-container">
          <p>{addressLine1}</p>
          <p>{addressLine2}</p>
          <p>{postalCode}, {city}</p>
          <p>{country}</p>
        </Box>
      </Popper>
    </div>
  );
}


export default AddressPopper