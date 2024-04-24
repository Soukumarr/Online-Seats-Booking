import axios from "axios";



class SwapService {

    
    swapRequest(form){
        form.bookseatid = parseInt(form.bookseatid)
        form.swapseatid = parseInt(form.swapseatid)
        return axios.get("http://localhost:8080/api/swap/booking/"+form.bookseatid+"/seat/"+form.swapseatid)
    }
   
}

export default new SwapService()
