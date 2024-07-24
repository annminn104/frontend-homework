export enum EInvoiceStatus {
  drafts = 'Drafts',
  notPaid = 'Not Paid',
  paid = 'Paid',
  late = 'Late'
}

export enum EInvoicePaymentMethod {
  creditCard = 'CreditCard',
  debitCard = 'DebitCard',
  payPal = 'PayPal',
  bankTransfer = 'BankTransfer',
  cash = 'Cash',
  bitcoin = 'Bitcoin',
  applePay = 'ApplePay',
  googlePay = 'GooglePay'
}

export enum EInvoiceDocumentType {
  invoice = 'Invoice',
  receipt = 'Receipt',
  creditNote = 'CreditNote',
  debitNote = 'DebitNote',
  quotation = 'Quotation',
  purchaseOrder = 'PurchaseOrder',
  deliveryNote = 'DeliveryNote'
}
