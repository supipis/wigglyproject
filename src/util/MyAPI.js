export class MyAPI {
    static host = "http://localhost:8080";

    static createArticle(title, body) {
        return fetch(MyAPI.host + "/api/articles", {
            method: "POST", body: JSON.stringify({
                title,
                body
            })
        });
    }

    static getAllArticles() {
        return fetch(MyAPI.host + "/api/articles", {
            method: "GET"
        }).then(response => response.json());
    }
}