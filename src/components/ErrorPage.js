import {useRouteError} from 'react-router-dom';

const ErrorPage = () => {
    const err=useRouteError
console.log(err );
  return (
    <>
        <h1>OOPS😶</h1>
        <h3>Something went wrong</h3>
    </>
  )
}

export default ErrorPage