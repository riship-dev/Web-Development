import express from "express";
import bodyParser from "body-parser";
const APP = express();
const PORT = 4000;
APP.use(bodyParser.json());
APP.use(bodyParser.urlencoded({ extended: true }));

let posts = [{
        id: 1,
        title: "The Rise of Decentralized Finance",
        content: "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
        author: "Alex Thompson",
        date: "2023-08-01T10:00:00Z",
    }, {
        id: 2,
        title: "The Impact of Artificial Intelligence on Modern Businesses",
        content: "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
        author: "Mia Williams",
        date: "2023-08-05T14:30:00Z",
    }, {
        id: 3,
        title: "Sustainable Living: Tips for an Eco-Friendly Lifestyle",
        content: "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
        author: "Samuel Green",
        date: "2023-08-10T09:15:00Z",
    }
];
let lastId = 3;

APP.get("/posts", (req, res) => {
    res.json(posts);
});
APP.get("/posts/:id", (req, res) => {
    const ID = parseInt(req.params.id);
    const POST = posts.find((post) => posts.id === ID);
    if (!POST) return res.status(404).json({
        message: "Post not found"
    });
    res.json(POST);
});

APP.post("/api/post", (req, res) => {
    const NEW_ID = lastId++;
    const NEW_POST = {
        id: NEW_ID,
        title: body.post.title,
        content: body.post.content,
        author: body.post.author,
        date: new Date()
    };
    posts.push(NEW_POST);
    lastId = NEW_ID;
    res.status(201).json(NEW_POST);
});

APP.patch("/api/posts/:id", (req, res) => {
    const ID = parseInt(req.params.id);
    const PATCH_POST = posts.find((post) => posts.id === ID);
    if (!PATCH_POST) return res.status(404).json({
        message: "Post not found"
    });
    if (req.body.title) PATCH_POST.title = req.body.title;
    if (req.body.content) PATCH_POST.content = req.body.content;
    if (req.body.author) PATCH_POST.author = req.body.author;
});

APP.delete("/posts/:id", (req, res) => {
    const ID = parseInt(req.params.id);
    const index = posts.findIndex((post) => posts.id === ID);
    if (index === -1) return res.status(404).json({  
        message: "Post not found"
    });
    posts.splice(index, 1);
    res.json({ message: "Post deleted"});
});

APP.listen(PORT, () => {
    console.log(`API is running at http://localhost:${PORT}`);
});