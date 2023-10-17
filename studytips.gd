extends Button

func _ready():
	position.y = $"../notes".position.y
	position.x = (($"../bar".position.x+((550.0/648.0)*get_viewport_rect().size.x))/5)*2
	size = $"../notes".size
