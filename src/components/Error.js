import React from "react";

function Error() {
  return (
    <div className="login-image-container">
      <p className="title">Error</p>
      <p className="subtitle">There is a error, please re login in order to access to the platform</p>
      <img
        src={
          "https://static.vecteezy.com/system/resources/previews/005/611/288/original/conceptual-os-error-warning-for-web-pages-banners-presentations-social-media-documents-posters-404-error-web-page-flat-style-cartoon-illustration-free-vector.jpg"
        }
        alt={`Login`}
        className="avatar"
      />
    </div>
  );
}

export default Error;
