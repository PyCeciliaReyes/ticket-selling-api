class CreateCustomer {
  constructor(customerService) {
    this.customerService = customerService;
  }
  async execute(name, phone) {
    return await this.customerService.createCustomer(name, phone);
  }
}

module.exports = { CreateCustomer };
