import { createContext, useContext, useEffect, useState } from "react"
import dayjs from 'dayjs'
import Box from "@mui/material/Box";
import MUI_messageBox from "../components_MUI/MUI_messageBox";


// 1. Create context
const PurpleContext = createContext()

// 2. Provider
export function PurpleProvider({ children }) {
const [userId, setUserId] = useState('1');
const [dob, setDOB] = useState(dayjs('1978-06-11'))
// New User
const [nuName, setNuName] = useState('Terrie');
const [nuDOB, setNuDOB] = useState(dayjs('1978-06-11'))
const [nuHOB, setNuHOB] = useState('23:30');
const [earth_HOB, setEarth_HOB] = useState('子時');
const [nuGender, setNuGender] = useState('F');

// new or old user
const [ly, setLy] = useState(1978);
const [lm, setLm] = useState(1);
const [ld, setLd] = useState(5);
const [lh, setLh] = useState('子');
const [lyy, setLyy]= useState('丁巳');
const [animal_12, setAnimal_12]= useState('鼠');
const [station, setStation]= useState('金4局');

// Position
const [life_Index, setLife_Index]= useState(0);
const [body_Index, setBody_Index]= useState(0);
const [sky_yan, setSky_yan]= useState('壬');
const [mf, setMf]= useState('陽女');
const [big10yr_Direction, setBig10yr_Direction]= useState('antiClock');
// Sky, Earth

// Box
const [showGrid, setShowGrid]= useState(true);
// Box_L
const [new_Old_Option, setNew_Old_Option]=useState('new');
const [showForm, setShowForm]=useState(true);

// Stars
const [N1_earth, setN1_earth]= useState('戌')
const [N1_Id, setN1_Id]= useState(11)

const [n1, setN1]= useState('紫微')
const [n2, setN2]= useState('天機星')
// 紫微星 N1_Emperor
// 天機星 N2_Intelligence
// 太陽星 N3_Sun
// 武曲星 N4_Finance 
// 天同星 N5_Enjoyment
// 廉貞星 N6_Justice 
const [click_boxId,setClick_boxId]=useState(11)
const [n1_emperor, setN1_emperor]= useState('紫微')
const [n2_intelligence, setN2_intelligence]= useState('天機')
const [n3_sun, setN3_sun]= useState('太陽')
const [n4_finance, setN4_finance]= useState('武曲')
const [n5_enjoyment, setN5_enjoyment]= useState('天同')
const [n8_justice, setN8_justice]= useState('廉貞')


// MUI_messageBox
const [msgOpen, setMsgOpen] = useState(false)
const [msgText, setMsgText] = useState('')
//MsgBox
const [showMsgBox, setShowMsgBox]=useState(false)
const [msgBoxText, setMsgBoxText]=useState('testing')
const [clickStar,setClickStar]=useState('')


  

  return (
    <PurpleContext.Provider 
    value={{
        userId, setUserId,
        dob, setDOB,
        // new user
        nuName, setNuName,
        nuDOB, setNuDOB,
        nuHOB, setNuHOB,
        earth_HOB, setEarth_HOB,
        nuGender, setNuGender,

        // new or old user
        animal_12, setAnimal_12,
        ly, setLy,
        lm, setLm,
        ld, setLd,
        lh, setLh,
        lyy, setLyy,
        station, setStation,

        // position
        life_Index, setLife_Index,
        body_Index, setBody_Index,
        sky_yan, setSky_yan,
        mf, setMf,
        big10yr_Direction, setBig10yr_Direction,

        // sky, earth
      
        // box
        showGrid, setShowGrid,

        // box_L
        new_Old_Option, setNew_Old_Option,
        showForm, setShowForm,

        // star
        N1_earth, setN1_earth,
        N1_Id, setN1_Id,
        n1, setN1,
        n2, setN2,
        // 紫微星 N1_Emperor
        // 天機星 N2_Intelligence
        // 太陽星 N3_Sun
        // 武曲星 N4_Finance 
        // 天同星 N5_Enjoyment
        // 廉貞星 N6_Justice
        click_boxId,setClick_boxId,
        n1_emperor, setN1_emperor,
        n2_intelligence, setN2_intelligence,
        n3_sun, setN3_sun,
        n4_finance, setN4_finance,
        n5_enjoyment, setN5_enjoyment,
        n8_justice, setN8_justice,

        // MUI_messageBox
        msgOpen, setMsgOpen,
        msgText, setMsgText,
        // MsgBox
        showMsgBox, setShowMsgBox,
        msgBoxText, setMsgBoxText,
        clickStar,setClickStar,

    //   yik, 
    //   showYikTable, setShowYikTable,
    //   showYikDetail, setShowYikDetail,
    //   yikId, setYikId,
    //   option, setOption
      }}>
      {children}
    </PurpleContext.Provider>
  )
}

// 3. Custom hook (best practice)
export function usePurple() {
  return useContext(PurpleContext)
}
