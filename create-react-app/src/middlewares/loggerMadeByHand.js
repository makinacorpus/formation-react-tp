export const loggerMadeByHand = store => next => action => {
  console.log('dispatching the action ', action)
  let result = next(action)
  console.log('next state is ', store.getState())
  return result
}
