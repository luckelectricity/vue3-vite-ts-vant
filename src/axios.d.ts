import axios from "axios";
declare module "axios" {
  interface IAxios<D = null> {
    code: number;
    msg: string;
    extra: D;
  }
  export type AxiosResponse<T = any> = IAxios<D>;
}
