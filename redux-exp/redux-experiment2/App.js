import { Provider, useSelector } from 'react-redux'; // <--- Check this line!
import { store } from './app/store';
import { BookmarkList } from './features/bookmarks/bookmarkList';
import { LoginScreen } from './features/user/loginScreen';

export default function App() {
  return (
    <Provider store={store}>
      <RootComponent />
    </Provider>
  );
}

// We create a sub-component so we can use useSelector inside the Provider
function RootComponent() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  
  return isLoggedIn ? <BookmarkList /> : <LoginScreen />;
}