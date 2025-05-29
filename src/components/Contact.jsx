import '../styles/contact.css';

function Contact() {
  return (
    <section className="contact-form">
      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        className=""
      >
        <h2>Contact Me</h2>

        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" required />

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
