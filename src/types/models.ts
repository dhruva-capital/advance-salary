export interface ISuperadmin {
    username: string,
    password: string,
    admins: IAdmin[]
}

export interface IAdmin{
    admin_id: string,
    username: string,
    password: string,
    shares: IShares[]
}

export interface IShares{
    username: string,
    percent: number
}

export interface ICompanies {
    company_id: string,
    username: string,
    password: string,
    employee_list: IEmployee[]
}
export interface IBasicDetails{
    aadhar_card: number,
    pan_card:string,
}

export interface IAccountDetails{
    holder_name: string,
    account_number: number,
    ifsc_code: string,
    linked_pan_card:string
}

export interface IEmployee{
    employee_id: string,
    name: string,
    password: string,
    basic_details: IBasicDetails,
    salary: number,
    advanced_salary: number,
    pending_salary: number,
    account_details:IAccountDetails,
}

export interface IRequest{
    employee_id: string,
    company_id: string,
    request_amount: string,
    status:["PENDING", "APPROVED","DENIED"]
}

export interface ITxnDetails{
    txn_id: string,
    invoice: File,
    receiver_details: IEmployee,
    timestamp:Date
}
