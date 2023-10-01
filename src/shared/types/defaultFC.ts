import {FC, PropsWithChildren} from "react";

// export interface IDefaultFC<T> extends PropsWithChildren<T>{} 

export type IDefaultFC<T = unknown> = FC<PropsWithChildren<T>>