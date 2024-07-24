import { EHttpStatusCode, EMsgCode } from '@/common/enums';
import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '@/common/mocks';
import { fakeInvoices } from '@/modules/invoice/utils';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const response = {
    data: fakeInvoices,
    pagination: {
      total: fakeInvoices.length,
      size: Number(searchParams.get('pageSize') || DEFAULT_PAGE_SIZE),
      index: Number(searchParams.get('pageIndex') || DEFAULT_PAGE_INDEX)
    }
  };

  return Response.json({
    ...response,
    statusCode: EHttpStatusCode.ok,
    msgCode: EMsgCode.success
  });
}
