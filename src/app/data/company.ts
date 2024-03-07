import { Contact } from './contact'; 

export class Company {
    id : number | undefined;
    name : string;
    country : string;
    tva : number;
    type : 'provider' | 'client';
    timestamp : Date | undefined;
    invoices : number[] | undefined;
    contacts : Contact[] | undefined; 

    constructor(){
        this.name = 'Entrer un nom...';
        this.country = 'Belgique';
        this.tva = 0;
        this.type = 'client';
    }
}