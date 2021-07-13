import Card1 from './cardBlack'
import Card2 from './cardWhite'
const Board=()=>{
    let chess=[];
    let c=0;
    for(let i=1;i<=8;i++)
    {
        for(let j=1;j<=8;j++)
        {
            if((i+j)%2===0){
                chess.push(<Card1 key={c}/>)
                }
               
            
            else
            {
                chess.push(<Card2 key={c}/>)
            }
              
            c++;
        }
    }
    return chess

}
export default Board;