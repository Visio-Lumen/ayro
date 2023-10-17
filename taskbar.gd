extends Node2D

func _ready():
	pass

func _on_studytips_pressed():
	get_tree().change_scene_to_file("res://studytips_scene.tscn")
