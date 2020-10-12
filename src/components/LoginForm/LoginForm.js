import React from 'react';
import { Form, Button, Input } from "antd";
import "./LoginForm"

export default function LoginForm() {
  return (
    <Form className="login-form">
      <h2>Inicie sesion</h2>
       <Form.Item
          label="Email"
          name="email"
          // value={formik.values.email}
          // onChange={formik.handleChange}
          // help={formik.errors.email}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          // value={formik.values.password}
          // onChange={formik.handleChange}
          // help={formik.errors.password}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Iniciar sesión
          </Button>
        </Form.Item>
    </Form>
  )
}
