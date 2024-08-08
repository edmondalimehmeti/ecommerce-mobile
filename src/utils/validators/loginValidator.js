const loginValidator = {
  email: {
    presence: {
      allowEmpty: false,
      message: 'Email is required',
    },
    email: {
      message: 'Email is not valid',
    },
  },
  password: {
    presence: {
      allowEmpty: false,
      message: 'Password is required',
    },
  },
};

export default loginValidator;
