// import { createStore } from "redux";

// const initialState = {
//   count: 0,
//   stage: 1,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "stage/asign":
//       return { ...state, stage: Number(action.payload) };
//     case "count/inc":
//       return { ...state, count: state.count + Number(action.payload) };
//     case "count/dec":
//       return { ...state, count: state.count - Number(action.payload) };
//     case "store/res":
//       return initialState;
//     default:
//       return state;
//   }
// };

// function App() {
//   const store = createStore(reducer);
//   return (
//     <>
//       <h1>{state.count}</h1>
//       <input
//         onChange={(e) =>
//           store.dispatch({ type: "stage/asign", payload: e.target.value })
//         }
//         value={state.stage}
//         type="text"
//       />
//       <button
//         onClick={() =>
//           store.dispatch({ type: "count/dec", payload: state.stage })
//         }
//       >
//         -{" "}
//       </button>
//       <button
//         onClick={() =>
//           store.dispatch({ type: "count/inc", payload: state.stage })
//         }
//       >
//         +{" "}
//       </button>
//       <button onClick={() => store.dispatch({ type: "store/res" })}>
//         reset{" "}
//       </button>
//     </>
//   );
// }

// export default App;

//-----------------------------------------------------------------------------

// import { useReducer } from "react";

// const initialState = {
//   count: 0,
//   stage: 1,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "stage":
//       return { ...state, stage: Number(action.payload) };
//     case "inc":
//       return { ...state, count: state.count + Number(action.payload) };
//     case "dec":
//       return { ...state, count: state.count - Number(action.payload) };
//     case "res":
//       return initialState;
//     default:
//       return state;
//   }
// };

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       <h1>{state.count}</h1>
//       <input
//         onChange={(e) => dispatch({ type: "stage", payload: e.target.value })}
//         value={state.stage}
//         type="text"
//       />
//       <button onClick={() => dispatch({ type: "dec", payload: state.stage })}>
//         -{" "}
//       </button>
//       <button onClick={() => dispatch({ type: "inc", payload: state.stage })}>
//         +{" "}
//       </button>
//       <button onClick={() => dispatch({ type: "res" })}>reset </button>
//     </>
//   );
// }

// export default App;
