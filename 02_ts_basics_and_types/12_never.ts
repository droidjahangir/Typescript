// Utility function which build error function
function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

generateError('An error occured', 500);
