import React from "react";
import { Form, Button, Input } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signInApi } from '../../api/user';
import { toast } from 'react-toastify'
import "./LoginForm";

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El correo electronico no es valido")
        .required("Introduzca su correo electronico"),
      password: Yup.string().required("Introduzca su contraseña"),
    }),
    onSubmit: async (formData) => {
      const result = await signInApi(formData);
      if (result.message) {
        toast.error(result.message)
      } else {
        toast.success("Inicio de sesión correcto")
      }
    },
  });

  return (
    <Form className="login-form" onFinish={formik.handleSubmit}>
      <h2>Inicie sesion</h2>
      <Form.Item
        label="Email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        help={formik.errors.email}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        help={formik.errors.password}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Iniciar sesión
        </Button>
      </Form.Item>
    </Form>
  );
}
