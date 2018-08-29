export default function({ dispatch }) {
  return next => action => {
    // If action does not have payload
    // or, the payload dose not have a .then property
    // we dont care it , send it on
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    // Make sure the action's promise resolves
    action.payload
      .then(function(response) {
        const newAction = {...action, payload: response};
        dispatch(newAction);
      })
  };
}