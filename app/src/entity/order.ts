export class Order{

    constructor(public order_id: string, public customer_id:string ,public item_id: string, public unit_price: number, public qty:number) {
    }
}
