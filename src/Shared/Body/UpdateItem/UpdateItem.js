import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateItem = () => {
    const {id} = useParams();
    return (
        <div>
            {/* <img src={url} alt="" /> */}
          <h3>Updating Item : {id}</h3>  
        </div>
    );
};

export default UpdateItem;