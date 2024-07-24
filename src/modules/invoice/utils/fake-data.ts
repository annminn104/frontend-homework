import { faker } from '@faker-js/faker';
import { EInvoiceDocumentType, EInvoicePaymentMethod, EInvoiceStatus } from '../enums';
import { IInvoice } from '../interfaces';

const generateFakeInvoices = (min: number, max: number): IInvoice[] => {
  const invoices: IInvoice[] = [];
  const count = faker.number.int({ min, max });

  for (let i = 0; i < count; i++) {
    const invoice: IInvoice = {
      id: faker.string.nanoid(8),
      billTo: faker.person.fullName(),
      invoiceDate: faker.date.past().getTime(),
      dueDate: faker.date.future().getTime(),
      status: faker.helpers.arrayElement(Object.values(EInvoiceStatus)),
      vat: faker.datatype.boolean(),
      paymentMethod: faker.helpers.arrayElement(Object.values(EInvoicePaymentMethod)),
      type: faker.helpers.arrayElement(Object.values(EInvoiceDocumentType))
    };
    invoices.push(invoice);
  }

  return invoices;
};

export const fakeInvoices = generateFakeInvoices(20, 50);
