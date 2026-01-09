export default function Testimonials() {
  return (
    <section className="container py-16">
      <h2 className="font-semibold">What our clients say</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {["Kytwo delivered beyond expectations.", "Fast, communicative, and high quality.", "Traffic and conversions up since launch."].map((quote) => (
          <blockquote key={quote} className="border rounded p-5">“{quote}”</blockquote>
        ))}
      </div>
    </section>
  );
}


