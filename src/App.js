import Form from './components/Form';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import PostContextProvider from './contexts/PostContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import EditPost from './components/EditPost';

function App() {
  return (
    <div className="App">
      <PostContextProvider>

        <BrowserRouter>
          <Switch>
          <Route exact path="/">
            <Navbar />
            <PostList />
            <Form />
          </Route>
          <Route path="/edit/:id">
            <EditPost />
          </Route>
          </Switch>  
        </BrowserRouter>
      </PostContextProvider>
    </div>
  );
}

export default App;
