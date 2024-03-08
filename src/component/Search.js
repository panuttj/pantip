import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

function Search({ paddingIcon, paddingBox }) {
    const theme = useTheme();

    const Search = styled('div')(() => ({
        position: 'relative',
        borderRadius: '50px',
        border: '1px solid #A9A9A9',
        '&:hover': {
            backgroundColor: '#A9A9A9',
        },
        marginLeft: 0,
        width: '50%',
        display: 'flex',
        alignItems: 'center', // align SearchIcon vertically
        justifyContent: 'flex-end',
        margin: '10px',
        padding: paddingBox,
        transition: 'padding 1s'
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: '#000000',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
        },
    }));

    return (
        <Search>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIconWrapper>
                <SearchIcon sx={{
                    backgroundColor: theme.palette.primary.main, borderRadius: '50px', padding: paddingIcon,
                    transition: 'padding 1s'
                }} />
            </SearchIconWrapper>
        </Search>
    )
}

export default Search