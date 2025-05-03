from flask import Flask, request, jsonify

app = Flask(__name__)

# Dummy data acting as our "in-memory database"
users = []

@app.route('/')
def home():
    return 'Welcome to the API! Go to /api/data'
    
@app.route('/api/data', methods=['POST'])
def create_user():
    data = request.get_json()
    if not data or 'name' not in data or 'age' not in data:
        return jsonify({'error': 'Name and age are required!'}), 400
    
    user = {
        'id': len(users) + 1,  # auto-increment ID
        'name': data['name'],
        'age': data['age']
    }
    users.append(user)
    return jsonify(user), 201


@app.route('/api/data', methods=['GET'])
def get_all_users():
    return jsonify(users), 200


@app.route('/api/data/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = next((u for u in users if u['id'] == user_id), None)
    if user:
        return jsonify(user), 200
    return jsonify({'error': 'User not found!'}), 404


@app.route('/api/data/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    data = request.get_json()
    user = next((u for u in users if u['id'] == user_id), None)
    if not user:
        return jsonify({'error': 'User not found!'}), 404
    
    user['name'] = data.get('name', user['name'])
    user['age'] = data.get('age', user['age'])
    return jsonify(user), 200


@app.route('/api/data/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    global users
    user = next((u for u in users if u['id'] == user_id), None)
    if not user:
        return jsonify({'error': 'User not found!'}), 404
    users = [u for u in users if u['id'] != user_id]
    return jsonify({'message': 'User deleted successfully'}), 200


if __name__ == '__main__':
    app.run(debug=True)
