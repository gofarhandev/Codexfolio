import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="pl-20 w-full min-h-screen bg-back text-grow p-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;
