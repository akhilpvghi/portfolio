   import axios from 'axios';
   import SpreadSheetdataset from './SpreadsheetData';
   import React, {
      useState,
      useEffect
   } from "react";
   // import {useLoadedData} from '../hooks/isDataLoaded'
   import {
      useHttp
   } from './InstaPhotos';
   import {
      timer,
      from,
      interval
   } from 'rxjs';
   import {
      map,
      concatMap,
      filter,
      take,
      takeWhile,
      takeUntil
   } from 'rxjs/operators'
   export const useObservable = () => {
      const [spreadSheet] = useHttp('https://spreadsheets.google.com/feeds/list/1DDMh6FsdoxN7a6GO4eQlpXQjIqanz6Ckam5RpQtIQEA/1/public/full?alt=json');
      // const [spreadSheet, setSpreadSheetData] = useState(SpreadSheetdataset);
      const [data, setData] = useState([])
      const [siteHandler, setSiteHandler] = useState({
         url: '',
         componentToLoad: ''
      });
      const [getInfoDataSingleData, setGetInfoDataSingleData] = useState({});
      const [getInfoData, setGetInfoData] = useState([]);
      const [getDownloadMenuData, setDownloadMenuData] = useState([]);
      const [getDownloadSubmenuData, setDownloadSubmenuData] = useState([]);
      // const [getDownloadSubmenuDataperma, setDownloadSubmenuDataperma] = useState([]);
      const [getDownloadNavData, setDownloadNavData] = useState([]);
      // const [URL, setURL] = useState(props);
      let count = 0;
      let resso = "";
      let arr = [];
      let length = 1;
      let url;
      // let pair = {};
      let tempMenuData = {};
      let readySubmenudata = {};
      
      // if(props.sendObservableURL!='')
      // useEffect(() => {
         
         //    console.log("props props props",props)
         //    setURL(props);
         // }, [props]);
      
      let createsubmenuData = ((entry) => {
         // console.log("tum btaoge kya", elemm2)
         // console.log("elemm2.gsx$fieldthree.$t; ingaro",getDownloadMenuData[0] ,elemm2.gsx$fieldtwo.$t.slice(5),elemm2.gsx$fieldfour.$t)
         // for (var property2 in getDownloadMenuData[0]) {
            entry.map((elemm2) => {
               let elemm3=elemm2;
               let tempsubmenuData = {};
                  if (elemm2.gsx$fieldtwo.$t.includes('subM')) {
                        tempsubmenuData['submenu_' + elemm2.gsx$fieldtwo.$t.slice(5)+length++] = elemm3.gsx$fieldthree.$t;
                        tempsubmenuData['submenu_' + elemm2.gsx$fieldtwo.$t.slice(5)+length++] = elemm3.gsx$fieldfour.$t;
                        tempsubmenuData['submenu_' + elemm2.gsx$fieldtwo.$t.slice(5)+length++] = elemm3.gsx$fieldfive.$t
                        tempsubmenuData['submenu_' + elemm2.gsx$fieldtwo.$t.slice(5)+length++] = elemm3.gsx$fieldsix.$t
                        tempsubmenuData['submenu_' + elemm2.gsx$fieldtwo.$t.slice(5)+length++] = elemm3.gsx$fieldseven.$t
                        tempsubmenuData['submenu_' + elemm2.gsx$fieldtwo.$t.slice(5)+length++] = elemm3.gsx$fieldeight.$t;
                        tempsubmenuData['submenu_' + elemm2.gsx$fieldtwo.$t.slice(5)+length++] = elemm3.gsx$fieldnine.$t;
                        // setDownloadSubmenuDataperma((perma)=>[...perma,getDownloadSubmenuData])
                        // }
                        setDownloadSubmenuData((hello) => [...hello, tempsubmenuData])
                     }
               })

               // readySubmenudata[elemm2.gsx$fieldtwo.$t.slice(5)]=tempMenuData
            // }
         })

      

   useEffect(() => {
      if (getDownloadMenuData.length != 0)
         createsubmenuData(spreadSheet.feed.entry)

   }, [getDownloadMenuData.length])

   let createMenuData = ((elemm2, entry) => {
      if (elemm2.gsx$fieldtwo.$t.includes('menu')) {
         tempMenuData['menu' + length++] = elemm2.gsx$fieldthree.$t;
         tempMenuData['menu' + length++] = elemm2.gsx$fieldfour.$t;
         tempMenuData['menu' + length++] = elemm2.gsx$fieldeight.$t;
         tempMenuData['menu' + length++] = elemm2.gsx$fieldnine.$t;
         tempMenuData['menu' + length++] = elemm2.gsx$fieldfive.$t
         tempMenuData['menu' + length++] = elemm2.gsx$fieldseven.$t
         tempMenuData['menu' + length++] = elemm2.gsx$fieldsix.$t
         setDownloadMenuData((prevdata) => [...prevdata, tempMenuData])
      }
   })


   useEffect(() => {


      if (spreadSheet.length !== 0) {
         // setSpreadSheetData(spreadSheetData => [...spreadSheetData, spreadSheet]);
         // if (spreadSheetData.length != 0) {
         // spreadSheet.map((elemm) => {
         spreadSheet.feed.entry.map((elemm2, index) => {
            let pair = {};
            let calulateTimeInISOFormat;
            if (index == 0) {
               console.log("mainURL", elemm2.gsx$sitehandler.$t.split('_siteHandler_')[0]);
               localStorage.setItem("mainURL", elemm2.gsx$sitehandler.$t.split('_siteHandler_')[0]);
               calulateTimeInISOFormat= new Date(elemm2.gsx$fieldone.$t.split('_created_On_')[1]).toISOString(); 
               localStorage.setItem("formCreatedOn",calulateTimeInISOFormat);
               setSiteHandler({
                  url: elemm2.gsx$sitehandler.$t.split('_siteHandler_')[0] + '/checkStatus',
                  componentToLoad: elemm2.gsx$sitehandler.$t.split('_siteHandler_')[1]
               });
            }
            if (elemm2.gsx$fieldtwo.$t.includes('textfield')) {
               pair.textfield = elemm2.gsx$fieldtwo.$t
               pair.label = elemm2.gsx$fieldthree.$t;
               pair.placeholder = elemm2.gsx$fieldfour.$t;
               pair.type = elemm2.gsx$fieldeight.$t;
               pair.fieldstype = elemm2.gsx$fieldnine.$t;
               pair.errorMessage = elemm2.gsx$fieldfive.$t
               pair.regExp = elemm2.gsx$fieldseven.$t
               setGetInfoData((prevdata) => [...prevdata, pair])
            }
            createMenuData(elemm2, spreadSheet.feed.entry)
         })
         // })
         // }
      }
   }, [spreadSheet.length])

   // useEffect(() => {


   //    // const res = async () => {
   //    // return spreadSheet;
   //    // }

   //    //    if(spreadSheet.length!=0)
   //    // {setSpreadSheetData(spreadSheetData => [...spreadSheetData, spreadSheet]);
   //    //    console.log("spreadSheetData " ,spreadSheetData);
   //    //    }



   //    // }
   //    // res();

   // }, [spreadSheetData.length])

   useEffect(() => {
      let pair = {}
      url = siteHandler.url;
      console.log("props of observa ", url);
      if (url != '' && url != undefined) {
         timer(0, 2000).pipe(
            map(() => {
               count++;
               console.log("url from observable  ", url)
               axios.get(url).then((res) => {
                     resso = res.data;
                     console.log("res.data----->> ", res.data, "---->resso.includes('onl')   -->", resso.includes('onl'))

                  })
                  .catch((err) => {
                     console.log("err     ", url)
                  })

               return [resso.includes('onl'), count]
            }),
            takeWhile((count) => {
               console.log("dsfds dfv dafs statusfromBackend count[0]", count[0], "count[1] ", count[1]);
               if (count[0] !== false)
                  setData(count)
               return count[1] !== 5 && count[0] === false;
            })
         ).subscribe((val) => setData(val))
         //console.log("fgfhhhhhhhhhhhhhhhhhhh",data)
      }
   }, [count, siteHandler])

   //console.log("fgfggggggggggggggggggg",data)
   return [data, getInfoData,getDownloadMenuData, getDownloadSubmenuData, siteHandler.componentToLoad];
   }