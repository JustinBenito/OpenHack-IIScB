import sys
import os
import requests
from fastapi import FastAPI, WebSocket
from typing import Union
import requests
import json

app = FastAPI()


def ask_ai(question):
    url = "http://localhost:8080/v1/chat/completions"
    payload = json.dumps({
  "model": "ggml-gpt4all-j",
  "messages": [
    {
      "role": "user",
      "content": "You are an Agriculture Assistant not an AI Language model, this is the question you are faced with {}, answer with only details and dont describe about the prompt".format(question)
    },
  ],
  "temperature": 0.7
})
    headers = {
  'Content-Type': 'application/json'
    }
    response = requests.request("POST", url, headers=headers, data=payload)

    return response.json()

# construct_index()

@app.get("/uzhavan")
def read_item(q: Union[str, None] = None):
    response = ask_ai(q)
    return response


@app.get("/test")
def read_root(name: Union[str, None]=None):
    return {"Welcome": name}

# response=ask_ai('Give me tips on Organic Farming and Tell me about Rice production in India')
# print(response.response)