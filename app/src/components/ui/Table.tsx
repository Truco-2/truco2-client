import {
    TableCell,
    TableContainer,
    TableRow,
    styled,
    tableCellClasses,
} from '@mui/material';

export const StyledTableContainer = styled(TableContainer)({
    borderRadius: '1rem',
    border: '1px solid #FE6B01',
});

export const StyledTableRow = styled(TableRow)({
    ':hover ': {
        backgroundColor: '#FE6B01',
        borderBottom: '1px solid #FFFFFF26',
        boxShadow: '0px 0px 36px 0px #FE6B01',
    },
});

export const StyledTableCell = styled(TableCell)({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#FFFFFF33',
        color: 'white',
        fontWeight: 600,
        fontSize: 14,
        border: 'none',
        borderRight: '1px solid #FE6B01',
        padding: '12px',
    },
    [`&.${tableCellClasses.body}`]: {
        backgroundColor: '#FFFFFF1A',
        color: 'white',
        fontWeight: 600,
        fontSize: 16,
        borderBottom: '1px solid #FFFFFF1A',
        borderRight: '1px solid #FE6B01',
        padding: '1rem 1.5rem',
    },
    '&:last-child': {
        borderRight: 'none',
    },
});
