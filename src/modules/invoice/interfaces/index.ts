import { EInvoiceDocumentType, EInvoicePaymentMethod, EInvoiceStatus } from '../enums';

export interface IInvoice {
  id: string;
  billTo: string;
  invoiceDate: Date | string | number;
  dueDate: Date | string | number;
  status: EInvoiceStatus;
  vat: boolean;
  paymentMethod: EInvoicePaymentMethod;
  type: EInvoiceDocumentType;
}

export interface IInvoiceItem {
  itemId: string;
  detail: string;
  quantity: number;
  unit: string;
  price: number;
  amount: number;
}
