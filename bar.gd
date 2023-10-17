extends ColorRect


# Called when the node enters the scene tree for the first time.
func _ready():
	position = Vector2.ZERO
	position.y += ((float(1071)/float(1152))*float(get_viewport_rect().size.y))
	size.x = get_viewport_rect().size.x
	size.y = ((float(83)/float(1152))*float(get_viewport_rect().size.y))


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass
