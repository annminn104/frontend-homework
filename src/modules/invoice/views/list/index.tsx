import { useQueryParams } from '@/common/hooks';
import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '@/common/mocks';
import LoadingSection from '@/components/elements/loading-section';
import { invoiceService } from '@/modules/invoice/services';
import { useQuery } from '@tanstack/react-query';
import { isUndefined, omitBy } from 'lodash';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { QUERY_PARAMS_SCHEMA } from '../../mocks';
import InvoiceFilter from './components/filter';
import InvoicePagination from './components/pagination';
import InvoiceTable from './components/table';
import * as S from './styled';

export type InvoiceFilterType = {
  status?: string;
  contractor?: string;
  startTime?: string;
  endTime?: string;
};

type InvoiceListProps = {};

const InvoiceList: React.FC<InvoiceListProps> = ({}) => {
  const { queryParams, setQueryParams } = useQueryParams({
    schema: QUERY_PARAMS_SCHEMA,
    defaultValues: {
      pageIndex: DEFAULT_PAGE_INDEX,
      pageSize: DEFAULT_PAGE_SIZE
    }
  });

  const { data, isPending } = useQuery({
    queryKey: ['get-list-invoice', queryParams],
    queryFn: () => invoiceService.getList({ ...queryParams })
  });

  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm<InvoiceFilterType>({
    defaultValues: {
      status: queryParams.status,
      contractor: queryParams.contractor
    }
  });

  useEffect(() => {
    const subscription = watch(onSubmit);
    return () => subscription.unsubscribe();
  }, [handleSubmit, watch]);

  const onSubmit = (data: InvoiceFilterType) => {
    const dataQuery = omitBy(data, isUndefined);
    setQueryParams({ ...queryParams, ...dataQuery });
  };

  return (
    <LoadingSection isPending={isPending}>
      {data && !isPending && (
        <>
          <S.ListWrap>
            <S.ListBox>
              <InvoiceFilter onSubmit={handleSubmit(onSubmit)} control={control} />
            </S.ListBox>
            <S.ListBox>
              <InvoiceTable {...data} />
            </S.ListBox>
            <S.ListBox>
              <InvoicePagination {...data} />
            </S.ListBox>
          </S.ListWrap>
        </>
      )}
    </LoadingSection>
  );
};

export default InvoiceList;
