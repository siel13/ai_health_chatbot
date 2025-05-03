# app/chatbot.py

import random
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
import nltk
nltk.download('punkt')

class HealthChatbot:
    def __init__(self):
        self.vectorizer = CountVectorizer()
        self.model = MultinomialNB()
        self.train_data()

    def train_data(self):
        # Sample training data (for now)
        data = {
            'text': [
                'I have a headache',
                'My stomach hurts',
                'I feel dizzy',
                'I have a sore throat',
                'I have a fever',
                'I am coughing',
                'I feel tired'
            ],
            'label': [
                'headache',
                'stomach pain',
                'dizziness',
                'sore throat',
                'fever',
                'cough',
                'fatigue'
            ]
        }

        df = pd.DataFrame(data)
        X = self.vectorizer.fit_transform(df['text'])
        y = df['label']
        self.model.fit(X, y)

    def get_response(self, user_input):
        X_test = self.vectorizer.transform([user_input])
        prediction = self.model.predict(X_test)
        return f"Based on your symptoms, it might be: {prediction[0]}"

