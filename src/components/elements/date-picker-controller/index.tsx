'use client';

import { DatePicker } from '@mui/x-date-pickers';
import { Control, Controller } from 'react-hook-form';
import * as S from './styled';

type DatePickerControllerProps = {
  control: Control<any, any>;
  name: string;
  label: string;
};

const DatePickerController: React.FC<DatePickerControllerProps> = ({ control, name, label }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur, ref, ...field }, fieldState }) => (
        <S.FormControlWrap fullWidth>
          <DatePicker
            {...field}
            label={label}
            inputRef={ref}
            format='DD-MM-YYYY'
            value={value}
            onChange={onChange}
            slotProps={{
              textField: {
                onChange,
                value,
                onBlur,
                name,
                error: !!fieldState?.error,
                helperText: fieldState?.error?.message
              }
            }}
          />
        </S.FormControlWrap>
      )}
    />
  );
};

export default DatePickerController;
