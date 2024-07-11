import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { TokenChartData, errorMessage } from '@/types/data-type';

const tokentracker = process.env.TOKEN_TRACKER; // Ensure the environment variable name matches your .env file
const TokenTrackerUrl = 'https://api.coingecko.com/api/v3/coins/';



export default async function handler(req: NextApiRequest, res: NextApiResponse<TokenChartData | errorMessage>) {
  const { tokenName, from, to } = req.query;

  if (!tokenName || !from || !to) {
    return res.status(400).json({ message: 'tokenName, from, to, and interval are required parameters' });
  }

  const options = {
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': tokentracker
    }
  };

  console.log('Token Tracker:', tokentracker); // Debug log
  console.log('Request Headers:', options.headers); // Debug log

  try {
    const response = await axios.get(`${TokenTrackerUrl}${tokenName}/market_chart?vs_currency=usd&days=1`, {
      
      headers: options.headers // Include headers directly in the request configuration
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching price data:', error);
    if (axios.isAxiosError(error) && error.response) {
      res.status(error.response.status).json({ message: error.response.data.error || 'Error fetching price data' });
    } else {
      res.status(500).json({ message: 'Error fetching price data' });
    }
  }
}
