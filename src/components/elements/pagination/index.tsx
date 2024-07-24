import { useQueryParams } from '@/common/hooks';
import { DEFAULT_PAGE_CHANGE_SIZES } from '@/common/mocks';
import { IPagination } from '@/common/types';
import { FormControl, InputLabel, MenuItem, Pagination as MuiPagination, Select, SelectChangeEvent, Typography } from '@mui/material';
import { useState } from 'react';
import * as S from './styled';

type PaginationProps = {
  pagination: IPagination;
  queryParamsSchema: any;
};

const Pagination: React.FC<PaginationProps> = ({ pagination, queryParamsSchema }) => {
  const { queryParams, setQueryParams } = useQueryParams({
    schema: queryParamsSchema,
    defaultValues: { pageIndex: pagination.index, pageSize: pagination.size }
  });

  const [page, setPage] = useState<number>(pagination.index);
  const [rowsPerPage, setRowsPerPage] = useState<number>(pagination.size);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    setQueryParams({ ...queryParams, pageIndex: newPage, pageSize: rowsPerPage });
  };

  const handleChangeRowsPerPage = (event: SelectChangeEvent) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    setQueryParams({ ...queryParams, pageIndex: 0, pageSize: parseInt(event.target.value, 10) });
  };

  return (
    <S.PaginationWrap>
      <S.PaginationChangeSize>
        <Typography>Show:</Typography>
        <FormControl>
          <InputLabel>Size</InputLabel>
          <Select value={`${queryParams.pageSize}`} label='size' onChange={handleChangeRowsPerPage}>
            {DEFAULT_PAGE_CHANGE_SIZES.map((size) => (
              <MenuItem value={size} key={`pagination-change-sizes-${size}`}>
                {size}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography>per page</Typography>
      </S.PaginationChangeSize>
      <MuiPagination
        count={Number(Math.ceil(pagination.total / queryParams.pageSize))}
        onChange={handleChangePage}
        variant='outlined'
        shape='rounded'
      />
    </S.PaginationWrap>
  );
};

export default Pagination;
