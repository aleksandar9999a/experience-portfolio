export default interface IEmail {
    _id?: string,
    isAnswered?: boolean,
    name: string,
    email: string,
    subject: string,
    message: string
}