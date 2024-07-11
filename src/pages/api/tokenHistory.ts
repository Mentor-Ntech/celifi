import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const tokentracker = process.env.TokenTracker;
const TokenTrackerUrl = 'https://api.coingecko.com/api/v3/coins/';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { tokenName,from,to,interval } = req.query;

  if (!tokenName) {
    return res.status(400).json({ error: 'Token name is required' });
  }

  const options = {
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': tokentracker
    }
  };

  try {
    const response = await axios.get(`${TokenTrackerUrl}${tokenName}/market_chart/range?vs_currencies=usd&from=${from}&to=${to}&interval=${interval}&precision=${2}`, options);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching price data:', error);
    res.status(500).json({ error: 'Error fetching price data' });
  }
}
