import React, { useRef, useEffect } from 'react';
import useDropDown from './UseDropDown/useDropDown';

function App() {

  const dropDownOptions = ['Second Option', 'Third Option', 'End So On...']

  const [dropDownValue, CustomDropDown] = useDropDown('My Custom Drop Down', 'First Option', dropDownOptions);

  console.log('Drop Down Value', dropDownValue);

 const ref = useRef();

  useEffect(() => {
    console.log('REF', ref)
  }, []);

  return (
    <div className="App">
      <h2>Use drop down</h2>
      <CustomDropDown ref={ref}/>
    </div>
  );
}

export default App;
