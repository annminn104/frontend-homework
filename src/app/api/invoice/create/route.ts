import { EHttpStatusCode, EMsgCode } from '@/common/enums';

export async function POST(request: Request) {
  return Response.json({
    statusCode: EHttpStatusCode.ok,
    msgCode: EMsgCode.success,
    data: {}
  });
}
