import os
import ntpath
import SimpleITK as sitk
import cv2
import pydicom
import numpy as np
from numba import jit

def unknown2dicom(source_folder, output_folder):
    list_of_files = os.listdir(source_folder)
    for file in list_of_files:
        try:
            file_name, extension = os.path.splitext(file)
            if (extension == ''):
                newfile = file_name + '.DCM'
                os.rename(os.path.join(source_folder, file), os.path.join(source_folder, newfile))
            elif (extension == '.DCM'):
                return
        except:
            print("Error while renaming the file")

def loadFile(filename):
    ds = sitk.ReadImage(filename)
    img_array = sitk.GetArrayFromImage(ds)
    frame_num=img_array.shape[0]
    width=img_array.shape[2]
    height=img_array[1]
    return img_array, frame_num, width, height

def loadDicomFile(filenames):
    global img_array, frame_num, width, height, isLoad
    img_array = {}
    frame_num = {}
    width = {}
    height = {}
    count=0


    if filenames == ():
        print("Sorry, no file loaded! Please choose DICOM file first.")
    else:
        try:
            for filename in filenames:
                count+=1
                img_array[filename], frame_num[filename], width[filename], height[filename] = loadFile(filename)
                isLoad = 1
                print("Loaded",count,"out of",len(filenames),"Dicom files")
            print("All DICOM files are successfully loaded!")
        except:
            print("Sorry, file loading failed! Please check the file format.")


def limitedEqualize(img_array, limit):
    img_array_list = []
    for r_img in img_array:
        img = r_img[:, :, 0]
        # img=r_img

        clahe = cv2.createCLAHE(clipLimit=limit,
                                tileGridSize=(8, 8))  # CLAHE (Contrast Limited Adaptive Histogram Equalization)
        img_array_list.append(clahe.apply(img))

    img_array_limited_equalized = np.array(img_array_list, dtype=np.uint8)

    return img_array_limited_equalized


def writeVideo(img_array, filename, directory):  # img_array is a single DICOM file
    # frame_num, width, height = img_array.shape
    frame_num = img_array.shape[0]
    width = img_array.shape[2]
    height = img_array.shape[1]
    head, tail = ntpath.split(filename)
    filename_output = directory + '/' + tail.split('.')[0] + '.avi'
    # fourcc = cv2.VideoWriter_fourcc('M','P','4','2') # MPEG-4
    fourcc = 'mp4v'

    # Key statement: default value is 15./////////////////////////
    cineRate = 30
    video = cv2.VideoWriter(filename_output, cv2.VideoWriter_fourcc(*fourcc), cineRate,
                            (width, height))  # Initialize Video File
    # The parameter cineRate is the frame per second.

    for frame in img_array:
        frame_rgb = cv2.cvtColor(frame, cv2.COLOR_GRAY2BGR)
        video.write(frame_rgb)  # Write video file frame by frame

        #cv2.imshow('frame', frame)  # Show the videos

    video.release()


def convertVideo(filenames,directory):
    global isLoad, clipLimit, filename, fps
    if filenames == ():
        print("No File to be Converted",
                               "Sorry, no file to be converted! Please choose a DICOM file first.")
    elif isLoad == 0:
        print("No File Loaded", "Sorry, no file loaded! Please load the chosen DICOM file.")

    else:
        clipLimit = 1.5
        count = 0

        if directory == '':
            print("No Directory", "Sorry, no directory shown! Please specify the output directory.")

        else:

            for filename in filenames:
                count+=1
                img_array_limited_equalized = limitedEqualize(img_array[filename], clipLimit)
                writeVideo(img_array_limited_equalized, filename, directory)
                # messagebox.showinfo("Video File Converted", "Video file successfully generated!")
                isLoad = 0
                print("Generated",count," out of ",len(filenames),"Videos")
            print("Video files successfully generated")

def dicom2avi(path):
    filenames = []
    for f in os.listdir(path):
        fpath = os.path.join(path, f)
        if os.path.isfile(fpath) and f.endswith(('.DCM', '.dcm')):
            filenames.append(fpath)
    loadDicomFile(filenames)
    convertVideo(filenames, path)



