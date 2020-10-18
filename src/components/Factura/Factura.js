import React from "react";
import { Form, Button, Input } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../utils/constants";
import { signInApi } from "../../api/user";
import { decodeToken } from "../../api/auth";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

import "./Factura.scss"

export default function Factura() {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const { setUser } = useAuth();

  const formik = useFormik({
    initialValues: {
      UserName: "",
      EnterpriseName: "",
      TypeOfBill: "",
      MountOfBill: "",
      Rut: "",
    },
    validationSchema: Yup.object({
      UserName: Yup.string()
        .max(30, "Debe tener 30 caracteres o menos")
        .required("Ingrese el Nombre"),
      EnterpriseName: Yup.string()
        .max(20, "Debe tener 20 caracteres o menos")
        .required("Ingrese el Nombre de la empresa"),
      MountOfBill: Yup.number().required("Ingrese el monto de su factura"),
      TypeOfBill: Yup.string()
        .max(20, "Debe tener 20 caracteres o menos")
        .required("Ingrese el Nombre de la empresa"),
    }),
    onSubmit: async (formData) => {
<<<<<<< HEAD
      const result = await signInApi(formData);
    },
  });
  const auth = useAuth();
  console.log(auth);
  return (
    <Form {...layout} className="login-form" onFinish={formik.handleSubmit}>
=======
      // const result = await signInApi(formData);
      console.log("He hecho click en submit")
      }
  });
  // const auth = useAuth()
  // console.log(auth);
  return (
    <Form {...layout} className="factura-form" onFinish={formik.handleSubmit}>

>>>>>>> 6bd5e3426596d491f36e8754a33d10f53c0f0c3c
      <h2>Factura</h2>

      <Form.Item
        label="Nombre del usuario"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        help={formik.errors.email}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Nombre de la empresa"
        name="EnterpriseName"
        value={formik.values.password}
        onChange={formik.handleChange}
        help={formik.errors.password}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Tipo de factura"
        name="TypeOfBill"
        value={formik.values.password}
        onChange={formik.handleChange}
        help={formik.errors.password}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Monto de la factura"
        name="MountOfBill"
        value={formik.values.password}
        onChange={formik.handleChange}
        help={formik.errors.password}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Ingresar datos
        </Button>
      </Form.Item>
    </Form>
  );
}
