

// import React, { useState } from 'react';
// import { Tab, Tabs, Button } from '@mui/material';


// const tabData = ['Tab 1', 'Tab 2', 'Tab 3'];
// const tabContents = [
//   ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'],
//   ['Data A', 'Data B', 'Data C', 'Data D', 'Data E'],
//   ['Info 1', 'Info 2', 'Info 3', 'Info 4', 'Info 5'],
// ];

// function Todo() {
//   const [selectedTab, setSelectedTab] = useState(0);
//   const [displayedData, setDisplayedData] = useState(tabContents[selectedTab].slice(0, 3));

//   const handleTabChange = (event, newValue) => {
//     setSelectedTab(newValue);
//     setDisplayedData(tabContents[newValue].slice(0, 3));
//   };

//   const handleShowMore = () => {
//     const startIndex = displayedData.length;
//     const newData = tabContents[selectedTab].slice(startIndex, startIndex + 3);

//     if (newData.length === 0) {
//       return;
//     }

//     setDisplayedData([...displayedData, ...newData]);
//   };

//   return (
//     <div className={"container"}>
//       <Tabs value={selectedTab} onChange={handleTabChange}>
//         {tabData.map((tab, index) => (
//           <Tab label={tab} key={index} />
//         ))}
//       </Tabs>
//       <div className={"tabContent"}>
//         {displayedData.map((data, index) => (
//           <div key={index}>{data}</div>
//         ))}
//         <Button onClick={handleShowMore} color='secondary' variant="contained" disabled={displayedData.length >= tabContents[selectedTab].length}>
//           Show More
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default Todo;


import React from 'react'

const Todo = () => {
  return (
    <div>Todo</div>
  )
}

export default Todo