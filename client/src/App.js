import React from "react";


export const App = ()=> {
  return (
    <div >
      This is the client side

      <form action="../../post" method="post" 
              className="form">
          <button type="submit">Connected?</button>
        </form>
    </div>
  );
}


