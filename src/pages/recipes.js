import React from "react"
import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"
import Seo from "../components/SEO"

const Recipes = () => {
  return (
    <Layout>
      <Seo
        title="Ricette"
        description="Tutte le ricette del nostro sito in un unica pagina"
      />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
