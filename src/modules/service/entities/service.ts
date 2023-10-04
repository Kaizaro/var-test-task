import {StaticImport} from 'next/dist/shared/lib/get-img-props';
import {TNullable} from './../../../shared/types/nullable';

export interface IService {
  name: string;
  description: string;
  image: StaticImport;
  routeUrl?: TNullable<string>;
}
