import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    page?:any
  }
const PublicRoute = ({page}:Props) => {
    const navigate = useNavigate();
    const token = localStorage.getItem(`token`)

    useEffect(()=>{
        if(token){
            navigate("/Dashboard");
        }
    },[])

    return(
        <div>{page}</div>
    )
}

export default PublicRoute;