import { Customer } from "./modelCustomer";
import { Item } from "./modelItem";

export interface DeliveryDTO {
  id:               number;
  sender:           Customer;
  recipient:        Customer;
  statusDelivery:   string;
  passwordDelivery: string;
  dateSolicitation: string;
  freightValue:     number;
  itemsList:        Item[];
}
