import React from 'react';
import { IconButton } from '@mui/material';
// import { MouseEventHandler } from 'react';
import { ReactNode } from 'react';

interface props{
  children: ReactNode;
  disabled:boolean,
  onClick: ()=>void,
  icon?: any,
}

function IconButtons(props:props) {
  return(
  <IconButton color="primary" disabled={props.disabled} onClick={props.onClick}>
    {props.children}
  </IconButton>);
}

export default IconButtons;