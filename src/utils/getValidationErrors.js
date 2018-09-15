/* eslint-disable no-param-reassign */
export default (errors) => {
  console.log(errors);

  const errObject = errors.reduce((accumelator, error) => {
    if (!accumelator[error.param]) {
      accumelator[error.param] = error.msg;
    }
    return accumelator;
  }, {});

  return errObject;
};
