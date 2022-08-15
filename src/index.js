import ReactDOM from 'react-dom/client';
import Journal from './App';






// this is how to render in react 17
//  ReactDOM.render(
//   <TemporaryName />,
//   document.getElementById("root")
//  );


// this is how to render in react 18
  ReactDOM.createRoot(document.getElementById('root')).render(<Journal />)