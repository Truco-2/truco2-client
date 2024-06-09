import { Box, Typography, styled } from '@mui/material';
import { LogoContained } from 'assets/Logo';
import React from 'react';

const StyledBox = styled(Box)({
    background: '#000000',
    width: 'calc(100% - 2px)',
    height: '4rem',
    marginTop: '1px',
    border: 'solid #FE6B01 1px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    paddingBlock: '1rem',
});

const StyledTypography = styled(Typography)({
    fontSize: '1.5rem',
    color: '#FE6B01',
    fontWeight: 'bold',
});

const HeaderMobile: React.FC = () => {
    return (
        <StyledBox>
            <LogoContained height="2.5rem" width="2.5rem" />
            <StyledTypography>Truco 2</StyledTypography>
        </StyledBox>
    );
};

export default HeaderMobile;
