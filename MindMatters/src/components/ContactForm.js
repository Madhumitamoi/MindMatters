import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="from-container">
      <h1>Send us your queries</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea
          placeholder="Write us your queries,we are there for you! "
          rows="4"
        ></textarea>
        <button>Send query</button>
      </form>
    </div>
  );
}

export default ContactForm;
