import Spinner from "react-bootstrap/Spinner";

function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Spinner animation="border" />
    </div>
  );
}

export default Loader;









// import Button from 'react-bootstrap/Button';
// import Spinner from 'react-bootstrap/Spinner';

// function Spin() {
//   return (
//     <>
//       <Button variant="primary" disabled>
//         <Spinner
//           as="span"
//           animation="border"
//           size="sm"
//           role="status"
//           aria-hidden="true"
//         />
//         <span className="visually-hidden">Loading...</span>
//       </Button>{' '}
//       <Button variant="primary" disabled>
//         <Spinner
//           as="span"
//           animation="grow"
//           size="sm"
//           role="status"
//           aria-hidden="true"
//         />
//         Loading...
//       </Button>
//     </>
//   );
// }

// export default Spin;