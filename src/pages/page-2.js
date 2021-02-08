import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { MyAPI } from "../util/MyAPI";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '/Users/supipisilva/wigglyproject/src/util/font-awesome.js';
import EditPage from "./edit"

const SecondPage = () => {
    let [articles, setArticles] = useState([]);
    let [deleted, setDeleted] = useState(false);

    useEffect(() => {
        MyAPI.getAllArticles().then(responseJson => {
            setArticles(responseJson);
        })
    }, [deleted])

    function onDeleteArticle(articleId) {
        MyAPI.deleteArticle(articleId).then(() => {
            alert("Article deleted successfully.");
            setDeleted(!deleted);
        })
    }

    function onEditArticle(articleId) {
        MyAPI.editArticle(articleId).then(() => {
            alert("Article updated successfully.");
        })
    }


    return <Layout>
        <SEO title="Page two" />
        <p>Welcome Admin!</p>
        <h3>Manage Article</h3>
        <table className="manage-container">
            <thead>
                <tr className="header">
                    <th className="art-id">
                        <h4>Article ID</h4>
                    </th>
                    <th className="image_url">
                        <h4>Image</h4>
                    </th>
                    <th className="title">
                        <h4>Title</h4>
                    </th>
                    <th className="body">
                        <h4>Article Body</h4>
                    </th>
                    <th className="created_at">
                        <h4>Created At</h4>
                    </th>
                </tr>
            </thead>
            <tbody>
            {articles.map(article => {
                return <tr>
                    <td className="article-id">{article.id}</td>
                    <td className="article-image_url"><img src={article.image_url} />
                    </td>
                    <td className="article-title">{article.title}{" "}</td>
                    <td className="article-body">{article.body} {" "}</td>
                    <td className="article-created_at">{article.created_at}</td>
                    <td> <a className='icons' href='#' onClick={(e) => navigate(`/edit/?articleId=${article.id}`)}>
                        <FontAwesomeIcon icon={'edit'} size="1x" color="black" />
                    </a></td>
                    <td><a className='icons' href='#' onClick={(e) => onDeleteArticle(article.id)}>
                        <FontAwesomeIcon icon={'trash'} size="1x" color="black" />
                    </a></td>
                </tr>
            })}
            </tbody>
        </table>
        <Link to="/">Go back to the homepage</Link>
    </Layout>;
}

export default SecondPage
