export class Order {

  public status: string;

  public total: number;

  public details: [];

  constructor(status, total, details) {
    this.status = status;
    this.total = total;
    this.details = details;
  };
}
