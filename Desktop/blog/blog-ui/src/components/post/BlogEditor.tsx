import { EditorDataType } from "@/pages/auth/EditorType";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

const BlogEditor = ({
  name,
  control,
  label,
  defaultValue = "",
}: EditorDataType) => {
  return (
    <>
      <div className="w-full">
        {label && <label className="mb-1 inline-block pl-1">{label}</label>}

        <Controller
          name={name || "content"}
          control={control}
          render={({ field: { onChange } }) => (
            <Editor
              apiKey="4xetcxb2lhdhjwezb0bpppsnxnplyeuix3i8l4dcedew674k"
              initialValue={defaultValue}
              init={{
                initialValue: defaultValue,
                height: 500,
                menubar: true,
                plugins: [
                  "image",
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                  "amchor",
                ],
                toolbar:
                  "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                content_style:
                  "body {font-family:Helvetica, Arial, sans-serif; font-size:14px}",
              }}
              onEditorChange={onChange}
            />
          )}
        />
      </div>
    </>
  );
};

export default BlogEditor;
