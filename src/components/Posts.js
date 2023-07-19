import React from 'react';
import {FaRegCheckCircle,FaComment,FaExchangeAlt,FaHeart,FaUpload} from 'react-icons/fa';

const Posts = () => {
  return (
    <div className='posts'>
      <div className="posts__first">
          <div className='post__first__img'>
            <img src="/Images/img1.jpg" alt="profile" />
          </div>
          <div className="post__first__name">
             <strong>Alena Darema</strong><FaRegCheckCircle className='verify'/>
          </div>
          <div className="post__first__username">
             @alendarema12 <span>6m</span>
          </div>
      </div>
      <div className='posts_details'>
        <div className="posts__details__msg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt saepe harum qui, officia quos suscipit voluptatibus inventore hic iusto fuga illum quod provident libero nesciunt odit voluptatum tempore nulla. Error dicta architecto, nam eos earum quidem perferendis unde a eligendi numquam ipsa, autem, corrupti aper?
        </div>
        <div className="posts__details__img">
            <img src="/Images/cricket.jpg" alt="" />
        </div>
        <div className="reaction">
            <span> <FaComment className='re'/>45 </span>
            <span> <FaExchangeAlt className="re"/>4 </span>
            <span> <FaHeart className='re'/>345 </span>
            <span> <FaUpload className="re"/>243 </span>
        </div>
      </div>
    </div>
  )
}

export default Posts