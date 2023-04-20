import React, { useState } from "react";
import styled from "@emotion/styled";

const Location = ({city,country, getWeather}) => {
const [query, setQuery] = useState(""); 
const [inputMode, SetInputMode] = useState(false);

    return ( 
        <Container >
              {!inputMode &&  <City onClick={()=>SetInputMode(true)}>{city}</City>}
               {inputMode && (
                <form onSubmit = {e=> {
                    e.preventDefault();
                    getWeather(query);
          }} >
          <input type="text"  value={query} onChange={e=>setQuery(e.target.value)}/>
          <button type='submit'>Search</button>
          <button onClick={()=> SetInputMode(false)}>Cancel</button>

        </form>
        )}
                <Country>{country}</Country>
            </Container>
     );
}
 
export default Location;
const Container = styled.div`
text-align:center;
`
const City =styled.h1`
font-family: 'Merriweather',sans-serif;
font-size: 1.6rem;
position:relative;
cursor: Pointer;
&:hover{top:-5px;}
`

const Country =styled.h3`
font-family: 'Fira Sans',sans-serif;
font-size: 1.1rem;

`;