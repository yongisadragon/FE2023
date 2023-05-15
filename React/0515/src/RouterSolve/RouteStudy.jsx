import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  Outlet,
  useParams,
} from "react-router-dom";

function RouteStudy() {
  return (
    //Route는 적절한 경로,길을 찾아주는 역할
    <BrowserRouter>
      <Link to="/"> home </Link>
      <Link to="/one"> one </Link>
      <Link to="/two"> two </Link>
      <Link to="/three"> three </Link>
      <Link to="/blog"> blog </Link>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/one" element={<One name="licat" />} />
        <Route path="/two" element={<Two />} />
        {/* Outlet은 라우트 안에서 작성한 컴포넌트를 빼내주는애..메타몽?역할 */}
        <Route path="/three/*" element={<Outlet />}>
          <Route path="" element={<HojunIndex />} />
          <Route path="hojunone/" element={<HojunOne />} />
          <Route path="hojuntwo/" element={<HojunTwo />} />
        </Route>
        {/* /이후 숫자를 입력하면 그 숫자를 해당하는 애를 불러옴 */}
        <Route path="/blog/:id" element={<Blog />} />
        {/* 만약 숫자 대신 text이런 애가 있어도 id보다 text를 먼저 불러옴. */}
        <Route path="/blog/text" element={<Blog />} />
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
  const { id } = useParams();
  console.log(location);
  return <h1>hello Blog{id}</h1>;
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

export default RouteStudy;
