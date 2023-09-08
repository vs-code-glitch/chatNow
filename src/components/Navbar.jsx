import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, signInWithGoogle, logout } = UserAuth();

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="containerWrap flex justify-between">
        <a className="btn btn-ghost normal-case text-xl">chatNow</a>
        {currentUser ? (
          <button onClick={handleLogout} className="btn btn-primary">
            Logout
          </button>
        ) : (
          <button onClick={handleLogin} className="btn btn-primary">
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
