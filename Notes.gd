extends TextEdit

var config = ConfigFile.new()
var saved_text = config.load("user://notepad.cfg")


func _ready():
	if str(config.get_value("Text", "user")) == "":
		pass
		
	else:
		text = config.get_value("Text","user") 
	size = get_viewport_rect().size * .8
	position.x = get_viewport_rect().size.x - size.x
	position.y = get_viewport_rect().size.y - size.y
	position /= 2
	position.y -= ((float(55)/float(1152))*float(get_viewport_rect().size.y))

func _process(delta):
	config.set_value("Text", "user", text)
	config.save("user://notepad.cfg")
