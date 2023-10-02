import React from 'react'
import "./addPost.css"
import PhotoIcon from '@mui/icons-material/Photo';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function AddPost() {
  return (
    <div className='addPost'>
      <div className="addPostContainer">
        <div className="addPostTop">
        <img src="/images/01.jpg" alt="" className="addPostPic" />
        <input placeholder="What is in Your Mind...?"type="text" className="addPostInput" />
        </div>

            <hr className='addPostHr'/>

        <div className="addPostBottom">
            <div className="addPostIcons">
                <div className="addPostOptions">
                <div className="addPostOption">
                  <PhotoIcon  htmlColor="ornage" className='addPhoto'/>
                  <span className="addPostOptionText">Add Photo/Video</span>
               </div>
               <div className="addPostOption">
                  <AddLocationAltIcon htmlColor="red" className='addPhoto'/>
                  <span className="addPostOptionText">Add Location</span>
               </div>
               <div className="addPostOption">
                  <LocalOfferIcon htmlColor="blue" className='addPhoto'/>
                  <span className="addPostOptionText">Tag Your Friends</span>
               </div>
               <div className="addPostOption">
                  <LiveTvIcon htmlColor="tomato" className='addPhoto'/>
                  <span className="addPostOptionText">Live</span>
               </div>
               <button className="postButton">Post</button>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}
