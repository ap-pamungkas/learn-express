const { User } = require("../../models");


class UserRepository {
    async createUser(userData) {
        return await User.create(userData);
    }

    async getAll() {
        return await User.findAll();
    }

    async getUser(id) {
        return await User.findByPk(id);
    }

    async updateUser(id, userData) {
        return await User.update(userData, {
            where: { id: id }
        });
    }

    async deleteUser(id) {
        return await User.destroy({
            where: { id: id }
        });
    }
}

module.exports = UserRepository;
