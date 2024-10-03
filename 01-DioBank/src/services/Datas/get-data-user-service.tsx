import "./get-data.css"

export function GetData(){
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  
  console.log(user)
  const handleLogout = () => {
    localStorage.clear(); // Limpa o localStorage
    window.location.reload(); // Recarrega a página para simular o logout
  };
  if(user && user.id){
    return (
      <div className="account-details">
        <h1>Bem-vindo, {user.id}!</h1>
        <p><b>Saldo:</b> {user.data?.balance}</p>
        <p><b>Dívida:</b> {user.data?.divide}</p>
        <p><b>Crédito:</b> {user.data?.credit}</p>
        <p><b>Reputação:</b> {user.data?.reputation}</p>
        <button onClick={handleLogout}>Sair</button>
      </div>
    )
  }else{
    return(
      <h1 className="account-details">Pendente realizar Login!</h1>
    )
  }  
}