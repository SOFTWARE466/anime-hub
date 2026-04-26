from array import array
A=array("i")
N=5
A=[0]*N 
for i in range (0,N):
    A[i]=[1,2,3,4,5]
S1=0
for i in range (0,N):
    if A[i]%2==0:
        S1=S1+A[i]
print(S1)
