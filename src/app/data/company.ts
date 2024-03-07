import { Contact } from './contact'; 

export class Company {
    id! : number;
    name : string;
    country : string;
    tva : number;
    type : 'provider' | 'client';
    timestamp! : Date;
    invoices : number[] | undefined;
    contacts : Contact[] | undefined; 

    constructor(){
        this.name = 'Entrer un nom...';
        this.country = 'Belgique';
        this.tva = 0;
        this.type = 'client';
    }
}