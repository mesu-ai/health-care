import { useContext } from "react";
import { AuthContex } from "../contex/AuthPeovider";

const useAuth=()=>{

    return useContext(AuthContex);

}
export default useAuth;