export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <h2>Contact</h2>

        <form
          className="contact-form"
          aria-label="contact-form"
          action="https://formsubmit.co/frank.siyli@gmail.com"
          method="post"
        >
          <label htmlFor="name">your name</label>
          <input
            aria-label="contact-form-name"
            type="text"
            id="name"
            name="name"
            pattern="\w{3,30}"
            maxLength="30"
            required
          />
          <label htmlFor="email">your email address</label>
          <input
            aria-label="contact-form-email"
            type="email"
            id="email"
            name="email"
            maxLength="50"
            required
          />
          <label htmlFor="textarea">feel free</label>
          <textarea
            aria-label="contact-form-textarea"
            id="textarea"
            name="textarea"
            required
            rows="10"
            pattern="\w{3,300}"
            maxLxength="300"
          ></textarea>
          <button id="submit" type="submit">
            submit
          </button>
        </form>
      </div>
    </>
  );
}
