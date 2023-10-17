extends Button



func _process(delta):
	position.y = $"../notes".position.y
	position.x = (($"../bar".position.x+((300.0/648.0)*get_viewport_rect().size.x))/5)*2
	size = $"../notes".size


func _on_pressed():
	get_tree().change_scene_to_file("res://timer.tscn")
