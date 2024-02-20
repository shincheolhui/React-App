// action : 액션(들)
// 액션 생성자 함수들:
// increase: 액션 타입이 'INCREMENT'인 액션을 생성하는 함수입니다.
// decrease: 액션 타입이 'DECREMENT'인 액션을 생성하는 함수입니다.
// changeName: 액션 타입이 'CHANGE_NAME'이고, payload라는 추가적인 정보를 가진 액션을 생성하는 함수입니다.
export const increase = () => ({ type: 'INCREMENT' });
export const decrease = () => ({ type: 'DECREMENT' });
export const changeName = (newName) => ({
  type: 'CHANGE_NAME',
  payload: newName,
});

// state : 상태(들)
// 초기 상태 initState:
// initState 객체는 애플리케이션의 초기 상태를 나타냅니다.
// number라는 속성에는 초기값으로 1이 설정되어 있습니다.
// user라는 객체에는 초기값으로 name이 '허지우'로 설정되어 있습니다.
const initState = {
  number: 1,
  user: { name: '허지우' },
};

// reducer
//  return 결과를 호출한 쪽에서 받는게 아니라..
//  return 되는 순간 UI 변경 발생!
// 리듀서 함수:
// reducer 함수는 현재 상태(state)와 액션(action)을 받아와서 새로운 상태를 반환하는 함수입니다.
// switch 문을 사용하여 액션의 타입에 따라 다르게 처리합니다.
// 'INCREMENT' 액션이 들어오면, 현재 상태를 복사하고 number를 1 증가시켜 새로운 상태를 반환합니다.
// 'DECREMENT' 액션이 들어오면, 현재 상태를 복사하고 number를 1 감소시켜 새로운 상태를 반환합니다.
// 'CHANGE_NAME' 액션이 들어오면, 현재 상태를 복사하고 user 객체도 복사한 뒤, name 속성을 새로운 이름으로 바꿔 새로운 상태를 반환합니다.
// 그 외의 액션이 들어오면 현재 상태를 그대로 반환합니다.
const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, number: state.number + 1 }; // 새로운 state return

    case 'DECREMENT':
      return { ...state, number: state.number - 1 }; // 새로운 state return

    case 'CHANGE_NAME':
      //   console.log('CHANGE_NAME의 ...state는? ', ...state);
      // state 의 user.name 을 업데이트한 새로운 state return
      return { ...state, user: { ...state.user, name: action.payload } };

    default:
      return state; // 기존 state return
  }
};

export default reducer; // store.js 는 기본적으로 reducer를 export함, 그리고 default는 하나만 가능.
