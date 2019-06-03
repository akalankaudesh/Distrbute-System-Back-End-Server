import {ItemDTO} from "../dto/item-dto";
import {pool} from "../db/db-pool";
import {ItemDAO} from "../dao/custom/item-dao";
import {DAOTypes, getDAO} from "../dao/dao-factory";
import {CustomerDAO} from "../dao/custom/customer-dao";
import {OrderMainDTO} from "../dto/order-dto";
import Promise = require("promise");
import {OrderDAO} from "../dao/custom/order-dao";

export class OrderBo{

    findAllOrders(): Promise<Array<OrderMainDTO>>{

        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const OrderDAO = <OrderDAO> getDAO(DAOTypes.ORDER, connection);

                    const promise = OrderDAO.findAll();
                    promise.then(orders => {
                        resolve(orders);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });

    }

    // FindItem(itemcode:string):Promise<Array<ItemDTO>>{
    //     return new Promise((resolve,reject)=>{
    //         pool.getConnection((err,connection)=>{
    //             if (err){
    //                 reject (err);
    //             } else {
    //                 const itemDAO=<ItemDAO>getDAO(DAOTypes.ITEM,connection);
    //                 const promise=itemDAO.find(itemcode);
    //                 promise.then(item=>{
    //                     resolve(item);
    //                     pool.releaseConnection(connection);
    //                 }).catch(error=>{
    //                     reject(error);
    //                     pool.releaseConnection(connection);
    //                 });
    //
    //             }
    //         });
    //     });
    // }

    SaveOrder(order:OrderMainDTO):Promise<boolean>{
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,connection)=>{
                if (err){
                    reject(err);
                } else {
                    const OrderDAO=<OrderDAO>getDAO(DAOTypes.ORDER, connection);
                    const promise=OrderDAO.save(order);
                    promise.then(result=>{
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });
                }
            });
        });
    }

    // UpdateItem(item:ItemDTO):Promise<boolean>{
    //     return new Promise((resolve,reject)=>{
    //         pool.getConnection((err,connection)=>{
    //             if (err){
    //                 reject(err);
    //             } else {
    //                 const itemDAO=<ItemDAO>getDAO(DAOTypes.ITEM,connection);
    //                 const promise=itemDAO.update(item);
    //                 promise.then(result=>{
    //                     resolve(result);
    //                     pool.releaseConnection(connection);
    //                 }).catch(error=>{
    //                     reject(error);
    //                     pool.releaseConnection(connection);
    //                 });
    //             }
    //         });
    //     });
    // }

    DeleteOrder(order_id:string):Promise<boolean>{
        return new Promise((resolve,reject)=>{
            pool.getConnection((err, connection)=>{
                if (err){
                    reject(err);
                } else {
                    const OrderDAO=<OrderDAO>getDAO(DAOTypes.ORDER,connection);
                    const promise=OrderDAO.delete(order_id);
                    promise.then(result=>{
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });
                }
            });
        });
    }
    // countItems():Promise<number>{
    //     return new Promise((resolve, reject) => {
    //         pool.getConnection((err, connection) =>{
    //             if (err){
    //                 reject(err);
    //             } else {
    //                 const itemDAO=<CustomerDAO>getDAO(DAOTypes.ITEM,connection );
    //                 const promise=itemDAO.count();
    //                 promise.then(count=>{
    //                     resolve(count);
    //                 }).catch(err => {
    //                     reject(err);
    //                 });
    //             }
    //         } );
    //     });
    // }
}
