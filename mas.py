from array import array
A=array("i")
N=int(input())
A=[0]*N 
for i in range (0,N):
    A[i]=int(input())
S1=0
for i in range (0,N):
    if A[i]%2==0:
        S1=S1+A[i]
print(S1)