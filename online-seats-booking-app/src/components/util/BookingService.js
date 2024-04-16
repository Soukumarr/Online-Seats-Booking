


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
        formData.date = LayoutService.formatDate(formData.date)
        console.log("Updated Form : " + JSON.stringify(formData))
        return axios.post("http://localhost:8080/api/booking/", formData, { headers })
    }
    deleteProduct(bookingId) {
        return null
    }
}

export default new BookingService()