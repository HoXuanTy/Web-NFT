import React from 'react';
import DefaultLayout from './Layouts/DefaultLayout/indext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRouters } from './router';


function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            {publicRouters.map((router, index)=>{
              const Page = router.component;

              let Layout = DefaultLayout;

              if(router.layout){
                Layout = router.layout
              }

              return(
                <Route
                  key={index}
                  path={router.path}
                  element={
                    <Layout>
                        <Page/>
                    </Layout>
                  }
               />
              );
            })}
          </Routes>
        </div>  
      </Router>
  );
}

export default App;
