import ThemeToggle from "./components/ThemeToggle";
import { usePurple } from "./context/PurpleContext";
import NavBar from "./components/NavBar";
import DOBPicker from "./components_MUI/DOBPicker";
import Step from "./step_Folder/Step";
import MsgBox from "./MsgBox";
import Canvas from "./Canvas";
import Change_4 from "./Change_4";
import TextBox from "./TextBox";
import Canvas_TextBox from "./Canvas_TextBox";


export default function App() {
  const { 
    new_Old_Option, setNew_Old_Option, showForm, setShowForm,
    nuDOB, setNuDOB,
    showMsgBox, setShowMsgBox,
   } = usePurple();

  const sky = '甲乙丙丁戊己庚辛壬癸';
  const earth = '子丑寅卯辰巳午未申酉戌亥';
  return (
    <div className="
      min-h-screen
      bg-white dark:bg-gray-900
      text-gray-900 dark:text-gray-100
      transition
    ">
      {/* <div className="p-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Yik App</h1>
        <ThemeToggle />
      </div> */}
      <NavBar />
      <div>
    
        {/* <DOBPicker /> */}
        {/* <Step /> */}
     <div className="flex flex-col lg:flex-row">
        {/* <Step/>  */}
        {/* <TextBox /> */}
        <Canvas_TextBox />
        {/* <MsgBox/> */}
      
      </div>

        
       
        
      </div>
    </div>
  );
}
