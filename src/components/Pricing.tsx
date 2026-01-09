export default function Pricing() {
  return (
    <section className="container py-16">
      <h2 className="font-semibold">Flexible pricing</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {[
          { name: "Starter", price: "$5k+", features: ["1-3 pages", "Basic SEO", "2 weeks"] },
          { name: "Growth", price: "$15k+", features: ["5-10 pages", "Integrations", "4-6 weeks"] },
          { name: "Custom", price: "Talk to us", features: ["Complex apps", "Unique scope", "Timeline varies"] },
        ].map((p) => (
          <div key={p.name} className="border rounded p-6">
            <div className="text-sm">{p.name}</div>
            <div className="mt-2 text-2xl font-semibold">{p.price}</div>
            <ul className="mt-4 space-y-1">
              {p.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <a href="/contact" className="mt-4 inline-block rounded bg-black text-white px-4 py-2 text-sm">Get estimate</a>
          </div>
        ))}
      </div>
    </section>
  );
}


