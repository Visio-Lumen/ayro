extends Button



# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	position.y = $"../button2".position.y
	position.x = (($"../bar".position.x+((300.0/648.0)*get_viewport_rect().size.x))/5)*2


func _on_pressed():
	get_tree().change_scene_to_file("res://timer.tscn")
	

