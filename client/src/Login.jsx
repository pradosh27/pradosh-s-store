import React from "react";
import * as Components from './Components';
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useState , useEffect } from "react";
import { Button } from "./Components";
function Login() {
    const [signIn, toggle] = React.useState(true);
    const { loginWithRedirect } = useAuth0();
    const [gameState, setGameState] = useState(
        Array(3).fill(null).map(() => Array(3).fill(null))
      );
      const [currentPlayer, setCurrentPlayer] = useState("X");
      const [winner, setWinner] = useState(null);
    
      useEffect(() => {
        if (checkWin(gameState)) {
          setWinner(currentPlayer);
          alert(`Player ${currentPlayer} wins!`);
        } else if (isBoardFull(gameState)) {
          alert("Draw!");
        }
      }, [gameState, currentPlayer]);
    
      const handleCellClick = (row, col) => {
        if (gameState[row][col] || winner) return;
        
        const newGameState = gameState.map((r, rIdx) =>
          r.map((cell, cIdx) => (rIdx === row && cIdx === col ? currentPlayer : cell))
        );
        
        setGameState(newGameState);
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      };
    
      const checkWin = (board) => {
        for (let i = 0; i < 3; i++) {
          if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) return true;
          if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) return true;
        }
        if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) return true;
        if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) return true;
        return false;
      };
    
      const isBoardFull = (board) => board.every(row => row.every(cell => cell));
    
      const resetGame = () => {
        setGameState(Array(3).fill(null).map(() => Array(3).fill(null)));
        setCurrentPlayer("X");
        setWinner(null);
      };
     return(
         <Wrapper>
            <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
                 <div style={{ textAlign: "center", padding: "20px"}}>
      <table style={{ margin: "auto", borderCollapse : "collapse" , boxShadow : "3px 3px 3px 3px rgb(161, 150, 150)" }}>
        <tbody>
          {gameState.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                  style={{
                    width: "100px",
                    height: "100px",
                    textAlign: "center",
                    verticalAlign: "middle",
                    fontSize: "24px",
                    backgroundColor: cell ? "rgb(207, 232, 236)" : "white",
                    border: "1px solid #a9a4a4",
                    cursor: cell ? "not-allowed" : "pointer",
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Button
        onClick={resetGame}
        style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Reset Game
    </Button>
    </div>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Button onClick = {() => loginWithRedirect()}>Sign In</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Welcome Back!</Components.Title>
                     <Components.Paragraph>
                         To keep connected with us please login with your personal info
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Hello, Friend!</Components.Title>
                       <Components.Paragraph>
                           Please Sign Up and start journey with us
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Wanna Play Game?
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
         </Wrapper>
     )
}
const Wrapper = styled.section`
margin-left : 60vh;
margin-top : 8vh;
`;
export default Login;