class CrudRepository{
    constructor(model){
        this.model = model
    }

    async create(data){
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Error in Crud repo");
            console.log(error);
            throw {error};
        }
    }

    async get(modelid){
        try {
            const result = await this.model.findByPk(modelid);
            return result;
        } catch (error) {
            console.log("Error in Crud repo");
            console.log(error);
            throw {error};
        }
    }

    async update(data, modelid){
        try {
            const result = await this.model.update(data, {where: {
                id: modelid
            }});
            return result;
        } catch (error) {
            console.log("Error in Crud repo");
            console.log(error);
            throw {error};
        }
    }

    async delete(modelid){
        try {
            await this.model.destroy({where: {id: modelid}});
            return true;
        } catch (error) {
            console.log("Error in Crud repo");
            console.log(error);
            throw {error};
        }
    }
}

module.exports = CrudRepository;