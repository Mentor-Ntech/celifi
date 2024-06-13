import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const tokens = [
  {
    token: "STG",
    balance1: "0.01575ETH",
    balance2: "0.01575ETH",
    usdValue: "$250.00",
    reward: "0.25ETH",
  },
  {
    token: "CUSD",
    balance1: "0.01575ETH",
    balance2: "0.01575ETH",
    usdValue: "$150.00",
    reward: "0.25ETH",
  },
  {
    token: "CELO",
    balance1: "0.01575ETH",
    balance2: "0.01575ETH",
    usdValue: "$350.00",
    reward: "0.25ETH",
  },
];

const DefiStakingTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow >
          <TableHead >Pool</TableHead>
          <TableHead>Balance</TableHead>
          <TableHead>Reward</TableHead>
          <TableHead className="text-right">USD Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tokens.map((token) => (
          <TableRow className="max-md:text-xs" key={token.token}>
            <TableCell className="font-medium">{token.token}</TableCell>
            <TableCell>
                <div className="flex flex-col">
                    <p>{token.balance1}</p>
                    <p>{token.balance2}</p>
                </div>
            </TableCell>
            <TableCell>{token.reward}</TableCell>
            <TableCell className="text-right">{token.usdValue}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DefiStakingTable;
