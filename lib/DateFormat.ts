import { format } from "date-fns"

const formatDate = (date:string) =>{
return format(new Date(date),"LLLL,d,yyyy")
}

export default formatDate;