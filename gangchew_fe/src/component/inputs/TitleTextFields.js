import React, { useState } from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


export default function TitleTextFields({size, text, handleInputChange}) { 

  const [childInputValue, setChildInputValue] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    // setChildInputValue(newValue);
    
    // 입력 값이 변경될 때 콜백 함수 호출하여 부모 컴포넌트로 전달
    handleInputChange(newValue);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: size +'ch' }
      }}
      noValidate
      autoComplete="off"
      
    >
      <TextField color="secondary" id="outlined-basic" label={text} variant="outlined" value={childInputValue} onChange={handleChange}/>
    </Box>
  );
}