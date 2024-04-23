


import axios from "axios"
import LayoutService from "./LayoutService"


const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
};
class BookingService {



    getBooking(bookingId) {
        return axios.get("http://localhost:8080/api/booking/")
    }
    addBooking(formData) {
        // console.log("Form Start time : " + formData.startTime);
        // console.log("Form End time : " + formData.endTime);
        formData.date = LayoutService.formatDate(formData.date)
        // console.log("Updated Form : " + JSON.stringify(formData))
        return axios.post("http://localhost:8080/api/booking/", formData, { headers })
    }
    cancelRequest(bookingId) {
        return axios.delete("http://localhost:8080/api/booking/cancel/" + bookingId)
    }
    deleteBooking(bookingId) {
        return axios.delete("http://localhost:8080/api/booking/" + bookingId)
    }
    getAllBookingsBySeatDate(seatId, date) {
        console.log("SEAT-id : " + seatId)
        date = LayoutService.formatDate(date);
        console.log("date" + date)
        return axios.get("http://localhost:8080/api/booking/all/date/"+date+"/seat/"+seatId)
    }
}

export default new BookingService()