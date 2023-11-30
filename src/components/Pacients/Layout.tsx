interface props {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  colorSubtitle: string;
}

const Layout = ({ children, title, subtitle, colorSubtitle }: props) => {
  return (
    <div className="flex flex-col md:w-1/2 lg:w-2/5">
      <div>
        <h2 className="font-black text-3xl text-center">{title}</h2>
        <p className="text-lg mt-5 text-center">
          {subtitle}
          <span className="text-indigo-600 font-bold">{colorSubtitle}</span>
        </p>
      </div>
      {children}
    </div>
  );
};

export default Layout;
