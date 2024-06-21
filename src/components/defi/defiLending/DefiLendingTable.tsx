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
  },
  {
    token: "CUSD",
    balance1: "0.01575ETH",
    balance2: "0.01575ETH",
    usdValue: "$150.00",
  },
  {
    token: "CELO",
    balance1: "0.01575ETH",
    balance2: "0.01575ETH",
    usdValue: "$350.00",
  },
];

const DefiLendingTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead >Pool</TableHead>
          <TableHead className="text-center">Balance</TableHead>
          <TableHead className="text-right">USD Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tokens.map((token) => (
          <TableRow className="max-md:text-xs" key={token.token}>
            <TableCell className="font-medium">{token.token}</TableCell>
            <TableCell className="text-center">
                <div className="flex flex-col">
                    <p>{token.balance1}</p>
                    <p>{token.balance2}</p>
                </div>
            </TableCell>
            <TableCell className="text-right">{token.usdValue}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DefiLendingTable;
