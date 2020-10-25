import React from "react";
import { addBillApi } from "../../api/bill";
import { getAccessTokenApi } from "../../api/auth";

import { toast } from "react-toastify";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Space, Select, DatePicker } from "antd";

export default function Factura(props) {
  const config = {
    rules: [{ required: true, message: "Favor ingresar fecha" }],
  };
  const { Option } = Select;
  const dateFormat = "DD/MM/YYYY";

  const accessToken = getAccessTokenApi();

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 100 }}>
        <Option value="+56 9">+56 9</Option>
        <Option value="+56 2">+56 2</Option>
      </Select>
    </Form.Item>
  );
  const onFinish = async (values) => {
    try {
      const result = await addBillApi(accessToken, values);
      if (!result.ok) {
        console.log(result.message);
        toast.error(result.message);
      } else {
        toast.success(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
      <Form.Item name="date-picker" label="Fecha" {...config}>
        <DatePicker format={dateFormat} placeholder="fecha" />
      </Form.Item>
      <Form.Item
        name="nameSoc"
        label="Nombre sociedad"
        style={{ width: "300px" }}
      >
        <Input />
      </Form.Item>
      <Form.Item name="rut" label="Rut" style={{ width: "300px" }}>
        <Input />
      </Form.Item>
      <Form.Item name="giro" label="Giro" style={{ width: "300px" }}>
        <Input />
      </Form.Item>
      <Form.Item name="direccion" label="Direccion" style={{ width: "300px" }}>
        <Input />
      </Form.Item>
      <Form.Item name="telefono" label="Telefono" style={{ width: "300px" }}>
        <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item name="Comuna" label="Comuna" style={{ width: "300px" }}>
        <Input />
      </Form.Item>
      <Form.Item name="ciudad" label="Ciudad" style={{ width: "300px" }}>
        <Input />
      </Form.Item>
      <Form.Item name="medioPago" label="Medio de pago">
        <Select style={{ width: 140 }}>
          <Option value="efectivo">Efectivo</Option>
          <Option value="cheque">Cheque</Option>
          <Option value="transferencia">Transferencia</Option>
          <Option value="vale vista">Vale vista</Option>
        </Select>
      </Form.Item>
      <Form.Item name="formaPago" label="Forma de pago">
        <Select style={{ width: 120 }}>
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
                  name={[field.name, "cant"]}
                  fieldKey={[field.fieldKey, "cant"]}
                  rules={[{ required: true, message: "introducir cantidad" }]}
                >
                  <Input placeholder="cantidad" />
                </Form.Item>
                <Form.Item
                  {...field}
                  name={[field.name, "detail"]}
                  fieldKey={[field.fieldKey, "detail"]}
                  rules={[{ required: true, message: "añadir detalle" }]}
                >
                  <Input placeholder="detalle" />
                </Form.Item>
                <Form.Item
                  {...field}
                  name={[field.name, "punitary"]}
                  fieldKey={[field.fieldKey, "punitary"]}
                  rules={[
                    { required: true, message: "añadir precio unitario" },
                  ]}
                >
                  <Input placeholder="p.unitario" />
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
          agregar factura
        </Button>
      </Form.Item>
    </Form>
  );
}
