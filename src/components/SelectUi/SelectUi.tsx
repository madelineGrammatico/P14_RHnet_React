// import * as React from 'react';
import { Controller, useForm } from "react-hook-form"

// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/NativeSelect';
import MenuItem from '@mui/material/MenuItem';

export function SelectUi({
        name,
        defaultValue,
        label
    } : { name: string, defaultValue : string, label: string}) {
    const { control } = useForm();
    console.log("hé")
    return (
      // <FormControl fullWidth>
      //    <Select
      //     id="trinity-select"
      //     // inputProps={{
      //     //   inputRef: (ref) => {
      //     //     if (!ref) return;
      //     //     register({
      //     //       name: {name},
      //     //       value: ref.value,
      //     //     });
      //     //   },
      //     // }}
      //     defaultValue={defaultValue}
      //     name={name}
      //     inputRef={register}
      //   >
      //      <MenuItem>Sales</MenuItem>
      //       <MenuItem>Marketing</MenuItem>
      //       <MenuItem>Engineering</MenuItem>
      //       <MenuItem>Human Resources</MenuItem>
      //       <MenuItem>Legal</MenuItem>
      //   </Select>
       
      // </FormControl>
      <Controller 
        render={(props) => {
          <Select {...props}>
            <MenuItem>Sales</MenuItem>
            <MenuItem>Marketing</MenuItem>
            <MenuItem>Engineering</MenuItem>
            <MenuItem>Human Resources</MenuItem>
          </Select>}} 
        name={name} 
        label={label} 
        control={control}
        defaultValue={defaultValue}
      />
  );
}