import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../utils/mutations';
import Auth from '../utils/auth';
import "../styles/Pages.css"
import Nav from "../components/Nav";
import CloudinaryUploadWidget from '../components/CloudinaryUploadWidget';

function addPost(props) {
    const [ formState, setFormState ] = useState({ description: '', image: '' });
    const [addPost] = useMutation(ADD_POST);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addPost({
            variables: {
                description: formState.description,
                image: formState.image,
            },
        });
        const token = mutationResponse.data.addPost.token;
        Auth.login(token);
    };
    
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]: value,
        }); 
    };

    return (
      <>
      <div className="postContainer container m-1">
        <h2>Upload A Post</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2">
            <label htmlFor="description">Description</label>
            <input
              placeholder="Description"
              name="description"
              type="description"
              id="description"
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
      <div>
        <h2>Cloudinary Widget</h2>
        <CloudinaryUploadWidget />
      </div>
      </>
    );

    }
export default addPost;