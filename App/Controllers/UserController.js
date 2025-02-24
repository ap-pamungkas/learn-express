const UserRepository = require('../Repositories/UserRepository');

class UserController {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async getUser(req, res) {
        try {
            const users = await this.userRepository.getAll();
            if (users.length === 0) {
                return res.status(404).json({ message: "No users found" });
            }
            return res.status(200).json({ data: users });
        } catch (error) {
            return res.status(500).json({ message: "Error fetching users", error: error.message });
        }
    }

    async createUser(req, res) {
        try {
            const user = await this.userRepository.createUser(req.body);
            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json({ message: "Error creating user", error: error.message });
        }
    }
}

module.exports = new UserController(); // Pastikan diekspor sebagai instance
