import { apiService } from '@/common/services';
import { IDataResponse, IDataTypeArray, IRequestParams } from '@/common/types';
import { IInvoice } from '../interfaces';
import { CreateInvoiceType } from '../utils';

export const invoiceService = {
  getList: async (params: Partial<IRequestParams>): Promise<IDataTypeArray<IInvoice>> => {
    try {
      const res = await apiService.get<IDataResponse<IInvoice[]>>('/api/invoice', { params: params });
      return res.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  createInvoice: async (data: CreateInvoiceType): Promise<unknown> => {
    try {
      const res = await apiService.post<IDataResponse<unknown>>('/api/invoice/create', data);
      return res.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
};
