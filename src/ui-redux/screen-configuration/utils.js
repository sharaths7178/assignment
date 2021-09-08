import set from "lodash/set";

export const updateObjectWithComponentJsonPath = (
    screenConfig,
    componentJsonpath,
    property,
    value
  ) => {
    set(screenConfig, `${componentJsonpath}.${property}`, value);
    return screenConfig;
  };
  
  export const prepareFinalObject = (preparedFinalOject, jsonPath, value) => {
    set(preparedFinalOject, jsonPath, value);
    return preparedFinalOject;
  };