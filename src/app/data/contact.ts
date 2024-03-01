import { Company } from "./company";

export interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    phone: number;
    email: string;
    timestamp: Date;
    invoices: number[];
    company: Company
}