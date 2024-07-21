import { Address } from './modelAddress';

export interface Customer {
  id:                  number;
  customerName:        string;
  address:             Address;
  phoneNumber:         string;
  whatsapp:            string;
  principalEmail:      string;
  responsibleEmployee: string;
  emailList:           string[];
  cpf?:                string;
  cnpj?:               string;
  corporateName:       string;
}
