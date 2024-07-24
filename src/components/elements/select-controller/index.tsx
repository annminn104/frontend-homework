'use client';

import { FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

import * as S from './styled';

type SelectControllerProps = {
  control: Control<any, any>;
  name: string;
  label: string;
  items: SelectControllerItem[];
};

export type SelectControllerItem = { label: React.ReactNode | string; value: string };

const SelectController: React.FC<SelectControllerProps> = ({ control, name, label, items }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
        <S.FormControlWrap fullWidth defaultValue={value} error={!!error}>
          <InputLabel ref={ref}>{label}</InputLabel>
          <Select inputRef={ref} label={label} value={value} onChange={onChange}>
            {items.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText sx={{ color: 'error.main' }}>{error?.message ?? ''}</FormHelperText>
        </S.FormControlWrap>
      )}
    />
  );
};

export default SelectController;
