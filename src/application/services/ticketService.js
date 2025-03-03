const { Ticket } = require("../../domain/entities/index");

class TicketService {
  constructor(ticketRepository) {
    this.ticketRepository = ticketRepository;
  }

  async buyTicket(reservationId, performanceId) {
    const ticket = new Ticket(null, true, reservationId, performanceId);
    return await this.ticketRepository.create(ticket);
  }

  async getTicketById(id) {
    return await this.ticketRepository.findById(id);
  }
}

module.exports = { TicketService };
