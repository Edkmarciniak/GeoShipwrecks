import User from "./User.js";

const userController = {
  create(email, password) {
    const existingUser = User.findOne({ email });

    if (existingUser) {
      return Promise.reject(new Error("User already exists"));
    }

    return User.create({ email, password });
  },

  async login(email, password) {
    const loggedInUser = await User.login(email, password);
    return loggedInUser;
  },
};

export default userController;
