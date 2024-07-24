'use client';

import DatePickerController from '@/components/elements/date-picker-controller';
import InputController from '@/components/elements/input-controller';
import SelectController from '@/components/elements/select-controller';
import { CONTRACTORS_OPTIONS, DOCUMENT_TYPE_OPTIONS, PAYMENT_METHOD_OPTIONS, STATUS_OPTIONS } from '@/modules/invoice/mocks';
import { CreateInvoiceType } from '@/modules/invoice/utils';
import AddCommentIcon from '@mui/icons-material/AddComment';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { faker } from '@faker-js/faker';
import { Button, Grid, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import { Control, Controller, FieldArrayWithId, FieldErrors, UseFieldArrayAppend, UseFieldArrayRemove } from 'react-hook-form';

import * as S from './styled';

type CreateInvoiceFormProps = {
  control: Control<any, any>;
  fields: FieldArrayWithId<CreateInvoiceType, 'items', 'id'>[];
  errors: FieldErrors<CreateInvoiceType>;
  append: UseFieldArrayAppend<CreateInvoiceType, 'items'>;
  remove: UseFieldArrayRemove;
};

const CreateInvoiceForm: React.FC<CreateInvoiceFormProps> = ({ control, fields, errors, append, remove }) => {
  return (
    <S.CreateFormWrap>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <SelectController control={control} name='type' label='Document Type' items={DOCUMENT_TYPE_OPTIONS} />
        </Grid>
        <Grid item xs={4}>
          <SelectController control={control} name='billTo' label='Bill To' items={CONTRACTORS_OPTIONS} />
        </Grid>
        <Grid item xs={4}>
          <SelectController control={control} name='contractor' label='Contractor' items={CONTRACTORS_OPTIONS} />
        </Grid>
        <Grid item xs={4}>
          <DatePickerController control={control} name='invoiceDate' label='Invoice Date' />
        </Grid>
        <Grid item xs={4}>
          <DatePickerController control={control} name='dueDate' label='Due Date' />
        </Grid>
        <Grid item xs={4}>
          <SelectController control={control} name='status' label='Status' items={STATUS_OPTIONS} />
        </Grid>
        <Grid item xs={4}>
          <SelectController control={control} name='paymentMethod' label='Payment Method' items={PAYMENT_METHOD_OPTIONS} />
        </Grid>
        <Grid item xs={8}>
          <InputController control={control} name='note' label='Note' />
        </Grid>
      </Grid>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Item ID</TableCell>
            <TableCell>Detail</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Unit</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell sx={{ width: '80px' }}>
              <Button
                variant='contained'
                fullWidth
                onClick={() => append({ itemId: faker.string.nanoid(4), amount: 0, detail: '', price: 0, quantity: 0, unit: '' })}
              >
                <AddCommentIcon />
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fields.map((field, index) => {
            const errorForField = errors?.items?.[index]?.detail;
            const { id, amount, detail, price, quantity, unit } = field;
            return (
              <TableRow key={field.id}>
                <TableCell component='th'>
                  <Controller
                    control={control}
                    name={`items.${index}.itemId`}
                    render={({ field: { value, onChange } }) => <TextField value={value} onChange={onChange} {...field} />}
                  />
                </TableCell>
                <TableCell component='th'>
                  <Controller
                    control={control}
                    name={`items.${index}.detail`}
                    render={({ field: { value, onChange } }) => <TextField value={value} onChange={onChange} {...field} />}
                  />
                </TableCell>
                <TableCell component='th'>
                  <Controller
                    control={control}
                    name={`items.${index}.quantity`}
                    render={({ field: { value, onChange } }) => <TextField value={value} onChange={onChange} {...field} />}
                  />
                </TableCell>
                <TableCell component='th'>
                  <Controller
                    control={control}
                    name={`items.${index}.price`}
                    render={({ field: { value, onChange } }) => <TextField value={value} onChange={onChange} {...field} />}
                  />
                </TableCell>
                <TableCell component='th'>
                  <Controller
                    control={control}
                    name={`items.${index}.unit`}
                    render={({ field: { value, onChange } }) => <TextField value={value} onChange={onChange} {...field} />}
                  />
                </TableCell>
                <TableCell component='th'>
                  <Controller
                    control={control}
                    name={`items.${index}.amount`}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={field.quantity * field.amount}
                        onChange={onChange}
                        InputProps={{
                          readOnly: true
                        }}
                      />
                    )}
                  />
                </TableCell>
                <TableCell>
                  <Button variant='contained' color='error' onClick={() => remove(index)}>
                    <DeleteForeverIcon />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </S.CreateFormWrap>
  );
};

export default CreateInvoiceForm;
