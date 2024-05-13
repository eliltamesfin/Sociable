import Post from "../models/Post.js";

/*Create */
export const createPost = async (req, res) => {
  try {
    const { description, picturePath, location} = req.body
    const newPost = new Post({
      userId: req.user.id,
      location: location,
      description: description,
      picturePath: picturePath,
      likes: {},
      comments: [],
    });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
/*Read */
export const getFeedPosts = async (req,res) =>{
try{
    const post =await Post.find();

    res.status(200).json(post)

}catch(err){
    res.status(404).json({ message: err.message }) 
}
}
export const getUserPosts= async (req,res) =>{
try{
    const {userId} = req.params
    const post =await Post.find({ userId})
    res.status(200).json(post)
}catch (err){
    res.status(404).json({message:err.message})
}

}
export const likePost =async(req,res) => {
  try{  
    const {id} = req.params
    const {userId} =req.body
    const post =await Post.findById(id)
    const isLiked = post.likes.get(userId)

    if (isLiked){
post.likes.delete(userId)
    }else{
        post.likes.set(userId,true)
    }
    const updatedPost=await Post.findByIdAndUpdate(
        id,
        {likes:post.likes},{new:true}
    )
    
    res.status(200).json(updatedPost)
}catch (err){
    res.status(404).json({message:err.message})
}

}