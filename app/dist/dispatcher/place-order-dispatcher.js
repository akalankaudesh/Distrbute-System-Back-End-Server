"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var order_bo_1 = require("../business/order-bo");
// This will return a new instance of a router object that can be used to handle routing
var orderDispatcher = express.Router();
orderDispatcher.route("")
    .get(function (req, res) {
    var promise = new order_bo_1.OrderBo().findAllOrders();
    promise.then(function (orders) {
        res.status(200).json(orders);
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .post(function (req, res) {
    if (!("order_id" in req.body && "customer_id" in req.body && "item_id" in req.body && "unit_price" in req.body && "qty" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    var promise = new order_bo_1.OrderBo().SaveOrder(req.body);
    promise.then(function (status) { return res.status(201).json(status); })
        .catch(function (err) { return res.status(500).send(err); });
});
orderDispatcher.route("/:id")
    .get(function (req, res) {
})
    .delete(function (req, res) {
    var promise = new order_bo_1.OrderBo().DeleteOrder(req.params.id);
    promise.then(function (status) {
        if (status) {
            res.status(200).send(true);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .put(function (req, res) {
});
exports.default = orderDispatcher;
