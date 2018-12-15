import UserController from './controller';
import * as httpStatus from 'http-status';

const sendResponse = function(res, statusCode, data) {
    res.status(statusCode).json({'result': data});
};

class UserRoutes {

    constructor(app) {
        this.getRoutes(app);
    }

    async getAll(req, res) {
        const response = await UserController.getAll();
        if (response) sendResponse(res, httpStatus.OK, response);
        else sendResponse(res, httpStatus.BAD_REQUEST, `Problema ao buscar usuarios`);
        // .then((users) => sendResponse(res, httpStatus.OK, users))
        // .catch((error) => sendResponse(res, httpStatus.BAD_REQUEST, `Problema ao buscar usuarios : ${error}`));
    }

    async getById(req, res) {
        const id = {_id: req.params.id }
        if (!id) {
            sendResponse(res, httpStatus.OK, 'Usuário não foi encontrado');
        } else {
            try {
                const response = await UserController.getById(id);
                if (response)
                    sendResponse(res, httpStatus.OK, response)
                else 
                    sendResponse(res, httpStatus.OK, "Usuário não encontrado");
            } catch (err) {
                sendResponse(res, httpStatus.BAD_REQUEST, `Problema ao buscar usuarios : ${err}`);
            }
            // UserController
            // .getById(id)
            // .then((user) => sendResponse(res, httpStatus.OK, user))
            // .catch((error) => console.log(`Erro: ${error}`));
        }
    }

    async getByEmail(req, res) {
        const userEmail = { email: req.params.email }
        if (!userEmail) {
            sendResponse(res, httpStatus.OK, 'Usuário não foi encontrado');
        } else {
            try {
                const response = await UserController.getByEmail(userEmail.email);
                if (response)
                    sendResponse(res, httpStatus.OK, response)
                else 
                    sendResponse(res, httpStatus.OK, "Usuário não encontrado");
            } catch (err) {
                sendResponse(res, httpStatus.BAD_REQUEST, `Problema ao buscar usuarios : ${err}`);
            }
        }
    }

    create(req, res) {
        const user = req.body;
        UserController
        .create(user)
        .then(user => sendResponse(res, httpStatus.CREATED, "Usuario criado com sucesso"))
        .catch((error) => sendResponse(res, httpStatus.CONFLICT, `Problema ao inserir o usuario : ${error}`));
    }

    update(req, res) {
        const id = {_id: req.params.id}
        const updateUser = req.body;
        if (!id) {
            sendResponse(res, httpStatus.OK, 'Usuário não foi encontrado');
        } else {
            UserController
            .update(id, updateUser)
            .then((user) => sendResponse(res, httpStatus.OK, "Usuário atualizado"))
            .catch((error) => sendResponse(res, httpStatus.BAD_REQUEST, "Problema ao atualizar o usuario"));
        }
    }

    delete(req, res) {
        const id = {_id: req.params.id}
        if (!id) {
            sendResponse(res, httpStatus.OK, 'Usuário não foi encontrado');
        } else {
            UserController
            .delete(id)
            .then((result) => sendResponse(res, httpStatus.OK, result))
            .catch((error) => sendResponse(res, httpStatus.BAD_REQUEST, "Problema ao deletar o usuario"));
        }
    }

    private getRoutes(app) {
       app.route('/api/v1/users').get(this.getAll);
       app.route('/api/v1/users/:id').get(this.getById);
       app.route('/api/v1/users').post(this.create);
       app.route('/api/v1/users/:id').put(this.update);
       app.route('/api/v1/users/:id').delete(this.delete);
       app.route('/api/v1/users/email/:email').get(this.getByEmail);
    }
}


export default UserRoutes;