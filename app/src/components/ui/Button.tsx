import { Button as MUIButton, styled } from '@mui/material';

interface ButtonProps {
    primary?: string;
}

export const Button = styled(MUIButton)<ButtonProps>(({ primary }) => ({
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

interface ActionButtonProps {
    buttoncolor: string;
}

export const ActionButton = styled(MUIButton)<ActionButtonProps>(
    ({ buttoncolor }) => ({
        fontWeight: 700,
        textTransform: 'none',
        fontSize: '1.5rem',
        backgroundColor: 'transparent',
        color: buttoncolor,
        border: `2px solid ${buttoncolor}`,
        width: '17rem',
        height: '10rem',
        padding: '1rem',
        borderRadius: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',

        svg: {
            width: '4.125rem',
            height: '4.125rem',
        },
    })
);

interface FormButtonProps {
    width?: string;
}

export const FormButton = styled(MUIButton)<FormButtonProps>(
    ({ width = '100%' }) => ({
        fontWeight: 700,
        color: 'var(--primary-color)',
        border: '2px solid var(--primary-color)',
        borderRadius: '0.5rem',
        textTransform: 'none',
        width,
    })
);
