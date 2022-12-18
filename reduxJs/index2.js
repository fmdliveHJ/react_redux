const { createStore } = require("redux");

const reducer = (prevState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...prevState,
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...prevState,
        user: null,
      };
    case "ADD_POST":
      return {
        posts: [...prevState.posts, action.data],
      };
    default:
      return prevState;
  }
};

//접속 할때 정보
const initialState = {
  user: null,
  isLoggingIn: true,
  posts: [],
  comments: [],
  favorites: [],
  history: [],
  likes: [],
  followers: [],
};

//객체들을 만들고 싶을때 두번째 인수에 넣어줌
const store = createStore(reducer, initialState);

console.log("1st", store.getState());

//state를 어떻게 바꾸고 싶은지, 로그인을 하면 사용자 정보를 넣고 싶음
const logIn = (data) => {
  return {
    // action
    type: "LOG_IN",
    data,
  };
};

const logOut = () => {
  return {
    // action
    type: "LOG_OUT",
  };
};

const addPost = (data) => {
  return {
    type: "ADD_POST",
    data,
  };
};

store.dispatch({
  type: "LOG_IN_REQUEST",
});

store.dispatch(
  logIn({
    id: 1,
    name: "zerocho",
    admin: true,
  })
);
console.log("2nd", store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: "안녕하세요. 리덕스",
  })
);
console.log("3rd", store.getState());
store.dispatch(
  addPost({
    userId: 1,
    id: 2,
    content: "두번째 리덕스",
  })
);
console.log("4th", store.getState());

store.dispatch(logOut());
console.log("5th", store.getState());
