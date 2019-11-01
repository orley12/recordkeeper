export function respondWithSuccess(res, status, message, additionalFields = {}) {
  return res.status(status).send({
    success: true,
    message,
    payload: Array.isArray(additionalFields)
      ? [...additionalFields] : { ...additionalFields },
  });
}

export const respondWithWarning = (res, status, message, additionalFields = {}) => res
  .status(status)
  .send({ success: false, message, payload: { ...additionalFields } });
