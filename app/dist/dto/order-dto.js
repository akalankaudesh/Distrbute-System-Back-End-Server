"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderMainDTO = /** @class */ (function () {
    function OrderMainDTO(order_id, customer_id, item_id, unit_price, qty) {
        this.order_id = order_id;
        this.customer_id = customer_id;
        this.item_id = item_id;
        this.unit_price = unit_price;
        this.qty = qty;
    }
    return OrderMainDTO;
}());
exports.OrderMainDTO = OrderMainDTO;
