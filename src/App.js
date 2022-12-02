import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import { NewBook, NotFound, Book, BookList } from "./Pages/Export";
import "./App.css";
import BookLayout from "./Pages/BookLayout";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/books">Books </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>

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
