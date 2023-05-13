import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
      <Link to="/one"> one </Link>
      <Link to="/two"> two </Link>
      <Link to="/three"> three </Link>
      <Link to="/blog/1"> four_1 </Link>
      <Link to="/blog/2"> four_2 </Link>
      <Link to="/blog/3"> four_3 </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/one" element={<One name="licat" />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

function Index() {
  return <h1>hello world0</h1>;
}

function One({ name }) {
  return <h1>{name} world1</h1>;
}

function Two() {
  return <h1>hello world2</h1>;
}

function Three() {
  return <h1>hello world3</h1>;
}

function Blog() {
  const location = useLocation();
  // console.log(location);
  // pathname은 /blog/1 과 같이 나옴 [2]는 세번째 인자 즉, id값.
  // location을 쓰면 pathname을 써야하는 귀찮음이 있다. useParams훅을 이용해서 파라미터를 바로 뽑아올 수 있음.
  const path = location.pathname.split("/")[2];
  console.log(path);
  const param = useParams();
  console.log(param);
  return <h1>hello Blog</h1>;
}

export default App;
