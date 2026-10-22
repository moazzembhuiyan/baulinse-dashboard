'use client';

import { Controller } from 'react-hook-form';
import type { IJoditEditorProps } from 'jodit-react';
import { Form } from 'antd';
// import JoditEditor, { Jodit } from "jodit-react";
import dynamic from 'next/dynamic';

const JoditEditor = dynamic(() => import('jodit-react'), {
  ssr: false,
});

type UTextEditorProps = {
  name: string;
  label?: string;
  placeholder?: string;
  value?: string;
};

export default function UTextEditor({ name, label, placeholder, value }: UTextEditorProps) {
  const config: NonNullable<IJoditEditorProps['config']> & {
    placeholder?: string;
    uploader: { insertImageAsBase64URI: boolean };
  } = {
    height: 500,
    placeholder,
    uploader: {
      insertImageAsBase64URI: true,
    },
  };

  // console.log('value', value);
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item
          label={label}
          validateStatus={error ? 'error' : ''}
          help={error ? error.message : ''}
        >
          <JoditEditor
            value={field.value || value}
            config={config}
            onBlur={(content) => field.onChange(content)}
          />
        </Form.Item>
      )}
    />
  );
}
