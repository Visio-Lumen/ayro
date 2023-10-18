# ayro
productivity app in Godot 4.1.1
# rules to edit code
-use the viewport relativity equation when changing the position of something   
-only push working versions to github   
-dont fw the _delta warnings in console   
-more rules probably coming
# viewport relativity equation
```
{property} = Vector2((float({your number})/(1152.0*648.0))*get_viewport_rect().size.y*get_viewport_rect().size.x),((float({your number})/(1152.0*648.0))*get_viewport_rect().size.y*get_viewport_rect().size.x))
```
