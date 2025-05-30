import { Autocomplete, Button, Paper, Stack, TextField, useTheme } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from "react";
import { SearchbarProps } from "../Types";

const Searchbar: React.FC<SearchbarProps> = ({onNewSearch, searchArray}) => {
    const theme = useTheme();
    const [value, setValue] = useState<string | null>("");
    const [inputValue, setInputValue] = useState<string>("");


  return (
    <Paper elevation={2}>
            <Stack
        bgcolor={theme.palette.background.paper}  
            direction="row" 
            sx={{ width: "100%", justifyContent:'space-between',
            border:1,
            borderColor: theme => theme.palette.secondary.main,
            borderRadius: "8px"
        }}>

        <Autocomplete
            sx={{flex:1, borderRadius:'8px 0 0 8px'}}
            id="searchbar-input"
            freeSolo
            value={value}
            inputValue={inputValue}
            onInputChange={(_, newInputVal) => {
              setInputValue(newInputVal)
            }}
            onChange={(_, newValue : string | null) => {
                setValue(newValue);
                setInputValue(newValue || "");
                onNewSearch?.(newValue);
            }}
            options={searchArray.map((option) => option.title)}
            renderInput={(params) => 
                <TextField 
                sx={{
                    border: "none", 
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        border: 'none', 
                      },
                      '&:hover fieldset': {
                        border: 'none', 
                      },
                      '&.Mui-focused fieldset': {
                        border: 'none',
                      },
                    },
                  }}
                color="secondary" {...params} placeholder="Search" />
            }
            />  
        
        <Button variant="contained" color="secondary" onClick={() => onNewSearch?.(inputValue)}
            sx={{flex:.25, borderRadius:"0 8px 8px 0"}}>
            <SearchIcon/>
        </Button>
    </Stack>
    </Paper>
  )
}

export default Searchbar