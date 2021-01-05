import React, {
    useState,
    useEffect,
    useRef,
    useReducer,
    
  } from 'react';
  import '../../Styles/games.css'
import Bluff from './bluff_master';
import Quizes from './Quizes';

  const Games =()=>{

    const [showQuiz, setShowQuiz] = useState(false);
    const [componentName, setComponentName] = useState(null)
    const [isGoBack, setIsGoBack] = useState(false)
    let bluff=()=>{
        // setComponentName(<Bluff />)
        console.log("show bluff");
    }

    let isGoBackFn=(isTrue)=>{
        if(isTrue)
        setComponentName(null);
    }

    
    let quiz=()=>{
        setShowQuiz(true);
        setComponentName(<Quizes isGoBackTrue={isGoBackFn}/>)
        console.log("show quiz");
    }

    let content=(

        <div className="top_level_game_class">
            
            <div className="game_big_box">
            <div className="game_individual_box" onClick={bluff}>
                <h2>Bluff</h2>
                </div>
                <div className="game_individual_box" onClick={quiz}>
                <h2>Quizes</h2>
                </div>
                {/* {componentName} */}
            </div>
                
        </div>
    )
    
    // return content;
    return componentName ? componentName : content;

  }

  export default Games;