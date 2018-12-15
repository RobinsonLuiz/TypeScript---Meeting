import ProductController from './controller';
import * as httpStatus from 'http-status';

const sendResponse = function(res, statusCode, data) {
    res.status(statusCode).json({'result': data});
};


class ProductRoutes {

    constructor(app) {
        this.getRoutes(app);
    }

    async getAll(req, res) {
        try {
            const response = await ProductController.getAll();
            if (response) sendResponse(res, httpStatus.OK, response);
            else sendResponse(res, httpStatus.OK, `Nenhum Produto encontrado`);
        } catch (err) {
            sendResponse(res, httpStatus.OK, `Problema ao buscar produtos`);
        }
    }

    async getById(req, res) {
        const id = {_id: req.params.id }
        if (!id) {
            sendResponse(res, httpStatus.OK, 'Produto não foi encontrado');
        } else {
            try {
                const response = await ProductController.getById(id);
                if (response)
                    sendResponse(res, httpStatus.OK, response)
                else 
                    sendResponse(res, httpStatus.OK, "Produto não encontrado");
            } catch (err) {
                sendResponse(res, httpStatus.BAD_REQUEST, `Problema ao buscar produtos : ${err}`);
            }
        }
    }

    async create(req, res) {
        try {
            const user = req.body;
            const created = await ProductController.create(user);
            if (created)
                sendResponse(res, httpStatus.CREATED, "Produto criado com sucesso");
        } catch (err) {
            sendResponse(res, httpStatus.BAD_REQUEST, "Problema ao criar o produto");
        }
    }

    async update(req, res) {
        const id = {_id: req.params.id}
        const updateProduct = req.body;
        if (!id) {
            sendResponse(res, httpStatus.OK, 'Produto não foi encontrado');
        } else {
            try {
                const updated = await ProductController.update(id, updateProduct);
                if (updated)
                    sendResponse(res, httpStatus.OK, "Produto atualizado");
            } catch (err) {
                sendResponse(res, httpStatus.BAD_REQUEST, "Problema ao atualizar o produto");
            }
        }
    }

    async delete(req, res) {
        const id = {_id: req.params.id}
        if (!id) {
            sendResponse(res, httpStatus.OK, 'Produto não foi encontrado');
        } else {
            try {
                const deleted = await ProductController.delete(id)
                if (deleted)
                    sendResponse(res, httpStatus.OK, "Produto deletado com sucesso");
            } catch (err) {
                sendResponse(res, httpStatus.BAD_REQUEST, "Problema ao excluir o produto");
            }
        }
    }

    private getRoutes(app) {
        app.route('/api/v1/products').get(this.getAll);
        app.route('/api/v1/products/:id').get(this.getById);
        app.route('/api/v1/products').post(this.create);
        app.route('/api/v1/products/:id').put(this.update);
        app.route('/api/v1/products/:id').delete(this.delete);
    }
}

export default ProductRoutes; 