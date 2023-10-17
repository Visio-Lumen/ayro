extends Button


# Called when the node enters the scene tree for the first time.
func _ready():
	position.y = $"../bar".position.y + ((10.0/1152)*get_viewport_rect().size.y)
	position.x = ($"../bar".position.x+((50.0/648.0)*get_viewport_rect().size.x))/5
	size = Vector2((87.0/1152.0)*get_viewport_rect().size.y,(55.0/1152.0)*get_viewport_rect().size.y)


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _on_pressed():
	get_tree().change_scene_to_file("res://textbox.tscn")
