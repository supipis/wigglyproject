import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import {MyAPI} from "../util/MyAPI";

const IndexPage = () => {
  const initialState = {
    myTitle: "",
    artBody: "",
    imgUrl: "",
    saveState: "not_saved"
  };
  let [state, setState] = useState(initialState)


  let handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      saveState: "not_saved"
    })
  }

  function onAddArticleClick(e) {
    //make the http request
    e.preventDefault();
    MyAPI.createArticle(state.myTitle, state.artBody, state.imgUrl).then((response) => {
      alert("Article successfully added.")
      setState({
        ...initialState,
        saveState: "saved"
      });
    })
    //handle response from the http request
  }


  return <Layout>
    <SEO title="Home" />
    <p>Welcome Admin!<br />Manage your news feed here.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>

    </div>
    <div className="article-container">
    <div className="part-one">
      <h3>Create Article</h3>
      <form action="">
      <label>
          Image URL:{" "}
          <input
            type="text"
            name="imgUrl"
            value={state.imgUrl}
            onChange={handleChange}
            id="image"
          />
        </label>
          <br />
          <br />
        <label>
          Title:{" "}
          <input
            type="text"
            name="myTitle"
            value={state.myTitle}
            onChange={handleChange}
            id="title"
          />
        </label>
        <br />
        <br />
        <label>
          Body:{" "}
          <textarea
            name="artBody"
            id="body"
            value={state.artBody}
            onChange={handleChange}
          />
        </label>
        <button onClick={onAddArticleClick} id="create-article">ADD ARTICLE</button>
      </form>
      {state.saveState == "saved" && <p>Successfully saved</p>}
    </div>

    <div className="part-two">

      <h4>Page Preview</h4>
      <h5>Article title: {state.myTitle}</h5>
      <h5>Article content: {state.artBody}</h5>
    </div>
  
    </div>


    <Link to="/page-2/">Manage Articles</Link> <br />
 </Layout>


}

export default IndexPage

