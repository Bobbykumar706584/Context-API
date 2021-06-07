import Form from './components/Form';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import PostContextProvider from './contexts/PostContext';
import './index.css';

function App() {
  return (
    <div className="App">
      <PostContextProvider>
        <Navbar />
        <PostList />
        <Form />
      </PostContextProvider>
    </div>
  );
}

export default App;
