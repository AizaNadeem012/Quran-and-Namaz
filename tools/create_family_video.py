from moviepy.editor import ImageClip

# Image and output video paths
image_path = "public/family.png"
output_path = "public/family.mp4"

# Create a video clip from the image (5 seconds duration)
clip = ImageClip(image_path).set_duration(5)

# Write the video file
clip.write_videofile(output_path, fps=24) 