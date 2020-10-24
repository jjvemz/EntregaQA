import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../utils/constants";
import { decodeToken } from "../../api/auth";
import { addBillApi } from "../../api/bill";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Space,
  Select,
  DatePicker,
  InputNumber,
} from "antd";

//const { validate, clean, format } = require("rut.js");

export default function Factura() {
  const [form] = Form.useForm();
  const { Option } = Select;
  const dateFormat = "DD/MM/YYYY";
  const { TextArea } = Input;
  const config = {
    rules: [
      { type: "object", required: true, message: "Favor ingresar fecha" },
    ],
  };
  const { setUser } = useAuth();
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 100 }}>
        <Option value="+56 9">+56 9</Option>
        <Option value="+56 2">+56 2</Option>
      </Select>
    </Form.Item>
  );

  function onChange(value) {
    console.log("changed", value);
  }

  const handleChange = () => {
    form.setFieldsValue({ sights: [] });
  };

  const formik = useFormik({
    initialValues: {
      fecha: "",
      nombreSoc: "",
      rut: "",
      giro: "",
      direccion: "",
      comuna: "",
      ciudad: "",
      telefono: "",
      medioPago: "",
      formaPago: "",
      billRef: [
        {
          cant: "",
          detail: "",
          punitary: "",
        },
      ],
      neto: 0,
      iva: 0,
      total: 0,
    },
    validationSchema: Yup.object({
      nombreSoc: Yup.string()
        .max(30, "Debe tener 30 caracteres o menos")
        .required("Ingrese el Nombre"),
      rut: Yup.number()
        .max(10, "Debe tener 20 digitos máximo")
        .required("Ingrese el rut sin guion y digito verificador"),
      giro: Yup.number().required("Ingrese el monto de su factura"),
      direccion: Yup.string()
        .max(30, "Debe tener 30 caracteres o menos")
        .required("Ingrese la dirección"),
      comuna: Yup.string()
        .max(30, "Debe tener 30 caracteres o menos")
        .required("Ingrese la ciudad"),
      ciudad: Yup.string().required("Ingrese la ciudad"),
      telefono: Yup.string().required("Ingrese el numero de telefono"),
      medioPago: Yup.string()
        .max(20, "Debe tener 20 caracteres o menos")
        .required("Ingrese el medio de pago"),
      formaPago: Yup.string()
        .max(20, "Debe tener 20 caracteres o menos")
        .required("Ingrese la forma de pago"),
      billRef: Yup.array().of(
        Yup.object().shape({
          cant: Yup.number(),
          detail: Yup.string(),
          punitary: Yup.number(),
        })
      ),
    }),
    onSubmit: async (formData) => {
      const result = await addBillApi(formData);
      if (result.message) {
        toast.error(result.message);
      } else if (result === "Failed to fetch") {
        toast.error("No se pudo iniciar sesión");
      } else {
        const { accessToken, refreshToken } = result;
        localStorage.setItem(ACCESS_TOKEN, accessToken);
        localStorage.setItem(REFRESH_TOKEN, refreshToken);
        setUser(decodeToken(accessToken));
        toast.success("factura añadida con exito");
      }
    },
  });

  return (
    <Form
      form={form}
      name="bill-form"
      onFinish={formik.handleSubmit}
      autoComplete="off"
    >
      <Form.Item
        name="date-picker"
        label="Fecha"
        {...config}
        value={formik.values.fecha}
        onChange={formik.fecha}
        help={formik.errors.fecha}
      >
        <DatePicker format={dateFormat} placeholder="fecha" />
      </Form.Item>
      <Form.Item
        name="nameSoc"
        label="Nombre sociedad"
        style={{ width: "300px" }}
        value={formik.values.nombreSoc}
        onChange={formik.handleChange}
        help={formik.errors.nombreSoc}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="rut"
        label="Rut"
        style={{ width: "300px" }}
        value={formik.values.rut}
        onChange={formik.rut}
        help={formik.errors.rut}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="giro"
        label="Giro"
        style={{ width: "300px" }}
        value={formik.values.giro}
        onChange={formik.giro}
        help={formik.errors.giro}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="direction"
        label="Direccion"
        style={{ width: "300px" }}
        value={formik.values.direccion}
        onChange={formik.direccion}
        help={formik.errors.direccion}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="telefono"
        label="Telefono"
        style={{ width: "300px" }}
        value={formik.values.telefono}
        onChange={formik.telefono}
        help={formik.errors.telefono}
      >
        <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        name="Comuna"
        label="Comuna"
        style={{ width: "300px" }}
        value={formik.values.comuna}
        onChange={formik.comuna}
        help={formik.errors.comuna}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="ciudad"
        label="Ciudad"
        style={{ width: "300px" }}
        value={formik.values.ciudad}
        onChange={formik.ciudad}
        help={formik.errors.ciudad}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="pagoMedia"
        label="Medio de pago"
        value={formik.values.medioPago}
        onChange={formik.medioPago}
        help={formik.errors.medioPago}
      >
        <Select
          defaultValue="efectivo"
          style={{ width: 140 }}
          onChange={handleChange}
        >
          <Option value="efectivo">Efectivo</Option>
          <Option value="cheque">Cheque</Option>
          <Option value="transferencia">Transferencia</Option>
          <Option value="vale vista">Vale vista</Option>
        </Select>
      </Form.Item>
      <Form.Item name="setPago" label="Forma de pago">
        <Select style={{ width: 120 }} onChange={handleChange}>
          <Option value="contado">Contado</Option>
          <Option value="30 días">A 30 días</Option>
          <Option value="60 días">A 60 días</Option>
          <Option value="90 días">A 90 días</Option>
          <Option value="120 días">A 120 días</Option>
        </Select>
      </Form.Item>
      <Form.List name="billRef">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <Space
                key={field.key}
                style={{ display: "flex", marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  {...field}
                  name={[field.name, "cantidad"]}
                  fieldKey={[field.fieldKey, "cantidad"]}
                  rules={[{ required: true, message: "Missing first name" }]}
                >
                  <InputNumber
                    min={1}
                    max={10}
                    onChange={onChange}
                    placeholder="Cantidad"
                  />
                </Form.Item>
                <Form.Item
                  {...field}
                  name={[field.name, "detalle"]}
                  fieldKey={[field.fieldKey, "detalle"]}
                  rules={[{ required: true, message: "Missing last name" }]}
                >
                  <TextArea showCount maxLength={100} placeholder="Detalle" />
                </Form.Item>
                <Form.Item
                  {...field}
                  name={[field.name, "p.unitario"]}
                  fieldKey={[field.fieldKey, "p.unitario"]}
                  rules={[{ required: true, message: "Missing last name" }]}
                >
                  <InputNumber placeholder="P.unitario" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Añadir producto
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Añadir factura
        </Button>
      </Form.Item>
    </Form>
  );
}
