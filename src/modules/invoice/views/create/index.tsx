'use client';

import { createInvoiceSchema, CreateInvoiceType } from '@/modules/invoice/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Typography } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useFieldArray, useForm } from 'react-hook-form';
import { invoiceService } from '../../services';
import CreateInvoiceForm from './form';
import * as S from './styled';

const CreateInvoicePage = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    reset,
    formState: { dirtyFields, errors }
  } = useForm<CreateInvoiceType>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: zodResolver(createInvoiceSchema),
    defaultValues: { billTo: '', contractor: '', note: '', paymentMethod: '', status: '', type: '' }
  });

  const { fields, append, remove } = useFieldArray({
    name: 'items',
    control
  });

  const { mutate: createInvoiceMutate } = useMutation({
    mutationFn: invoiceService.createInvoice,
    onSuccess: (data) => {
      reset();
      router.push('/invoice');
    },
    onError: (error) => console.error('Error:', error)
  });
  const onSubmit = (data: CreateInvoiceType) => {
    createInvoiceMutate(data);
  };

  return (
    <S.CreateWrap onSubmit={handleSubmit(onSubmit)} noValidate>
      <S.CreateBox>
        <CreateInvoiceForm control={control} fields={fields} errors={errors} append={append} remove={remove} />
      </S.CreateBox>
      <S.CreateBox justifyContent='space-between' display='flex' alignItems='center'>
        <Typography>Total: 0 BGN</Typography>
        <Button variant='contained' type='submit'>
          SAVE
        </Button>
      </S.CreateBox>
    </S.CreateWrap>
  );
};

export default CreateInvoicePage;
