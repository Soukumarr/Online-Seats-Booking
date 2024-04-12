import axios from "axios"

class LayoutService{

    
    getFloorLayout(floorId){
        return axios.get("http://localhost:8080/api/layout/map/" + floorId)
    }
    addNewProduct(product){
        return axios.post("http://localhost:8080/products",product)
    }  
    deleteProduct(id){
        return axios.delete(`http://localhost:8080/products/${id}`)
    } 
}

export default new LayoutService()
