const Container = ( {children, myValue} ) => {

  return (

    <div>
        
        <h1>Este título é do Container</h1>

        {children}

        <p>O valor é: {myValue}</p>
        
    </div>

  )

}

export default Container