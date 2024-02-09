export const validate = (name,value) => {
    let error = "";

    switch(name) {
        case "fullname":
            if(!value) {
                error = "Please fill the field"
            }
            break;
        case "address":
            if(!value) {
                error = "Please fill the field"
            }
            break;
        case "apartment":
            if(!value) {
                error = "Please fill the field"
            }
            break;
        case "city":
            if(!value) {
                error = "Please fill the field"
            }
            break;
        case "state":
            if(!value) {
                error = "Please fill the field"
            }
            break;
        case "zipcode":
            if(!value) {
                error = "Please fill the field"
            }
            break;
        case "search":
            if(!value) {
                error = "Please search any address"
            }
            break;

        case "phone":
            if(!value) {
                error = "Please fill the field"
            }
            break;

            case "email":
                if(!value.includes("@")) {
                    error = "Please enter @ symbol"
                }
                break;

            case "password":
                let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
                if(!regex.test(value)){
                    error = "Password must be at least 8 characters, including uppercase, lowercase and number"
                }
                break;

                case "gender":
                    if(!value){
                        error = "Click the button "
                    }
                    break;

                    case "birthday":
                        if(!value){
                            error = "Birthday must be choosen"
                        }
                    break;
                    default:
                    break;
    }   
    return error;
};