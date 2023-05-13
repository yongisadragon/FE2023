import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> Home Page </Link>
      <br />
      <Link to="/cart"> Cart </Link>
      <br />
      <Link to="/users"> User Page </Link>
      <br />
      <Link to="/products/1"> Product Notice Page_1 </Link>
      <br />
      <Link to="/products/2"> Product Notice Page_2 </Link>
      <br />
      <Link to="/products/3"> Product Notice Page_3 </Link>
      <br />
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/users/*" element={<Outlet />}>
          <Route path="" element={<Users />} />
          <Route path="coupon/" element={<UsersCoupon />} />
          <Route path="coupon/next" element={<UsersCouponNext />} />
          <Route path="notice/" element={<UsersNotice />} />
          <Route path="question/" element={<UsersQuestion />} />
        </Route>

        <Route path="/products/:id" element={<Outlet />}>
          <Route path="" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <p>여기는 메인 페이지입니다.</p>
    </>
  );
}

function Cart() {
  return (
    <>
      <h1>Cart</h1>
      <p>여기는 카트 페이지입니다.</p>
    </>
  );
}

function Users() {
  return (
    <>
      <h1>User Page</h1>
      <p>여기는 유저 페이지 입니다.</p>
      <Link to="/users/coupon"> Coupon Page </Link>
      <br />
      <Link to="/users/notice"> Notice Page </Link>
      <br />
      <Link to="/users/question"> Question Page </Link>
      <br />
    </>
  );
}

function UsersCoupon() {
  let navigate = useNavigate();
  return (
    <>
      <h1>User Coupon</h1>
      <p>유저 쿠폰</p>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </>
  );
}
function UsersCouponNext() {
  return <h1>hi</h1>;
}
function UsersNotice() {
  let navigate = useNavigate();
  return (
    <>
      <h1>User Notice</h1>
      <p>유저 공지</p>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </>
  );
}
function UsersQuestion() {
  let navigate = useNavigate();
  return (
    <>
      <h1>User Question</h1>
      <p>유저 질문</p>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </>
  );
}

function Products() {
  let navigate = useNavigate();

  return (
    <>
      <h1>Products</h1>
      <p>여기는 프로덕트 메인 페이지 입니다.</p>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </>
  );
}
function Product1Notice() {
  return (
    <>
      <h1>Products</h1>
      <p>여기는 프로덕트 노티스1 입니다.</p>
    </>
  );
}
function Product2Notice() {
  return (
    <>
      <h1>Cart</h1>
      <p>여기는 프로덕트 노티스2 입니다.</p>
    </>
  );
}
function Product3Notice() {
  return (
    <>
      <h1>Cart</h1>
      <p>여기는 프로덕트 노티스3 입니다.</p>
    </>
  );
}

export default App;
