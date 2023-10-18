extends Button



func _process(delta):
	position.y = $"../notes".position.y
	position.x = ((float(get_viewport_rect().size.x)/5.0) * 2.0)-(0.5*size.x)
	size = $"../notes".size


func _on_pressed():
	get_tree().change_scene_to_file("res://timer.tscn")
