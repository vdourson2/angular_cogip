export interface Company {
    id : number;
    name : string;
    country : string;
    tva : number;
    type : 'provider' | 'client';
    invoices : number[];
    contacts : string[]
}