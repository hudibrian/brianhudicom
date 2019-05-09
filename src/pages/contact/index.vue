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
          data-netlify="true"
          v-on:submit.prevent="handleSubmit"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label> Don’t fill this out: <input name="bot-field" /> </label>
          </p>
          <input
            required
            name="name"
            placeholder="Name"
            type="text"
            autocomplete="off"
            v-model="formData.name"
          />
          <input
            required
            name="email"
            placeholder="E-mail"
            type="email"
            autocomplete="off"
            v-model="formData.email"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            v-model="formData.message"
          ></textarea>
          <button class="button" type="submit">Send</button>
        </form>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      formData: {}
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then(() => {
          this.$router.push("/contact/success");
        })
        .catch(error => this.$swal(error, "", "error"));
    }
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
