extends Button



func _ready():
	position.y = $"../notes".position.y
	position.x = ((float(get_viewport_rect().size.x)/5.0) * 4.0)-(0.5*size.x)
	size = $"../notes".size
