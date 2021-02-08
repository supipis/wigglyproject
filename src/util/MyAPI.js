export class MyAPI {
    static host = "http://localhost:8080";

    static createArticle(title, body, image_url) {
        return fetch(MyAPI.host + "/api/articles", {
            method: "POST", body: JSON.stringify({
                title,
                body,
                image_url
            })
        });
    }

    static getAllArticles() {
        return fetch(MyAPI.host + "/api/articles").then(response => response.json());
    }

    static deleteArticle(articleId) {
        return fetch(MyAPI.host + `/api/articles/${articleId}`, {
            method: "DELETE",
        });
    }

    static editArticle(articleId, title, body, image_url) {
        return fetch(MyAPI.host + `/api/articles/${articleId}`, {
            method: "PUT", body: JSON.stringify({
                title,
                body,
                image_url
            })
        });
    }

    static getArticle(articleId) {
        return fetch(MyAPI.host + `/api/articles/${articleId}`, {
            method: "GET",
        }).then(response => response.json());
    }
}