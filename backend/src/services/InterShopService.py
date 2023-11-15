import requests
import re

from bs4 import BeautifulSoup
from services.SavingDataService import SavingDataService
from helpers.Plataforms import indexPlatformsDB
from helpers.checkWitheSpaceStoreName import checkWitheSpaceStoreName

class InterShopService:
    @staticmethod
    def extract(store:str) -> str:
        selectStore = checkWitheSpaceStoreName(store)
        url = f"https://intershop.bancointer.com.br/lojas/{selectStore.lower()}"
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/115.0"
        }
        response = requests.get(url, headers=headers)
        soup = BeautifulSoup(response.text, 'html.parser')
        specificElement = soup.find('h1').text
        extractCashBack = specificElement[6:7]
        dataCashback = re.split("%", extractCashBack)[0]
        if dataCashback == " ":
            dataCashback = "SNF"
        SavingDataService.save(store.lower(), indexPlatformsDB['intershop'], dataCashback)
        return dataCashback