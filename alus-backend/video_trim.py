import sys
import cv2

video_path = sys.argv[1]
save_path = sys.argv[2]
fps = int(sys.argv[3])
duration = int(sys.argv[4])


cap = cv2.VideoCapture(video_path)
vid_writer = cv2.VideoWriter(
    save_path,
    cv2.VideoWriter_fourcc(*"MPEG"),
    fps,
    (int(cap.get(cv2.CAP_PROP_FRAME_WIDTH)), int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))),
)

for i in range(duration * fps):
    ret, frame = cap.read()
    if ret:
        vid_writer.write(frame)
    else:
        break
vid_writer.release()
cap.release()
print("Done")
