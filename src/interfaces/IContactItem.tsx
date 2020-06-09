import IEmail from "./IEmail";

export default interface IContactItem {
    email: IEmail,
    handleUpdate: Function,
    handleDelete: Function
}