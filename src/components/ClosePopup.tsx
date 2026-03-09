type ClosePopupProps = {
  handleSave: () => void;
  handleDiscard: () => void;
  handleCancel: () => void;
};

export default function ClosePopup({
  handleSave,
  handleDiscard,
  handleCancel,
}: ClosePopupProps) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div
        className={`py-10 px-5 [&_button]:cursor-pointer 
        rounded-lg border-2 border-(--border-color) 
        flex flex-col gap-2 w-full md:w-[550px] 
        justify-center bg-(--bg-color)`}
      >
        <h1 className="text-2xl font-bold">هل تريد حفظ المسودة؟</h1>
        <p className="text-sm mb-10 opacity-60">قد تفقد المحتوى المكتوب</p>
        <div className="flex justify-between items-center w-full">
          <div className="flex-1">
            <button
              type="button"
              className="flex-1 p-2 ml-2 px-4 rounded-md bg-green-900 text-green-100"
              onClick={handleSave}
            >
              حفظ
            </button>
            <button
              type="button"
              className="flex-1 p-2 ml-2 px-4 rounded-md bg-red-900 text-red-100"
              onClick={handleDiscard}
            >
              تجاهل
            </button>
          </div>
          <button
            type="button"
            className="p-2 px-4 rounded-md bg-zinc-700 text-zinc-100"
            onClick={handleCancel}
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );
}
