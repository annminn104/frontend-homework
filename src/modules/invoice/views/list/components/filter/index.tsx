'use client';

import DatePickerController from '@/components/elements/date-picker-controller';
import SelectController from '@/components/elements/select-controller';
import { CONTRACTORS_OPTIONS, STATUS_OPTIONS } from '@/modules/invoice/mocks';
import { Grid, Tab } from '@mui/material';
import { useState } from 'react';
import { Control } from 'react-hook-form';
import * as S from './styled';

type InvoiceFilterProps = {
  onSubmit: () => void;
  control: Control<any, any>;
};

const InvoiceFilter: React.FC<InvoiceFilterProps> = ({ onSubmit, control }) => {
  const [value, setValue] = useState('all');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <S.FilterWrap>
      <S.FilterTabs value={value} onChange={handleChange} textColor='primary' indicatorColor='primary'>
        <Tab value='all' label='All' />
        <Tab value='edit' label='Edit' />
        <Tab value='inprogress' label='InProgress' />
        <Tab value='drafts' label='Drafts' />
      </S.FilterTabs>
      <form onSubmit={onSubmit} noValidate>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <SelectController control={control} name='contractor' label='All contractors' items={CONTRACTORS_OPTIONS} />
          </Grid>
          <Grid item xs={3}>
            <DatePickerController control={control} name='startTime' label='Form' />
          </Grid>
          <Grid item xs={3}>
            <DatePickerController control={control} name='endTime' label='To' />
          </Grid>
          <Grid item xs={3}>
            <SelectController control={control} name='status' label='Status' items={STATUS_OPTIONS} />
          </Grid>
        </Grid>
      </form>
    </S.FilterWrap>
  );
};

export default InvoiceFilter;
