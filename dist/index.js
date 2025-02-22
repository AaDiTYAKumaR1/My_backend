"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const error_1 = require("./middleware/error");
const ErrorHandler_1 = __importDefault(require("./utils/ErrorHandler"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.post('/data', (req, res) => {
    const data = req.body;
    res.header("mydata", "aditya");
    res.json({
        message: 'Data received successfully',
    });
});
app.get('/about', (0, error_1.TryCatch)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    next(new ErrorHandler_1.default(404, "Page not found"));
})));
app.use(error_1.ErrorMiddleware);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
