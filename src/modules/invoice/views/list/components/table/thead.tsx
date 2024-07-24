import { EOrderType } from '@/common/enums';
import { IInvoice } from '@/modules/invoice/interfaces';
import { Box, Checkbox, TableCell, TableRow, TableSortLabel, TableHead as Thead } from '@mui/material';
import { visuallyHidden } from '@mui/utils';

interface ITheadCell {
  id: keyof IInvoice;
  label: string;
  numeric: boolean;
}

type TableHeadProps = {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof IInvoice) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: EOrderType;
  orderBy: string;
  rowCount: number;
};

const TableHead: React.FC<TableHeadProps> = (props) => {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property: keyof IInvoice) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  const theadCells: readonly ITheadCell[] = [
    {
      id: 'id',
      label: 'Invoice ID',
      numeric: false
    },
    {
      id: 'billTo',
      label: 'Bill To',
      numeric: false
    },
    {
      id: 'invoiceDate',
      label: 'Invoice Date',
      numeric: true
    },
    {
      id: 'status',
      label: 'Status',
      numeric: false
    },
    {
      id: 'vat',
      label: 'VAT',
      numeric: false
    }
  ];

  return (
    <Thead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            color='primary'
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {theadCells.map((headCell) => (
          <TableCell key={headCell.id} align='left' sortDirection={orderBy === headCell.id ? order : false} sx={{ p: 0 }}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell>Exports</TableCell>
      </TableRow>
    </Thead>
  );
};

export default TableHead;
