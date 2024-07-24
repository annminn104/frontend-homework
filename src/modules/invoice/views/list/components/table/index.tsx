'use client';

import { EOrderType } from '@/common/enums';
import { IInvoice } from '@/modules/invoice/interfaces';
import { Table, TableContainer } from '@mui/material';
import { useState } from 'react';
import TBody from './tbody';
import Thead from './thead';
import EnhancedTableToolbar from './toolbar';

type InvoiceTableProps = {
  data: IInvoice[];
};

const InvoiceTable: React.FC<InvoiceTableProps> = ({ data }) => {
  const [order, setOrder] = useState<EOrderType>(EOrderType.asc);
  const [orderBy, setOrderBy] = useState<keyof IInvoice>('invoiceDate');
  const [selected, setSelected] = useState<readonly string[]>([]);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = data.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof IInvoice) => {
    const isAsc = orderBy === property && order === EOrderType.asc;
    setOrder(isAsc ? EOrderType.desc : EOrderType.asc);
    setOrderBy(property);
  };

  return (
    <TableContainer>
      <EnhancedTableToolbar numSelected={selected.length} />
      <Table>
        <Thead
          numSelected={selected.length}
          onRequestSort={handleRequestSort}
          onSelectAllClick={handleSelectAllClick}
          order={order}
          orderBy={orderBy}
          rowCount={data.length}
        />
        <TBody rows={data} selected={selected} setSelected={setSelected} />
      </Table>
    </TableContainer>
  );
};

export default InvoiceTable;
