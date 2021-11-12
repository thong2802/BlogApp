import {PostModel} from '../models/postsModel.js'

export const getPosts = async (req, res) => {
    try{
        // const post = new PostModel({
        //     tittle : 'test',
        //     content : 'test',
        // });
        // post.save();
        const posts  = await PostModel.find();
        console.log('posts', posts);
        res.status(200).json(posts);
    } catch(err) {
        res.status(500).json({error : err });
    }

 };

 export const createPost = (req, res) => {
    res.send('Create Post succes');
 };