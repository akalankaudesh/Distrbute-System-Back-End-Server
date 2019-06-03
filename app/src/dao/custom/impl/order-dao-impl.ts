
import Promise=require("promise");
import {Order} from "../../../entity/order";
import {OrderDAO} from "../order-dao";
import {Pool, PoolConnection} from "mysql";
import mysql=require("mysql");


 export class OrderDaoImpl implements OrderDAO{

     constructor(private connection:PoolConnection){

     }

     delete(id: string): Promise<boolean> {
         return new Promise((resolve, reject) => {

             this.connection.query(`DELETE FROM purchases WHERE order_id='${id}'`,
                 (err, results) => {

                     if (err) {
                         reject(err);
                     } else {
                         resolve(results.affectedRows > 0);
                     }

                 });
         });
     }

     find(id: string): Promise<Array<Order>> {
         return new Promise((resolve, reject) => {

             this.connection.query(`SELECT * FROM purchases WHERE order_id ='${id}'`,
                 (err, results) => {

                     if (err) {
                         reject(err);
                     } else {
                         resolve(results);
                     }

                 });
         });
     }

     findAll(): Promise<Array<Order>> {
         return new Promise((resolve, reject) => {

             this.connection.query(`SELECT * FROM purchases`,
                 (err, results) => {

                     if (err) {
                         reject(err);
                     } else {
                         resolve(results);
                     }

                 });
         });
     }

     save(entity: Order): Promise<boolean> {
         return new Promise((resolve, reject) => {

             this.connection.query(`INSERT INTO purchases VALUES ('${entity.order_id}','${entity.customer_id}','${entity.item_id}','${entity.unit_price}','${entity.qty}')`,
                 (err, results) => {

                     if (err) {
                         reject(err);
                     } else {
                         resolve(results.affectedRows > 0);
                     }

                 });
         });
     }

     update(entity: Order): Promise<boolean> {
         return new Promise((resolve, reject) => {

             // console.log(`UPDATE items SET description = '${entity.description}', unit_price ='${entity.unitprice}' WHERE  item_code='${entity.itemcode}'`);
             this.connection.query(`UPDATE items SET description = '${entity.unit_price}', unit_price ='${entity.unit_price}' WHERE item_code='${entity.order_id}'`,
                 (err, results) => {

                     if (err) {
                         reject(err);
                     } else {
                         resolve(results.affectedRows > 0);
                     }

                 });
         });
     }


 }
