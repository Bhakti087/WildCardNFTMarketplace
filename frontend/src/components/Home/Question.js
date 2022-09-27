import { useState } from ' react ' ;
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome' ;
import { faChevronDown , faChevronUp} from '@fortawesome/free-solid-svg-icons' ;

function Question({ question , answer}) {
  const [expand, setExpand ] = useState(false);
  const expandClass = expand ? 'display' : 'hidden';
  const ansClass = `$(expandClass) p-4`
  
  return (
   <div className = "shadow rounded border border-gray-100 border-t-8 " >
      <div className = "p-4 text-xl relative font-medium " >
        <div className = "w-5/6" >
          {question}
        </div>
        <button
          aria-label="question-expander"
          className="text-xl absolute top-0 right-0 p-4 fous:outline-none"
          onClick = {() =>setExpand(!expand) }
          >
          {expand ?
            <FontAwesomeIcon icon = {faChevronUp} className = "w-5"/>
            :
            <FontAwesomeIcon icon = {faChevronDown} className = "w-5"/>
          }
        </button>
      </div>
      <div className={ansClass}>
       {answer}
      </div>
      </div>
    )
}
export default Question;