import { Popconfirm } from "antd";
import type { ReactNode } from "react";

type CustomConfirmProps = {
  children: ReactNode;
  title?: string;
  description?: string;
  onConfirm: () => void | Promise<void>;
  okText?: string;
  cancelText?: string;
  loading?: boolean;
};
export default function CustomConfirm({
  children,
  title,
  description,
  onConfirm,
  okText = "Yes",
  cancelText = "No",
  loading = false,
}: CustomConfirmProps) {
  return (
    <Popconfirm
      title={title || "Delete"}
      description={description || "Are you sure you want to do it?"}
      onConfirm={onConfirm}
      okText={okText}
      cancelText={cancelText}
      okButtonProps={{ loading }}
    >
      {children}
    </Popconfirm>
  );
}
