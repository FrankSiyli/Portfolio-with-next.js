export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p>
          If you want us to work together or have any question feel free to send
          me a message.
        </p>
        <form
          className="contact-form"
          action="https://formsubmit.co/frank.siyli@gmail.com"
          method="post"
        >
          <label for="name">your name</label>
          <input
            type="text"
            id="name"
            name="name"
            pattern="\w{3,30}"
            maxlength="30"
            required
          />
          <label for="email">your email address</label>
          <input type="email" id="email" name="email" maxlength="50" required />
          <label for="textarea">feel free</label>
          <textarea
            id="textarea"
            name="textarea"
            required
            rows="10"
            pattern="\w{3,300}"
            maxlength="300"
          ></textarea>
          <button id="submit" type="submit">
            submit
          </button>
        </form>
      </div>
    </>
  );
}
