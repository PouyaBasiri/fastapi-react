export default function Contact(){
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">تماس با ما</h2>
      <form className="space-y-3">
        <input className="w-full border rounded p-2" placeholder="نام"/>
        <input className="w-full border rounded p-2" placeholder="ایمیل"/>
        <textarea className="w-full border rounded p-2" placeholder="پیام" rows={5}></textarea>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">ارسال</button>
      </form>
    </div>
  );
}

