import { z } from 'zod';

export const createInvoiceSchema = z.object({
  type: z.string().min(1, { message: 'Document Type is required' }),
  billTo: z.string().min(1, { message: 'Bill To is required' }),
  contractor: z.string().min(1, { message: 'Contractor is required' }),
  invoiceDate: z.date({
    errorMap: (issue, ctx) => (issue.code === z.ZodIssueCode.invalid_date ? { message: 'Invoice Date is error' } : { message: ctx.defaultError }),
    coerce: true
  }),
  dueDate: z.date({
    errorMap: (issue, ctx) => (issue.code === z.ZodIssueCode.invalid_date ? { message: 'Due Date is error' } : { message: ctx.defaultError }),
    coerce: true
  }),
  paymentMethod: z.string().min(1, { message: 'Payment Method is required' }),
  status: z.string().min(1, { message: 'Status is required' }),
  note: z.string(),
  items: z
    .array(z.object({ itemId: z.string(), detail: z.string(), quantity: z.number(), unit: z.string(), price: z.number(), amount: z.number() }))
    .optional()
});

export type CreateInvoiceType = z.infer<typeof createInvoiceSchema>;
