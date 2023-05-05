import { Aside } from "./Aside";
import { ChartComponent } from "./Chart";

export const Dashboard = () => {
  return (
    <section className="section main-section">
      <Aside />
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-6">
        <div className="card">
          <div className="card-content">
            <div className="flex items-center justify-between">
              <div className="widget-label">
                <h3>Clients</h3>
                <h1>512</h1>
              </div>
              <span className="icon widget-icon text-green-500">
                <i className="mdi mdi-account-multiple mdi-48px"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="flex items-center justify-between">
              <div className="widget-label">
                <h3>Sales</h3>
                <h1>$7,770</h1>
              </div>
              <span className="icon widget-icon text-blue-500">
                <i className="mdi mdi-cart-outline mdi-48px"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="flex items-center justify-between">
              <div className="widget-label">
                <h3>Performance</h3>
                <h1>256%</h1>
              </div>
              <span className="icon widget-icon text-red-500">
                <i className="mdi mdi-finance mdi-48px"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-6">
        <header className="card-header">
          <p className="card-header-title">
            <span className="icon">
              <i className="mdi mdi-finance"></i>
            </span>
            Performance
          </p>
          <a href="#" className="card-header-icon">
            <span className="icon">
              <i className="mdi mdi-reload"></i>
            </span>
          </a>
        </header>
        <ChartComponent />
      </div>
    </section>
  );
};
