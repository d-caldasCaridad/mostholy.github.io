import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Typography } from "antd";
import useLogout from "../hooks/useLogout";

const { Title } = Typography;

const Home = () => {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate('/LinkPage');
  }

  return (
    <section>
      <Typography>
        <Title level={2}>¡Estás conectado!</Title>
      </Typography>
      <br />
      <Typography>
        <Title level={3}>Índice</Title>
      </Typography>
      <br />
      <ul>
        <Typography>
          <Title level={4}>Ir a la página para:</Title>
        </Typography>
        <li><Link to="/Admin">Administrador</Link></li>
        <li><Link to="/Editor">Editor</Link></li>
        <li><Link to="/UserProfile">Perfil de usuario</Link></li>
        <li><Link to="/Lounge">Salón</Link></li>
        <li><Link to="/LinkPage">Página de enlaces</Link></li>
      </ul>

      <div className="flexGrow">
        <Button onClick={signOut}>Cerrar sesión</Button>
      </div>
    </section>
  );
};

export default Home;
