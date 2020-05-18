import React, { Component } from 'react'

class ImageUpload extends Component {

    state = {
        selectedFiles: null
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFiles: event.target.files[0]
        })
    }
    fileUploadHandler = () => {
    
    }
    render() { 
        return ( 
            <div>
                <input type="file" onChange={this.fileSelectedHandler} />
                <button onClick={this.fileUploadHandler} >upload</button>

        </div>
         );
    }
}
 
export default ImageUpload;


   