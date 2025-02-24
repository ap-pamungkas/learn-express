const PostRepository = require("../Repositories/PostRepository");

class PostController {
    constructor() {
        this.postRepository = new PostRepository();
    }

    async getAllPost(req, res) {
        try {
            const posts = await this.postRepository.getAllPost();
            if(posts.length === 0) {
                return res.status(404).json({ message: "Data Post Empty", status: 404 });
            }
            res.status(200).json({ data: posts });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createPost(req, res) {
        try {
            const post = await this.postRepository.createPost(req.body);
            res.status(201).json(post);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }   
}



module.exports = new PostController();



