// import { useHistory } from "react-router-dom";
import swal from "sweetalert";

export const FetchDelete = (url) => {
   console.log(url)
   
    fetch(url,  {
        method: "DELETE",
        //mode: "cors",       
    })
        .then(
          () => {
          swal(" eliminado", "", "success")
         
        }
        )
        .catch(
          () =>
            function (error) {
               console.log(error);
            }
        );
       
}