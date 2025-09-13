export default function ErrorState({ message = "Something went wrong." }) {
  return (
    <section style={{ padding: "1rem", textAlign: "center" }}>
      <p role="alert">{message}</p>
    </section>
  );
}
