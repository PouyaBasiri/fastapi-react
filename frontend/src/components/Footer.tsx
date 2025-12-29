export default function Footer(){
  return (
    <footer className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600 flex justify-between">
        <span>© {new Date().getFullYear()} Surin</span>
        <span>ساخته شده با FastAPI + React</span>
      </div>
    </footer>
  );
}

