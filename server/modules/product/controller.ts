import Product from './repository';

class ProductController {

    constructor() {}

    getAll() {
        return Product.find({});
    }

    getById(id) {
        return Product.findById(id);
    }


    create(product) {
        return Product.create(product);
    }

    update(id, product) {
        const updateProduct = {
            name: product.name,
            valor: product.valor,
            descricao: product.descricao
        }
        return Product.findByIdAndUpdate(id, updateProduct);
    }

    delete(id) {
        return Product.remove(id);
    }

}

export default new ProductController();