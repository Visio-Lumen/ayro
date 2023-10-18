extends Node2D

func _ready():
	pass
	


func _on_report11_pressed():
	get_tree().change_scene_to_file("res://report_scene.tscn")
func _on_studytips_pressed():
	get_tree().change_scene_to_file("res://studytips_scene.tscn")
