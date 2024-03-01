import { Component } from "react";
import "../styles/Pages.css"

class CloudinaryUploadWidget extends Component {
  componentDidMount() {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dcjz6vl08",
        uploadPreset: "hwl4md4f"
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info)
          const image = result.info;
          this.props.onImageUpload(image.url);
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }

  render() {
    return (
      <button id="upload_widget" className="subBtn" type="submit">
        Upload
      </button>
    );
  }
}

export default CloudinaryUploadWidget;
