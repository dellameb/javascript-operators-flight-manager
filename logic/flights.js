function Flights() {


  function calculateNumberOfFlights(passengers, capacity) {

    if (passengers % capacity === 0) {
      nbrFlights = passengers / capacity;
    }
    else {
      nbrFlights =  Math.floor(passengers / capacity) + 1;
    }
    return nbrFlights;
  }
  return {calculateNumberOfFlights};
}
module.exports = Flights();