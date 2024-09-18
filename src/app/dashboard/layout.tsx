import Navbar from "../components/dashboard/navbar/navbar";
import styles from "../components/dashboard/dashboard.module.css";
import Footer from "../components/dashboard/footer/footer";
import Sidebar from "../components/dashboard/sidebar/sidebar";

export default async function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className={styles.container}>
          <Sidebar/>
          <div className={`transition-all flex-auto ml-56 p-4`}>
            <Navbar/>
            {children}
            <Footer/>
          </div>
        </div>
    );
}