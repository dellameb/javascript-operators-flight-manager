function Flights() {


  function calculateNumberOfFlights(passengers, capacity) {

    // Check if the passengers number is a positive integer. If it is negative, you should throw an Error saying "The number of passengers must be a positive integer value"
    if ((passengers <= 0) || (parseInt(passengers) != passengers)) {
      throw new error("The number of passengers must be a positive integer value");
    }


    // Also, check if the capacity is a positive integer. If it is negative, you should throw an Error saying "The capacity of the flight must be a positive integer value"
    if ((capacity <= 0) || (parseInt(capacity) != capacity)) {
      throw new error("The capacity of the flight must be a positive integer value");
    }

    if (passengers % capacity === 0) {
      nbrFlights = passengers / capacity;
    }
    else {
      nbrFlights = Math.floor(passengers / capacity) + 1;
    }
    return nbrFlights;
  }
  return { calculateNumberOfFlights };
}
module.exports = Flights();