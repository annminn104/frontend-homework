import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '@/common/mocks';
import { SelectControllerItem } from '@/components/elements/select-controller';
import { z } from 'zod';
import { EInvoiceDocumentType, EInvoicePaymentMethod, EInvoiceStatus } from '../enums';

export const CONTRACTORS_OPTIONS: SelectControllerItem[] = [
  {
    label: 'Contractor 1',
    value: 'contractor1Id'
  },
  {
    label: 'Contractor 2',
    value: 'contractor2Id'
  },
  {
    label: 'Contractor 3',
    value: 'contractor3Id'
  },
  {
    label: 'Contractor 4',
    value: 'contractor4Id'
  }
];

export const STATUS_OPTIONS: SelectControllerItem[] = Object.keys(EInvoiceStatus).map((key) => ({
  label: EInvoiceStatus[key as keyof typeof EInvoiceStatus],
  value: key
}));

export const DOCUMENT_TYPE_OPTIONS: SelectControllerItem[] = Object.keys(EInvoiceStatus).map((key) => ({
  label: EInvoiceDocumentType[key as keyof typeof EInvoiceDocumentType],
  value: key
}));

export const PAYMENT_METHOD_OPTIONS: SelectControllerItem[] = Object.keys(EInvoiceStatus).map((key) => ({
  label: EInvoicePaymentMethod[key as keyof typeof EInvoicePaymentMethod],
  value: key
}));

export const QUERY_PARAMS_SCHEMA = z.object({
  pageIndex: z.coerce.number().default(DEFAULT_PAGE_INDEX).optional(),
  pageSize: z.coerce.number().default(DEFAULT_PAGE_SIZE).optional(),
  status: z.coerce.string().optional(),
  contractor: z.coerce.string().optional(),
  startTime: z.coerce.string().optional(),
  endTime: z.coerce.string().optional()
});
