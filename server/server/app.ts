import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import Database from './config/db';
import UserRoutes from './modules/user/routes';
import ProductRoutes from './modules/product/routes';

class App {
    private _app: express.Application;
    private _morgan: morgan.Morgan;
    private _bodyParser;
    private _database: Database;

    constructor() {
        this._app = express();
        this.middleware();
        this.routes();
        this._database = new Database();
        this.dataBaseConnection();
    }

    dataBaseConnection() {
        this._database.createConnection();
    }

    closeDataBaseConnection(message, callback) {
        this._database.closeConnection(message, callback);
    }

    middleware() {
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    routes() {
        this.app.route('/').get((req, res) => res.status(200).json({ "message": "Hello World" }));
        new UserRoutes(this.app);
        new ProductRoutes(this.app);
    }

    get app() {
        return this._app;
    }
}

export default new App();
