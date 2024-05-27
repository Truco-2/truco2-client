import { Button as MUIButton, styled } from '@mui/material';

interface StyledButtonProps {
    primary?: string;
}

export const Button = styled(MUIButton)(({ primary }: StyledButtonProps) => ({
    fontWeight: 700,
    textTransform: 'none',
    paddingBlock: '9.5px',
    fontSize: '1rem',
    backgroundColor: primary === 'true' ? '#dc8230' : '#ffffff',
    boxShadow: '0 0 10px #db781c',
    color: primary === 'true' ? '#ffffff' : '#000000',
    borderRadius: '10px',

    '&:hover': {
        backgroundColor: primary === 'true' ? '#dc8230' : '#ffffff',
        boxShadow: '0 0 5px #db781c, 0 0 15px #db781',
    },
}));

export const ActionButton = styled(MUIButton)({
    fontWeight: 700,
    textTransform: 'none',
    fontSize: '1.5rem',
    backgroundColor: '#dc8230',
    color: '#000000',
    width: '25rem',
    height: '14.5rem',
    borderRadius: '70px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',

    '&:hover': {
        backgroundColor: '#dc8230',
    },

    svg: {
        width: '6.625rem',
        height: '7.312rem',
    },
});
