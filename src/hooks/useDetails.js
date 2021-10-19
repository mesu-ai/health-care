import { useContext } from "react";
import { DetailsContex } from "../contex/DetailsPeovider";

const useDetails=()=>{

    return useContext(DetailsContex);

}
export default useDetails;