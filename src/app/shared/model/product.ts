
export interface Iproducts{
    pname : string,
    pid : number,
    pstatus : Ipstatus
}

export type Ipstatus =  "In-progress" | "Dispatched" | "Delivered";
