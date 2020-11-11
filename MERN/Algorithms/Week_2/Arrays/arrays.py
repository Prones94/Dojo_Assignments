def vennDiagram(arr1, arr2, arr1_length,arr2_length):
    i, j = 0,0
    while i < arr1_length and j < arr2_length:
        if arr1[i] < arr2[j]:
            print(arr1[i])
            i += 1
        elif arr2[j] < arr1[i]:
            print(arr2[j])
            j+=1
        else:
            print(arr2[j])
            j +=1 
            i += 1
    while i < arr1_length:
        print(arr1[i])
        i += 1
    while j < arr2_length:
        print(arr2[j])
        j += 1