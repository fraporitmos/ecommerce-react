import Swal from 'sweetalert2'


export function showErrorMessage (title, msg, type){
    switch(type){
        case "info" :{
            Swal.fire({
                title: title,
                text: msg,
                icon: 'info',
                confirmButtonText: "Continuar",
              })
        }
        break

        case "error": {
            Swal.fire({
                title: title,
                text: msg,
                icon: 'error',
                confirmButtonText: "Continuar"
              })
        }
        break

        case "success": {
            Swal.fire({
                title: title,
                text: msg,
                icon: 'success',
                confirmButtonText: "Continuar"
              })
        }
        break
    }
  }


