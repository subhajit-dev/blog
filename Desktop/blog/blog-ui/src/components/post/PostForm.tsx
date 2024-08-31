import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import BlogEditor from "./BlogEditor";

const PostForm = () => {
  const { register, handleSubmit, control, getValues } = useForm();
  const postFn = async (fData: any) => {
    console.log(fData);
  };
  return (
    <>
      <div className=""></div>
      <form onSubmit={handleSubmit(postFn)} className="flex flex-wrap">
        <div className="w-2/3 px-2">
          <Input label="Title" placeholder="Title" className="mb-4" />
          <BlogEditor
            label="Content"
            name="content"
            control={control}
            defaultValue={getValues("content")}
            key="4xetcxb2lhdhjwezb0bpppsnxnplyeuix3i8l4dcedew674k"
          />
        </div>
        <div className="w-1/3 px-2">
          <Input label="Blog Image" type="file" />
          <Button>Submit</Button>
        </div>
      </form>
    </>
  );
};

export default PostForm;
