"use client";

import FormWrapper from "@/components/Form/FormWrapper";
import UTextEditor from "@/components/Form/UTextEditor";
import { Button } from "antd";
import { Edit } from "lucide-react";
import { useGetContentsQuery, useUpdateContentMutation } from "@/redux/api/contentApi";
import toast from "react-hot-toast";

export default function AboutUsContainer() {
  const { data } = useGetContentsQuery();
  const [updateContent, { isLoading: updating }] = useUpdateContentMutation();

  const handleSubmit = async (values) => {
    try {
      const response = await updateContent(values).unwrap();
      if (response.success) {
        toast.success("Content updated successfully");
      }
    } catch (error) {
      toast.error("Unable to update About Us content");
    }
  };

  return (
    <section>
      <h3 className="text-2xl font-semibold mb-6">About Us</h3>

      <FormWrapper
        onSubmit={handleSubmit}
        defaultValues={{ aboutUs: data?.data?.[0]?.aboutUs }}
      >
        <UTextEditor
          name="aboutUs"
          value={data?.data?.[0]?.aboutUs}
          placeholder="Note: Enter details about the website here. (e.g How and why did you come up with the idea? etc)"
        />

        <Button
          type="primary"
          size="large"
          className="w-full rounded-xl"
          htmlType="submit"
          icon={<Edit size={18} />}
          loading={updating}
        >
          Save Changes
        </Button>
      </FormWrapper>
    </section>
  );
}
