"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_pool_1 = require("../db/db-pool");
var dao_factory_1 = require("../dao/dao-factory");
var Promise = require("promise");
var OrderBo = /** @class */ (function () {
    function OrderBo() {
    }
    OrderBo.prototype.findAllOrders = function () {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var OrderDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDER, connection);
                    var promise = OrderDAO.findAll();
                    promise.then(function (orders) {
                        resolve(orders);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
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
    OrderBo.prototype.SaveOrder = function (order) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var OrderDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDER, connection);
                    var promise = OrderDAO.save(order);
                    promise.then(function (result) {
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
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
    OrderBo.prototype.DeleteOrder = function (order_id) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var OrderDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDER, connection);
                    var promise = OrderDAO.delete(order_id);
                    promise.then(function (result) {
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    return OrderBo;
}());
exports.OrderBo = OrderBo;
