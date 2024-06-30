import { Switch, styled, switchClasses } from '@mui/material';

export const StyledSwitch = styled(Switch)({
    [`& .${switchClasses.track}`]: {
        backgroundColor: 'var(--primary-color)',
    },
});
