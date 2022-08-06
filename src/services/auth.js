const bcrypt = require('bcryptjs');

const AuthService = class {
    constructor(UserService) {
        this.userService = UserService;
    }

    async login(email, password) {
        const user = await this.userService.getByEmail(email)
        if (!user) {
            throw new Error('User not found')
        } else if(await bcrypt.compare(password, user.password) || !user) {
            return user.toObject();
        } else {
            throw new Error('Unauthorized')
        }   
    }
}

module.exports = AuthService;