import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import CloudinaryUploadWidget from '../components/CloudinaryUploadWidget';
import { ADD_POST } from '../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const PostForm = () => {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    refetchQueries: [
      QUERY_POSTS,
      'getPosts',
      QUERY_ME,
      'me'
    ]
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addPost({
        variables: {
          description,
          image,
          // Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's username 
          postAuthor: Auth.getProfile().authenticatedPerson.username,
        },
      });

      setDescription('');
      setImage('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'description' && value.length <= 280) {
      setDescription(value);
      setCharacterCount(value.length);
    }

    if (name === 'image') {
      setImage(value)
      console.log(value)
    }
  };

  // const handleUpload = (event) => {
  //   const { name, value } = event.target;

  //   if (name === 'image') {
  //     setImage(value)
  //     console.log(value)
  //   }
  // };

  return (
    <div>
      <h3>Describe your post here!</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="description"
                placeholder="Describe your image..."
                value={description}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className='cloudinaryWidget'>        
        <h2>Upload A Post</h2>
        <CloudinaryUploadWidget />
        <br></br>
        <textarea
                name="image"
                placeholder="Enter image url here"
                value={image}
                className="form-input w-100"
                style={{ lineHeight: '1', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
      </div>
            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Post
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default PostForm;
