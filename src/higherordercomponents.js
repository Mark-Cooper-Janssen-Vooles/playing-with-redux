import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
  return (
    <div>
      <h1>Info</h1>
      <p>The info is: {props.info}</p>
    </div>
  )
}

const widthAdminWarning = (WrappedComponent) => {
  return (props) => {
    //takes the props and does nothing with them, but the WrappedComponent gets access to it if you spread {...props}, passes props down to child.
    return (
      <div>
        { props.isAdmin && <p>This is private info. Please don't share!</p> }
      
        <WrappedComponent {...props} />
      </div>
    );
  };
};



const AdminInfo = widthAdminWarning(Info); //this will return an alternative version of Info (a higher order component)


const requireAuthentication = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        { props.isAuthenticated ? 
        (<WrappedComponent {...props} />) : (<div>Please authenticate.</div>) }
      </div>
    )
  };
};

const AuthInfo = requireAuthentication(Info);

// const HigherOrderComponents = () => {
//   return (
//     <div>
//       HOC stuff.
//       <AdminInfo isAdmin={true} info="This is some info" />
//     </div>
//   )
// }


const HigherOrderComponents = () => {
  return (
    <div>
      HOC stuff.
      <AuthInfo isAuthenticated={true} info="This is some info" />
    </div>
  )
}


export default HigherOrderComponents;