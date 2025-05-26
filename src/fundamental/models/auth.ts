import Person from "./person";

export default interface Auth {
   user: Person | null,
   loading: boolean
}