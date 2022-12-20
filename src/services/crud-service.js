class CrudService {
    constructor(repository){
        this.repository = repository;
    }

    async create(data){
        try {
            const response = await this.repository.create(data);
            return response;
        } catch (error) {
            console.log("Error in Crud Repository");
            console.log(error);
            throw {error};
        }
    }

    async get(id){
        try {
            const response = await this.repository.get(id);
            return response;
        } catch (error) {
            console.log("Error in Crud Repository");
            console.log(error);
            throw {error};
        }
    }

    async update(data, id){
        try {
            const response = await this.repository.update(data, id);
            return response;
        } catch (error) {
            console.log("Error in Crud Repository");
            console.log(error);
            throw {error};
        }
    }

    async delete(id){
        try {
            const response = await this.repository.delete(id);
            return response;
        } catch (error) {
            console.log("Error in Crud Repository");
            console.log(error);
            throw {error};
        }
    }
}

module.exports = CrudService;