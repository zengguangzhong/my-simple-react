export const reducer = (state = { count: 0 }, action) => {
  const count = state.count
  switch (action.type) {
    case 'INCREMENT':
      return { count: count + 1 }
    case 'DECREMENT':
      return { count: count - 1 }
    default:
      return state
  }
}
