import React, {
    useState,
    useEffect,
    useRef,
    useReducer
  } from 'react';
  import "../../../Styles/Common.css";
  import '../../../Styles/quizes.css'
  import correct_ans from '../../../Assets/audio/correct.mp3';
  import wrong from '../../../Assets/audio/wrong.mp3';
import Axios from 'axios';


const Quizes =(props)=>{
    const [all_word_n_meaning, set_all_word_n_meaning] = useState([]);
    // const [isCOrrectANs, setIsCOrrectANs] = useState(null);
    const [quiz, setQuiz] = useState(
        { 'word': '',
    'options': [{value: '',isCorrectAns: null},{value: '',isCorrectAns: null},{value: '',isCorrectAns: null},{value: '',isCorrectAns: null}]
}
    );
    // const [isCOrrectANs, setIsCOrrectANs] = useReducer(
    //     (state, newState) => ({ ...state, ...newState }),
    //     {}        m
    //   );
    useEffect(() => {
       Axios.get('https://spreadsheets.google.com/feeds/list/1cPSHzaim1l0qO1ygazRWO6OHWZcrDU9kiS1Ga6h9CNs/1/public/full?alt=json')
            .then((res)=>{

                console.log('response from quiz',res.data['feed']['entry'])
                if(res.data['feed']['entry'])
                    res.data['feed']['entry'].map((elem)=>{
                        let new_Word_n_meaning ={};

                         new_Word_n_meaning[elem.gsx$word.$t] = elem.gsx$meaning.$t
                         console.log('response from quiz 111',new_Word_n_meaning);
                        set_all_word_n_meaning(all_word_n_meaning => [...all_word_n_meaning, new_Word_n_meaning])
                        
                    })

                    
                
            })
    }, [])

    let shuffle=(a)=> {
        let j, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            [a[i],a[j]]=[a[j],a[i]];
        }
        return a;
      }
//     {'quiz':{ 'word': 'word_val'
//     'options': ['opt1val','opt1va2','opt3val','opt4val'],
//     'correct_choice': 'opt2val'
// }}

let checkForAns=(quiz_from_dom,ans_by_user, index)=>{
    let actual_answer_of_quiz="";
    // quiz_object=all_word_n_meaning.filter((ele)=>ele[quiz.toString()]===ans)
    all_word_n_meaning.map((ele)=>{
        console.log("all_wo ",ele,quiz_from_dom,ele[quiz_from_dom]);
        if(ele[quiz_from_dom])
        actual_answer_of_quiz = ele[quiz_from_dom];
    })
    // console.log("all_word_n_meaning['quiz']   , ans ",all_word_n_meaning,ans ,quiz_object[0][quiz.toString()],quiz_object);
    let demo_quiz = {...quiz};
    console.log("actual_answer_of_quiz ",actual_answer_of_quiz);
    
    if(quiz.length!=0){
        console.log("actual_answer_of_quiz 333333",actual_answer_of_quiz);
        quiz.options.map((ele,index)=>{
            console.log("actual_answer_of_quiz 999999",ele.value,ans_by_user);
            if(ele.value==ans_by_user){
                console.log("actual_answer_of_quiz 44444",actual_answer_of_quiz);
                if(actual_answer_of_quiz==ans_by_user){
                    console.log("actual_answer_of_quiz 5555",actual_answer_of_quiz);
                    demo_quiz.options[index].isCorrectAns=true;
                    demo_quiz.options.map((ele,index2)=>{
                        if(index2!=index)
                        demo_quiz.options[index2].isCorrectAns=null;

                    })
                }else{
                    demo_quiz.options[index].isCorrectAns=false;
                    demo_quiz.options.map((ele,index2)=>{
                        if(index2!=index)
                        demo_quiz.options[index2].isCorrectAns=null;

                    })
                }

            }
            
        })
    }
    console.log("demo_quiz  ",demo_quiz);
    // let qii={...demo_quiz}
        setQuiz({...demo_quiz});
        // setIsCOrrectANs(true);
        // setIsCOrrectANs({ [quiz]: true });
    
    // console.log(" isCOrrectANs ",isCOrrectANs);
}

// useEffect(() => {
//     effect
//     return () => {
//         cleanup
//     }
// }, [input])

let setNewQuestion=()=>{
    
    let demo_quiz={};
    if(all_word_n_meaning.length>3){

        let new_arr,quiz_arr,new_array_for_opt=[];
        new_arr = shuffle(all_word_n_meaning);
        quiz_arr=         new_arr.slice(0,4);

        demo_quiz.word=Object.keys(quiz_arr[0])[0] ;
        demo_quiz.correct_choice = null;
        new_array_for_opt = shuffle(quiz_arr);
        demo_quiz.options = [{value: Object.values(new_array_for_opt[0])[0],
            isCorrectAns: null},{value:Object.values(new_array_for_opt[1])[0],
                isCorrectAns: null},{value:Object.values(new_array_for_opt[2])[0],
                    isCorrectAns: null},{value:Object.values(new_array_for_opt[3])[0],
                        isCorrectAns: null}];

        // demo_quiz.options = [{value: "akhil",
        //     isCorrectAns: null},{value:"Kumat",
        //         isCorrectAns: null},{value:"sdhjds",
        //             isCorrectAns: null},{value:"sdfsd",
        //                 isCorrectAns: null}];
        
        setQuiz(demo_quiz);}
}



    useEffect(() => {
        console.log('response from quiz 222',all_word_n_meaning);
        setNewQuestion();
        
    }, [all_word_n_meaning])

    let goToGames=()=>{

        props.isGoBackTrue(true);
    }

let content =(
    <div className="">
        
        <h2 className="set_in_middle">Quizes</h2>
        <div class="scp-quizzes-main">
        <div className="scp-quizzes-data">
        <h3> {quiz.word} : Meaning ?</h3>
    
    <br/>

    {quiz.options?quiz.options.map((ele, index)=> {
         return (<div className="a">
          <input type="radio" name="question2" />
         <label key={index} className={(ele.isCorrectAns==null ?"": (ele.isCorrectAns ?"correct_ans": "wrongans"))} onClick={() => checkForAns(quiz.word,ele.value,index)}>{ele.value} {ele.isCorrectAns}</label><br/>
         {/* {ele.isCorrectAns && (ele.isCorrectAns!=null) ? : <audio autoPlay src={wrong} preload="auto"></audio>} */}
         {(ele.isCorrectAns==null ?"": (ele.isCorrectAns ?<audio autoPlay src={correct_ans} preload="auto"></audio>: <audio autoPlay src={wrong} preload="auto"></audio>))}
         </div>)
    }) :(<h2>nothing</h2>)}

<button
            className="primary fixedDisplay adjustWidth mt-15"
            onClick={() => setNewQuestion()}
          >
            Next
          </button>

<button
            className="primary fixedDisplay adjustWidth mt-15"
            onClick={() => goToGames()}
          >
            BACK
          </button>

    {/* <input type="radio" name="question2" />
       <label className="worngans">1. #read&lt;file></label><br/>
    <input type="radio"  name="question2" />
       <label>2. #get &lt;file></label><br/>
    <input type="radio" name="question2" id="inculdefile" />
       <label for="inculdefile">3. #include &lt;file></label> <br/>
    <input type="radio" name="question2" />
     <label>4. #pre &lt;file></label>  */}
        </div>
        </div>
    </div>
)
return content;

}

export default Quizes;