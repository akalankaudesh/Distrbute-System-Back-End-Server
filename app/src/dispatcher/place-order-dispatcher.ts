import express = require("express");
import {CustomerBO} from "../business/customer-bo";
import {ItemBO} from "../business/item-bo";
import {OrderBo} from "../business/order-bo";
import cors=require("cors");


// This will return a new instance of a router object that can be used to handle routing
const orderDispatcher = express.Router();



orderDispatcher.route("")
    .get((req, res) => {
        const promise=new OrderBo().findAllOrders();
        promise.then(orders=>{
            res.status(200).json(orders);
        }).catch(error=>{
            res.status(500).send(error);
        });

    })
    .post((req, res) => {

        if (!("order_id" in req.body && "customer_id" in req.body && "item_id" in req.body && "unit_price" in req.body && "qty" in req.body )){
            res.status(400).send("Invalid Request Body");
            return;
        }

        const promise = new OrderBo().SaveOrder(req.body);
        promise.then(status => res.status(201).json(status))
            .catch(err=>res.status(500).send(err));

    });

orderDispatcher.route("/:id")
    .get((req, res) => {

    })
    .delete((req, res) => {
        const promise = new OrderBo().DeleteOrder(req.params.id);
        promise.then(status=>{

            if (status){
                res.status(200).send(true);
            }else{
                res.sendStatus(404);
            }

        }).catch(error=>{
            res.status(500).send(error);
        });
    })
    .put((req, res) => {

    });

export default orderDispatcher;
