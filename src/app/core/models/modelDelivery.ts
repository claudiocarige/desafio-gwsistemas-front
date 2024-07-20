export interface Delivery {
  id:               number;
  sender:           string;
  recipient:        string;
  statusDelivery:   string;
  passwordDelivery: string;
  dateSolicitation: string;
  freightValue:     number;
  itemsList:        string[];
}
