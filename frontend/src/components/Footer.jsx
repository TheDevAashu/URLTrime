import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-700 py-6 mt-25">
      <div className="text-center text-slate-400 text-sm">
        <p>&copy; {currentYear} URLTrim. All Rights Reserved.</p>
        <p className="mt-1 font-bold">Made with ❤️ by Aashu</p>
      </div>
    </footer>
  );
};

export default Footer;