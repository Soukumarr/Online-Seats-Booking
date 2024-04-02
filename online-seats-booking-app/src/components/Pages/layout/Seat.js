


class Seat {


    Seat(bookingStatus, userId, isPresentInLayout, seatStatus) {
      this.bookingStatus = bookingStatus;
      this.userId = userId;
      this.isPresentInLayout = isPresentInLayout;
      this.seatStatus = seatStatus;
    }
  
    // Getter and setter methods
    getBookingStatus() {
      return this.bookingStatus;
    }
  
    setBookingStatus(bookingStatus) {
      this.bookingStatus = bookingStatus;
    }
  
    getUserId() {
      return this.userId;
    }
  
    setUserId(userId) {
      this.userId = userId;
    }
  
    getIsPresentInLayout() {
      return this.isPresentInLayout;
    }
  
    setIsPresentInLayout(isPresentInLayout) {
      this.isPresentInLayout = isPresentInLayout;
    }
  
    getSeatStatus() {
      return this.seatStatus;
    }
  
    setSeatStatus(seatStatus) {
      this.seatStatus = seatStatus;
    }
  }

  