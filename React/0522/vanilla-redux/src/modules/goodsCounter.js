// 액션 생성함수
export const addNumber = () => {
  return { type: "ADD" };
};

export const substractNumber = () => {
  return { type: "SUBSTRACT" };
};

//reducer에는 액션의 타입에 따른 처리가 필요. action과 reducer가 한파일 안에 같이 배치를 해서 유지하기 편하게 함

const initialState = {
  stock: 10,
  goods: 1,
};

const goodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        //ADD타입이 되면 현재 상품의 재고(stock)와 구매자의 상품(goods)개수 변경
        ...state,
        stock: state.stock - 1,
        goods: state.goods + 1,
      };
    case "SUBSTRACT":
      return {
        ...state,
        stock: state.stock + 1,
        goods: state.goods - 1,
      };
    default:
      return state;
  }
};

export default goodsReducer;
