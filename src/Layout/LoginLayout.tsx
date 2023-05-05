import { Login } from "../Components/Login";
import { ParticlesAnimation } from "../Components/Particles";

const LoginLayout = ({ children }) => {
  return (
    <div>
      <ParticlesAnimation />
      {children}
    </div>
  );
};

export default LoginLayout;
