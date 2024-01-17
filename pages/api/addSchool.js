// // pages/index.js
// import { useState } from "react";
// import db from "../db";

// export default function Home() {
//   const [name, setName] = useState("");
//   const [location, setLocation] = useState("");
//   const [establishedYear, setEstablishedYear] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const result = await db.execute(
//         "INSERT INTO schools (name, location, established_year) VALUES (?, ?, ?)",
//         [name, location, establishedYear]
//       );
//       console.log("Inserted ID:", result[0].insertId);
//     } catch (error) {
//       console.error("Error inserting data:", error);
//     }
//   };

//   return (
//     // <div>
//     //   <h1>Input Page</h1>
//     //   <form onSubmit={handleSubmit}>
//     //     <button type="submit">Submit</button>
//     //   </form>
//     // </div>
//     <div>
//       <h1>Input Page</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           School Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Location:
//           <input
//             type="text"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Established Year:
//           <input
//             type="number"
//             value={establishedYear}
//             onChange={(e) => setEstablishedYear(e.target.value)}
//           />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>

//   );
// }

// import React from "react";
// import {
//   Button,
//   Cascader,
//   DatePicker,
//   Form,
//   Input,
//   InputNumber,
//   Mentions,
//   Select,
//   TreeSelect,
// } from "antd";
// const { RangePicker } = DatePicker;
// const formItemLayout = {
//   labelCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 6,
//     },
//   },
//   wrapperCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 14,
//     },
//   },
// };
// const App = () => (
//   <Form
//     {...formItemLayout}
//     variant="filled"
//     style={{
//       maxWidth: 600,
//     }}
//   >
//     <Form.Item
//       label="Input"
//       name="Input"
//       rules={[
//         {
//           required: true,
//           message: "Please input!",
//         },
//       ]}
//     >
//       <Input />
//     </Form.Item>

//     <Form.Item
//       label="InputNumber"
//       name="InputNumber"
//       rules={[
//         {
//           required: true,
//           message: "Please input!",
//         },
//       ]}
//     >
//       <InputNumber
//         style={{
//           width: "100%",
//         }}
//       />
//     </Form.Item>

//     <Form.Item
//       label="TextArea"
//       name="TextArea"
//       rules={[
//         {
//           required: true,
//           message: "Please input!",
//         },
//       ]}
//     >
//       <Input.TextArea />
//     </Form.Item>

//     <Form.Item
//       label="Mentions"
//       name="Mentions"
//       rules={[
//         {
//           required: true,
//           message: "Please input!",
//         },
//       ]}
//     >
//       <Mentions />
//     </Form.Item>

//     <Form.Item
//       label="Select"
//       name="Select"
//       rules={[
//         {
//           required: true,
//           message: "Please input!",
//         },
//       ]}
//     >
//       <Select />
//     </Form.Item>

//     <Form.Item
//       label="Cascader"
//       name="Cascader"
//       rules={[
//         {
//           required: true,
//           message: "Please input!",
//         },
//       ]}
//     >
//       <Cascader />
//     </Form.Item>

//     <Form.Item
//       label="TreeSelect"
//       name="TreeSelect"
//       rules={[
//         {
//           required: true,
//           message: "Please input!",
//         },
//       ]}
//     >
//       <TreeSelect />
//     </Form.Item>

//     <Form.Item
//       label="DatePicker"
//       name="DatePicker"
//       rules={[
//         {
//           required: true,
//           message: "Please input!",
//         },
//       ]}
//     >
//       <DatePicker />
//     </Form.Item>

//     <Form.Item
//       label="RangePicker"
//       name="RangePicker"
//       rules={[
//         {
//           required: true,
//           message: "Please input!",
//         },
//       ]}
//     >
//       <RangePicker />
//     </Form.Item>

//     <Form.Item
//       wrapperCol={{
//         offset: 6,
//         span: 16,
//       }}
//     >
//       <Button type="primary" htmlType="submit">
//         Submit
//       </Button>
//     </Form.Item>
//   </Form>
// );
// export default App;

import { query } from "../../config/db";

export default async function addSchool(req, res) {
  const { name, location } = req.body;

  if (!name || !location) {
    return res.status(400).json({ message: "Name and location are required" });
  }

  try {
    const result = await query(
      "INSERT INTO schools (name, location) VALUES (?, ?)",
      [name, location]
    );
    return res
      .status(200)
      .json({ message: "School added successfully", result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
