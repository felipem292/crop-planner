

import swal from "sweetalert";
export const FetchUpdate = (url,values) => {
    fetch(url, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values, null, 1),
      })
        .then(
          () => 
          swal("Actualizado", "El evento fue actualizado", "success")
           
        
        )
        .catch(
          () =>
            function (error) {
               console.log(error);
            }
        );
}
