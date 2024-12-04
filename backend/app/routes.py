from flask import Blueprint, jsonify, request
from .models import db, Item

main_bp = Blueprint("main", __name__)

@main_bp.route("/items", methods=["GET"])
def get_items():
    items = Item.query.all()
    return jsonify([item.to_dict() for item in items])

@main_bp.route("/items/<int:id>", methods=["GET"])
def get_item(id):
    item = Item.query.get_or_404(id)
    return jsonify(item.to_dict())

@main_bp.route("/items", methods=["POST"])
def create_item():
    data = request.json
    new_item = Item(name=data["name"], description=data.get("description", ""))
    db.session.add(new_item)
    db.session.commit()
    return jsonify(new_item.to_dict()), 201

@main_bp.route("/items/<int:id>", methods=["PUT"])
def update_item(id):
    data = request.json
    item = Item.query.get_or_404(id)
    item.name = data["name"]
    item.description = data.get("description", "")
    db.session.commit()
    return jsonify(item.to_dict())

@main_bp.route("/items/<int:id>", methods=["DELETE"])
def delete_item(id):
    item = Item.query.get_or_404(id)
    db.session.delete(item)
    db.session.commit()
    return jsonify({"message": "Item deleted"})
