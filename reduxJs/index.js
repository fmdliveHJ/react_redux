const { createStore } = require("redex");

//state가 새로 찍힐때마다 알려줌
//액션을 받아서 새로운 state를 만들어줌 새로운 것으로 대체

const reducer = (prevState, action) => {
  switch (action.type) {
    case "CHANGE_COMP_A":
      return {
        //이전 객체를 유지하면서 새로운 객체 변경
        ...prevState,
        compA: action.data,
      };
    default:
      return prevState;
  }
};

//리팩토링
const initialState = {
  compA: "a",
  compB: "b",
};

const store = createStore(reducer, initialState);

store.subscribe(() => {
  // react-redux 안에 들어있음
  console.log("changed"); // 화면 바꿔주는 코드 여기서
});

//store.getState()를 하면 state 가 나옴
console.log(store.getState());

//이함수는 액션을 동적으로 만드는 동적 크리에이터
const changeCompA = (data) => {
  return {
    //여기 객체가 액션 (동적으로 만듬 )
    type: "CHANGE_COMP_A",
    data,
  };
};

// const changeCompA = {
//   //type은 액션의 이름
//   type: 'CHANGE_COMP_A',
//   data: ''
// }
changeCompA("b");

// store.dispatch({
//   type: 'CHANGE_COMP_A',
//   data: 'b',
// });

store.dispatch(changeCompA("b"));
