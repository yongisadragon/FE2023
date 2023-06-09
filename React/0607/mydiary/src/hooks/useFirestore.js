import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { useReducer } from "react";
import { appFireStore, Timestamp } from "../firebase/config";

// 우리가 받을 응답을 저장할 객체입니다. 객체이기 때문에 리듀서로 관리하겠습니다.
// 그리고 이전까지는 상태를 관리할 때 error나 isPending을 위한 useState을 따로 작성해왔지만 이번에는 useReducer로 한번에 관리해보겠습니다.

// document : 파이어스토어에 document의 생성을 요청하면 우리가 생성한 document를 반환합니다. firestore는 데이터를 객체의 형태로 저장함. 여러 문서들을 저장하는 문서의 컨테이너 컬렉션이 존재함.
// isPending: 통신중인지 아닌지 상태
// success : 요청에 대한 응답의 성공 유무

const initState = {
  document: null,
  isPending: false,
  error: null,
  isSuccess: false
};

// 전달 받는 action에 따른 state 업데이트를 위한 함수입니다.
const storeReducer = (state, action) => {
  switch (action.type) {
    case "isPending":
      return { isPending: true, document: null, isSuccess: false, error: null };
    case "addDoc":
      return {
        isPending: false,
        document: action.payload,
        isSuccess: true,
        error: null
      };
    case "error":
      return {
        isPending: true,
        document: null,
        isSuccess: false,
        error: action.payload
      };
    default:
      return state;
  }
};

// useFirestore를 밖에서 사용할때 인자로 컬렉션의 이름을 transaction을 통해 넘겨줄 것 임. 즉 데이터를 저장할 컬렉션을 인자로 합니다.
export const useFirestore = (transaction) => {
  const [response, dispatch] = useReducer(storeReducer, initState);

  //collection 함수가 실행되면 인자로 전달하는transaction, colRef는 특정 컬렉션의 참조를 반환한다. ()
  const colRef = collection(appFireStore, transaction);

  const addDocument = async (doc) => {
    dispatch({ type: "isPending" });
    try {
      const createTime = Timestamp.fromDate(new Date());
      const docRef = await addDoc(colRef, { ...doc, createTime });
      dispatch({ type: "addDoc", payload: docRef });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    }
  };

  const deleteDocument = async (id) => {
    //dispatch 함수는 action 객체를 받아와서 해당 action에 따라 상태를 업데이트하는 역할을 합니다.payload는 action이 수행될 때 필요한 데이터를 담고 있으며, reducer 함수에서 이 데이터를 활용하여 상태를 업데이트할 수 있습니다.
    dispatch({ type: "pending" });
    try {
      const docRef = await deleteDoc(doc(colRef, id));
      dispatch({ type: "deleteDoc", payload: docRef });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    }
  };

  return { addDocument, deleteDocument, response };
};
