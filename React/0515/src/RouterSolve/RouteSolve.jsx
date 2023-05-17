import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  Outlet,
  useParams,
  NavLink,
} from "react-router-dom";

export default function RouteSolve() {
  const productIds = [1, 2, 3, 4, 5];

  return (
    //Route는 적절한 경로,길을 찾아주는 역할
    <BrowserRouter>
      <h1>퀴즈</h1>

      <NavLink
        to="/"
        style={({ isActive }) => ({
          textDecoration: isActive ? "none" : undefined,
          color: isActive ? "red" : "yellow",
        })}
      >
        홈
      </NavLink>
      {productIds.map((productId) => (
        <Link to={`/products/${productId}`}>상품{productId}</Link>
      ))}

      <Link to="/users">유저스</Link>
      <Link to="/cart">카트</Link>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/products/:id/notice" element={<ProductNotice />} />
        <Route path="/cart" element={<Cart name="yong" />} />
        {/* 라우트로 라우트를 감싸주고나면, 어디에다가 Outlet을 놔도 갸(<div>쿠폰</div>)갸 갸(<Outlet />)로 렌더된다. element 중괄호 이하가 -> Outlet으로 흘러들어가서 렌더됨. 참고로 여기서 Oulet은 Users 컴포 안에 있음.*/}
        <Route path="/users" element={<Users />}>
          <Route path="/users/coupon" element={<div>쿠폰</div>} />
          <Route path="/users/question" element={<div>퀘스션</div>} />
          <Route path="/users/notice" element={<div>노티스</div>} />
        </Route>
        {/* 순서는 Route 경로 설정을 먼저 다해줌. 그리고 링크를 생성하는게 좋은 것
        같다. */}
      </Routes>
    </BrowserRouter>
  );

  function Homepage() {
    return <h1>홈페이지</h1>;
  }

  function Cart({ name }) {
    return <h1>{name}Cart입니다</h1>;
  }

  function Users() {
    return (
      <div>
        <Link to="/users/coupon">쿠폰</Link> <br />
        <Link to="/users/question">퀘스션</Link> <br />
        <Link to="/users/notice">노티스</Link> <br />
        <h1>여기는 Users</h1>
        <Outlet />
      </div>
    );
  }

  function Three() {
    return <h1>hello world3</h1>;
  }

  function Products() {
    // const pram = useParams();
    // console.log(pram); // {id: '각 해당 id'} 그러므로 const {id} = {id:'?'}꼴이 되므로 구조분해 할당이 된다.
    const { id } = useParams();
    return (
      <div>
        {/* ./는 현재 경로에서 ~ 하겠다라는 의미, 매우 자주 씀 */}
        <h1>hello Products{id}</h1>
        <Link to="./notice">Notice</Link>
      </div>
    );
  }
  function ProductNotice() {
    const { id } = useParams();
    return <h1>hello Products{id} Notice</h1>;
  }

  function HojunIndex() {
    const location = useLocation();
    console.log(location);
    return <h1>hello Hojun index</h1>;
  }

  function HojunOne() {
    const location = useLocation();
    console.log(location);
    return <h1>hello Hojun 1</h1>;
  }

  function HojunTwo() {
    const location = useLocation();
    console.log(location);
    return <h1>hello Hojun 2</h1>;
  }
}
