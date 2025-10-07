const Footer = () => {
  const BIRDSCORP_COLOR = 'text-blue-500 hover:text-blue-700 transition-colors';

  return (
    <footer className="w-full py-8 text-center text-sm text-gray-500 mt-auto">
      {/* Copyright */}
      <p className="mb-2">© 2025 textforshare.netlify.app</p>
      <p className="mb-6 flex justify-center items-center space-x-1">
        <span>Made By </span>
        <a href="https://github.com/Muhammad-Yaseen-12" className={`font-medium ${BIRDSCORP_COLOR}`}>Muhammad Yaseen</a>

      </p>
    </footer>
  );
};

export default Footer;