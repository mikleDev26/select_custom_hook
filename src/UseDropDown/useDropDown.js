import React, { useState, forwardRef } from 'react';

const useDropDown = (label, defaultState, options ) => {
  const [state, setState] = useState(defaultState);

  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  const Dropdown = forwardRef((props, ref) => (
    <label htmlFor={id}>
      {label}
      <select
        ref={ref}
        id={id}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={options.length === 0}
      >
        <option>
          {defaultState}
        </option>

        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}

      </select>
    </label>
  ));

  return [state, Dropdown, setState];
}

export default useDropDown;
