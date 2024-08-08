const createAccountValidator = {
  firstName: {
    presence: {
      allowEmpty: false,
      message: 'First name is required',
    },
  },
  lastName: {
    presence: {
      allowEmpty: false,
      message: 'Last name is required',
    },
  },
  email: {
    presence: {
      allowEmpty: false,
      message: 'Email is required',
    },
    email: {
      message: 'Email is not valid',
    },
  },
  phone: {
    presence: {
      allowEmpty: false,
      message: 'Phone number is required',
    },
  },
};

export default createAccountValidator;
