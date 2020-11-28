import swal from "sweetalert";
export const FetchPut = (url) => {
    console.log(url)
   
    fetch(url,  {
        method: "PUT",
        //mode: "cors",       
    })
        .then(
          () => {
          swal(" Actualizado", "", "success")
         
        }
        )
        .catch(
          () =>
            function (error) {
               console.log(error);
            }
        );
}
