import axios from "axios";
import { Customer, generateCustomer } from "../customer";

export async function postCustomer(): Promise<Customer>{
return (
    await axios.post("http://localhost:3000/api/customers",  generateCustomer(), {
    })
  ).data;
}

