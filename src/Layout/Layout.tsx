import { Aside } from "../Menu/Aside";

const Layout = ({ children }) => {
  return (
    <div>
      <Aside />
      {children}
    </div>
  );
};

export default Layout;
