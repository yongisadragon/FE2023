// 액션 생성함수
export const sale = () => {
  return { type: "SALE" };
};

export const sold = () => {
  return { type: "SOLD_OUT" };
};

//reducer에는 액션의 타입에 따른 처리가 필요. action과 reducer가 한파일 안에 같이 배치를 해서 유지하기 편하게 함

const initialState = {
  message: "판매중!",
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SALE":
      return {
        //ADD타입이 되면 현재 상품의 재고(stock)와 구매자의 상품(goods)개수 변경
        ...state,
        message: "판매중!",
      };
    case "SOLD_OUT":
      return {
        ...state,
        message: "매진임!",
      };
    default:
      return state;
  }
};

export default stockReducer;
