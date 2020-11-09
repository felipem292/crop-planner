
import swal from "sweetalert";

export const FetchPost = (url,values) => {
    // console.log('holas')
    // console.log(JSON.stringify(values));
    // console.log(url);
    
    fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values, null, 1),
      })
        .then(
          () => 
          swal("Lote creado", "Lote añadido a la base de datos", "success")
           
        
        )
        .catch(
          () =>
            function (error) {
               console.log(error);
            }
        );
       
}
