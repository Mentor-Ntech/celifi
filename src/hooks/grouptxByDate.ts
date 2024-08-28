import { TransactionData } from "@/types/data-type";

export const groupTokensByDate = (objs: TransactionData[]) => {
  const groupedTokens = objs.reduce((acc, token) => {
    const { date } = token;

   
    acc[date] = [...(acc[date] || []), token];

    return acc;
  }, {} as Record<string, TransactionData[]>); 

  return groupedTokens;
};


export const formatDateToString=(inputDate: string): string =>{
   
    const [month, day, year] = inputDate.split('/').map(Number);
  
   
    const monthNames = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
  
    
    const suffix = (day:number) => {
      if (day >= 11 && day <= 13) return 'th';
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };
  
    
    return `${monthNames[month - 1]} ${day}${suffix(day)}, ${year}`;
  }
  