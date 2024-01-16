const generateError = (message: string, code: number): never => {
  throw { message, code };
};

generateError("internal server error", 500);
