import { ComponentType } from "react";
import { Props } from "react-bootstrap-icons";

export default interface ITab {
    id: number,
    name: string,
    route: string,
    Icon: ComponentType<Props>,
    auth?: boolean
}