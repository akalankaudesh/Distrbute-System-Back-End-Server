"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var ItemDaoImpl = /** @class */ (function () {
    function ItemDaoImpl(connection) {
        this.connection = connection;
    }
    ItemDaoImpl.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("DELETE FROM items WHERE item_code='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    ItemDaoImpl.prototype.find = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM items WHERE item_code='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    ItemDaoImpl.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM items", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    ItemDaoImpl.prototype.save = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("INSERT INTO items VALUES ('" + entity.item_code + "','" + entity.description + "','" + entity.unit_price + "','" + entity.qty + "')", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    ItemDaoImpl.prototype.update = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // console.log(`UPDATE items SET description = '${entity.description}', unit_price ='${entity.unitprice}' WHERE  item_code='${entity.itemcode}'`);
            _this.connection.query("UPDATE items SET description = '" + entity.description + "', unit_price ='" + entity.unit_price + "' WHERE item_code='" + entity.item_code + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    ItemDaoImpl.prototype.count = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT COUNT(*) as count FROM items ", function (error, results) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(results[0].count);
                }
            });
        });
    };
    return ItemDaoImpl;
}());
exports.ItemDaoImpl = ItemDaoImpl;
