import { useMatch,useParams } from 'react-router-dom';

export default function Transactions() {

  const { account } = useParams();
  //const routeMatch = useMatch("/transactions/:account");
  //Transactions - {routeMatch.params["account"]}
  console.log(account);
    return (
      <div>
        Transactions
      </div>
    );
};
