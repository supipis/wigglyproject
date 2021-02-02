import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { MyAPI } from "../util/MyAPI";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '/Users/supipisilva/wigglyproject/src/util/font-awesome.js';

const SecondPage = () => {
    let [articles, setArticles] = useState([]);

    useEffect(() => {
        MyAPI.getAllArticles().then(responseJson => {
            setArticles(responseJson);
        })
    })

    return <Layout>
        <SEO title="Page two" />
        <p>Welcome Admin!</p>
        <h3>Manage Article</h3>
        <table className="manage-container">
            <tr className="header">
                <th className="art-id">
                    <h4>Article ID</h4>
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
            {articles.map(article => {
                return <tr>
                    <td className="article-id">{article.id}</td>
                    <td className="article-title">{article.title}{" "}
                        <a className='icons' href='https://myfavcoffeeplace.io'>
                            <FontAwesomeIcon icon={'edit'} size="1x" color="black" />
                        </a>
                    </td>
                    <td className="article-body">{article.body} {" "}
                        <a className='icons' href='https://myfavcoffeeplace.io'>
                            <FontAwesomeIcon icon={'edit'} size="1x" color="black" />
                        </a>
                    </td>
                    <td className="article-created_at">{article.created_at}</td>
                    <td><a className='icons' href='#'>
                        <FontAwesomeIcon icon={'trash'} size="1x" color="black" />
                    </a></td>
                </tr>
            })}
        </table>
        <Link to="/">Go back to the homepage</Link>
    </Layout>;
}

export default SecondPage
