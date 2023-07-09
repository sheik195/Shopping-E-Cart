
import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import AdminControl1 from './AdminControl1';
import AdminControl2 from './AdminControl2';

export default function AdminControl() {
  return (
    <div>
      <Tabs
      defaultActiveKey="Admin form"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Admin form" title="Admin Form">
        <AdminControl1 />
      </Tab>
      <Tab eventKey="Admin table" title="Admin Table">
        <AdminControl2 />
      </Tab>
    </Tabs>
    </div>
  )
}
