import { Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import { NewBook, NotFound, Book, BookList } from "./Pages/Export";
import "./App.css";
import BookLayout from "./Pages/BookLayout";
import BookRoutes from "./Pages/BookRoutes";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Routes>
        <Route path="/books" element={<h1>Extra Content </h1>} />
      </Routes>
      <nav>
        <ul>
          <li>
            <NavLink to="/" state="Hi">
              Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/books">Books </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/books/*" element={<BookRoutes />} />

        <Route path="/" element={<Home />} />
        {/* <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} />  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
