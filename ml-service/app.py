from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import numpy as np
from datetime import datetime
import os

app = Flask(__name__)
CORS(app)

price_model = joblib.load('models/price_prediction.pkl')
demand_model = joblib.load('models/demand_forecast.pkl')
disease_model = joblib.load('models/disease_detection.pkl')


@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'ok', 'service': 'shambaverse-ml'})


@app.route('/predict/price', methods=['POST'])
def predict_price():
    data = request.json

    features = pd.DataFrame([
        {
            'product': data['product'],
            'region': data['region'],
            'month': datetime.now().month,
            'year': datetime.now().year,
            'rainfall_mm': data.get('rainfall', 100),
            'supply_tons': data.get('supply', 1000),
            'demand_index': data.get('demand', 0.5),
        }
    ])

    prediction = price_model.predict(features)

    return jsonify(
        {
            'product': data['product'],
            'region': data['region'],
            'predicted_price': round(float(prediction[0]), 2),
            'currency': 'AOA',
            'confidence': 0.85,
            'factors': {
                'seasonality': 'Alta demanda esperada',
                'weather_impact': 'Condições favoráveis',
                'supply_trend': 'Estável',
            },
        }
    )


@app.route('/predict/demand', methods=['POST'])
def predict_demand():
    data = request.json

    future_dates = pd.date_range(start=datetime.now(), periods=30, freq='D')

    predictions = []
    for date in future_dates:
        features = pd.DataFrame([
            {
                'product': data['product'],
                'region': data['region'],
                'day_of_week': date.weekday(),
                'month': date.month,
                'is_weekend': date.weekday() >= 5,
                'price_current': data.get('current_price', 10000),
            }
        ])

        pred = demand_model.predict(features)[0]
        predictions.append(
            {
                'date': date.strftime('%Y-%m-%d'),
                'demand_index': round(float(pred), 3),
                'category': 'high'
                if pred > 0.7
                else 'medium'
                if pred > 0.4
                else 'low',
            }
        )

    return jsonify(
        {
            'product': data['product'],
            'region': data['region'],
            'forecast': predictions,
            'recommendation': 'Aumentar produção'
            if predictions[0]['demand_index'] > 0.7
            else 'Manter nível atual',
        }
    )


@app.route('/detect/disease', methods=['POST'])
def detect_disease():
    if 'image' not in request.files:
        return jsonify({'error': 'Nenhuma imagem enviada'}), 400

    file = request.files['image']

    from PIL import Image
    import io

    image = Image.open(io.BytesIO(file.read()))
    image = image.resize((224, 224))
    image_array = np.array(image) / 255.0
    image_array = np.expand_dims(image_array, axis=0)

    prediction = disease_model.predict(image_array)
    class_index = np.argmax(prediction[0])
    confidence = float(prediction[0][class_index])

    diseases = [
        'Lagarta Militar',
        'Ferrugem do Milho',
        'Murcha Bacteriana',
        'Pulguinho',
        'Saúdavel',
    ]

    detected = diseases[class_index]

    treatment = {
        'Lagarta Militar': 'Aplicar Bacillus thuringiensis ou pesticida biológico',
        'Ferrugem do Milho': 'Fungicida à base de triazol, remover plantas infectadas',
        'Murcha Bacteriana': 'Não há cura, remover e queimar plantas infectadas',
        'Pulguinho': 'Inseticida sistêmico, armadilhas amarelas',
        'Saúdavel': 'Continuar manejo adequado',
    }

    return jsonify(
        {
            'disease': detected,
            'confidence': round(confidence * 100, 2),
            'treatment': treatment[detected],
            'severity': 'high'
            if detected != 'Saúdavel' and confidence > 0.8
            else 'medium'
            if confidence > 0.6
            else 'low',
            'recommended_action': 'Tratamento imediato'
            if detected != 'Saúdavel' and confidence > 0.8
            else 'Monitoramento',
        }
    )


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
