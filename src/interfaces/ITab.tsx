import { ComponentType } from "react";
import { Props } from "react-bootstrap-icons";

export default interface ITab {
    name: string,
    route: string,
    icon: ComponentType<Props>
}