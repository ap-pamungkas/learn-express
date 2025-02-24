const {Post} = require('../../models');

console.log('====================================');
console.log(Post);
console.log('====================================');

class PostRepository {
    async createPost(data) {
        const post = await Post.create(data);
        return post;
    }
    async getPostById(id) {
        const post = await Post.findByPk(id);
        return post;
    }
    async getAllPost() {        
        const posts = await Post.findAll();
        return posts;
    }
    async updatePost(id, data) {
        const post = await Post.update(data, {
            where: { id: id }
        });
        return post;
    }
    async deletePost(id) {
        const post = await Post.destroy({
            where: { id: id }
        });
        return post;
    }
}


module.exports = PostRepository;