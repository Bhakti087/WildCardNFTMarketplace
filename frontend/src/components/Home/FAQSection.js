import Question from '.Question';
function FAQSection ({ bgColor}) {
  return (
     <div className={bgColor}>
       <div className="py-16 mx-auto w-full px-4 max-w-4xl">
          <h3 className="mb-12 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-18" > Frequently Asked Questions </h3>
          <hr className="border-b border-gray-100"/>
        <Question 
        question="What is a wildcard ?"
        answer="It is a Non Fungible token for a entity."/>
       </div>
     </div>
  )
}
export default FAQSection;