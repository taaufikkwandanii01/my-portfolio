const Footer = () => {
  return (
    <footer className="pt-10 px-3 md:px-8">
      <div className="w-full flex items-center justify-center border-x border-t border-slate-700 py-5">
        <p className="font-mono font-semibold text-sm text-slate-600">
          <span>© {new Date().getFullYear()} Taufik Wandani.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
