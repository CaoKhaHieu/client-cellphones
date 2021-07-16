import React, { useRef } from 'react';
import "./ReviewProduct.css";
import { Editor } from "@tinymce/tinymce-react";

export default function ReviewProduct() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <section id="review">
      <div className="review">
        <span className="review-title">Review </span>

        <div className="review-content">
          <Editor
            apiKey='cmlltcvw2ydrtenwdgwdwqqrvsje6foe8t5xtyaq6lo2ufki'
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue=""
            init={{
              height: 500,
              menubar: 'file edit view insert format tools table tc help',
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
          <button onClick={log}>Add Review Product</button>
        </div>
      </div>
    </section>
  );
}
