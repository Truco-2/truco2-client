import { Switch, styled, switchClasses } from '@mui/material';

console.log(switchClasses.track);

export const StyledSwitch = styled(Switch)({
    [`& .${switchClasses.track}`]: {
        backgroundColor: 'var(--primary-color)',
    },
});
