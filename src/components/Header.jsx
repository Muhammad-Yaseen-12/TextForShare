const ACCENT_COLOR = 'text-[#6b46ff]';



const Header = () => {
  return (
    <header className="flex justify-between items-center py-6">
      {/* Logo */}
      <div className="flex items-center space-x-1">
        <span className={`text-xl font-bold ${ACCENT_COLOR}`}>textfor</span>
        <span className={`text-xl font-bold ${ACCENT_COLOR} opacity-70`}>share</span>
      </div>

      <nav className="hidden sm:flex space-x-6 lg:space-x-8 items-center">
        <span style={{ cursor: 'pointer' }} className=" font-bold text-sm font-medium">how it works</span>
        <span style={{ cursor: 'pointer' }} className="font-bold text-sm font-medium">Download</span>
        <span style={{ cursor: 'pointer' }} className="font-bold text-sm font-medium">Upgrade</span>
        <span style={{ cursor: 'pointer' }} className="font-bold text-sm font-medium">Feedback</span>
        <span style={{ color: '#6b46ff' }} className=" font-bold text-sm font-medium">Login / Register</span>
      </nav>
    </header>
  );
};

export default Header;


