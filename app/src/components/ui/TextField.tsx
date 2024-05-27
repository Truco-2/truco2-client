import React from 'react';

import {
    TextField as MUITextField,
    TextFieldProps,
    styled,
} from '@mui/material';

const StyledTextField = styled(MUITextField)({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '2.75rem',
    background:
        'linear-gradient(180deg, rgba(255, 255, 255, 0) -3.62%, rgba(255, 255, 255, 0.2) 100%)',
    borderRadius: '1rem',
    padding: '0.2rem 0.8rem',
    textDecoration: 'none',

    input: {
        color: '#ffffff',
    },
});

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
    (props, ref) => {
        return (
            <StyledTextField
                {...props}
                ref={ref}
                variant="standard"
                InputProps={{ disableUnderline: true }}
            />
        );
    }
);
