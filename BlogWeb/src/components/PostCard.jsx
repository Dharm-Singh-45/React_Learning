import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  // Generate the image preview URL
  const imageUrl = appwriteService.getFilePreview(featuredImage);

  return (
    <Link to={`/post/${$id}`} className="w-full">
      <div className='bg-gray-100 rounded-xl p-4 transition-transform transform hover:scale-105'>
        <div className='flex justify-center mb-4'>
          <img 
            src={imageUrl} 
            alt={title} 
            className='rounded-xl' 
          />
        </div>
        <h2 className='text-xl font-bold text-center'>{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;