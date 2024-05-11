import { useMatch } from 'react-router-dom';

export default function Transactions() {

  const routeMatch = useMatch("/transactions/:accountId");

    return (
      <div>
      Transactions - {routeMatch.params["accountId"]}
      </div>
    );
};
