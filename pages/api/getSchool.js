// // pages/schools.js
// import db from "../db";

// export async function getServerSideProps() {
//   try {
//     const [rows] = await db.execute("SELECT * FROM schools");
//     const schools = rows;
//     return {
//       props: { schools },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return {
//       props: { schools: [] },
//     };
//   }
// }

// export default function Schools({ schools }) {
//   return (
//     <div>
//       <h1>Schools Page</h1>
//       <ul>{}</ul>
//     </div>
//   );
// }
/*
import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const App = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: "Please input your username!",
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: "Please input your password!",
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default App;
*/
import { query } from "../../config/db";

export default async function getSchools(req, res) {
  try {
    const schools = await query("SELECT * FROM schools");
    return res.status(200).json(schools);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
