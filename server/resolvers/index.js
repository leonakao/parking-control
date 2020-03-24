const service = require('../service');

module.exports = {
    Query: {
        async vehicles(_, args){
            return await service.getVehiclesByFinished(args.finished);
        }
    },
    Mutation: {
        async saveVehicle(_, args){
            const vehicle = args.vehicle;
            const id = await service.saveVehicle(vehicle);
            return await service.getVehicleById(id);
        }
    }
};