import React, { useState } from 'react';
import IconPicker from './IconPicker'; // Import IconPicker
import * as Icons from 'react-feather'; // Import all Feather icons

const App = () => {
  const [selectedIcon, setSelectedIcon] = useState(null); // Track selected icon
  const [isPickerOpen, setPickerOpen] = useState(false);

  // Handle icon selection
  const handleIconSelect = (iconName) => {
    setSelectedIcon(iconName); // Update selected icon
    setPickerOpen(false); // Close the picker
  };
  
  const handleClose = () => {
    setPickerOpen(false); // Close the popup when cross button is clicked
  };

  return (
    <div style={{display:"flex",textAlign:"center",width:"100vw",height:"100vh",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <h1>Icon Picker Demo</h1>
<br />
      <div
        style={{
          width: '100px',
          height: '100px',
          border: '1px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          
        }}
        title={selectedIcon}
        onClick={() => setPickerOpen(true)}
      >
        {selectedIcon ? (
          React.createElement(
            Icons[selectedIcon], // Dynamically render selected icon
            { size: 50 } // Icon size
          )
        ) : (
          'Select Icon'
        )}
      </div>
       <h1>{selectedIcon ? selectedIcon : (
          'Select Icon'
        )}</h1>
      {/* Icon Picker */}
      {isPickerOpen && (
        <IconPicker
          rowsInOnePage={6}
          columnsInOnePage={6}
          iconHeight={50}
          iconWidth={50}
          onClose={handleClose} // Pass the close function
          onIconSelect={handleIconSelect} // Pass the handler
        />
      )}
    </div>
  );
};

export default App;
