"use client";

import { Form } from "antd";
import { useEffect, type ReactNode } from "react";
import { FormProvider, useForm, type Resolver } from "react-hook-form";

type FormWrapperProps = {
  onSubmit: (data: Record<string, unknown>) => void | Promise<void>;
  children: ReactNode;
  defaultValues?: Record<string, unknown>;
  resolver?: Resolver<Record<string, unknown>>;
  title?: string;
};

export default function FormWrapper({
  onSubmit,
  children,
  defaultValues,
  resolver,
  title,
}: FormWrapperProps) {
  const methods = useForm<Record<string, unknown>>({
    defaultValues,
    resolver,
  });

  useEffect(() => {
    if (defaultValues) {
      // Set default values after form is mounted
      methods.reset(defaultValues);
    }
  }, [defaultValues, methods]);

  const handleSubmit = (data: Record<string, unknown>) => {
    onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(handleSubmit)}>
        {title && <h3 className="mb-4 text-xl font-semibold">{title}</h3>}
        {children}
      </Form>
    </FormProvider>
  );
}
