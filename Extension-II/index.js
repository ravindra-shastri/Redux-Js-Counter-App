const initialValue = { selectedValue: 1, maxValue: 15, total: 0 };

const reducer = (state = initialValue, { type, value = 1 }) => {
  switch (type) {
    case "maxValue":
      return { ...state, maxValue: value };
    case "selectedValue":
      return { ...state, selectedValue: value };
    case "inc":
      // Check for max value
      if (state.total + state.selectedValue > state.maxValue) return { ...state };
      return { ...state, total: state.total + state.selectedValue };
    case "dec":
      return { ...state, total: state.total - state.selectedValue };
    case "reset":
      return initialValue;
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

html = document.getElementById('counting');
html.innerHTML = store.getState().total;

store.subscribe(() => { html.innerHTML = store.getState().total })

function handleMaxValue(value) {
  return store.dispatch({ type: "maxValue", value })
}

function selectValue(value) {
  return store.dispatch({ type: "selectedValue", value });
}
function dec() {
  return store.dispatch({ type: "dec" });
}

function inc() {
  return store.dispatch({ type: "inc" });
}

function reset() {
  return store.dispatch({ type: "reset" });
}

