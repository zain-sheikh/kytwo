"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";

type Props = {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
};

export default function RichEditor({ value, onChange, placeholder }: Props) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value || "",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "prose prose-zinc max-w-none min-h-[200px] border rounded p-3 focus:outline-none",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || "", { emitUpdate: false });
    }
  }, [value, editor]);

  if (!editor) return null;
  return (
    <div>
      <div className="flex gap-2 text-xs mb-2">
        <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={`border rounded px-2 py-1 ${editor.isActive('bold') ? 'bg-gray-100' : ''}`}>B</button>
        <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={`border rounded px-2 py-1 ${editor.isActive('italic') ? 'bg-gray-100' : ''}`}>I</button>
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={`border rounded px-2 py-1 ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-100' : ''}`}>H2</button>
        <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={`border rounded px-2 py-1 ${editor.isActive('bulletList') ? 'bg-gray-100' : ''}`}>• List</button>
      </div>
      <EditorContent editor={editor} />
      {placeholder ? <div className="text-xs text-gray-500 mt-1">{placeholder}</div> : null}
    </div>
  );
}


