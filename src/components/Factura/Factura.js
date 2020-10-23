import React from "react";
import { Form, Input, Button, Space, Select} from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../utils/constants";
import { decodeToken } from "../../api/auth";
import {addBillApi} from "../../api/bill";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

import "./Factura.scss";

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
      nombreSoc: "",
      rut: "",
      giro: "",
      direccion: "",
      comuna: "",
      ciudad: "",
      telefono: "",
      medioPago: "",
      formaPago: "",
    },
    validationSchema: Yup.object({
      nombreSoc: Yup.string()
        .max(30, "Debe tener 30 caracteres o menos")
        .required("Ingrese el Nombre"),
      rut: Yup.number()
        .max(10, "Debe tener 20 digitos máximo")
        .required("Ingrese el el rut sin guion y digito verificador"),
      giro: Yup.number().required("Ingrese el monto de su factura"),
      direccion: Yup.string()
        .max(30, "Debe tener 30 caracteres o menos")
        .required("Ingrese la dirección"),
      comuna: Yup.string()
        .max(30, "Debe tener 30 caracteres o menos")
        .required("Ingrese la ciudad"),
      ciudad: Yup.string()
        .required("Ingrese la ciudad"),
      telefono: Yup.number().required("Ingrese el numero de telefono"),
      medioPago: Yup.string()
        .max(20, "Debe tener 20 caracteres o menos")
        .required("Ingrese el medio de pago"),
      formaPago: Yup.string()
        .max(20, "Debe tener 20 caracteres o menos")
        .required("Ingrese la forma de pago"),
    }),
    onSubmit: async (formData) => {
      try{
        console.log(formData);
        const result = await addBillApi(formData);
        if (!result.ok) {
          console.log(result.message);
          console.log(formData);
          toast.error(result.message)
        }else{
          toast.success(result.message)
          console.log(formData);
          console.log(result.message);
        }
      } catch (error){
        console.log(formData);
        console.log(error);
      }
    },
  });
  const auth = useAuth();
  console.log(auth);
  return (
    <Form {...layout} className="login-form" onFinish={formik.handleSubmit}>
      <h2>Factura</h2>

      <Form.Item
        label="Nombre del socio"
        name="nombreSoc"
        value={formik.values.nombreSoc}
        onChange={formik.handleChange}
        help={formik.errors.nombreSoc}
      >
        <Input />
      </Form.Item>

      <Form.Item
      label="rut"
      name="rut"
      value={formik.values.rut}
      onChange={formik.handleChange}
      help={formik.errors.rut}
      >
      <Input />
      </Form.Item>

      <Form.Item
      label="Monto de la factura"
      name="giro"
      value={formik.values.giro}
      onChange={formik.handleChange}
      help={formik.errors.giro}
      >
      <Input />
      </Form.Item>

      <Form.Item
        label="comuna"
        name="comuna"
        value={formik.values.comuna}
        onChange={formik.handleChange}
        help={formik.errors.comuna}
      >
        <Input />
      </Form.Item>


      <Form.Item
        label="direccion"
        name="direccion"
        value={formik.values.direccion}
        onChange={formik.handleChange}
        help={formik.errors.direccion}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="ciudad"
        name="ciudad"
        value={formik.values.ciudad}
        onChange={formik.handleChange}
        help={formik.errors.ciudad}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="telefono"
        name="telefono"
        value={formik.values.telefono}
        onChange={formik.handleChange}
        help={formik.errors.telefono}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Medio de pago"
        name="medioPago"
        value={formik.values.medioPago}
        onChange={formik.handleChange}
        help={formik.errors.medioPago}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Forma de pago"
        name="formaPago"
        value={formik.values.formaPago}
        onChange={formik.handleChange}
        help={formik.errors.formaPago}
      >
        <Input />
      </Form.Item>

    /*  <Form.Item name="punitary" label="punitary" rules={[{ required: true, message: 'Missing punitary' }]}>
        <Select options={areas} onChange={handleChange} />
      </Form.Item>

      <Form.Item
        {...field}
        label="detail"
        name={[field.name, 'detail']}
        fieldKey={[field.fieldKey, 'detail']}
        rules={[{ required: true, message: 'Faltan detalles' }]}
      >
        <Input />
      </Form.Item>
      <Form.List name="sights">
        {(fields, { add, remove }) => (
          <>
            {fields.map(field => (
              <Space key={field.key} align="baseline">
                <Form.Item
                  noStyle
                  shouldUpdate={(prevValues, curValues) =>
                    prevValues.area !== curValues.area || prevValues.sights !== curValues.sights
                  }
                >
                  {() => (
                    <Form.Item
                      {...field}
                      label="Sight"
                      name={[field.name, 'sight']}
                      fieldKey={[field.fieldKey, 'sight']}
                      rules={[{ required: true, message: 'Missing sight' }]}
                    >
                </Form.Item>
                <Form.Item
                  {...field}
                  label="cant"
                  name={[field.name, 'cant']}
                  fieldKey={[field.fieldKey, 'cant']}
                  rules={[{ required: true, message: 'Falta la cantidad' }]}
                >
                  <Input />
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>
            ))}

            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add sights
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>*/

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Ingresar datos
        </Button>
      </Form.Item>
    </Form>
  );
}
