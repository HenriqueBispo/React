const TemplateExpressions = () => {
  const name = "Matheus";

  const data = {
  age: 37,
  job: "Programmer",
  };

  return (

    <div>
    
      <h1>Hello {name}, how are you?</h1>
      <p>You have {data.age} age old. And your job is {data.job}</p>
    
    </div>
    
  );
  
};

export default TemplateExpressions
