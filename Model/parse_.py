import pandas as pd
from pymongo import MongoClient
import os
import datetime
import time
import pandas as pd


# Apply the conversion method to each element in the 'date' column
def convert_to_unix(timestamp):
    element = datetime.datetime.strptime(timestamp, "%Y-%m-%d")
    timestamp_tuple = element.timetuple()
    unix_timestamp = time.mktime(timestamp_tuple)
    return unix_timestamp

binance_symbols = {
    'aave-token': 'AAVE',
    'akash-network': 'AKT',
    'algorand': 'ALGO',
    'aptos': 'APTOS',
    'arbitrum': 'ARBITRUM',
    'arweave': 'AR',
    'avalanche': 'AVAX',
    'axelar': 'AXL',
    'axie-infinity': 'AXS',
    'binance-coin': 'BNB',
    'bitcoin-cash': 'BCH',
    'bitcoin-sv': 'BSV',
    'bitcoin': 'BTC',
    'bitget-token-new': 'BGB',
    'bittensor': 'TENSOR',
    'bittorrent': 'BTT',
    'bonk-token': 'BONK',
    'cardano': 'ADA',
    'celestia': 'CELES',
    'chainlink': 'LINK',
    'chiliz': 'CHZ',
    'conflux-network': 'CFX',
    'cosmos': 'ATOM',
    'cronos': 'CRONOS',
    'dai': 'DAI',
    'decentraland': 'MANA',
    'dogecoin': 'DOGE',
    'ecash': 'XEC',
    'elrond-egold': 'EGLD',
    'ethereum-classic': 'ETC',
    'ethereum-name-service': 'ENS',
    'ethereum': 'ETH',
    'fantom': 'FTM',
    'filecoin': 'FIL',
    'first-digital-usd': 'DUSD',
    'flow': 'FLOW',
    'frax-share': 'FXS',
    'frax': 'FRAX',
    'ftx-token': 'FTT',
    'gala': 'GALA',
    'gnosis-gno': 'GNO',
    'hedera-hashgraph': 'HBAR',
    'helium': 'HNT',
    'immutable-x': 'IMX',
    'injective-protocol': 'INJ',
    'internet-computer': 'ICP',
    'iota': 'IOTA',
    'jupiter-coin': 'JUP',
    'kaspa': 'KASP',
    'kava': 'KAVA',
    'klaytn': 'KLAY',
    'kucoin': 'KCS',
    'lido-dao': 'LDO',
    'litecoin': 'LTC',
    'maker': 'MKR',
    'mantle': 'MTL',
    'matic-network': 'MATIC',
    'mina-protocol': 'MINA',
    'monero': 'XMR',
    'near-protocol': 'NEAR',
    'neo': 'NEO',
    'oasis-network': 'ROSE',
    'okb': 'OKB',
    'optimism': 'OPT',
    'ordinals': 'ORD',
    'pancakeswap': 'CAKE',
    'peercoin': 'PPC',
    'pendle': 'PENDLE',
    'plasm-network': 'PLM',
    'polkadot': 'DOT',
    'quant-network': 'QNT',
    'render-token': 'RNDR',
    'ripple': 'XRP',
    'rocket-pool': 'RPL',
    'ronin': 'RON',
    'sei': 'SEI',
    'shiba-inu': 'SHIB',
    'siacoin': 'SC',
    'solana': 'SOL',
    'spark-token': 'SPRK',
    'stacks': 'STX',
    'stellar': 'XLM',
    'sui': 'SUI',
    'terra': 'LUNA',
    'tether': 'USDT',
    'tezos': 'XTZ',
    'the-graph': 'GRT',
    'the-sandbox': 'SAND',
    'theta-token': 'THETA',
    'thorchain': 'RUNE',
    'toncoin': 'TON',
    'tron': 'TRX',
    'trueusd': 'TUSD',
    'uniswap': 'UNI',
    'unus-sed-leo': 'LEO',
    'usd-coin': 'USDC',
    'vechain-token': 'VET',
    'wemix': 'WEMIX',
    'wootrade': 'WOO',
    'wrapped-bitcoin': 'WBTC'
}
for file in os.listdir(r'C:\YoussefENSI_backup\Auto-Investor\trial\Auto-Investor\Model\parse\Cryptodata'):
    coin = binance_symbols[file.split('_')[0]]
    # Read the CSV file into a DataFrame
    df = pd.read_csv(rf'C:\YoussefENSI_backup\Auto-Investor\trial\Auto-Investor\Model\parse\Cryptodata\{file}').drop(columns=['Start']).rename(columns={'End':'Date'})

    # Apply the conversion function to each element in the 'date' column
    df['timestamp'] = df['Date'].apply(convert_to_unix)
    # print(df.head())
    # Establish a connection to MongoDB server
    client = MongoClient('mongodb+srv://Youssef:azerty12@cluster0.uoe6yol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

    # Access your MongoDB database
    db = client['Coins_data']

    # Specify the collection where you want to insert the data
    collection_name = coin
    collection = db[collection_name]

    # Check if the collection exists, if not, create it
    if collection_name not in db.list_collection_names():
        print(f'Collection "{collection_name}" does not exist. Creating it...')
        db.create_collection(collection_name)
    else:
        continue

    # Convert the DataFrame to a dictionary (each row becomes a dictionary)
    data = df.to_dict(orient='records')

    # Insert the data into the MongoDB collection
    collection.insert_many(data)

    # Close the MongoDB connection
    client.close()
