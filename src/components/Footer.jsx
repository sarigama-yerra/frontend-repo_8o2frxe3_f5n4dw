export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/40 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-gray-400">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          <div className="space-y-2">
            <p className="text-gray-200">Questions? Contact us.</p>
            <p className="text-xs">This is a demo clone built for educational purposes.</p>
          </div>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-200">FAQ</a></li>
            <li><a href="#" className="hover:text-gray-200">Investor Relations</a></li>
            <li><a href="#" className="hover:text-gray-200">Privacy</a></li>
            <li><a href="#" className="hover:text-gray-200">Speed Test</a></li>
          </ul>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-200">Help Center</a></li>
            <li><a href="#" className="hover:text-gray-200">Jobs</a></li>
            <li><a href="#" className="hover:text-gray-200">Cookie Preferences</a></li>
            <li><a href="#" className="hover:text-gray-200">Legal Notices</a></li>
          </ul>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-200">Account</a></li>
            <li><a href="#" className="hover:text-gray-200">Ways to Watch</a></li>
            <li><a href="#" className="hover:text-gray-200">Corporate Information</a></li>
            <li><a href="#" className="hover:text-gray-200">Only on FLIX</a></li>
          </ul>
        </div>
        <p className="mt-8 text-xs">© {new Date().getFullYear()} FLIX</p>
      </div>
    </footer>
  );
}
