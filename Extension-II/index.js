const initialValue = { selectedValue: 1, maxValue: 1, total: 0 };

const reducer = (state = initialValue, { type, value = 1 }) => {
  switch (type) {
    case "maxValue":
      return { ...state + value <= state.maxValue };
    case "selectedValue":
      return { ...state, selectedValue: value };
    case "inc":
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

function maxValue(value) {
  return store.dispatch({ type: "maxValue", value })
}
console.log(maxValue)

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



