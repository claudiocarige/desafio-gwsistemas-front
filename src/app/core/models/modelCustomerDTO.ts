import { Address } from "./modelAddress";

export interface CustomerDTO {
  id:                  number;
  customerName:        string;
  cpfOrCnpj:           string;
  address:             Address;
  principalEmail:      string;
  phoneNumber:         string;
  whatsapp:            string;
  responsibleEmployee: string;
}
