export default interface DBProjectsResponse {
    title: String,
    description: String,
    images: Image[]
}

interface Image {
    data: Buffer,
    contentType: String
}