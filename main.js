function ticketList(tickets, isIncrement) {
  const ticketInput = document.getElementById(tickets + "-count");
  const ticketCount = parseInt(ticketInput.value);
  let ticketNewCount = ticketCount;
  if (isIncrement == true) {
    ticketNewCount = ticketCount + 1;
  }
  if (isIncrement == false && ticketCount > 0) {
    ticketNewCount = ticketCount - 1;
  }
  ticketInput.value = ticketNewCount;
  let ticketPrize = 0;
  if (tickets == "first-class-ticket") {
    ticketPrize = ticketNewCount * 150;
  }
  if (tickets == "economy-ticket") {
    ticketPrize = ticketNewCount * 100;
  }
  document.getElementById("tickets-prize").innerText = "$" + ticketPrize;
  totalTicketPrize();
}

// ticket list function end

function totalTicketPrize() {
  const firstClassTicketCount = getInputValue("first-class-ticket-count");
  const economyTicketCount = getInputValue("economy-ticket-count");

  const totalTicketPrize =
    firstClassTicketCount * 150 + economyTicketCount * 100;
  document.getElementById("tickets-prize").innerText = "$" + totalTicketPrize;

  const totalTicketVat = totalTicketPrize * 0.1;
  document.getElementById("tickets-vat").innerText = "$" + totalTicketVat;

  const totalTicketCost = totalTicketPrize + totalTicketVat;
  document.getElementById("total-ticket-cost").innerText =
     totalTicketCost;
};
// total ticket prize function end

function getInputValue(ticket) {
  const ticketInput = document.getElementById(ticket);
  const ticketCount = parseInt(ticketInput.value);
  return ticketCount;
}

//prize convert into integer type function end

document.getElementById("book-now").addEventListener("click", function () {
  const total = document.getElementById("total-ticket-cost").innerText
 if(total < 1){
   alert("You Don't Buy any Tickets");
 return false;
}else{
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to cancel your Order!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Confirm it!',
      cancelButtonText: "No, I don't Want",
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Order Success!',
          'Thank You For Select Us For Your Trip . We Will Give You Our Best Service.We hope you have a safe journey with us',
          'success'
        )
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Order is Canceled :)',
          'error'
        )
      }
    })
  }

  // const bookingTicket = document.getElementById("booking-ticket");
  // bookingTicket.style.display = "none";
  // const confirmationArea = document.getElementById("confirmation");
  // confirmationArea.style.display = "block";
});

//confirmation section function end
