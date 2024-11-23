import React, { useState } from 'react';
import * as FeatherIcons from 'react-feather'; // Import all Feather icons

const IconPicker = ({
  rowsInOnePage,
  columnsInOnePage,
  iconHeight,
  iconWidth,
  pickerHeight = '500px',
  pickerWidth = '500px',
  onIconSelect,
  onClose, // Function passed from parent to handle close
}) => {
  const icons = Object.keys(FeatherIcons);
  const [currentPage, setCurrentPage] = useState(0);
  const iconsPerPage = rowsInOnePage * columnsInOnePage;
  const paginatedIcons = icons.slice(
    currentPage * iconsPerPage,
    (currentPage + 1) * iconsPerPage
  );

  const handleIconClick = (iconName) => {
    onIconSelect(iconName);
  };

  return (
    <div
      style={{
        height: pickerHeight,
        width: pickerWidth,
        overflow: 'hidden',
        border: '1px solid gray',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#1a1a1a',
        zIndex: 1000,
      }}
    >

      {/* Grid to display icons */}
      <div
        style={{
          display: 'grid',
          gridTemplateRows: `repeat(${rowsInOnePage}, ${iconHeight}px)`,
          gridTemplateColumns: `repeat(${columnsInOnePage}, ${iconWidth}px)`,
          gap: '20px',
        }}
      >
        {paginatedIcons.map((iconName) => {
          const IconComponent = FeatherIcons[iconName]; // Get the icon component dynamically
          return (
            <div
              key={iconName}
              onClick={() => handleIconClick(iconName)}
              style={{
                width: iconWidth,
                height: iconHeight,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #ddd',
                borderRadius: '4px',
              }}
              title={iconName}
            >
              {/* Render the icon */}
              {IconComponent ? (
              <IconComponent  size={iconHeight-10}/>
            ) : (
                <span>Invalid</span> // Fallback in case of an error
              )}
            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
      <div
        style={{
          marginTop: '10px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <button
          disabled={currentPage === 0}
          style={{marginRight:'10px'}}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>
        <button
          disabled={(currentPage + 1) * iconsPerPage >= icons.length}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
      <div
        style={{
          marginTop: '10px',
          display: 'flex',
          position:'absolute',
          bottom:0,
          right:0,
          justifyContent: 'space-between',
        }}
      >
         <button
          onClick={onClose}
        >
         Close &times;
        </button>
        </div>
    </div>
  );
};

export default IconPicker;
