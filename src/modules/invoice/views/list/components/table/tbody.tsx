import { IInvoice } from '@/modules/invoice/interfaces';
import { Checkbox, TableCell, TableRow, TableBody as TBody } from '@mui/material';
import moment from 'moment';
import React, { Dispatch, SetStateAction } from 'react';

type TableBodyProps = {
  rows: IInvoice[];
  selected: readonly string[];
  setSelected: Dispatch<SetStateAction<readonly string[]>>;
};
const TableBody: React.FC<TableBodyProps> = ({ rows, selected, setSelected }) => {
  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  return (
    <TBody>
      {rows &&
        rows.map((row) => {
          const isItemSelected = isSelected(row.id);
          const labelId = `enhanced-table-checkbox-${row.id}`;

          return (
            <TableRow
              hover
              onClick={(event) => handleClick(event, row.id)}
              role='checkbox'
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={row.id}
              selected={isItemSelected}
              sx={{ cursor: 'pointer' }}
            >
              <TableCell padding='checkbox'>
                <Checkbox
                  color='primary'
                  checked={isItemSelected}
                  inputProps={{
                    'aria-labelledby': labelId
                  }}
                />
              </TableCell>
              <TableCell component='th' id={labelId} scope='row' padding='none'>
                {row.id}
              </TableCell>
              <TableCell align='left' padding='none'>
                {row.billTo}
              </TableCell>
              <TableCell align='left' padding='none'>
                {moment(row.invoiceDate).format('DD/MM/YYYY')}
              </TableCell>
              <TableCell align='left' padding='none'>
                {row.status}
              </TableCell>
              <TableCell align='left' padding='none'>
                {row.vat}
              </TableCell>
              <TableCell align='left' padding='none'>
                text
              </TableCell>
            </TableRow>
          );
        })}
    </TBody>
  );
};

export default TableBody;
