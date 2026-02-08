from flask import Blueprint

prices_bp = Blueprint('prices', __name__)

@prices_bp.route('/prices')
def prices():
    return {'status': 'ok'}
