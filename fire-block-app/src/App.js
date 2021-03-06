
import AppRouter from './app-router/AppRouter';
import AuthContextProvider from "./contexts/AuthContext";

import './App.css';

function App() {
  return (
    <div>
      <AuthContextProvider>

        <AppRouter />

        </AuthContextProvider>
      
    </div>
  );
}

export default App;
