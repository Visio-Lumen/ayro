extends TextEdit

func _ready():
	size = get_viewport_rect().size * .8
	position.x = get_viewport_rect().size.x - size.x
	position.y = get_viewport_rect().size.y - size.y
	position /= 2
	position.y -= ((float(55)/float(1152))*float(get_viewport_rect().size.y))

