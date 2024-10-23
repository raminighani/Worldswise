import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import Map from "../components/Map";
import User from "../components/User";
import { useAuth } from "../contexts/FakeAuthContext";
import Homepage from "./Homepage";
function AppLayout() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      {isAuthenticated ? (
        <div className={styles.app}>
          <Sidebar />
          <Map />
          <User />
        </div>
      ) : (
        <Homepage />
      )}
    </>
  );
}

export default AppLayout;
