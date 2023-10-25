extends Node2D

func _notification(what):
	if what == NOTIFICATION_APPLICATION_FOCUS_OUT:
		print("working")
