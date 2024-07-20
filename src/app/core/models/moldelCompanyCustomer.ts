import { Customer } from "./modelCustomer";


export interface CompanyCustomer extends Customer{

  cnpj?:         string;
  corporateName: string;

}
