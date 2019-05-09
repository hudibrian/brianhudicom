<template>
  <Layout>
    <div class="content-box mt2em">
      <div id="contact-form" class="contact-form">
        <h1 class="contact-form_title">
          You can contact me by filling out this form
        </h1>
        <div class="separator"></div>

        <form
          class="form"
          name="contact"
          data-netlify-recaptcha="true"
          data-netlify="true"
        >
          <input
            required
            name="name"
            v-model="contact.name"
            placeholder="Name"
            type="text"
            autocomplete="off"
          />
          <input
            required
            name="email"
            v-model="contact.email"
            placeholder="E-mail"
            type="email"
            autocomplete="off"
          />
          <textarea
            name="message"
            v-model="contact.message"
            rows="4"
            placeholder="Message"
          ></textarea>
          <div data-netlify-recaptcha="true"></div>
          <button class="button" type="submit">Send</button>
        </form>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  data: () => {
    return {
      contact: {
        name: "",
        email: "",
        message: ""
      }
    };
  }
};
</script>

<style lang="scss">
.contact-form {
  font-family: 16px;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
}

.contact-form .separator {
  border-bottom: solid 1px #ccc;
  margin-bottom: 15px;
}

.contact-form .form {
  display: flex;
  flex-direction: column;
  font-size: 16px;
}

.contact-form_title {
  color: #333;
  text-align: left;
  font-size: 28px;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
  border: solid 1px #e8e8e8;
  font-family: "Roboto", sans-serif;
  padding: 10px 7px;
  margin-bottom: 15px;
  outline: none;
}

.contact-form textarea {
  resize: none;
}

.contact-form .button {
  background: var(--link-color);
  border: solid 1px var(--link-color);
  color: white;
  cursor: pointer;
  padding: 10px 50px;
  text-align: center;
  text-transform: uppercase;
}

.contact-form .button:hover {
  background: var(--link-color-hover);
  border: solid 1px var(--link-color-hover);
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea,
.contact-form .button {
  font-size: 15px;
  border-radius: 3px;
}
</style>
