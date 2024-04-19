import { useMatch } from 'react-router-dom';

export default function Transactions() {

  const routeMatch = useMatch("/transactions/:account");

    return (
      <div>
      Transactions - {routeMatch.params["account"]}
      </div>
    );
};
