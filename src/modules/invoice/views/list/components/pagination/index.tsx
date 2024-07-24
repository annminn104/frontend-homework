import { IPagination } from '@/common/types';
import Pagination from '@/components/elements/pagination';
import { QUERY_PARAMS_SCHEMA } from '@/modules/invoice/mocks';

type InvoicePaginationProps = {
  pagination: IPagination;
};

const InvoicePagination: React.FC<InvoicePaginationProps> = ({ pagination }) => {
  return <Pagination pagination={pagination} queryParamsSchema={QUERY_PARAMS_SCHEMA} />;
};

export default InvoicePagination;
