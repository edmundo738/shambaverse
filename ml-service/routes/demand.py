from flask import Blueprint

demand_bp = Blueprint('demand', __name__)

@demand_bp.route('/demand')
def demand():
    return {'status': 'ok'}
