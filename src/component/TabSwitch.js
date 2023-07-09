import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Login from './Login';
import AdminLogin from './Admin/AdminLogin';

function TabSwitch() {
  return (
    <>
    <Tabs
      defaultActiveKey="UserLogin"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="UserLogin" title="UserLogin">
        <Login />
      </Tab>
      <Tab eventKey="AdminLogin" title="AdminLogin">
        <AdminLogin />
      </Tab>
    </Tabs>
    </>
  );
}

export default TabSwitch;