
import './App.css'
import {BrowserRouter,Route, Routes} from  "react-router-dom"
import Counter from './Pages/Counter/Counter'
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Components/Navbar';
import { Toolbar } from '@mui/material';
import Todo from './Pages/Todo/Todo';

function App() {

  return (
    <>

    <BrowserRouter>
    <CssBaseline />
    <Toolbar />
    <Navbar />
      <Routes>
        <Route path="/" element={<Todo/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App



// import React, { useState } from 'react';
// import { Tab, Tabs, Button } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh',
//   },
//   tabContent: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
// });

// const tabData = ['Tab 1', 'Tab 2', 'Tab 3'];
// const initialData = ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'];

// function App() {
//   const classes = useStyles();
//   const [selectedTab, setSelectedTab] = useState(0);
//   const [displayedData, setDisplayedData] = useState(initialData.slice(0, 3));

//   const handleTabChange = (event, newValue) => {
//     setSelectedTab(newValue);
//   };

//   const handleShowMore = () => {
//     const startIndex = displayedData.length;
//     const endIndex = startIndex + 3;
//     const newData = initialData.slice(startIndex, endIndex);

//     if (newData.length === 0) {
//       // Disable the "Show More" button when there's no more data to show.
//       return;
//     }

//     setDisplayedData([...displayedData, ...newData]);
//   };

//   return (
//     <div className={classes.container}>
//       <Tabs value={selectedTab} onChange={handleTabChange}>
//         {tabData.map((tab, index) => (
//           <Tab label={tab} key={index} />
//         ))}
//       </Tabs>
//       <div className={classes.tabContent}>
//         {tabData[selectedTab] === 'Tab 1' && (
//           <div>
//             {displayedData.map((data, index) => (
//               <div key={index}>{data}</div>
//             ))}
//             <Button onClick={handleShowMore} disabled={displayedData.length >= initialData.length}>
//               Show More
//             </Button>
//           </div>
//         )}
//         {tabData[selectedTab] === 'Tab 2' && (
//           <div>
//             {/* Content for Tab 2 */}
//           </div>
//         )}
//         {tabData[selectedTab] === 'Tab 3' && (
//           <div>
//             {/* Content for Tab 3 */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import { Tab, Tabs, Button } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh',
//   },
//   tabContent: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
// });

// const tabData = ['Tab 1', 'Tab 2', 'Tab 3'];
// const tab1Data = ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'];
// const tab2Data = ['Data A', 'Data B', 'Data C', 'Data D', 'Data E'];
// const tab3Data = ['Info 1', 'Info 2', 'Info 3', 'Info 4', 'Info 5'];

// function App() {
//   const classes = useStyles();
//   const [selectedTab, setSelectedTab] = useState(0);
//   const [displayedData, setDisplayedData] = useState(tab1Data.slice(0, 3));

//   const handleTabChange = (event, newValue) => {
//     setSelectedTab(newValue);
//     // Set the initial displayed data based on the selected tab
//     switch (newValue) {
//       case 0:
//         setDisplayedData(tab1Data.slice(0, 3));
//         break;
//       case 1:
//         setDisplayedData(tab2Data.slice(0, 3));
//         break;
//       case 2:
//         setDisplayedData(tab3Data.slice(0, 3));
//         break;
//       default:
//         break;
//     }
//   };

//   const handleShowMore = () => {
//     const startIndex = displayedData.length;
//     let newData = [];

//     // Set the newData based on the selected tab
//     switch (selectedTab) {
//       case 0:
//         newData = tab1Data.slice(startIndex, startIndex + 3);
//         break;
//       case 1:
//         newData = tab2Data.slice(startIndex, startIndex + 3);
//         break;
//       case 2:
//         newData = tab3Data.slice(startIndex, startIndex + 3);
//         break;
//       default:
//         break;
//     }

//     if (newData.length === 0) {
//       // Disable the "Show More" button when there's no more data to show.
//       return;
//     }

//     setDisplayedData([...displayedData, ...newData]);
//   };

//   return (
//     <div className={classes.container}>
//       <Tabs value={selectedTab} onChange={handleTabChange}>
//         {tabData.map((tab, index) => (
//           <Tab label={tab} key={index} />
//         ))}
//       </Tabs>
//       <div className={classes.tabContent}>
//         {displayedData.map((data, index) => (
//           <div key={index}>{data}</div>
//         ))}
//         <Button onClick={handleShowMore} disabled={displayedData.length >= tab1Data.length}>
//           Show More
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default App;
