'use strict';

const {Model}  = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Post.init({
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Post',
        tableName: 'posts',
        createdAt: 'created_at', // Ubah nama kolom untuk createdAt
        updatedAt: 'updated_at',  // Ubah nama kolom untuk updatedAt
        timestamps: true
    });
    return Post;
}