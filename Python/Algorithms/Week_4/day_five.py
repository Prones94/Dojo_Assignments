'''
    Flood Fill

    Most graphical “paint” applications, have a ‘paintcan fill’ function that floods part of an image with a certain color. We change the image as if we painted a canvas: a two-dimensional array of integers, where each integer represents a color for that pixel. The canvas Array.length is the Y dimension of our canvas; each spot in the canvas array is a row in our image, with a length equal to our canvas’ X dimension. You are given a canvas (2 dimensional array of integers), starting coordinate (2-element array), and the color to flood (integer value). Build floodFill(canvas2D,startXY,newColor) ! Replace a pixel’s color value only if it is the same color as the origin coordinate and is directly adjacent via X or Y to another pixel you will change. Note: diagonally related pixels are not considered adjacent.

    Input:
    [
        [3, 2, 3, 4, 3],
        [2, 3, 3, 4, 0],
        [7, 3, 3, 5, 3],
        [6, 5, 3, 4, 1],
        [1, 2, 3, 3, 3]
    ]

    and startXY of [2,2], and newColor of 1.

    we examine the cells that are directly (not diagonally) adjacent to startXY. If any have a value of 3 (the original value at startXY), we change its value to 1 ( newColor ) and repeat the process with its directly-adjacent neighbor cells. We repeat this until th e entire zone of similarly-colored cells is changed .

    Output:
    [
        [3, 2, 1, 4, 3],
        [2, 1, 1, 4, 0],
        [7, 1, 1, 5, 3],
        [6, 5, 1, 4, 1],
        [1, 2, 1, 1, 1 ]
    ]
'''
image = [
        [3, 2, 3, 4, 3],
        [2, 3, 3, 4, 0],
        [7, 3, 3, 5, 3],
        [6, 5, 3, 4, 1],
        [1, 2, 3, 3, 3]
    ]

class Solution:
    def floodFill(image,sr, sc, newColor):
        if image == None or image[sr][sc] == newColor:
            return image
            self.fill(image, sr, sc, image[sr][sc]. newColor)
            return image
    def fill(image, r,c,  initial, newColor):
        #Base: Check out of bounds
        if r < 0 or r >= len(image) or c< 0 or c >= len(image[0]) or image[r][c] != initial:
            return
        image[s][r] = newColor
        fill(image,r+1,c, intitial, newColor) #down
        fill(image,r-1,c,initial, newColor) #up
        fill(iamge, r, c+1, initial, newColor) #right
        fill(image, r, c+1, intial, newColor) #left


len_row = len(image)
len_col = len(image[0])
visited = []

def all_neighbors(row,col):
    # Calculate the neighbours of a given cell
    return [[row+1,col], [row+1,col], [row-1,col],[row,col-1],
            [row+1,col+1],[row+1,col-1],[row-1,col-1],[row-1,col+1]]
def floodFill(row,col,oldColor,newColor):
    # Flood fills the given segments starting from given index
    if row < 0 or row >= len_row:
        return 
    if col < 0 or col >= len_col:
        return 
    if image[row][col] != oldColor:
        return
    image[row][col] = newColor

    visited.append([row,col])
    moves_to = all_neighbors(row,col)
    for move in moves_to:
        if move not in visited:
            floodFill(move[0], move[1], oldColor, newColor)
def printFlood():
    print('Input')

    for i in image: print if



# Edge Case Check if lists is None or the click on image is already same color
# Call DFS Function fill
# Base Case: Check if index is out of bounds or current pixel is not equal to initial pixel

