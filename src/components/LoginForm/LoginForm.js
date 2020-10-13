import React from "react";
import { Form, Button, Input } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import {ACCESS_TOKEN, REFRESH_TOKEN} from '../../utils/constants'
import { signInApi } from "../../api/user";
import { decodeToken } from "../../api/auth"
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import "./LoginForm.scss";

export default function LoginForm() {

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const {setUser} = useAuth();

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
        toast.error(result.message);
      } else if (result === "Failed to fetch"){
        toast.error("No se pudo iniciar sesión");
      } else {
        const { accessToken, refreshToken } = result;
        localStorage.setItem(ACCESS_TOKEN, accessToken);
        localStorage.setItem(REFRESH_TOKEN, refreshToken);
        setUser(decodeToken(accessToken))
        toast.success("Inicio de sesion correcto")
      }
    },
  });

  return (
    <Form {...layout} className="login-form" onFinish={formik.handleSubmit}>

      <h2>Inicie sesión</h2>

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
        label="Contraseña"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        help={formik.errors.password}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} >
        <Button type="primary" htmlType="submit">
          Iniciar sesión
        </Button>
      </Form.Item>
    </Form>
  );
}
