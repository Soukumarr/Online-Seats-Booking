import axios from "axios";



class SeatService{

    
    getSeatForId(seatId){

        // return axios.get("http://localhost:8080/api/layout/map/floor/"+floor+"/date/"+ this.formatDate(date))
    }
    addNewSeat(seatObj){
        var officeId = seatObj.officeId
        return axios.post("http://localhost:8080/api/seat/office/"+officeId,seatObj)
    }  
    deleteSeats(seatId){
        return axios.delete("http://localhost:8080/api/seat/"+ seatId)
    } 

    getAllFloors(officeId) {
        return axios.get("http://localhost:8080/api/offices/"+officeId+"/getFloors")
    }
}

export default new SeatService()

