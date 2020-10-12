import React from "react";
import { Form, Button, Input } from "antd";
import { useFormik } from 'formik'
import "./RegisterForm.scss";

export default function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      rut: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: null,
    onSubmit: (formValue) => {
      console.log(formValue);
    }
  })

  return (
    <>
      <h2>Registrate para acceder a las funcionalidades!</h2>
      <Form className="register-form" onFinish={formik.handleSubmit}>
        <Form.Item
          label="Nombre"
          name="name"
          onChange={formik.handleChange}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Apellido"
          name="lastname"
          onChange={formik.handleChange}
          // rules={[{ required: true, message: "Introduzca su apellido" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Rut"
          name="rut"
          onChange={formik.handleChange}
          // rules={[{ required: true, message: "Introduzca su RUT" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          onChange={formik.handleChange}
          // rules={[{ required: true, message: "Introduzca su correo electronico" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          onChange={formik.handleChange}
          // rules={[{ required: true, message: "Ingrese su contraseña" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Repetir contraseña"
          name="repeatPassword"
          onChange={formik.handleChange}
          // rules={[{ required: true, message: "Las contraseñas deben coincidir" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" >
            Registrarse
          </Button>
        </Form.Item>

      </Form>
    </>
  );
}
