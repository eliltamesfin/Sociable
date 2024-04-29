import User from "../models/User.js";
/*Read */
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    /*we garb that particular id  */
    const user = await User.findById(id);
    /*using that id we can grab the information that we need about the user */
    res
      .status(200)
      .json(
        user
      ); /*we just send to the front end every thing that is relevant for the user */
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    const friends = await Promise.all(
      /*cause we are going to make multiple api calls to the data base*/

      user.friends.map((id) => User.findById(id))
    ); /*this will get all friends related to the id i specified  */
    const formattedFriends = friends.map(
      ({ id, firstName, occupation, location, picturePath }) => {
        return { id, firstName, occupation, location, picturePath };
      } /*we kind of modify our schema  a lil bit before we send back to the front end  */
    );
    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
/*Update */
export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    const user = await User.findById(
      id
    ); /*we are grabbing the current user as well all the info */

    const friend = await User.findById(friendId);
    if (user.friends.includes(friendId)) {
      /*if the friendId is already part of the main users friend list we want them removed   */
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((id) => id !== id);
    } else {
      user.friends.push(friendId);
      friend.friends.push(id);
      /*like facebook if one of them add them it get added in both */
    }
    await user.save();
    await friend.save();

    const friends = await Promise.all(
      /*cause we are going to make multiple api calls to the data base*/

      user.friends.map((id) => User.findById(id))
    ); /*this will get all friends related to the id i specified  */
    const formattedFriends = friends.map(
      ({ id, firstName, occupation, location, picturePath }) => {
        return { id, firstName, occupation, location, picturePath };
      }
    );
    res.status(200).json(formattedFriends)
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
