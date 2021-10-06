import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"

const Contact = () => {
  return (
    <Layout>
      <Seo
        title="Contatti"
        description="La pagina per trovare tutti i riferimenti per contattarci"
      />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Tieniamoci in contatto</h3>
            <p>
              Air plant PBR&B lumbersexual church-key, keytar subway tile
              sustainable shabby chic craft beer green juice yuccie microdosing
              franzen VHS bushwick.p
            </p>
            <p>
              {" "}
              Shoreditch farm-to-table roof party everyday carry put a bird on
              it cloud bread chambray fam cronut dreamcatcher viral.
            </p>
            <p>
              Single-origin coffee aesthetic hella, 8-bit poutine unicorn kogi
              shabby chic. Pinterest meggings jean shorts whatever hoodie ugh.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mjvjzaqa"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">nome</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Messaggio</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                invia
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
