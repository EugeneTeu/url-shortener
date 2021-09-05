import React, { useState } from "react";
import { Input, Form, Button, notification, Typography } from "antd";
import { createShortenedUrl } from "../api";
const { Title } = Typography;

export const UrlForm: React.FC<{}> = () => {
  const [form] = Form.useForm();
  const [shortenedUrl, setShortenedUrl] = useState<string | undefined>(
    undefined
  );
  const onPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
  };
  const onFinish = async (values: any) => {
    try {
      const { url } = await createShortenedUrl(values);
      setShortenedUrl(url);
    } catch (e) {
      console.log(e);
      notification.error({ message: "something went wrong" });
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Form.Item
          name="url"
          label="Enter Url Here"
          hasFeedback
          rules={[
            { required: true },
            ({ getFieldValue }) => ({
              validator(_, value) {
                let url;
                try {
                  url = new URL(value);
                } catch (_) {
                  value = undefined;
                }
                if (value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("input provided is not a valid URL")
                );
              },
            }),
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginRight: "1rem" }}
          >
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
      <Title level={2}>{shortenedUrl} </Title>
    </>
  );
};