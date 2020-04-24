   import axios from 'axios';
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
      const [data, setData] = useState([])
      const [backendCheckURL, setBackendCheckURL] = useState({
         url: ''
      });
      const [spreadSheetData, setSpreadSheetData] = useState([]);
      const [getInfoDataSingleData, setGetInfoDataSingleData] = useState({});
      const [getInfoData, setGetInfoData] = useState([]);
      // const [URL, setURL] = useState(props);
      let count = 0;
      let resso = "";
      let arr = [];
      let url;
      // if(props.sendObservableURL!='')
      // useEffect(() => {

      //    console.log("props props props",props)
      //    setURL(props);
      // }, [props]);
      useEffect(() => {


         if (spreadSheet.length !== 0 ) {
            // setSpreadSheetData(spreadSheetData => [...spreadSheetData, spreadSheet]);
            // if (spreadSheetData.length != 0) {
            // spreadSheet.map((elemm) => {
            spreadSheet.feed.entry.map((elemm2, index) => {
               let pair = {};
               if (index == 0) {
                  console.log("mainURL", elemm2.gsx$baseurl.$t);
                  localStorage.setItem("mainURL", elemm2.gsx$baseurl.$t);


                  setBackendCheckURL({
                     url: elemm2.gsx$baseurl.$t + 'checkStatus'
                  });
               }
               // if(index){

               pair.label = elemm2.gsx$getintouchfieldstitle.$t;
               pair.placeholde = elemm2.gsx$getintouchfieldsplaceholder.$t;
               pair.validationtypedesc = elemm2.gsx$getintouchfieldsvalidationtypedesc.$t;
               pair.position = elemm2.gsx$getintouchfieldsposition.$t;
               pair.fieldstype = elemm2.gsx$getintouchfieldstype.$t;
               setGetInfoData((hello) => [...hello, pair])

               // console.log("spreadSheet.length ", spreadSheet.length);
               // console.log("spreadSheetData ", spreadSheetData);
               // console.log("getInfoData---------->", getInfoData)
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
         url = backendCheckURL.url;
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
      }, [count, backendCheckURL])

      //console.log("fgfggggggggggggggggggg",data)
      return [data, getInfoData];
   }