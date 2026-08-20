const metrics = [
  ["Net revenue", "PKR 0", "Ready for live data"],
  ["Open orders", "0", "No action required"],
  ["Low stock", "0", "Inventory healthy"],
  ["Contribution", "PKR 0", "Costs not connected"]
];

const navigation = ["Overview", "Orders", "Catalogue", "Inventory", "Customers", "Finance", "Content", "Settings"];

export default function AdminHomePage() {
  return (
    <main className="shell">
      <aside>
        <div className="admin-brand"><span>BS</span><strong>BinSaqib</strong></div>
        <p className="rail-label">Commerce OS</p>
        <nav aria-label="Admin navigation">
          {navigation.map((item, index) => <a className={index === 0 ? "active" : ""} href="#" key={item}>{item}</a>)}
        </nav>
        <div className="rail-user"><span>AS</span><div><strong>Abdullah</strong><small>Owner</small></div></div>
      </aside>

      <section className="workspace">
        <header>
          <div><p>Friday, 21 August</p><h1>Good evening.</h1></div>
          <div className="header-tools"><button type="button">Search</button><button className="primary" type="button">Create order</button></div>
        </header>

        <section className="metrics" aria-label="Business metrics">
          {metrics.map(([label, value, note]) => <article key={label}><p>{label}</p><strong>{value}</strong><small>{note}</small></article>)}
        </section>

        <section className="dashboard-grid">
          <article className="panel performance">
            <div className="panel-heading"><div><p>Performance</p><h2>Revenue overview</h2></div><button type="button">Last 30 days</button></div>
            <div className="chart-placeholder" aria-label="Revenue chart placeholder">
              <div className="axis"><span>500k</span><span>250k</span><span>0</span></div>
              <div className="line"><i /><i /><i /><i /><i /><i /><i /></div>
            </div>
          </article>
          <article className="panel attention">
            <div className="panel-heading"><div><p>Attention</p><h2>Operations queue</h2></div><span className="badge">0 open</span></div>
            <div className="empty-state"><span>✓</span><h3>Everything is in order</h3><p>Operational alerts and approvals will appear here.</p></div>
          </article>
        </section>

        <section className="panel orders">
          <div className="panel-heading"><div><p>Orders</p><h2>Recent activity</h2></div><a href="#">View all →</a></div>
          <div className="order-empty"><p>No orders yet.</p><span>Orders will appear when checkout is connected.</span></div>
        </section>
      </section>
    </main>
  );
}
