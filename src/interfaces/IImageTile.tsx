export default interface IImageTile {
    id: string,
    url: string,
    size?: string,
    isEditable?: boolean,
    handleRemove?: Function
}