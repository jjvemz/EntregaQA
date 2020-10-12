import React from "react";
import { Form, Button, Input } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from 'react-toastify'
import { signUpApi } from '../../api/user';
import "./RegisterForm.scss";

export default function RegisterForm(props) {
  const {setShowLogin} = props;

  const layout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 14 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      rut: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[a-zA-Z]*$/, "Ingrese su nombre correctamente")
        .required("Tu nombre es obligatorio"),
      lastname: Yup.string()
        .matches(/^[a-zA-Z]*$/, "Ingrese su apellido correctamente")
        .required("Tu apellido es obligatorio"),
      rut: Yup.string()
        .matches(
          /^\d{1,2}\d{3}\d{3}[0-9kK]{1}$/,
          "Ingrese el rut sin puntos ni guion"
        )
        .required("Ingrese el rut sin puntos ni guion"),
      email: Yup.string()
        .email("El email no es valido")
        .required("El email es obligatorio"),
      password: Yup.string()
        .required("La contraseña es obligatoria")
        .oneOf([Yup.ref("repeatPassword")], "Las contraseñas no coinciden"),
      repeatPassword: Yup.string()
        .required("La contraseña es obligatoria")
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    }),
    onSubmit: async (formData) => {
      try{
        const result = await signUpApi(formData);
        if (!result.ok) {
          console.log(result.message);
          toast.error(result.message)
        }else{
          toast.success(result.message)
          setShowLogin(true)
          console.log(result.message);
        }
      } catch (error){
        console.log(error);
      }
    },
  });

  return (
    <>
      <h2 className="register-form-title">Crear una cuenta</h2>
      <Form {...layout} className="register-form" onFinish={formik.handleSubmit}>
        <Form.Item
          label="Nombre"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          help={formik.errors.name}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Apellido"
          name="lastname"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          help={formik.errors.lastname}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Rut"
          name="rut"
          value={formik.values.rut}
          onChange={formik.handleChange}
          help={formik.errors.rut}
        >
          <Input />
        </Form.Item>
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
        <Form.Item
          label="Repetir contraseña"
          name="repeatPassword"
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
          help={formik.errors.repeatPassword}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Registrarse
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
