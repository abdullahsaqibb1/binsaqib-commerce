const categories = ["Audio", "Timepieces", "Workspace", "Everyday Carry"];

const values = [
  ["Authenticity", "Every piece is selected with provenance and quality in mind."],
  ["Considered delivery", "Thoughtful packaging and transparent fulfilment from order to door."],
  ["Personal support", "Real assistance before and after every purchase."]
];

export default function HomePage() {
  return (
    <main>
      <div className="announcement">Complimentary delivery on selected collections</div>
      <header className="site-header">
        <a className="brand" href="#" aria-label="BinSaqib home">
          <span className="brand-mark">BS</span>
          <span className="brand-name">BinSaqib</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#new">New arrivals</a>
          <a href="#collections">Collections</a>
          <a href="#journal">Journal</a>
        </nav>
        <div className="header-actions" aria-label="Store actions">
          <button type="button">Search</button>
          <button type="button">Bag · 0</button>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">The BinSaqib edit · 2026</p>
          <h1 id="hero-title">Objects chosen for a more considered life.</h1>
          <p className="hero-intro">
            A refined collection of technology and everyday essentials—selected for enduring design,
            quiet performance, and the pleasure of use.
          </p>
          <div className="hero-links">
            <a className="button button-primary" href="#new">Explore the collection</a>
            <a className="text-link" href="#story">Our point of view <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Featured BinSaqib collection">
          <div className="halo" />
          <div className="product-sculpture">
            <span className="sculpture-line" />
            <span className="sculpture-core">BS</span>
          </div>
          <p>Edition No. 01</p>
        </div>
      </section>

      <section className="category-strip" id="collections" aria-label="Shop by collection">
        {categories.map((category, index) => (
          <a href="#new" key={category}>
            <span>0{index + 1}</span>
            {category}
          </a>
        ))}
      </section>

      <section className="editorial" id="new">
        <div className="section-heading">
          <div>
            <p className="eyebrow">New and noteworthy</p>
            <h2>Made to earn its place.</h2>
          </div>
          <a className="text-link" href="#collections">View all pieces <span aria-hidden="true">→</span></a>
        </div>
        <div className="product-grid">
          <article className="product-card product-card-large">
            <div className="product-art product-art-dark"><span>01</span></div>
            <p className="product-kicker">Signature selection</p>
            <h3>The Obsidian Edit</h3>
            <p>Precision essentials in a restrained, tactile palette.</p>
          </article>
          <article className="product-card">
            <div className="product-art product-art-gold"><span>02</span></div>
            <p className="product-kicker">Curated audio</p>
            <h3>Sound, distilled</h3>
            <p>Personal listening chosen for clarity and comfort.</p>
          </article>
          <article className="product-card">
            <div className="product-art product-art-ivory"><span>03</span></div>
            <p className="product-kicker">Modern utility</p>
            <h3>Desk, composed</h3>
            <p>Quiet tools for focused work and intentional spaces.</p>
          </article>
        </div>
      </section>

      <section className="story" id="story">
        <p className="eyebrow">The BinSaqib standard</p>
        <blockquote>“Luxury is not more. It is the confidence to choose only what matters.”</blockquote>
        <p>We look beyond novelty to find products with substance—objects that feel right today and remain useful tomorrow.</p>
      </section>

      <section className="values" aria-label="Our service promise">
        {values.map(([title, description], index) => (
          <article key={title}>
            <span>0{index + 1}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </section>

      <footer>
        <a className="brand brand-footer" href="#"><span className="brand-mark">BS</span><span className="brand-name">BinSaqib</span></a>
        <p>Premium goods, thoughtfully selected.</p>
        <p>© 2026 BinSaqib</p>
      </footer>
    </main>
  );
}
