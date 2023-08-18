import {
  BrowserRouter,
  Link,
  Navigate,
  Outlet,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="users" element={<UsersLayout />}>
          <Route index element={<UsersListPage />} />
          <Route path=":userId">
            <Route index element={<Navigate to="profile" />} />
            <Route path="*" element={<Navigate to="profile" />} />
            <Route path="profile" element={<UserProfilePage />} />
            <Route path="edit" element={<UserEditPage />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
function AppLayout() {
  return (
    <>
      <h1>App Layout</h1>
      <Outlet />
    </>
  );
}
function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/users">Users List</Link>
    </>
  );
}
function UsersLayout() {
  return (
    <>
      <h1>Users Layout</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
function UsersListPage() {
  return (
    <>
      <h1>Users List</h1>
      <ul>
        <li>
          <Link to="/users/1">Users 1</Link>
        </li>
        <li>
          <Link to="/users/2">Users 2</Link>
        </li>
        <li>
          <Link to="/users/3">Users 3</Link>
        </li>
        <li>
          <Link to="/users/4">Users 4</Link>
        </li>
        <li>
          <Link to="/users/5">Users 5</Link>
        </li>
      </ul>
    </>
  );
}
function UserProfilePage() {
  const { userId } = useParams();
  return (
    <>
      <h1>User Profile</h1>
      <h3>id: {userId}</h3>
      <ul>
        <li>
          <Link to={`/users/${userId}/edit`}>Edit</Link>
        </li>
        <li>
          <Link to="/users">Users List</Link>
        </li>
      </ul>
    </>
  );
}
function UserEditPage() {
  const { userId } = useParams();
  return (
    <>
      <h1>User Edit</h1>
      <ul>
        <li>
          <Link to={`/users/${userId}/profile`}>Profile</Link>
        </li>
        <li>
          <Link to="/users">Users List</Link>
        </li>
      </ul>
    </>
  );
}

export default App;
