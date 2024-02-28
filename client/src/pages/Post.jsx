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
      <div className='cloudinaryWidget'>        
        <h2>Upload A Post</h2>
        <CloudinaryUploadWidget />
      </div>
      <div className="postContainer container m-1">
        <form className ='descriptionForm' onSubmit={handleFormSubmit}>            
        <label htmlFor="description">Description:</label>
          <div className="descriptionBox flex-row space-between my-2">
            <input
              name="description"
              type="description"
              id="description"
              onChange={handleChange}
            />
          </div>
        </form>
      </div>

      </>
    );

    }
export default addPost;