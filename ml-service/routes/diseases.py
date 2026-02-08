from flask import Blueprint

diseases_bp = Blueprint('diseases', __name__)

@diseases_bp.route('/diseases')
def diseases():
    return {'status': 'ok'}
