import React, { useState } from 'react'

function Showhide() {
    const [show, setShow] = useState(false);
    const handleClick = (event) => {setShow(!show)};

  return (
    <div>
        <button onClick={handleClick}>{show ? "Hide " : "Show "}Text</button>
        {show && <h2>Hide me</h2>}
    </div>
  )
}

export default Showhide