import Person from "./person";

export default interface Auth {
   verifyToken: string,
   user: Person | null
}