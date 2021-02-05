import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MyAPI } from "../util/MyAPI";



const EditPage = () => {
  let articleId = window.location.search.split("=")[1];
  let [article, setArticle] = useState(
    {
      title: "",
      body: "",

    });
  let [loading, setLoading] = useState(true);



  let handleChange = e => {
    setArticle({
      ...article,
      [e.target.name]: e.target.value,

    })
  }

  useEffect(() => {
    MyAPI.getArticle(articleId).then(responseJson => {
      setArticle(responseJson);
      setLoading(false);
    })
  }, [])



  function onEditArticleClick(e) {
    e.preventDefault();
    MyAPI.editArticle(articleId, article.title, article.body).then((response) => {
      alert("Article successfully updated.")
    })
  }


  return <Layout>
    <SEO title="edit page" />
    <h3>Edit Articles</h3>
    <h5>Article ID:{articleId}</h5>


    {loading && <p>Loading...</p>}
    {!loading && <form action="">
      <label>
        <h5 className="title">Title:{" "}
          <input type="text"
            name="title"
            value={article.title}
            onChange={handleChange} />  </h5>
      </label>
      <br />
      <br />
      <label>
        <h5 className="body">Body:{" "}
          <input type="text"
            name="body"
            value={article.body}
            onChange={handleChange} /> </h5>
      </label>
      <br />

      <button onClick={onEditArticleClick} id="edit-article">UPDATE</button>

    </form>}


    <Link to="/page-2/">Go back</Link>

  </Layout>


}

export default EditPage
