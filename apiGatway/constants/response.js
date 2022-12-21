let errors = {
    404: {
      status: 404,
      errorCode: "NOT_FOUND",
      error: "Not Found",
    },
    500: {
      status: 500,
      errorCode: "INTERNAL_ERROR",
      error: "We are Working on it please try after some time",
    },
    400: {
      status: 400,
      errorCode: "CREDENTIALS_NOT_PROVIDED",
      error: "Credentials Not Provided",
    },
    11000: {
      status: 500,
      errorCode: "Registered User",
      error: "You have already registered Please Login for continue",
    },
    101: {
      status: 505,
      errorCode: "Wrong Credentials",
      error: "Your account is not registered with us, Please Registered First",
    },
    103: {
      status: 505,
      errorCode: "Password not match",
      error: "Please Enter Correct Credentials",
    }
  };
  
  export const response = {
    successResponse: (res, code, resData, message) => {
      res.status(200).json({
        status: "SUCCESS",
        code,
        data: resData,
        message,
      });
    },
  
    notAvailable: (res, code, resData, message) => {
      res.status(200).json({
        status: "NOT_FOUND",
        code,
        data: resData,
        message,
      });
    },
    badRequest: (res, code, resData) => {
      res.status(400).json({
        status: "Failure",
        code: code,
        message: resData,
      });
    },
    conflictErrorMsgResponse: (res, code, resData) => {
      res.status(409).json({
        status: "ERROR",
        code: code,
        message: resData,
      });
    },
    somethingErrorMsgResponse: (res, code, resData) => {
      res.status(200).json({
        status: "ERROR",
        code: code,
        message: resData,
      });
    },
    errorMessageResponse: (res, code, resData) => {
      res.status(200).json({
        status: "ERROR",
        code: code,
        message: resData,
      });
    },
    errorResponse: (res, errName) => {
      log.debug(errors[errName]);
      res.status(errors[errName].status).json({
        error: errors[errName].error,
        errorCode: errors[errName].errorCode,
      });
    },
  };
  