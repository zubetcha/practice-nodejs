"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCat = exports.updatePartialCat = exports.updateCat = exports.createCat = exports.readCat = exports.readAllCats = void 0;
var cats_model_1 = require("./cats.model");
var readAllCats = function (req, res) {
    try {
        var cats = cats_model_1.Cat;
        res.status(200).send({ success: true, data: { cats: cats } });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
exports.readAllCats = readAllCats;
var readCat = function (req, res) {
    1;
    try {
        var params_1 = req.params;
        var cat = cats_model_1.Cat.find(function (cat) { return cat.id === parseInt(params_1.id); });
        res.status(200).send({ success: true, data: { cat: cat } });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
exports.readCat = readCat;
var createCat = function (req, res) {
    try {
        var data = req.body;
        var newCat = __assign({ id: cats_model_1.Cat.length + 1 }, data);
        cats_model_1.Cat.push(__assign({ id: cats_model_1.Cat.length + 1 }, data));
        res.status(200).send({ success: true, data: { cat: newCat } });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
exports.createCat = createCat;
var updateCat = function (req, res) {
    try {
        var params_2 = req.params;
        var data_1 = req.body;
        var result_1;
        cats_model_1.Cat.forEach(function (cat) {
            if (cat.id === parseInt(params_2.id)) {
                cat = __assign({ id: cat.id }, data_1);
                result_1 = cat;
            }
        });
        res.status(200).send({ success: true, data: { cat: result_1 } });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
exports.updateCat = updateCat;
var updatePartialCat = function (req, res) {
    try {
        var params_3 = req.params;
        var data_2 = req.body;
        var result_2;
        cats_model_1.Cat.forEach(function (cat) {
            if (cat.id === parseInt(params_3.id)) {
                cat = __assign(__assign({}, cat), data_2);
                result_2 = cat;
            }
        });
        res.status(200).send({ success: true, data: { cat: result_2 } });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
exports.updatePartialCat = updatePartialCat;
var deleteCat = function (req, res) {
    try {
        var params_4 = req.params;
        var cat = cats_model_1.Cat.find(function (_a) {
            var id = _a.id;
            return id === parseInt(params_4.id);
        });
        var newCat = cats_model_1.Cat.filter(function (cat) { return cat.id !== parseInt(params_4.id); });
        res.status(200).send({ success: true, data: { cat: cat } });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
exports.deleteCat = deleteCat;
//# sourceMappingURL=cats.service.js.map