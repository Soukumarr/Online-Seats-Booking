import axios from "axios"

class LayoutService{

    
    getFloorLayout(floor, date){

        console.log("Making Get Request : ")
        console.log("dateFormat : " + this.formatDate(date).toString() )
        console.log(floor)
        return axios.get("http://localhost:8080/api/layout/map/floor/"+floor+"/date/"+ this.formatDate(date))
    }
    addNewProduct(product){
        return axios.post("http://localhost:8080/products",product)
    }  
    deleteProduct(id){
        return axios.delete(`http://localhost:8080/products/${id}`)
    } 

    getAllFloors(officeId) {
        return axios.get("http://localhost:8080/api/offices/"+officeId+"/getFloors")
    }
    formatDate(inputDate) {
        const dateObj = new Date(inputDate);
        const year = dateObj.getFullYear();
        let month = (1 + dateObj.getMonth()).toString().padStart(2, '0');
        let day = dateObj.getDate().toString().padStart(2, '0');
      
        return `${year}-${month}-${day}`;
      }
}

export default new LayoutService()


