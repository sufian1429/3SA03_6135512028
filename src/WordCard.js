import React from 'react';
export default function WordCard(props){
 return (
 <div>
{ Array.from(props.value).map((c, i) => <CharacterCard value={c} key={i}/>) }

 </div>
 <div>const activationHandler = c => { console.log(`${c} has been activated.`) }
...
<CharacterCard value={c} key={i} activationHandler={activationHandler}/></div>

 );
}
