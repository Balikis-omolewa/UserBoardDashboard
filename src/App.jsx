import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import NavbarMenu from './components/NavBar';
import Sidebar from './components/SiderBar';
import HeaderSearch from './components/HeaderSearch';
import ListOfUser from './components/ListOfUser';

function App() {
  const styles = {
    top: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
      marginTop: "5%",
    },
  };

  return (
    <>
      <NavbarMenu />
      <div className="app-container">
        <Sidebar />
        <Container className="fixed main-content">
          <div style={styles.top}>
            <h3 style={{ fontSize: "20px", fontWeight: "500" }}>User List</h3>
            <Button className="header-button" style={{ backgroundColor: "#fe8831" }}>
              <FaPlus /> Add New User </Button>
          </div>
          <HeaderSearch />
          <ListOfUser />
        </Container>
      </div>
    </>
  );
}

export default App;
