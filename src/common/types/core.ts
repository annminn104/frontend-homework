import { EHttpStatusCode, EMsgCode, EOrderType } from '../enums';

export type IDataResponse<T> = T extends any[] ? IDataTypeArray<T[number]> : IDataTypeObject<T>;

export type IDataDefault = {
  statusCode: EHttpStatusCode;
  msgCode: EMsgCode;
};

export type IDataTypeArray<TData> = IDataDefault & {
  pagination: IPagination;
  data: TData[];
};

export type IDataTypeObject<TData> = IDataDefault & {
  data: TData;
};

export interface IPagination {
  total: number;
  size: number;
  index: number;
}

export type IRequestParams = {
  startTime: string;
  endTime: string;
} & IRequestParamsPagination;

export interface IRequestParamsPagination {
  pageIndex: number;
  pageSize: number;
}

export interface IRequestBody<T, U> {
  queryFields?: Partial<T>;
  orderBy?: {
    [key in keyof T]?: EOrderType;
  };
}
