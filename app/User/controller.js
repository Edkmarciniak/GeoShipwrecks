import User from "./User.js";
import address from "./address.schema.js";
import service from "../service/service.js";

const userController = {
  create(username, password) {
    return User.create({ username, password });
  },

  async login(username, password) {
    const loggedInUser = await User.login(username, password);
    return loggedInUser;
  },

  createService(service) {
    return service.create(service);
  },
  createAddress(address) {
    return address.create(address);
  },
};

export default userController;
