'use client';

import { FormHelperText, TextField } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
import * as S from './styled';
type InputControllerProps = {
  control: Control<any, any>;
  name: string;
  label: string;
};
const InputController: React.FC<InputControllerProps> = ({ control, name, label }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
        <S.FormControlWrap fullWidth>
          <TextField inputRef={ref} value={value} onChange={onChange} label={label} error={Boolean(error)} />
          <FormHelperText sx={{ color: 'error.main' }}>{error?.message ?? ''}</FormHelperText>
        </S.FormControlWrap>
      )}
    />
  );
};

export default InputController;
