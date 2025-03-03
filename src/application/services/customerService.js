const { Customer } = require("../../domain/entities/index");

class CustomerService {
  constructor(customerRepository) {
    this.customerRepository = customerRepository;
  }

  async createCustomer(name, phone) {
    const customer = new Customer(null, name, phone);

    return await this.customerRepository.create(customer);
  }

  async getCustomerById(id) {
    return await this.customerRepository.findById(id);
  }
}

module.exports = { CustomerService };
