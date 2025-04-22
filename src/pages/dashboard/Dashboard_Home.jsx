import DashboardMain from "./DashboardMain";
import DashboardTop from "./DashboardTop";

const DashboardHome = () => {
  return (
    <div className="h-full overflow-y-auto ">
      <DashboardTop />
      <DashboardMain />
    </div>
  );
};

export default DashboardHome;
