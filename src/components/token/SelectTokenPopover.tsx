"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const tokensBalances = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export function SelectTokenPopover({balances}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [tokensBalances, setTokensBalances] = React.useState([])

  React.useEffect(() => {
    setTokensBalances(balances)
    setValue(balances[0]?.name)
  }, [balances.length])
  

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? tokensBalances.find((tokensBalance) => tokensBalance.name === value)?.symbol
            : "Select token..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search token..." />
          <CommandEmpty>No tokensBalance found.</CommandEmpty>
          <CommandGroup>
            {tokensBalances.map((tokensBalance) => (
              <CommandList>
                <CommandItem
                  key={tokensBalance.name}
                  value={tokensBalance.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === tokensBalance.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <div className="flex w-full justify-between"><p>{tokensBalance.symbol}</p></div>
                </CommandItem>
              </CommandList>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
