const SmoothSection = ({ children }) => (
  <section
    style={{
      scrollSnapAlign: "start",
      scrollBehavior: "smooth",
    }}
  >
    {children}
  </section>
);

export default SmoothSection;
